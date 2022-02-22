import { View, ImageBackground } from 'react-native';
import styles from './home.style.js';
import Weather from './Weather/weather.js';
import Suggestion from './Suggestion/suggestion.js';
import { BackgroundImage } from 'react-native-elements/dist/config';

'use strict';

const Home = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./../image/background.png')}
                resizeMode='stretch'
                style={styles.backgroundImage}
            />
            <Weather />
            <Suggestion />
        </View>
    )
}

export default Home;