import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: "80%",
        height: 250,
        marginTop: 40,
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    viewButtons: {
        width: '100%',
        padding: 20,
        alignSelf: 'stretch',
    },
    btnLogin: {
        backgroundColor: theme.colors.primary,
        borderRadius: 20,
        padding: 20,
        paddingBottom: 15,
        alignItems: 'center',
        marginBottom: 10,
        fontFamily: theme.fonts.text400,
    },
    btnRegister: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 20,
        paddingBottom: 15,
        alignItems: 'center',
        marginBottom: 15,
    },
    txtLogin: {
        color: '#ffffff',
        fontSize: 18,
        fontFamily: theme.fonts.text400,
    },
    txtRegister: {
        color: theme.colors.primary,
        fontSize: 18,
        fontFamily: theme.fonts.text400,
    },
    txtAfter: {
        color: theme.colors.white,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: theme.fonts.text400,
    },
});
