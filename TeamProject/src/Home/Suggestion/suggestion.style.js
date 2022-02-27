import { StyleSheet, Dimensions } from 'react-native';
import { theme2 } from './../../../App.ThemeStyle.js';

let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 5,
        alignItems: 'center',
    },
    plantState: {
        height: 50,
        width: screenWidth * .8,
        justifyContent: 'center',
        marginHorizontal: 20,
        marginBottom: 10,
        borderWidth: 2,
        borderRadius: 40,
        backgroundColor: 'white',
        borderColor: 'white',
        shadowColor: 'black',
        shadowOffset: {
            width: 0, 
            height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3.5,
        elevation: 5,
    },
})