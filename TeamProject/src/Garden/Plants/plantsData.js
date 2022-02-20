import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import Garden from './../garden.js';

export default class StaticPlantsData extends Component {
  render() {
    let plantsData = {
      "test":{"a":1,},
      "plants": {
        "data": [
        {
            "name":"Rose",
            "image":"",
            "temperature":15,
            "illumination":"",
            "Humidity":"" ,
        },
        {
            "name":"Monstera",
            "image":"",
            "temperature":15,
            "illumination":"",
            "Humidity":"" ,
        },
        {
            "name":"Spider Plant",
            "image":"",
            "temperature":15,
            "illumination":"",
            "Humidity":"" ,
        },
        {
            "name":"Dragon Tree",
            "image":"",
            "temperature":15,
            "illumination":"",
            "Humidity":"" ,
        },
        {
            "name":"Silver Dollar Vine",
            "image":"",
            "temperature":15,
            "illumination":"",
            "Humidity":"" ,
        },
        

        ]
      },
    };
    return (
        <View>
          <Garden plantsData={plantsData} />
        </View>
    )
  }
}