import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    btn: {
        backgroundColor: theme.colors.primary,
        borderRadius: 20,
        padding: 15,
        paddingBottom: 10,
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
