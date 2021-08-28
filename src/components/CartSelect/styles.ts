import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: theme.colors.overlay,
        borderTopWidth: 1,
        paddingVertical: 10
    },
    iconView: {
        padding: 20,
    },
    childrenView: {
        flex: 1,
        paddingVertical: 20,
    },
    icon: {
        color: theme.colors.primary,
    },
});
