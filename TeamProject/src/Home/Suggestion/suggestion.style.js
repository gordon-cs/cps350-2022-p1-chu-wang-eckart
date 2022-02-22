import { StyleSheet } from 'react-native';
import { theme2 } from './../../../App.ThemeStyle.js';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 0,
        backgroundColor: theme2,
        alignItems: 'center',
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
})