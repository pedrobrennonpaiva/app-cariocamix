import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor: theme.colors.overlay100,
    },
    container: {
        margin: 30,
        alignItems: 'center',
        backgroundColor: theme.colors.background,
        borderRadius: 20,
        padding: 35,
        shadowColor: theme.colors.heading,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    text: {
        color: theme.colors.heading,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
        textAlign: 'center',
    }
});

export default styles;
