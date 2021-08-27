import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = (indexNow?: any, index?: number) => StyleSheet.create({
    tabArea: {
        height: 60,
        backgroundColor: theme.colors.background,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: theme.colors.overlay,
    },
    tabItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        opacity: indexNow === index ? 1 : 0.7,
        color: theme.colors.primary,
    },
    tabText: {
        fontSize: 12,
        color: theme.colors.primary,
        opacity: indexNow === index ? 1 : 0.5,
        fontFamily: indexNow === index ? theme.fonts.text500 : theme.fonts.text400,
    },
});
