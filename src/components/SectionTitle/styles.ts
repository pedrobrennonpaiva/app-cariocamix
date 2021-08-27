import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    textTitle: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.overlay100,
        color: theme.colors.heading,
    },
});
