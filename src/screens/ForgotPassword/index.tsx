import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { ActivityIndicator, Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import imgBg from '../../assets/fundo-inicial.png';
import logo from '../../assets/logo.png';
import { styles } from './styles';
import { useAuth } from '../../hooks/auth';
import { theme } from '../../global/styles/theme';
import { Validations } from '../../configs/Validations';
import TextInputCustom from '../../components/TextInputCustom';
import ModalAlertTextCustom from '../../components/ModalAlertTextCustom';
import Api from '../../services/api';

const ForgotPassword = () => {

    const { loading } = useAuth();

    const [error, setError] = useState('');
    const [openModalAlert, setOpenModalAlert] = useState(false);

    const [email, setEmail] = useState('');

    const [emailError, setEmailError] = useState('');

    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    }

    const handleLogin = async () => {

        var emailError = Validations.validateEmail(email);

        if(emailError)
        {
            setEmailError(emailError);
            return;
        }

        var api = new Api();

        await api.forgotPasswordUser(email).then(res => {
            setError(`${res.data.message ?? ''}`);
            setOpenModalAlert(true);
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
                        placeholder='Digite seu e-mail'
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
                            style={styles.btnLogin}
                            onPress={handleLogin}
                        >
                            <Text style={styles.txtLogin}>Recuperar senha</Text>
                        </RectButton>
                    }

                    <Text onPress={goBack} style={styles.txtBack}>Voltar</Text>
                </View>
            </ImageBackground>

            <ModalAlertTextCustom
                visible={openModalAlert}
                closeModal={() => setOpenModalAlert(false)}
                text={error}
            />
        </ScrollView>
    )
}

export default ForgotPassword;
