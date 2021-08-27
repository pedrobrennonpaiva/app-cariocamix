import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchView: {
        paddingHorizontal: 24,
        paddingTop: 24,
    },
    textMessage: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
        textAlign: 'center',
    },
});
