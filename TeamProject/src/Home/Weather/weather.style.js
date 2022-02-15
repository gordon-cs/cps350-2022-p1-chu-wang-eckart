import { StyleSheet } from 'react-native';
import { theme1, theme2, theme3, fontFamilies } from './../../../App.ThemeStyle.js';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: theme1,
    },
    topRow: {
        flex: 3,
        backgroundColor: theme2,
    },
    statusRow: {
        flex: 4,
    },
    locationRow: {
        flex: 5,
        flexDirection: 'row',
        alignItems: 'center',
        
    },
    locationText: {
        flex: 4,
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    locationIcon: {
        flex: 1,
        color: 'white',
    },
    row: {
        flex: 5,
        flexDirection: 'row',
    },
    block: {
        flex: 1,
        justifyContent: 'center',   // <------
        backgroundColor: theme2,
        margin: 10,
        marginBottom: 15,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: {
            width: 0, 
            height: 6
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.5,
        elevation: 5,
    },
    blockContent: {
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 25,
        color: 'white',
        textAlign: 'center',
    },
    'icon-ios': {
        flex: 1,
        fontSize: 23,
        color: theme3,
        textAlign: 'left',
        paddingLeft: 5,
    },
    'icon-android': {
        flex: 1,
        fontSize: 19,
        color: 'gold',
        textAlign: 'left',
        paddingLeft: 5,
    },
    'infoIcon-ios': {
        flex: 1,
        fontSize: 23,
        color: theme1,
        textAlign: 'right',
        paddingRight: 5,
    },
    'infoIcon-android': {
        flex: 1,
        fontSize: 19,
        color: theme1,
        textAlign: 'right',
        paddingRight: 5,
    },
    'number-ios': {
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 60,
        color: 'white',
        textAlign: 'center',
    },
    'number-android': {
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 44,
        color: 'white',
        textAlign: 'center',
    },
    'unit-ios': {
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 20,
        color: 'white',
        textAlign: 'right',
        paddingRight: 20,
    },
    'unit-android': {
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 17,
        color: 'white',
        textAlign: 'right',
        paddingRight: 20,
    },
    'weatherIcon-ios': {
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 70,
        color: 'white',
        textAlign: 'center',
    },
    'weatherIcon-android': {
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 55,
        color: 'white',
        textAlign: 'center',
    },
    'weatherName-ios': {
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    'weatherName-android': {
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
    },
    'windDirection-ios': {
        flex: 3,
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 18,
        color: 'white',
        textAlign: 'left',
        paddingLeft: 10,
    },
    'windDirection-android': {
        flex: 3,
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 15,
        color: 'white',
        textAlign: 'left',
        paddingLeft: 10,
    },
    'windUnit-ios': {
        flex: 1,
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 18,
        color: 'white',
        textAlign: 'right',
        paddingRight: 10,
    },
    'windUnit-android': {
        flex: 1,
        fontWeight: 'bold',
        fontFamily: fontFamilies,
        fontSize: 15,
        color: 'white',
        textAlign: 'right',
        paddingRight: 10,
    },
})