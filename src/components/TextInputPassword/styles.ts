import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    viewPass: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme.colors.heading,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 15,
        fontFamily: theme.fonts.text400,
    },
    inputPass: {
        padding: 20,
        paddingBottom: 15,
        color: theme.colors.heading,
        fontFamily: theme.fonts.text400,
        alignSelf: 'stretch',
        flex: 1,
    },
    iconPass: {
        padding: 15,
    }
});
