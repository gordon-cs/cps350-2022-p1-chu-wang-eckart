import { View, Text } from 'react-native';
import React, { Component } from 'react';
import styles from './weatherWeekly.style.js';
import { theme3 } from './../../../../App.ThemeStyle.js';
import getWeatherIcon from './getWeatherIcon.js';
import { MaterialCommunityIcons } from '@expo/vector-icons';
'use strict';

const getLowHighTemp = (day) => {
    let tempBoundary = [null, null]; // [low, high]
    for (let i = 0; i < day.hours.length; i++) {
        if (tempBoundary[0] === null) {
            tempBoundary[0] = day.hours[i].temp;
            tempBoundary[1] = day.hours[i].temp;
        }
        else if (day.hours[i].temp !== null) {
            if (tempBoundary[0] > day.hours[i].temp) {
                tempBoundary[0] = day.hours[i].temp;
            }
            if (tempBoundary[1] < day.hours[i].temp) {
                tempBoundary[1] = day.hours[i].temp;
            }
        }
    }
    for (let i = 0; i < tempBoundary.length; i++) {
        tempBoundary[i] = tempBoundary[i].toFixed(1);
    }
    return tempBoundary;
}

const TemperatureBar = (props) => {
    // a temperature bar looks like this:
    // unreachedLow + reached + unreachedHigh
    //    ||           ||            ||
    //    \/           \/            \/
    // -----------------------------------------------
    // |           |//////////|                      |
    // -----------------------------------------------
    let unreachedLow = Math.abs((props.temperature[0] - props.weeklyLow)*10);
    let reached = Math.abs((props.temperature[1] - props.temperature[0])*10);
    let unreachedHigh = Math.abs((props.weeklyHigh - props.temperature[1])*10);
    return (
        <View style={styles.temperatureBarContainer}>
            <View style={{ flex: unreachedLow, }} />
            <View style={{ flex: reached,
                        backgroundColor: theme3,
                        borderWidth: 2,
                        borderRadius: 10,
                        borderColor: 'transparent' }} />
            <View style={{ flex: unreachedHigh }} />
        </View>
    )
}

const TopRow = () => {
    return (
        <View style={styles.topRow}>
            <View style={styles.date}>
                <Text style={styles.content}>Date</Text>
            </View>
            <View style={styles.condition}>
                <Text style={styles.content}>Condition</Text>
            </View>
            <View style={styles.temperature}>
                <Text style={styles.content}>{'Temperature (\u2109)'}</Text>
            </View>
        </View>
    )
}

const Row = (props) => {
    let datetime = props.datetime.split('-');
    // console.log(props);
    return (
        <View style={props.isLast ? styles.bottomRow : styles.row}>
            <View style={styles.date}>
                <Text style={styles.dateContent}>{datetime[1] + '/' + datetime[2]}</Text>
            </View>
            <View style={styles.conditionNoBorder}>
                <MaterialCommunityIcons
                    name={getWeatherIcon(props.conditions)}
                    style={styles.conditionContent}
                />
            </View>
            <View style={styles.temperatureData}>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <Text style={styles.temperatureLowTemp}>{props.temperature[0]+'\u00B0'}</Text>
                </View>
                <View style={{ flex: 4, justifyContent: 'center', flexDirection: 'column' }}>
                    <View style={{ flex: 2 }} />
                    <TemperatureBar
                        temperature={props.temperature}
                        weeklyLow={props.weeklyLow}
                        weeklyHigh={props.weeklyHigh}
                    />
                    <View style={{ flex: 2 }} />
                </View>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <Text style={styles.temperatureHighTemp}>{props.temperature[1]+'\u00B0'}</Text>
                </View>
            </View>
        </View>
    )
}

const Block = (props) => {
    let weeklyLH = [];
    let weeklyLHMAX = [null, null]; // [lowMAX, highMAX]
    for (let i = 0; i < props.days.length; i++) {
        weeklyLH.push(getLowHighTemp(props.days[i]));
    }
    for (let i = 0; i < weeklyLH.length; i++) {
        if (i === 0) {
            weeklyLHMAX[0] = weeklyLH[i][0];
            weeklyLHMAX[1] = weeklyLH[i][1];
        }
        else {
            if (parseFloat(weeklyLHMAX[0]) > parseFloat(weeklyLH[i][0])) {
                weeklyLHMAX[0] = weeklyLH[i][0];
            }
            if (parseFloat(weeklyLHMAX[1]) < parseFloat(weeklyLH[i][1])) {
                weeklyLHMAX[1] = weeklyLH[i][1];
            }
        }
    }
    return (
        <View style={styles.block}>
            <TopRow />
            {props.days.map((day, i) => (
                <Row 
                    key={i}
                    datetime={day.datetime}
                    conditions={day.conditions}
                    temperature={weeklyLH[i]}
                    isLast={i+1===props.days.length}
                    weeklyLow={weeklyLHMAX[0]}
                    weeklyHigh={weeklyLHMAX[1]}
                 />
            ))}
        </View>
    )
}

class WeatherWeekly extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Block days={this.props.days} />
            </View>
        )
    }
}

export default WeatherWeekly;