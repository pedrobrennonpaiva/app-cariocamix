import React, { useState } from "react";
import { Alert, Image, ImageBackground, ScrollView, Text, TextInput, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import { TextInputMask } from 'react-native-masked-text';
import imgBg from '../../assets/fundo-inicial.png';
import logo from '../../assets/logo.png';
import { styles } from "./styles";
import Api from "../../services/api";
import { Validations } from "../../configs/Validations";
import { useAuth } from "../../hooks/auth";
import { User } from "../../models/User";
import { AuthenticateModel } from "../../models/Authenticate";
import { theme } from "../../global/styles/theme";
import { Utils } from "../../configs/Utils";
import TextInputPassword from "../../components/TextInputPassword";
import TextInputCustom from "../../components/TextInputCustom";
import ModalAlertCustom from "../../components/ModalAlertCustom";

const SignUp = () => {

    const [error, setError] = useState('!');
    const [openModalAlert, setOpenModalAlert] = useState(false);

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [birthday, setBirthday] = useState('');
    const [numberPhone, setNumberPhone] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState('');
    const [birthdayError, setBirthdayError] = useState('');
    const [numberPhoneError, setNumberPhoneError] = useState('');
    const [cpfError, setCpfError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const { signIn } = useAuth();
    const navigation = useNavigation();
    const api = new Api();

    const goBack = () => {
        navigation.goBack();
    }

    const goLogin = () => {
        navigation.navigate('SignIn');
    }

    const handleRegister = async () => {

        var nameError = Validations.validateRequiredField(name, 'nome');
        var birthdayError = Validations.validateBirthday(birthday);
        var numberPhoneError = Validations.validateNumberPhone(numberPhone);
        var cpfError = Validations.validateCpf(cpf);
        var emailError = Validations.validateEmail(email);
        var passwordError = Validations.validatePassword(password);

        if(nameError || birthdayError || numberPhoneError ||
            cpfError || emailError || passwordError)
        {
            setNameError(nameError);
            setBirthdayError(birthdayError);
            setNumberPhoneError(numberPhoneError);
            setCpfError(cpfError);
            setEmailError(emailError);
            setPasswordError(passwordError);
            return;
        }

        var model = new User();
        model.name = name.trim();
        model.username = username;
        model.email = email;
        model.password = password;
        model.birthday = Utils.formatDateSplitDb(birthday);
        model.numberPhone = Utils.removeDiacritics(numberPhone);
        model.cpf = Utils.removeDiacritics(cpf);

        await api.insertUser(model).then(async res => {
            var modelSignIn = new AuthenticateModel(model.email, model.password!);
            await signIn(modelSignIn);
        })
        .catch(err => {
            setError(`Ocorreu um erro! ${err.response.data.message ?? ''}`);
            setOpenModalAlert(true);
        });
    }

    return (
        <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
            <ImageBackground source={imgBg} style={styles.imageBackground}>
                <View style={styles.cardView}>
                    <Image
                        style={styles.logo}
                        source={logo}
                    />

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

                    <TextInputPassword
                        password={password}
                        setPassword={setPassword}
                        placeholder='Digite sua senha'
                    />
                    {passwordError ?
                        <Text style={styles.txtError}>
                            {passwordError}
                        </Text>
                    : <></>}

                    <RectButton
                        style={styles.btnLogin}
                        onPress={handleRegister}
                    >
                        <Text style={styles.txtLogin}>Cadastrar-se</Text>
                    </RectButton>

                    <Text onPress={goLogin} style={styles.txtRegister}>Já possui conta? Faça login</Text>

                    <Text onPress={goBack} style={styles.txtBack}>Voltar</Text>
                </View>
            </ImageBackground>

            <ModalAlertCustom visible={openModalAlert} closeModal={() => setOpenModalAlert(false)}>
                <Text>
                    {error}
                </Text>
            </ModalAlertCustom>
        </ScrollView>
    )
}

export default SignUp;
