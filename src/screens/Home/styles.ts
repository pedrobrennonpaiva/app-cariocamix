import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    animatedView: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        elevation: 1000,
        borderBottomWidth: 5,
        borderBottomColor: theme.colors.overlay,
        backgroundColor: theme.colors.background,
    },
    horizontalNavigator: {
        paddingHorizontal: 24,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.overlay,
    },
    horizontalNavigatorLoad: {
        paddingHorizontal: 24,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.overlay,
    },
    btnHorizontalNavigator: {
        paddingRight: 10,
    },
    txtHorizontalNavigator: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
    },
    body: {
        paddingHorizontal: 24,
        paddingTop: 160,
        backgroundColor: theme.colors.background,
    },
});
