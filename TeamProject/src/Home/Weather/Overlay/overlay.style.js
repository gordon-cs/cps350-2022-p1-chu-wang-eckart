import { StyleSheet, Dimensions } from "react-native";
import { fontFamilies, theme1, theme2, theme3 } from './../../../../App.ThemeStyle.js';

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
    addressHeader: {
        width: screenWidth * .7,
    },
    textInput: {
        flex: 8,
        height: 45,
        color: 'black',
        fontSize: 20,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: 'black',
        marginTop: 20,
        paddingLeft: 20,
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
        textAlign: 'justify',
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        flex: 2,
        margin: 10,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        fontSize: 15,
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: theme2,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: {
            width: 0, 
            height: 2
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.5,
        elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    blank: {
        flex: 1,
    },
})