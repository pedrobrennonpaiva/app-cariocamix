import React, { useEffect, useState } from "react";
import { Image, Text, ScrollView, ActivityIndicator } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { TextInputMask } from "react-native-masked-text";

import SmilePng from '../../assets/emoji-sorriso.png';
import ModalAlertCustom from "../../components/ModalAlertCustom";
import TextInputCustom from "../../components/TextInputCustom";
import TextInputPassword from "../../components/TextInputPassword";
import { Utils } from "../../configs/Utils";
import { Validations } from "../../configs/Validations";
import { theme } from "../../global/styles/theme";
import { useAuth } from "../../hooks/auth";
import { User } from "../../models/User";
import Api from "../../services/api";
import { styles } from "./styles";

const ProfileDetails = () => {

    const [error, setError] = useState('!');
    const [openModalAlert, setOpenModalAlert] = useState(false);

    const { user, updateUser, loading } = useAuth();
    const api = new Api();

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [birthday, setBirthday] = useState("");
    const [cpf, setCpf] = useState("");
    const [numberPhone, setNumberPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const [nameError, setNameError] = useState("");
    const [birthdayError, setBirthdayError] = useState("");
    const [cpfError, setCpfError] = useState("");
    const [numberPhoneError, setNumberPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState('');

    useEffect(() => {

        //fill fields
        if(user)
        {
            setName(user.name);
            setUsername(user.username);
            setEmail(user.email);
            setCpf(Utils.cpfMask(user.cpf));
            setBirthday(Utils.dateMask(user.birthday.toString()));
            setNumberPhone(Utils.numberPhoneMask(user.numberPhone));
        }
    }, []);

    const handleUpdateUser = async () => {

        var nameError = Validations.validateRequiredField(name, 'nome');
        var birthdayError = Validations.validateBirthday(birthday);
        var numberPhoneError = Validations.validateNumberPhone(numberPhone);
        var cpfError = Validations.validateCpf(cpf);
        var emailError = Validations.validateEmail(email);

        if(nameError || birthdayError || numberPhoneError ||
            cpfError || emailError)
        {
            setCpfError(cpfError);
            setNameError(nameError);
            setEmailError(emailError);
            setBirthdayError(birthdayError);
            setNumberPhoneError(numberPhoneError);
            return;
        }

        var upUser = new User();
        upUser.id = user.id;
        upUser.image = user.image;
        upUser.name = name.trim();
        upUser.username = username;
        upUser.email = email;
        upUser.cpf = Utils.removeDiacritics(cpf);
        upUser.birthday = Utils.formatDateSplitDb(birthday);
        upUser.numberPhone = Utils.removeDiacritics(numberPhone);

        await updateUser(upUser).then(async _ => {
            setError(`Usuário atualizado com sucesso!`);
            setOpenModalAlert(true);
        })
        .catch(err => {
            setError(`${err ?? ''}`);
            setOpenModalAlert(true);
        });
    }

    const handleUpdateUserPassword = async () => {

        var passwordError = Validations.validatePassword(password);

        if(passwordError)
        {
            setPasswordError(passwordError);
            return;
        }
        else if(password !== repeatPassword)
        {
            setPasswordError('As senhas não são iguais!');
            return;
        }

        await api.resetPasswordUser(user.id, password).then(async res => {
            setError(`${res.data.message ?? ''}`);
            setOpenModalAlert(true);
        })
        .catch(err => {
            setError(`Ocorreu um erro! ${err.response.data.message ?? ''}`);
            setOpenModalAlert(true);
        });
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {user.image ?
                <Image
                    source={{ uri: user.image }}
                    style={styles.imgUser}
                />
            :
                <Image
                    source={SmilePng}
                    style={styles.imgUser}
                />
            }

            <TextInputCustom
                placeholder='Digite seu nome'
                onChangeText={setName}
                value={name}
                valueError={nameError}
                autoCompleteType='name'
                textContentType='name'
            />

            <TextInputCustom
                placeholder='Digite seu username'
                onChangeText={(e) => setUsername(e.toLowerCase().trim())}
                value={username}
                autoCapitalize="none"
                autoCompleteType='username'
                textContentType='username'
            />

            <TextInputCustom
                placeholder='Digite seu CPF'
                placeholderTextColor={theme.colors.placeholder}
                onChangeText={(e) => setCpf(Utils.cpfMask(e))}
                value={cpf}
                valueError={cpfError}
            />

            <TextInputMask
                type='datetime'
                options={{
                    format: 'DD/MM/YYYY'
                }}
                value={birthday}
                onChangeText={setBirthday}
                placeholder='Digite sua data de nascimento'
                placeholderTextColor={theme.colors.placeholder}
                style={styles.input}
            />
            {birthdayError ?
                <Text style={styles.txtError}>
                    {birthdayError}
                </Text>
            : <></>}

            <TextInputCustom
                placeholder='Digite seu número de telefone'
                onChangeText={(e) => setNumberPhone(Utils.numberPhoneMask(e))}
                value={numberPhone}
                valueError={numberPhoneError}
                maxLength={15}
            />

            <TextInputCustom
                placeholder='Digite seu email'
                onChangeText={(e) => setEmail(e.toLowerCase().trim())}
                value={email}
                valueError={emailError}
                autoCapitalize="none"
                autoCompleteType='email'
                textContentType='emailAddress'
            />

            {loading ? <ActivityIndicator color={theme.colors.primary} />
            :
            <RectButton
                style={styles.btnUpdate}
                onPress={handleUpdateUser}
            >
                <Text style={styles.txtBtn}>Atualizar dados</Text>
            </RectButton>
            }

            <TextInputPassword
                password={password}
                setPassword={setPassword}
                placeholder='Digite sua nova senha'
            />
            {passwordError ?
                <Text style={styles.txtError}>
                    {passwordError}
                </Text>
            : <></>}

            <TextInputPassword
                password={repeatPassword}
                setPassword={setRepeatPassword}
                placeholder='Repita sua nova senha'
            />
            {passwordError ?
                <Text style={styles.txtError}>
                    {passwordError}
                </Text>
            : <></>}

            <RectButton
                style={styles.btnUpdate}
                onPress={handleUpdateUserPassword}
            >
                <Text style={styles.txtBtn}>Atualizar senha</Text>
            </RectButton>

            <ModalAlertCustom visible={openModalAlert} closeModal={() => setOpenModalAlert(false)}>
                <Text>
                    {error}
                </Text>
            </ModalAlertCustom>
        </ScrollView>
    )
}

export default ProfileDetails;
