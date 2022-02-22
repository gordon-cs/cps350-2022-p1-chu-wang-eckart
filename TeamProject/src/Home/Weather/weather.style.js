import { StyleSheet } from 'react-native';
import { theme1, theme2, theme3, fontFamilies } from './../../../App.ThemeStyle.js';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: theme2,
    },
    topRow: {
        flex: 3,
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
    },
    icon: {
        color: 'white',
    },
})