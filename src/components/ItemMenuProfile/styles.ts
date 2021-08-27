import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: theme.colors.overlay100,
    },
    buttonMenu: {
        paddingVertical: 20,
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewTitles: {
        flex: 1,
    },
    title: {
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        color: theme.colors.heading,
    },
    subTitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 12,
        color: theme.colors.highlight,
    },
    icon: {
        marginRight: 24,
    },
    iconGoto: {
        marginLeft: 24,
    },
});
