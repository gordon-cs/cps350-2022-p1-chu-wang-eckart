import Plant from './Plants/plants';
import debounce from 'lodash/debounce';
import styles from './garden.style.js';
import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import InfoOverlay from './Overlay/overlay.js';
import MyPlant from './myPlant.js';
import LinearGradient from 'react-native-linear-gradient';
import { View,
        Text,
        TextInput,
        Alert,
        Image,
        Pressable,
        ScrollView,
        ImageBackground,
        Keyboard, } from 'react-native';
'use strict';

 const getPlant = async (plant) => {
  const url =
      "https://openfarm.cc/api/v1/crops/?filter=" +
      plant;
  const result = await fetch(url);
  const plantJson = await result.json();
  return plantJson;
}

const checkExist = (list, key) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].key === key) {
            return true;
        }
    }
    return false;
}

const MyGardenRow = (list, i) => {
    if (i < list.length) {
        return (
            <View key={i} style={styles.myGardenPlant}>
                <Text style={styles.myGardenPlantContent}>
                    {list[i].key}
                </Text>
            </View>
        )
    }
    return (
        <View key={i} style={styles.myGardenEmptyPlant} />
    )
}

export default class Garden extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            plant: '',
            myGarden: [],
            flowerData: [
                {
                    "name":"Stevie's Wonder Lily",
                    "image":'./../imageimage/flower/Lily.jpg',
                    "zones":'7b to 10b',
                    "illumination":'Sun to Part Sun',
                },
                {
                    "name":"First Light Swamp Sunflower",
                    "image":'./../image/flower/Sunflower.jpg',
                    "zones":'5a to 9b',
                    "illumination":'Sun',
                },
                {
                    "name":"Rose",
                    "image":'./../image/flower/Rose.jpg',
                    "zones":'5a to 8b',
                    "illumination":'Part Sun to Light Shade',
                },
                {
                    "name":"involucrata var. tenuissima",
                    "image":'./../image/flower/Purpulflower.jpg',
                    "zones":'4a to 9b',
                    "illumination":'Sun to Part Sun',
                },
                {
                  "name":"Chrysanthemum",
                  "image":'./../image/flower/Chrysanthemum.jpg',
                  "zones":'6a to 9b',
                  "illumination":'Sun',
                },
                
        
                ]
            
        }
    }

    PTextInput() {
        return (
            <TextInput
                style={styles.input}
                onChangeText={(newText) => this.setState({plant: newText})}
                placeholder="Enter plant"
                clearButtonMode="always"
            />
        );
      };
    
    SearchResultTopRow() {
        return (
            <View style={styles.topRow}>
                <View style={{ flex: 2, justifyContent: 'center' }}>
                    <Text style={styles.topRowContent}>
                        No.
                    </Text>
                </View>
                <View style={{ flex: 9, justifyContent: 'center', borderLeftWidth: 2, borderRightWidth: 2 }}>
                    <Text style={styles.topRowContent}>
                        Name
                    </Text>
                </View>
                <View style={{ flex: 2,justifyContent: 'center', }}>
                    <Text style={styles.topRowContent}>
                        Action
                    </Text>
                </View>
            </View>
        )
    }

    SearchButton() {
        const handleClick = () => {

            Keyboard.dismiss();

            if (this.state.result.length === 0 || this.state.plant !== '') {
                this.getResult();
            }
            else {
                this.setState({
                    result: [],
                })
            }
        }
        return (
            <Pressable
                title="Search"
                style={styles.botton}
            >
                <Feather
                    name='search'
                    style={{ textAlign: 'center', color: 'white' }}
                    size={30}
                    onPress={debounce(handleClick,50)}
                />
            </Pressable>
        );
    }
    PlusButton(key) {
        const handleClick = () => {
            this. addPlantToGarden(key);
        }

        return (
            <View style={styles.searchResultButton}>
                <Feather
                    name='plus'
                    style={{ 
                        fontSize: 23,
                        color: "black",
                        textAlign: 'center',
                    }}
                    onPress={debounce(handleClick,50)}
                />
            </View>
        )
    }

    MoreButton(key) {
        return (
            <View style={styles.searchResultButton}>
                <InfoOverlay header={key.name} content={ key.name +'\n'+
                                                          key.illumination +'\n'+
                                                          key.zones+'\n'
                                                        } 
                />
            </View>
        )
    }
    
    ManualData() {
      return (
          <View >
              {/* <ScrollView 
                  contentContainerStyle={{ flexGrow: 1 }}
                  horizontal={false}
                  style={{ flexDirection: 'column', marginBottom: 0 }}
              > */}
                  {this.state.flowerData.map((flowerData,i) => (
                      
                      <View key={i} style={styles.block}>
                          <View style={{ flexDirection: 'row', }}>
                                <Image source={require('./../image/flower/' + 'Lily.jpg')} style={styles.image} />
                                <View style={{flex: 36, justifyContent: 'center', }}>
                                    <Text style={styles.searchResultNameContent}>{this.state.flowerData[i].name}</Text>
                                </View>
                                <View style={{ flex: 4, justifyContent: 'center', }}>
                                    {this.PlusButton(this.state.flowerData[i])}
                                    {this.MoreButton(this.state.flowerData[i])}
                                </View>
                                <View style={{ flex: 1, }} />
                          </View>
                      </View>
                  ))}
              {/* </ScrollView> */}
              
          </View>
      )
  }

    SearchResult() {
        if (this.state.result.length === 0) {
            return (
                <View/>
            )
        }
        return (
            <View >
                {this.SearchResultTopRow()}
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1 }}
                    horizontal={false}
                    style={{ paddingHorizontal:10, marginBottom: 100 }}
                >
                    {this.state.result.map((plantData, i) => (
                        <View key={i} style={ (i+1 < this.state.result.length)
                            ? styles.row
                            : styles.bottomRow
                        }>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.searchResultIndexContent}>{i+1}</Text>
                                <Text style={styles.searchResultNameContent}>{plantData.key}</Text>
                                <View style={{ flex: 2, flexDirection: 'row' }}>
                                    {this.PlusButton(plantData.key)}
                                    {this.MoreButton(plantData.key)}
                                </View>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                
            </View>
        )
    }

    MyGarden() {
        let tempMyGarden = this.state.myGarden;
        if (this.state.myGarden.length === 0) {
            return (
                <View/>
            )
        }
        return (
            <View>
                {this.state.myGarden.map(function(myPlant, i) {
                    if (i%2 === 0) {
                        return (
                            <View key={i} style={styles.myGardenRow}>
                                <View style={styles.myGardenPlant}>
                                    <Text style={styles.myGardenPlantContent}>
                                        {tempMyGarden[i].key}
                                    </Text>
                                </View>
                                {MyGardenRow(tempMyGarden, i+1)}
                            </View>
                        )
                    }
                })}
            </View>
        )
    }

    addPlantToGarden(plantKey) {
        if (!checkExist(this.state.myGarden, plantKey.name)) {
            let thisPlant = this.state.result.find(plant => plant.key === plantKey);
            let tempMyGarden = this.state.myGarden;
            // console.log(thisPlant);
            tempMyGarden.push({
                key: plantKey.name,
                zone: plantKey.zones,
                illumination: plantKey.illumination,
            });
            this.setState({
                myGarden: tempMyGarden,
            });
            Alert.alert(plantKey.name);
            // console.log(this.state.myGarden);
            // console.log('My Garden: ', this.state.myGarden);
        }
    }

    async getResult() {
        let plantData = await getPlant(this.state.plant);

        let plantDataList = [];
        plantData.data.map(function(plant) {
            if (plant.attributes.common_names !== null 
                && plant.attributes.common_names.length !== 0
                && plant.attributes.common_names[0] !== '') {
                    if (!checkExist(plantDataList, plant.attributes.common_names[0])) {
                        plantDataList.push({
                            key: plant.attributes.common_names[0].toLowerCase(),
                            value: plant,
                        })
                    }
            }
            else if (plant.attributes.binomial_name !== null
                    && plant.attributes.binomial_name !== ''
                    && !checkExist(plantDataList, plant.attributes.binomial_name)) {
                plantDataList.push({
                    key: plant.attributes.binomial_name.toLowerCase(),
                    value: plant,
                })
            }
        });
        
        this.setState({
            result: plantDataList,
        });
        // console.log(this.state.result);
    }

     render() {
        return (
            <View style={styles.container}>
                <MyPlant myGarden={this.props.myGarden} />
                <View style={styles.topBar}>
                    {/* <View style={{ flex: 4 }} /> */}
                    {/* <View style={styles.searchBar}>
                        {this.PTextInput()}
                        {this.SearchButton()}
                    </View> */}
                </View>
                <View style = {{ flex: 23 }}>
                    {/* <View style={styles.library}>
                        <View style={styles.searchResultHeader}>
                            <Text style={styles.searchResultHeaderContent}>
                                {'Search Result' 
                                    + (this.state.result.length === 0
                                    ? ''
                                    : ': Found ' 
                                    + this.state.result.length 
                                    + ' Plants')
                                }
                            </Text>
                        </View>
                        {this.SearchResult()}
                    </View> */}
                    <View style={styles.myGarden}>
                        <ImageBackground
                            source={require('./../image/demo.png')}
                            resizeMode='repeat'
                            style={styles.backgroundImage}
                        />
                        <View style={styles.myGardenHeader}>
                            <Text style={styles.myGardenHeaderContent}>Plant Store</Text>
                        </View>
                       
                        <ScrollView 
                            contentContainerStyle={{ flexGrow: 1 }}
                            horizontal={false}
                            style={{ paddingHorizontal: 10, flex: 10 }}
                        >
                            {/* {this.MyGarden()} */}
                            {this.ManualData()}
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}