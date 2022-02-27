import { StyleSheet, Dimensions } from 'react-native';
import { theme1, theme2, theme3, fontFamilies } from './../../../App.ThemeStyle.js';

let screenWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 5,
        alignItems: 'center',
    },
    infoTop: {
        flex:3,
        height: 35,
        width: screenWidth * .5,
        justifyContent: 'center',
        marginStart: 20,
        marginVertical: 15,
        backgroundColor: 'transparent',
        borderColor: 'transparent',
    },

    infoBottom: {
        flexDirection: 'row',
        flex:3,
        height: 35,
        width: screenWidth * .58,
        justifyContent: 'center',
        marginStart: 10,
        marginTop: 10,
        borderTopWidth:2,
        borderColor: 'black',
        backgroundColor: 'transparent',
    },

    button: {
        flex: 1,
        height: 30,
        // borderWidth: 2,
        // borderRadius: 5,
        justifyContent: 'center',
        // backgroundColor: theme1,
        elevation: 5,
    },

    deleteButton: {
        fontSize: 20,
        color: "red",
        textAlign: 'center',
    },

    plantMenu:{
        marginTop: 10,
        height: 130,
        width: screenWidth * .9,
        borderWidth: 2,
        borderRadius: 20,
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
        flexDirection: 'row'
    },

    image:{
        width: 110, 
        height: 110,
        borderRadius: 60,
        borderWidth: 5,
        borderColor: theme1,
        marginVertical:10,
     },
     
     plantState:{
        fontSize:40, 
        marginVertical:10,
     },

     text:{
        fontSize:15, 
        textAlign: 'center',
     }
})