import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        padding: 24,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.overlay,
    },
    viewLeft: {
        flex: 4,
    },
    viewRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
    iconTopView: {
        backgroundColor: theme.colors.primary,
        padding: 10,
        borderRadius: 10,
    },
    iconTop: {
        color: theme.colors.background,
    },
    textTop: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.heading,
    },
    textSecondary: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.highlight,
    },
    countItemCart: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontFamily: theme.fonts.text400,
        fontSize: 10,
    },
    viewCountItemCart: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: -10,
        bottom: -5,
        backgroundColor: theme.colors.secondary,
        borderRadius: 10,
        width: 20,
        height: 20,
    }
});
