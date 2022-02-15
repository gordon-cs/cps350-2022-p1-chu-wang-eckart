import { View, Text, Platform } from 'react-native';
import React, { Component } from 'react';
import styles from './weather.style.js';
import InfoOverlay from './Overlay/overlay.js';
import { Entypo, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { temperature, weather, windSpd, humidity } from './infoContent.js';
'use strict';

const getWeather = async (location) => {
    const url =
        "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
        location + "/next7days?unitGroup=us&key=LB9VYC553N4BPASN786Z7CRDZ&contentType=json";
    const result = await fetch(url);
    const weatherJson = await result.json();
    return weatherJson;
}

const getWeatherIcon = (iconName) => {
    if (iconName.includes('night')) {
        if (iconName.includes('cloudy')) {
            return 'weather-night-partly-cloudy';
        }
        return 'weather-night';
    }
    if (iconName.includes('cloudy')) {
        if (iconName.includes('partly')) {
            return 'weather-partly-cloudy';
        }
        return 'weather-cloudy';
    }
    if (iconName.includes('fog')) {
        return 'weather-fog';
    }
    if (iconName.includes('hail')) {
        return 'weather-hail';
    }
    if (iconName.includes('hazy')) {
        return 'weather-hazy';
    }
    if (iconName.includes('hurricane')) {
        return 'weather-hurricane';
    }
    if (iconName.includes('lightning')) {
        if (iconName.includes('rainy')) {
            return 'weather-lightning-rainy';
        }
        if (iconName.includes('partly')) {
            return 'weather-partly-lightning';
        }
        return 'weather-lightning';
    }
    if (iconName.includes('rainy')) {
        if (iconName.includes('partly')) {
            return 'weather-partly-rainy';
        }
        return 'weather-rainy';
    }
    if (iconName.includes('pouring')) {
        return 'weather-pouring';
    }
    if (iconName.includes('sunny')) {
        return 'weather-sunny';
    }
    if (iconName.includes('tornado')) {
        return 'weather-tornado';
    }
    if (iconName.includes('windy')) {
        return 'weather-windy';
    }
    if (iconName.includes('snowy')) {
        if (iconName.includes('heavy')) {
            return 'weather-snowy-heavy';
        }
        if (iconName.includes('rainy')) {
            if (iconName.includes('partly')) {
                return 'weather-partly-snowy-rainy';
            }
            return 'weather-snowy-rainy';
        }
        if (iconName.includes('partly')) {
            return 'weather-partly-snowy';
        }
        return 'weather-snowy';
    }
}

// got code from basarat, doubled the direction sections (8 => 16) in custom
// https://gist.github.com/basarat/4670200
const getOrdinalDir = (angle) => {
    const degreePerDirection = 360 / 16;

    /** 
     * Offset the angle by half of the degrees per direction
     * Example: in 4 direction system North (320-45) becomes (0-90)
     */
    const offsetAngle = angle + degreePerDirection / 2;
  
    return (offsetAngle >= 0 * degreePerDirection && offsetAngle < 1 * degreePerDirection) ? "N"
            : (offsetAngle >= 1 * degreePerDirection && offsetAngle < 2 * degreePerDirection) ? "NNE"
            : (offsetAngle >= 2 * degreePerDirection && offsetAngle < 3 * degreePerDirection) ? "NE"
            : (offsetAngle >= 3 * degreePerDirection && offsetAngle < 4 * degreePerDirection) ? "ENE"
            : (offsetAngle >= 4 * degreePerDirection && offsetAngle < 5 * degreePerDirection) ? "E"
            : (offsetAngle >= 5 * degreePerDirection && offsetAngle < 6 * degreePerDirection) ? "ESE"
            : (offsetAngle >= 6 * degreePerDirection && offsetAngle < 7 * degreePerDirection) ? "SE"
            : (offsetAngle >= 7 * degreePerDirection && offsetAngle < 8 * degreePerDirection) ? "SSE"
            : (offsetAngle >= 8 * degreePerDirection && offsetAngle < 9 * degreePerDirection) ? "S"
            : (offsetAngle >= 9 * degreePerDirection && offsetAngle < 10 * degreePerDirection) ? "SSW"
            : (offsetAngle >= 10 * degreePerDirection && offsetAngle < 11 * degreePerDirection) ? "SW"
            : (offsetAngle >= 11 * degreePerDirection && offsetAngle < 12 * degreePerDirection) ? "WSW"
            : (offsetAngle >= 12 * degreePerDirection && offsetAngle < 13 * degreePerDirection) ? "W"
            : (offsetAngle >= 13 * degreePerDirection && offsetAngle < 14 * degreePerDirection) ? "WNW"
            : (offsetAngle >= 14 * degreePerDirection && offsetAngle < 15 * degreePerDirection) ? "NW"
            : (offsetAngle >= 15 * degreePerDirection && offsetAngle < 16 * degreePerDirection) ? "NNW"
            : "N";
}

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
                <Text style={props.platform?styles['number-android']:styles['number-ios']}>{props.temp}</Text>
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
                    name={getWeatherIcon(props.icon)}
                    style={props.platform?styles['weatherIcon-android']:styles['weatherIcon-ios']}
                />
            </View>
            <View style={{ flex: 2, justifyContent: 'flex-start' }}>
                <Text style={props.platform?styles['weatherName-android']:styles['weatherName-ios']}>{props.icon}</Text>
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
                <Text style={props.platform?styles['number-android']:styles['number-ios']}>{props.windspeed}</Text>
            </View>
            <View style={{ flex: 2, justifyContent: 'flex-start', flexDirection: 'row' }}>
                <Text style={props.platform?styles['windDirection-android']:styles['windDirection-ios']}>
                    {getOrdinalDir(props.winddir) + ' - ' + props.winddir + '\u00B0'}
                </Text>
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
                <Text style={props.platform?styles['number-android']:styles['number-ios']}>{props.humidity}</Text>
            </View>
            <View style={{ flex: 2, justifyContent: 'flex-start' }}>
                <Feather name='percent' style={props.platform?styles['unit-android']:styles['unit-ios']} />
            </View>
        </View>
    )
}

