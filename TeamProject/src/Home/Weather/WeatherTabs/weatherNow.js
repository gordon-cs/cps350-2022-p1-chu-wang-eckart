import { View, Text, ImageBackground } from 'react-native';
import React, { Component } from 'react';
import styles from './weatherNow.style.js';
import InfoOverlay from './../Overlay/overlayDefinition.js';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { temperature, weather, windSpd, humidity } from './../infoContent.js';
import getWeatherIcon from './getWeatherIcon.js';
'use strict';

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
                <InfoOverlay platform={props.platform} icon={'info'} header={temperature[0]} content={temperature[1]} />
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
                <InfoOverlay platform={props.platform} icon={'info'} header={weather[0]} content={weather[1]} />
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
                <InfoOverlay platform={props.platform} icon={'info'} header={windSpd[0]} content={windSpd[1]} />
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
                <InfoOverlay platform={props.platform} icon={'info'} header={humidity[0]} content={humidity[1]} />
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

class WeatherNow extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.weatherNowContainer}>
                <ImageBackground
                    source={require('./../../../image/subBackground.png')}
                    resizeMode='stretch'
                    style={styles.backgroundImage}
                />
                <Row1 
                    platform={this.props.platform}
                    temp={this.props.temp}
                    icon={this.props.icon}
                />
                <Row2 platform={this.props.platform}
                    windspeed={this.props.windspeed}
                    winddir={this.props.winddir}
                    humidity={this.props.humidity}
                />
            </View>
        )
    }
}

export default WeatherNow;