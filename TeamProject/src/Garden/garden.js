import styles from './garden.style.js';
import React, { Component } from 'react';
import Plants from './plants.js';
import { View, ImageBackground, Text, } from 'react-native';
'use strict';

const Garden = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.topBar} />
            <View style = {{ flex: 23 }}>
                <View style={styles.myGarden}>
                    <ImageBackground
                        source={require('./../image/demo.png')}
                        resizeMode='repeat'
                        style={styles.backgroundImage}
                    />
                    <View style={styles.myGardenHeader}>
                        <Text style={styles.myGardenHeaderContent}>Plant Store</Text>
                    </View>
                    <Plants navigation={navigation} route={route?.params?.myGarden?? []}/>
                </View>
            </View>
        </View>
    )
}

export default Garden;