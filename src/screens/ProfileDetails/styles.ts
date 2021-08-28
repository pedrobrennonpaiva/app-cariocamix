import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.background,
        padding: 24,
        justifyContent: 'center'
    },
    txt: {
        color: theme.colors.heading,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
        textAlign: 'center',
    },
    imgUser: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 24,
        alignSelf: 'center'
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
    txtError: {
        color: theme.colors.danger,
        fontFamily: theme.fonts.text400,
        fontSize: 12,
        textAlign: 'left',
        marginTop: 5,
        marginLeft: 5,
    },
    btnUpdate: {
        backgroundColor: theme.colors.primary,
        borderRadius: 20,
        padding: 20,
        paddingBottom: 15,
        marginTop: 15,
        marginBottom: 15,
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    txtBtn: {
        color: theme.colors.white,
        fontSize: 18,
        fontFamily: theme.fonts.text400,
    }
});
