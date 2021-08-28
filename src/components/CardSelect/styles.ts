import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.highlight,
        borderRadius: 20,
        marginBottom: 10
    },
    iconView: {
        padding: 20,
    },
    childrenView: {
        flex: 1,
        paddingVertical: 20,
        paddingRight: 20,
    },
    icon: {
        color: theme.colors.background,
        borderColor: theme.colors.primary,
        borderWidth: 5,
        borderRadius: 25,
    },
    iconSelect: {
        color: theme.colors.primary,
    },
});
