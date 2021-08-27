import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
    },
    content: {
        flex: 5,
    },
    bar: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.primary,
        alignSelf: 'center',
        marginTop: 13,
    },
    menu: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    listView: {
        paddingHorizontal: 20,
    },
    titleCart: {
        fontFamily: theme.fonts.title700,
        fontSize: 22,
        textAlign: 'center',
        color: theme.colors.heading,
        marginBottom: 20,
    },
    textEmptyCart: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.highlight,
    },
    buttonView: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderTopColor: theme.colors.overlay,
        borderTopWidth: 2,
    },
    btnCart: {
        backgroundColor: theme.colors.primary,
        borderRadius: 20,
        padding: 20,
        paddingBottom: 15,
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    txtBtn: {
        color: theme.colors.white,
        fontSize: 18,
        fontFamily: theme.fonts.text400,
    },
    icon: {
        color: theme.colors.primary,
    },
    cartLine: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    cartSectionLine: {
        flex: 1,
    },
    cartButtonLine: {
    },
    titleCartLine: {
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.text500,
    },
    txtCartLine: {
        color: theme.colors.highlight,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
    },
});

export default styles;
