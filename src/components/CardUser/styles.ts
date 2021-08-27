import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 24,
        borderBottomWidth: 4,
        borderBottomColor: theme.colors.overlay,
    },
    imgUser: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 24,
    },
    containerText: {
        justifyContent: 'center',
    },
    title: {
        fontFamily: theme.fonts.title700,
        fontSize: 16,
        color: theme.colors.heading,
    },
    subtitle: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.highlight,
    },
    modalImage: {
        flex: 1,
        marginTop: '180%',
        backgroundColor: theme.colors.background,
    },
    overlay: {
        flex: 1,
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
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#ff0000',
    },
    buttonImage: {
        backgroundColor: theme.colors.primary,
        borderRadius: 20,
        marginHorizontal: 10,
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
    },
    textButtonImage: {
        color: theme.colors.white,
        fontFamily: theme.fonts.text400,
    }
});
