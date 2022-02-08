import { View } from 'react-native';
import styles from './home.style.js';
import Weather from './Weather/weather.js';
import Suggestion from './Suggestion/suggestion.js';
'use strict';

const Home = () => {
    return (
        <View style={styles.container}>
            <Weather />
            <Suggestion />
        </View>
    )
}

export default Home;