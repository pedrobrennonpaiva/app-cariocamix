import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 24,
    },
    txt: {
        color: theme.colors.heading,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
    },
    txtNone: {
        color: theme.colors.heading,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
        textAlign: 'center',
    }
});
