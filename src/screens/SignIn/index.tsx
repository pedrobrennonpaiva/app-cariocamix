import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { ActivityIndicator, Alert, Image, ImageBackground, ScrollView, Text, TextInput, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import imgBg from '../../assets/fundo-inicial.png';
import logo from '../../assets/logo.png';
import { styles } from './styles';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';
import { AuthenticateModel } from '../../models/Authenticate';
import { Validations } from '../../configs/Validations';
import TextInputPassword from '../../components/TextInputPassword';
import TextInputCustom from '../../components/TextInputCustom';
import ModalAlertCustom from '../../components/ModalAlertCustom';

const SignIn = () => {

    const { signIn, loading } = useAuth();

    const [error, setError] = useState('');
    const [openModalAlert, setOpenModalAlert] = useState(false);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigation = useNavigation();

    useEffect(() => {
    }, []);

    const goBack = () => {
        navigation.goBack();
    }

    const goRegister = () => {
        navigation.navigate('SignUp');
    }

    const goForgotPassword = () => {
        navigation.navigate('ForgotPassword');
    }

    const handleLogin = async () => {

        var usernameError = Validations.validateUsername(username);
        var passwordError = Validations.validatePassword(password);

        if(usernameError || passwordError)
        {
            setUsernameError(usernameError);
            setPasswordError(passwordError);
            return;
        }

        var model = new AuthenticateModel(username, password);
        await signIn(model).catch(err => {
            setError(err);
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
                        placeholder='Digite seu e-mail ou username'
                        onChangeText={(e) => setUsername(e.toLowerCase().trim())}
                        value={username}
                        valueError={usernameError}
                        autoCapitalize="none"
                        autoCompleteType='username'
                        textContentType='username'
                    />

                    <TextInputPassword
                        placeholder='Digite sua senha'
                        setPassword={setPassword}
                        password={password}
                    />
                    {passwordError ?
                        <Text style={styles.txtError}>
                            {passwordError}
                        </Text>
                    : <></>}

                    {loading ? <ActivityIndicator color={theme.colors.primary} />
                    :
                        <RectButton
                            style={styles.btnLogin}
                            onPress={handleLogin}
                        >
                            <Text style={styles.txtLogin}>Fazer Login</Text>
                        </RectButton>
                    }

                    <Text onPress={goForgotPassword} style={styles.txtRegister}>Esqueceu sua senha?</Text>

                    <Text onPress={goRegister} style={styles.txtRegister}>Não possui conta? Cadastre-se</Text>

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

export default SignIn;
