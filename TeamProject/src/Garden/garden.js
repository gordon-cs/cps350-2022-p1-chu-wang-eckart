import { View, Text,SafeAreaView, StyleSheet, TextInput, Button, Alert, Pressable } from 'react-native';
import styles from './garden.style.js';
'use strict';
import Plant from './Plants/plants'; 
import React, { Component } from 'react';
import InfoOverlay from './Overlay/overlay.js';
import debounce from 'lodash/debounce';
import { Feather } from '@expo/vector-icons';
 const getWeather = async (plant) => {
  const url =
      "https://openfarm.cc/api/v1/crops/?filter=" +
      plant;
  const result = await fetch(url);
  const plantJson = await result.json();
  return plantJson;
}

export default class Garden extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result:[],
            temp:[  
                  "cluster rose",
                  10,
                  "Sorry, we don't have this information",
                  70,
                ],
            name: "Rose",
            description: "",
            image: "",
            temperature: 15,
            illumination: "",
            Humidity: 0,
            growth_degree: 0,
            
            isAndroid: Platform.OS === 'android',
            plant: "Rose",
            dataList:[],
            list: [],
            current:"",
        }
        // console.log();
    }

    PTextInput () {
        return (
          <SafeAreaView>
            
            <TextInput
              style={styles.input}
              onChangeText={(newText) => this.setState({plant: newText})}
              placeholder="Enter plant's name"
            />
            
          </SafeAreaView>
        );
      };

    CreateAddButton() {
        const handleClick =()=> { 
          this.getResult(this.state.plant);
          this.setState({ 
              dataList:[
                ...this.state.dataList,
                this.state.temp,
              ],

              list:[
                  ...this.state.list,
                  this.state.plant
              ]
          });
          console.log("Button: ");
          console.log(this.state.temp);
          Alert.alert(this.state.plant);
          }
      return(
        <Button
            title="Add"
            onPress={debounce(handleClick,50)}
        />
      );
    } 

    CreateDeleteButton() {
      const handleClick =()=> { 
        this.getResult(this.state.plant);
        var array = [...this.state.dataList]; 
        var index = array.indexOf(this.state.temp)
        if (index !== -1) {
          array.splice(index, 1);
          this.setState({dataList: array});
        }
        Alert.alert(this.state.plant);
        
        }
    return(
      <Button
          title="Delete"
          onPress={debounce(handleClick,50)}
      />
    );
  } 

  async getResult(plant) {
      this.setState({
          plant: plant
      });
      let plantData = await getWeather(this.state.plant);
      this.setState({
          result: plantData 
      });
      this.setState({ temperature: 10,  humidity: 70,});
      // console.log(this.state.result);
      let n = this.state.result.data[0].attributes.common_names[0];
      let d = this.state.result.data[0].attributes.description;
      let il = this.state.result.data[0].attributes.sun_requirements;
      let im =  this.state.result.data[0].attributes.main_image_path;
      let grw = this.state.result.data[0].attributes.growing_degree_days;
      this.setState({
          name: n? n:"Sorry, we don't have this information",
          description: d? d:"Sorry, we don't have this information",
        
          illumination: il? il:"Sorry, we don't have this information",
          image:im? im:"Sorry, we don't have this information",
          
          growth_degree: grw? grw:"Sorry, we don't have this information",
      });

      this.setState({
        temp:[
          this.state.name,
          this.state.temperature,
          this.state.illumination,
          this.state.humidity,
        ],
      });
      console.log("temp: ");
      console.log(this.state.temp);
      console.log("dataList: ");
      console.log(this.state.dataList);
  

  }

     render() {
        return (
            
            <View style={styles.container}>
                <Text>Your Garden</Text>
                {/* {console.log("constructor")} */}
                <Plant></Plant>
                <View name="searchBar" style={{felx: 1}}>
                    {this.PTextInput()}
                    {this.CreateAddButton()}
                    {this.CreateDeleteButton()}
               
                </View>
                
                <View name="plantsField" style={{felx:1}}>

                    {this.state.list.map(item => (
                            <View style={styles.box}>
                                <InfoOverlay platform={this.state.isAndroid} header={item} content={this.state.temp} />
                                <View>
                                  <Text key={item} style={styles.text}>{item}</Text>
                                </View>
                            </View>
                        ))}
                </View>
            </View>
        )
    
    }
}
