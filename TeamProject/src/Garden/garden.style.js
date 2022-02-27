import { StyleSheet } from 'react-native';
import { theme1, theme2, theme3, fontFamilies } from './../../App.ThemeStyle.js';

export default StyleSheet.create({
    image:{
       width: 100, 
       height: 100,
       borderRadius: 50,
       borderWidth: 7,
       borderColor: theme1,
    },
    block: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0, 
            height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 3.5,
        elevation: 5,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    topBar: {
        flex: 1,
        backgroundColor: theme2,
    },
    content: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontFamily: fontFamilies,
    },
    library: {
        flex: 10,
        backgroundColor: theme1,
        paddingHorizontal: 10,
    },
    myGarden: {
        flex: 13,
        backgroundColor: theme2,
    },
    // background image style from
    // https://medium.com/@mateus17v/a-simple-animation-for-background-react-native-using-animated-498272a69fa4
    backgroundImage: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        left: 0,
        flex: 1,
        opacity: .5,
    },
    nameContent: {
        fontSize: 20,
        textAlign:'center',
        color: theme2,
        textTransform: 'capitalize',
        fontFamily: fontFamilies,
    },
    nicknameContent: {
        fontSize: 17,
        textAlign:'center',
        color: theme3,
        textTransform: 'capitalize',
        fontFamily: fontFamilies,
    },
    button: {
        flex: 1,
        height: 30,
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: theme1,
        shadowColor: 'black',
        shadowOffset: {
            width: 0, 
            height: 6
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.5,
        elevation: 5,
    },
    disabledButton: {
        flex: 1,
        height: 30,
        borderWidth: 2,
        borderRadius: 5,
        justifyContent: 'center',
        backgroundColor: 'grey',
        shadowColor: 'black',
        shadowOffset: {
            width: 0, 
            height: 6
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.5,
        elevation: 5,
    },
    myGardenHeader: {
        height: 50,
        justifyContent: 'center',
        backgroundColor: '#d2e2cb',
        margin: 10,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0, 
            height: 6
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.5,
        elevation: 5,
    },
    myGardenHeaderContent: {
        fontSize: 30,
        color: theme3,
        textAlign: 'center',
        fontFamily: fontFamilies,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    addButton: {
        fontSize: 23,
        color: "black",
        textAlign: 'center',
    },
})