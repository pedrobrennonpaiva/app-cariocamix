import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 24,
    },
    txtCoupon: {
        color: theme.colors.heading,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
        textAlign: 'center',
    },
    couponTextTitle: {
        fontFamily: theme.fonts.text500,
        fontSize: 16,
    },
    couponTextSubTitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.on
    }
});
