import React from "react";
import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";
import imgBg from '../../assets/fundo-inicial.png';
import logo from '../../assets/logo.png';
import { styles } from "./styles";

const Init = () => {

    const navigation = useNavigation();

    const gotoLogin = () => {
        navigation.navigate('SignIn');
    }

    const gotoRegister = () => {
        navigation.navigate('SignUp');
    }

    const gotoMain = () => {
        navigation.reset({
            routes:[{ name:'MainStack' }]
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground source={imgBg} style={styles.imageBackground}>
                <Image
                    style={styles.logo}
                    source={logo}
                />
                <View style={styles.viewButtons}>
                    <RectButton
                        style={styles.btnLogin}
                        onPress={gotoLogin}
                    >
                        <Text style={styles.txtLogin}>Fazer Login</Text>
                    </RectButton>
                    <RectButton
                        style={styles.btnRegister}
                        onPress={gotoRegister}
                    >
                        <Text style={styles.txtRegister}>Cadastrar-se</Text>
                    </RectButton>
                    <Text onPress={gotoMain} style={styles.txtAfter}>Fazer login depois</Text>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Init;
