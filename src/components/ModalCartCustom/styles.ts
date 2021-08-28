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
        borderTopColor: theme.colors.overlay,
        borderTopWidth: 2,
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
        borderBottomColor: theme.colors.overlay,
        borderBottomWidth: 2,
    },
    cartSectionLine: {
        flex: 1,
    },
    cartButtonLine: {
        padding: 20,
        justifyContent: 'center',
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
    txtTotalCartLine: {
        color: theme.colors.on,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
    },
    viewCartSelects: {
        marginTop: 60,
    },
    textCartSelect: {
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.text400,
    },
    couponTextTitle: {
        fontFamily: theme.fonts.text500,
        fontSize: 16,
    },
    couponTextSubTitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.on
    },
    viewStoreOpen: {
        alignItems: 'center',
        borderColor: theme.colors.overlay,
        borderTopWidth: 1,
        paddingVertical: 10
    },
    txtStoreOpen: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
    }
});

export default styles;
