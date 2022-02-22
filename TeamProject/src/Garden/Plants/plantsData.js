import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';



const PlantData = (props) => {
  const flowerData = props.flowerData;
  console.log(flowerData);
  return (
    <View >
        <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }}
            horizontal={false}
            style={{ flexDirection: 'column', paddingHorizontal:10, marginBottom: 100 }}
        >
            {flowerData.map((flowerData,i) => (
                <View style={{flex:1}}>
                    <View style={{ flexDirection: 'row' }}>
                        <Image source={{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}} style={styles.image}>
                          
                        </Image>
                        <Text >{flowerData[i].name}</Text>
                        <View style={{ flex: 2, flexDirection: 'row' }}>
                            {/* {this.PlusButton(this.state.flowerData[i].name)}
                            {this.MoreButton(this.state.flowerData[i].name)} */}
                        </View>
                    </View>
                </View>
            ))}
        </ScrollView>
        
    </View>
)

}
  

export default PlantData;