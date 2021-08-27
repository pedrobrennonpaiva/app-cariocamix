import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        paddingHorizontal: 15,
        backgroundColor: theme.colors.input,
        borderRadius: 20,
    },
    inputSearch: {
        flex: 1,
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        paddingBottom: 5,
    },
    iconSearch: {
        color: theme.colors.primary,
    },
    iconClean: {
        color: theme.colors.primary,
    },
});
