import { View, ImageBackground } from 'react-native';
import styles from './suggestion.style.js';
'use strict';

const Suggestion = () => {



    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./../../image/demo.png')}
                resizeMode='repeat'
                style={styles.backgroundImage} />
        </View>
    )
}

export default Suggestion;