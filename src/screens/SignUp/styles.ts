import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: "80%",
        height: 200,
        alignSelf: 'center',
    },
    imageBackground: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 50,
    },
    cardView: {
        width: '80%',
        padding: 20,
        borderRadius: 20,
        justifyContent: 'center',
        backgroundColor: theme.colors.white,
    },
    input: {
        padding: 20,
        paddingBottom: 15,
        marginTop: 15,
        color: theme.colors.heading,
        borderColor: theme.colors.heading,
        borderWidth: 1,
        borderRadius: 20,
        fontFamily: theme.fonts.text400,
        alignSelf: 'stretch',
    },
    btnLogin: {
        backgroundColor: theme.colors.primary,
        borderRadius: 20,
        padding: 20,
        paddingBottom: 15,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    txtLogin: {
        color: theme.colors.white,
        fontSize: 18,
        fontFamily: theme.fonts.text400,
    },
    txtRegister: {
        color: theme.colors.heading,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
        marginBottom: 10,
        textAlign: 'center',
    },
    txtBack: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 14,
        fontFamily: theme.fonts.text400,
    },
    txtError: {
        color: theme.colors.danger,
        fontFamily: theme.fonts.text400,
        fontSize: 12,
        textAlign: 'left',
        marginTop: 5,
        marginLeft: 5,
    }
});
