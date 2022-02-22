import { StyleSheet } from 'react-native';
import { theme1, theme2, theme3, fontFamilies } from './../../App.ThemeStyle.js';

export default StyleSheet.create({
    image:{
       width: 70, 
       height: 70,
       borderRadius: 50,
       borderWidth: 5,
       borderColor: '#29482F',
    },
    block: {
        flex: 1 ,
        backgroundColor: 'white',
        borderRadius: 40,
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0, 
            height: 4
        },
        shadowOpacity: 0.6,
        shadowRadius: 3.5,
        elevation: 5,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
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
    searchBar: {
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    input: {
        flex: 9,
        margin: 5,
        paddingLeft: 10,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: 'white',
        fontSize: 20,
        fontFamily: fontFamilies,
    },
    botton: {
        flex: 1,
        margin: 5,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: theme2,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0, 
            height: 2
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.5,
        elevation: 5,
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
    searchResultHeader: {
        height: 33,
        justifyContent: 'center',
        backgroundColor: theme2,
        marginVertical: 5,
        borderWidth: 2,
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
    searchResultHeaderContent: {
        fontSize: 20,
        color: theme3,
        textAlign: 'center',
        fontFamily: fontFamilies,
        textTransform: 'capitalize',
    },
    // both topRow and row are components inside search result
    topRow: {
        height: 33,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 5,
        marginHorizontal:10,
        borderWidth: 2,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: theme3,
    },
    topRowContent: {
        fontSize: 20,
        color: theme2,
        textAlign: 'center',
        fontFamily: fontFamilies,
    },
    row: {
        height: 50,
        justifyContent: 'center',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        backgroundColor: theme2,
    },
    bottomRow: {
        height: 50,
        justifyContent: 'center',
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderBottomWidth: 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        backgroundColor: theme2,
        marginBottom: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0, 
            height: 6
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.5,
        elevation: 5,
    },
    searchResultIndexContent: {
        flex: 2,
        fontSize: 20,
        textAlign:'center',
        color: 'white',
        textTransform: 'capitalize',
    },
    searchResultNameContent: {
        fontSize: 18,
        textAlign:'center',
        color: theme2,
        textTransform: 'capitalize',
        fontFamily: fontFamilies,
    },
    searchResultButton: {
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
    myGardenRow: {
        height: 150,
        flexDirection: 'row',
        marginBottom: 10,
    },
    myGardenPlant: {
        flex: 1,
        backgroundColor: '#5A411F', // dark brown
        borderWidth: 2,
        marginHorizontal: 10,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0, 
            height: 6
        },
        shadowOpacity: 0.4,
        shadowRadius: 3.5,
        elevation: 5,
    },
    myGardenEmptyPlant: {
        flex: 1,
        marginHorizontal: 12,
    },
    myGardenPlantContent: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        fontFamily: fontFamilies,
        textTransform: 'capitalize',
    }
})