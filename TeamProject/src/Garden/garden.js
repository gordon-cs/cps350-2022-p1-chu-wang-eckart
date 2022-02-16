import { View, Text,SafeAreaView, StyleSheet, TextInput, Button, Alert  } from 'react-native';
import styles from './garden.style.js';
'use strict';
import Plant from './Plants/plants'; 
import React from "react";

const Garden =()=>{
    const [text, onChangeText] = React.useState(null);
    const handleClick=()=> {
        alert( "Add "+ text +" to your garden"); 
     }
    //  "Add "+ {text} +" to your garden"

        return (
            
            <View style={styles.container}>
                {console.log()}
                <Text>Your Garden</Text>
                {/* <Plant></Plant> */}
                <View name="searchBar" style={{felx: 1}}>
                    <SafeAreaView>
                    <TextInput
                        style={all.input}
                        onChangeText={onChangeText}
                        value={text}
                        placeholder="Enter name of plant"
                    />
                    </SafeAreaView>
                    <Button
                        title="Add"
                        onPress={handleClick}
                    />
                </View>
                
                <View name="plantsField" style={{felx:1}}>
                    <View name ="Rose" style={all.box}> 
                        <Text style={all.text}>Rose</Text>
                        {/* <Text>{this.props.plantsData.plants.data[0].name}</Text> */}
                    </View>
                    <View style={all.box}>
                        <Text style={all.text}>Sunflower</Text>
                    </View>
                </View>
            </View>
        )
    
}



const all = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },

    box: {
        height: 60,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    text: {
        fontSize:30,
        textAlign:'center',
    },

      
  });
  
  export default Garden;