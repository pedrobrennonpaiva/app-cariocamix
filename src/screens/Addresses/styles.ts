import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
        padding: 24,
    },
    txt: {
        color: theme.colors.heading,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
        textAlign: 'center',
    },
    viewTextTitle: {
        flexDirection: 'row',
    },
    textTitle: {
        color: theme.colors.heading,
        fontSize: 15,
        fontFamily: theme.fonts.text400,
    },
    txtError: {
        color: theme.colors.danger,
        fontFamily: theme.fonts.text400,
        fontSize: 12,
        textAlign: 'left',
        marginTop: 5,
        marginLeft: 5,
    },
    input: {
        padding: 20,
        paddingBottom: 15,
        marginTop: 15,
        color: theme.colors.heading,
        borderColor: theme.colors.heading,
        borderWidth: 1,
        borderRadius: 20,
        fontFamily: theme.fonts.text400,
        alignSelf: 'stretch',
    },
    overlayModal: {
        flex: 2,
    },
    contentModal: {
        flex: 5,
    },
    barModal: {
        width: 39,
        height: 2,
        borderRadius: 2,
        backgroundColor: theme.colors.primary,
        alignSelf: 'center',
        marginTop: 13,
    },
    menuModal: {
        flex: 1,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    containerModal: {
        flex: 1,
        backgroundColor: theme.colors.background,
        borderTopColor: theme.colors.overlay,
        borderTopWidth: 2,
    },
    listViewModal: {
        paddingHorizontal: 20,
    },
    buttonViewModal: {
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderTopColor: theme.colors.overlay,
        borderTopWidth: 2,
    },
});
