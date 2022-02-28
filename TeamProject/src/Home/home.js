import { View, ImageBackground } from 'react-native';
import styles from './home.style.js';
import Weather from './Weather/weather.js';
import Suggestion from './Suggestion/suggestion.js';

'use strict';

const Home = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('./../image/background.png')}
                resizeMode='stretch'
                style={styles.backgroundImage}
            />
            <Weather navigation={navigation} />
            <Suggestion 
                myGarden={route?.params?.myGarden?? []}
                location={route?.params?.location?? '0'}
            />
        </View>
    )
}

export default Home;