import { View, Text, Platform } from 'react-native';
import styles from './weather.style.js';
import InfoOverlay from './Overlay/overlay.js';
import { Entypo, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { temperature, weather, windSpd, humidity } from './infoContent.js';
'use strict';

const Temperature = (props) => {
    return (
        <View style={styles.block}>
            <View style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'row', paddingTop: 5 }}>
                <Feather
                    name='thermometer'
                    style={props.platform?styles['icon-android']:styles['icon-ios']}
                />
                <InfoOverlay platform={props.platform} header={temperature[0]} content={temperature[1]} />
            </View>
            <View style={{ flex: 5, justifyContent: 'flex-end' }}>
                <Text style={props.platform?styles['number-android']:styles['number-ios']}>-105.1</Text>
            </View>
            <View style={{ flex: 2, justifyContent: 'flex-start' }}>
                <Text style={props.platform?styles['unit-android']:styles['unit-ios']}>{'\u2109'}</Text>
            </View>
        </View>
    )
}

const WeatherIcon = (props) => {
    return (
        <View style={styles.block}>
            <View style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'row', paddingTop: 5 }}>
                <FontAwesome
                    name='skyatlas'
                    style={props.platform?styles['icon-android']:styles['icon-ios']}
                />
                <InfoOverlay platform={props.platform} header={weather[0]} content={weather[1]} />
            </View>
            <View style={{ flex: 5, justifyContent: 'flex-end' }}>
                <MaterialCommunityIcons
                    name='weather-lightning'
                    style={props.platform?styles['weatherIcon-android']:styles['weatherIcon-ios']}
                />
            </View>
            <View style={{ flex: 2, justifyContent: 'flex-start' }}>
                <Text style={props.platform?styles['weatherName-android']:styles['weatherName-ios']}>Partly-Snowy-Rainy</Text>
            </View>
        </View>
    )
}

const Wind = (props) => {
    return (
        <View style={styles.block}>
            <View style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'row', paddingTop: 5 }}>
                <Feather
                    name='wind'
                    style={props.platform?styles['icon-android']:styles['icon-ios']}
                />
                <InfoOverlay platform={props.platform} header={windSpd[0]} content={windSpd[1]} />
            </View>
            <View style={{ flex: 5, justifyContent: 'flex-end' }}>
                <Text style={props.platform?styles['number-android']:styles['number-ios']}>4</Text>
            </View>
            <View style={{ flex: 2, justifyContent: 'flex-start', flexDirection: 'row' }}>
                <Text style={props.platform?styles['windDirection-android']:styles['windDirection-ios']}>North-West</Text>
                <Text style={props.platform?styles['windUnit-android']:styles['windUnit-ios']}>m/s</Text>
            </View>
        </View>
    )
}

const Humidity = (props) => {
    return (
        <View style={styles.block}>
            <View style={{ flex: 2, justifyContent: 'flex-end', flexDirection: 'row', paddingTop: 5 }}>
                <MaterialCommunityIcons
                    name='water-percent'
                    style={props.platform?styles['icon-android']:styles['icon-ios']}
                />
                <InfoOverlay platform={props.platform} header={humidity[0]} content={humidity[1]} />
            </View>
            <View style={{ flex: 5, justifyContent: 'flex-end' }}>
                <Text style={props.platform?styles['number-android']:styles['number-ios']}>20.7</Text>
            </View>
            <View style={{ flex: 2, justifyContent: 'flex-start' }}>
                <Feather name='percent' style={props.platform?styles['unit-android']:styles['unit-ios']} />
            </View>
        </View>
    )
}

const TopRow = () => {
    return (
        <View style={styles.topRow}>
            <View style={styles.statusRow} />
            <View style={styles.locationRow}>
                <Text style={styles.locationText}>Wenham, MA</Text>
                <Entypo name='location' style={styles.locationIcon} size={30} />
            </View>
        </View>
    )
}

const Row1 = (props) => {
    return (
        <View style={styles.row}>
            <Temperature platform={props.platform} />
            <WeatherIcon platform={props.platform} />
        </View>
    )
}

const Row2 = (props) => {
    return (
        <View style={styles.row}>
            <Wind platform={props.platform} />
            <Humidity platform={props.platform} />
        </View>
    )
}

const Weather = () => {

    let isAndroid = Platform.OS === 'android';

    return (
        <View style={styles.container}>
            <TopRow />
            <Row1 platform={isAndroid} />
            <Row2 platform={isAndroid} />
        </View>
    )
}

export default Weather;