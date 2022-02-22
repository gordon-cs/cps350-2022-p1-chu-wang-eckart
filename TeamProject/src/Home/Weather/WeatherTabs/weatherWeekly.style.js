import { StyleSheet } from 'react-native';
import { theme1, theme2, theme3, fontFamilies } from './../../../../App.ThemeStyle.js';

export default StyleSheet.create({
    container: {
        backgroundColor: theme1,
        flex: 1,
    },
    block: {
        flex: 1,
        flexDirection: 'column',
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
    topRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: theme3,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    bottomRow: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: theme2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopWidth: 2,
        borderColor: 'black',
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: theme2,
        borderTopWidth: 2,
        borderColor: 'black',
    },
    date: {
        flex: 3,
        justifyContent: 'center',
    },
    condition: {
        flex: 4,
        justifyContent: 'center',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: 'black',
    },
    conditionNoBorder: {
        flex: 4,
        justifyContent: 'center',
    },
    temperature: {
        flex: 9,
        justifyContent: 'center',
    },
    temperatureData: {
        flex: 9,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        color: theme2,
        fontFamily: fontFamilies,
    },
    dateContent: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontFamily: fontFamilies,
    },
    conditionContent: {
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
        fontFamily: fontFamilies,
    },
    temperatureLowTemp: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontFamily: fontFamilies,
    },
    temperatureHighTemp: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontFamily: fontFamilies,
    },
    temperatureBar: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontFamily: fontFamilies,
    },
    temperatureBarContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#777777',
        borderWidth: 2,
        borderRadius: 10,
    },
})