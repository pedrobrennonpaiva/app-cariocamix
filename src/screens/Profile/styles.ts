import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    menu: {
        marginTop: 24,
    },
    buttonMenu: {
        paddingVertical: 20,
        paddingHorizontal: 24,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textMenu: {
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        color: theme.colors.heading,
    },
});
