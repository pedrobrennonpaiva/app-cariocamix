import React, { useEffect } from "react";
import { ActivityIndicator, Image, SafeAreaView } from "react-native";
import OneSignal, { NotificationReceivedEvent } from 'react-native-onesignal';
import LogoPng from '../../assets/logo.png';
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

const Preload = () => {

    const onOpened = (result: NotificationReceivedEvent) => {
        console.log(result);
    }

    useEffect(() => {
        OneSignal.setAppId('e04a2245-b3b1-4f30-8b63-37862b073d59');
        OneSignal.setNotificationWillShowInForegroundHandler((e) => onOpened(e));
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={LogoPng}
            />
            <ActivityIndicator size="large" color={theme.colors.white} style={styles.loadingIcon} />
        </SafeAreaView>
    )
}

export default Preload;
