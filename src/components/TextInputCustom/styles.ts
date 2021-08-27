import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
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
    }
});
