import { StyleSheet, Dimensions } from "react-native";
import { fontFamilies, theme1, theme2, theme3 } from '../../../App.ThemeStyle.js';

let setScreenWidth = Dimensions.get('window').width * .7;
let screenHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    overlay: {
        borderWidth: 10,
        borderColor: 'transparent',
        borderRadius: 30,
        backgroundColor: 'white',
    },
    container: {
        flexDirection: 'column',
        width: setScreenWidth,
        height: screenHeight * .7,
    },
    topBar: {
        height: 63,
        flexDirection: 'row',
    },
    header: {
        width: setScreenWidth,
    },
    headerText: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        color: theme3,
    },
    headerNickname: {
        fontSize: 23,
        textAlign: 'center',
        fontFamily: fontFamilies,
        color: theme3,
    },
    button: {
        fontSize: 45,
        justifyContent: 'center',
        color: theme3,
    },
    content: {
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderColor: theme3,
    },
    scrollView: {
        height: screenHeight * .55,
        paddingRight: 10,
    },
    contentHeader: {
        textTransform: 'capitalize',
        fontSize: 23,
    },
    contentTextBlock: {
        marginTop: 3,
        marginBottom: 5,
        marginLeft: 25,
        backgroundColor: theme2,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: 'transparent',
        alignSelf: 'flex-start',
        padding: 7,
    },
    contentText: {
        fontSize: 17,
        fontFamily: fontFamilies,
        color: 'white',
    },
    closeButton: {
        height: 50,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        fontSize: 15,
        paddingHorizontal: 10,
        borderRadius: 4,
        backgroundColor: theme3,
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
        fontSize: 20,
        lineHeight: 21,
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        letterSpacing: 0.25,
        color: 'white',
    },
})