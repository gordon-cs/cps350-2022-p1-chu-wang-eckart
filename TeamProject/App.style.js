import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    // background image style from
    // https://medium.com/@mateus17v/a-simple-animation-for-background-react-native-using-animated-498272a69fa4
    backgroundImage: {
        width: '150%',
        height: '150%',
        position: 'absolute',
        left: 0,
        flex: 1,
        opacity: 1,
        paddingRight: 43,
        paddingBottom: 50,
    },
})