const TopRow = (props) => {
    return (
        <View style={styles.topRow}>
            <View style={styles.statusRow} />
            <View style={styles.locationRow}>
                <Text style={styles.locationText}>{props.address}</Text>
                <Entypo name='location' style={styles.locationIcon} size={30} />
            </View>
        </View>
    )
}

const Row1 = (props) => {
    return (
        <View style={styles.row}>
            <Temperature platform={props.platform} temp={props.temp} />
            <WeatherIcon platform={props.platform} icon={props.icon} />
        </View>
    )
}

const Row2 = (props) => {
    return (
        <View style={styles.row}>
            <Wind platform={props.platform} windspeed={props.windspeed} winddir={props.winddir} />
            <Humidity platform={props.platform} humidity={props.humidity} />
        </View>
    )
}

class Weather extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            location: 'wenham, ma',
            isAndroid: Platform.OS === 'android',
            temp: 0,
            icon: '',
            windspeed: '',
            winddir: 0,
            humidity: '',
        }
    }

    async getResult(location) {
        this.setState({
            location: location
        });
        let weatherData = await getWeather(this.state.location);
        // console.log(weatherData);
        this.setState({
            result: weatherData
        });
        this.setState({
            temp: this.state.result.currentConditions.temp,
            icon: this.state.result.currentConditions.icon,
            windspeed: this.state.result.currentConditions.windspeed,
            winddir: this.state.result.currentConditions.winddir,
            humidity: this.state.result.currentConditions.humidity,
        });
        console.log(this.state.result);
    }

    async componentDidMount() {
        await this.getResult(this.state.location);
    }

    render() {
        return (
            <View style={styles.container}>
                <TopRow address={this.state.result.address} />
                <Row1 
                    platform={this.state.isAndroid}
                    temp={this.state.temp}
                    icon={this.state.icon}
                     />
                <Row2 platform={this.state.isAndroid}
                    windspeed={this.state.windspeed}
                    winddir={this.state.winddir}
                    humidity={this.state.humidity}
                     />
            </View>
        )
    }
}

export default Weather;