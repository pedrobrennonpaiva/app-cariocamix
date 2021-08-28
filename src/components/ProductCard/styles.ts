import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewList: {
        paddingTop: 24,
        paddingBottom: 24,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.overlay100,
    },
    viewListTop: {
        flexDirection: 'row',
        marginBottom: 15,
        height: 110,
    },
    viewListBottom: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    viewListLeft: {
        flex: 2,
    },
    viewListRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
    titleList: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.heading,
    },
    descriptionList: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
    },
    imageList: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    priceList: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.on,
    },
    pricePreviousList: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
        textDecorationLine: 'line-through',
        marginLeft: 5,
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
    btnModal: {
        backgroundColor: theme.colors.primary,
        borderRadius: 20,
        padding: 20,
        paddingBottom: 15,
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    txtModal: {
        color: theme.colors.white,
        fontSize: 18,
        fontFamily: theme.fonts.text400,
    },
    btnIncrementModal: {
        backgroundColor: theme.colors.primary,
        alignItems: 'center',
        borderRadius: 25,
        padding: 10,
    },
    iconIncrementModal: {
        color: theme.colors.white,
    },
    viewRowModal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textRowModal: {
        color: theme.colors.heading,
        fontSize: 16,
        fontFamily: theme.fonts.text400,
    },
    viewIncrementBtnModal: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textIncrementBtnModal: {
        color: theme.colors.heading,
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        marginHorizontal: 10,
    },
    viewModal: {
        marginVertical: 10,
    },
    textInputModal: {
        padding: 20,
        paddingBottom: 15,
        marginTop: 15,
        color: theme.colors.heading,
        borderColor: theme.colors.overlay100,
        borderWidth: 1,
        borderRadius: 20,
        fontFamily: theme.fonts.text400,
        alignSelf: 'stretch',
        textAlignVertical: 'top'
    },
    viewItemModal: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        paddingVertical: 5,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.overlay100,
    },
    textItemModal: {
        color: theme.colors.heading,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
    },
    textSecondaryItemModal: {
        color: theme.colors.highlight,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
    },
    textPriceItemModal: {
        color: theme.colors.on,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
    },
    viewTextItemModal: {
        flexDirection: 'row',
    },
    viewRadioModal: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewRadioSelectedModal: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: theme.colors.primary,
    },
    txtError: {
        color: theme.colors.danger,
        fontFamily: theme.fonts.text400,
        fontSize: 12,
        textAlign: 'left',
        marginTop: 5,
        marginLeft: 5,
    },
    viewProductListModal: {
        flexDirection: 'row',
        marginBottom: 15,
        // height: 110,
    },
    viewListLeftModal: {
        flex: 1,
        alignItems: 'flex-start',
    },
    viewListRightModal: {
        flex: 2,
    },
    imageListModal: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    titleListModal: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.heading,
    },
    descriptionListModal: {
        fontFamily: theme.fonts.text400,
        color: theme.colors.highlight,
        fontSize: 13,
    },
});
