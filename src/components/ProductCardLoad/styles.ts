import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    textTitle: {
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: 20,
    },
    viewListTop: {
        flexDirection: 'row',
        marginTop: 20,
    },
    viewListLeft: {
        flex: 2,
    },
    viewListRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
    titleList: {
        paddingTop: 20,
        paddingBottom: 20,
    },
    descriptionList: {
        marginTop: 10,
        paddingTop: 40,
        paddingBottom: 40,
    },
    imageList: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    priceList: {
        marginTop: 20,
        paddingTop: 20,
        paddingBottom: 20,
    },
});
