import { View, Text, Platform } from 'react-native';
import React, { Component } from 'react';
import styles from './weather.style.js';
import OverlayAddress from './Overlay/overlayAddress.js';
import WeatherNow from './WeatherTabs/weatherNow.js';
import WeatherWeekly from './WeatherTabs/weatherWeekly.js';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Suggestion from './../Suggestion/suggestion.js';
'use strict';

const Tab = createMaterialTopTabNavigator();

const getWeather = async (location) => {
    try {
        const key1 = 'ZZYKQCWS7V2KDDLDVNGAW3AZE';
        const key2 = '69GS5VXRMUXW8XJZ3AN32JN26';
        const url =
            "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" +
            location + "/next7days?unitGroup=us&key=" + key2 + "&contentType=json";
        const result = await fetch(url);
        const weatherJson = await result.json();
        return weatherJson;
    }
    catch (e) {}
}

const TopRow = (props) => {
    return (
        <View style={styles.topRow}>
            <View style={styles.statusRow} />
            <View style={styles.locationRow}>
                <Text style={styles.locationText}>{props.address}</Text>
                <OverlayAddress clickConfirm={props.clickConfirm.bind(this)} />
            </View>
        </View>
    )
}

class Weather extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            result: [],
            location: 'washington, dc',
            isAndroid: Platform.OS === 'android',
            temp: '_ _',
            icon: '_ _',
            windspeed: '_ _',
            winddir: 0,
            humidity: '_ _',
            days: [],
        }
    }

    getResult = async (location) => {
        if (location !== '') {
            this.setState({
                location: location
            });
            let weatherData = await getWeather(this.state.location);
            if (weatherData) {
                this.setState({
                    result: weatherData
                });
                this.setState({
                    temp: this.state.result.currentConditions.temp,
                    icon: this.state.result.currentConditions.icon,
                    windspeed: this.state.result.currentConditions.windspeed,
                    winddir: this.state.result.currentConditions.winddir,
                    humidity: this.state.result.currentConditions.humidity,
                    days: this.state.result.days,
                });
            }
        }
    }

    async componentDidMount() {
        await this.getResult(this.state.location);
    }

    render() {
        return (
            <View style={styles.container}>
                <TopRow 
                    address={this.state.result.address}
                    clickConfirm={this.getResult.bind(this)}
                />
                <Tab.Navigator
                    screenOptions={{
                        tabBarShowLabel: false,
                        tabBarStyle: {
                            height: 0
                        },
                    }}
                    style={{
                        flex: 10,
                    }}
                >
                    <Tab.Screen
                        name="WeatherNow"
                        children={()=><WeatherNow
                            temp={this.state.temp}
                            icon={this.state.icon}
                            platform={this.state.isAndroid}
                            windspeed={this.state.windspeed}
                            winddir={this.state.winddir}
                            humidity={this.state.humidity}
                        />}
                        
                    />
                    <Tab.Screen
                        styles={{ flex: 10 }}
                        name="WeatherWeekly"
                        children={()=><WeatherWeekly
                            days={this.state.days}
                        />}
                    />
                </Tab.Navigator>
                <Suggestion location={this.state.location} navigation={this.props.navigation} route={this.props.route}  />
            </View>
        )
    }
}

export default Weather;