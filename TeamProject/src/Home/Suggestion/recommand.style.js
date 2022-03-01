import { StyleSheet, Dimensions } from 'react-native';
import { theme1, theme2, fontFamilies, theme3 } from './../../../App.ThemeStyle.js';

let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 5,
        alignItems: 'center',
    },
    view: {
        height: 130,
        flexDirection: 'column',
        width: screenWidth * .9,
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 15,
        borderColor: 'transparent',
        shadowColor: 'black',
        shadowOffset: {
            width: 0, 
            height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3.5,
        elevation: 5,
    },
    error: {
        flex: 7,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    errorContent: {
        fontFamily: fontFamilies,
        fontSize: 18,
        color: theme3,
        textAlign: 'center',
    },
    recommand: {
        flex: 7,
        paddingHorizontal: 10,
    },
    recommandComponent: {
        width: 120,
        height: 100,
        marginRight: 5,
        flexDirection: 'column',
    },
    recommandFont: {
        textAlign: 'center',
        color: theme3,
        fontWeight: 'bold',
        fontSize: 15,
    },
    image:{
        width: 120, 
        height: 70,
        borderRadius: 10,
        borderWidth: 5,
        borderColor: 'transparent',
     },
    header: {
        flex: 2,
        paddingTop: 5,
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'flex-end',
    },
    headerErrorContent: {
        fontFamily: fontFamilies,
        fontSize: 25,
        fontWeight: 'bold',
        color: theme3,
        textAlign: 'center',
    },
    headerContent: {
        fontFamily: fontFamilies,
        fontSize: 18,
        fontWeight: 'bold',
        color: theme3,
        textAlign: 'center',
    },
})