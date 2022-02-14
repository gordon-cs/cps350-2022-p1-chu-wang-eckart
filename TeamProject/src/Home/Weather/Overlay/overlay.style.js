import { StyleSheet, Dimensions } from "react-native";
import { fontFamilies, theme2, theme3 } from './../../../../App.ThemeStyle.js';

let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    overlay: {
        borderWidth: 10,
        borderColor: 'transparent',
        borderRadius: 30,
        backgroundColor: theme2,
    },
    container: {
        flexDirection: 'column',
        width: screenWidth * .7,
    },
    topBar: {
        height: 50,
        flexDirection: 'row',
    },
    header: {
        width: screenWidth * .7 - 50,
    },
    headerText: {
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        color: theme3,
    },
    icon: {
        fontSize: 45,
        justifyContent: 'center',
        color: theme3,
    },
    content: {
        borderTopWidth: 3,
        borderColor: theme3,
    },
    contentText: {
        fontSize: 15,
        paddingTop: 10,
        fontFamily: fontFamilies,
        color: 'white',
    },
})