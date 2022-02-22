import Plant from './Plants/plants';
import debounce from 'lodash/debounce';
import styles from './garden.style.js';
import React, { Component } from 'react';
import { Feather } from '@expo/vector-icons';
import InfoOverlay from './Overlay/overlay.js';
import { View,
        Text,
        TextInput,
        Alert,
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
        if (list[i].key === key.toLowerCase()) {
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
            this.addPlantToGarden(key);
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
                <Feather
                    name='more-horizontal'
                    style={{ 
                        fontSize: 23,
                        color: "black",
                        textAlign: 'center',
                    }}
                />
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
        if (!checkExist(this.state.myGarden, plantKey)) {
            let thisPlant = this.state.result.find(plant => plant.key === plantKey);
            let tempMyGarden = this.state.myGarden;
            // console.log(thisPlant);
            tempMyGarden.push({
                key: plantKey,
                value: thisPlant.value,
            });
            this.setState({
                myGarden: tempMyGarden,
            });
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
        console.log(this.state.result);
    }

     render() {
        return (
            <View style={styles.container}>
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
                            style={{ paddingHorizontal: 10, }}
                        >
                            {this.MyGarden()}
                        </ScrollView>
                    </View>
                </View>
            </View>
        )
    }
}
