import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    statusbarNormal: STATUSBAR_HEIGHT => ({
        paddingTop: STATUSBAR_HEIGHT,
    }),
    statusbarHidden: {
        paddingTop: 0,
    },
})