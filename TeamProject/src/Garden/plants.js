import React, { useState } from 'react';
import { View,
    Text,
    Alert,
    Image,
    ScrollView, } from 'react-native';
import { Feather } from '@expo/vector-icons';
import InfoOverlay from './Overlay/overlay.js';
import debounce from 'lodash/debounce';
import styles from './garden.style.js';
import { plantData } from './plantData.js';

const checkExist = (list, key) => {
    for (let i = 0; i < list.length; i++) {
        if (list[i].key === key) {
            return true;
        }
    }
    return false;
}

class myPlant extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            myGarden: [],
            flowerData: plantData,
        }
    }

    PlusButton(key) {
        const handleClick = () => {
            this. addPlantToGarden(key);
        }

        return (
            <View style={!checkExist(this.state.myGarden,key)
                ? styles.button
                : styles.disabledButton}
            >
                <Feather
                    name='plus'
                    style={styles.addButton}
                    onPress={debounce(handleClick,50)}
                />
            </View>
        )
    }

    MoreButton(plant) {
        return (
            <View style={styles.button}>
                <InfoOverlay content={plant}/>
            </View>
        )
    }
    
    ManualData() {
        return (
            <View >
                  {this.state.flowerData.map((flowerData,i) => (
                      
                        <View key={i} style={styles.block}>
                            <View style={{ flexDirection: 'row', }}>
                                {this.getImage(flowerData["nickname"])}
                                <View style={{ flex: 9, }}>
                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }}>
                                        <Text style={styles.nameContent}>{flowerData["name"]}</Text>
                                        <Text style={styles.nicknameContent}>{'"' + flowerData["nickname"] + '"'}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 2, justifyContent: 'center', }}>
                                    {this.PlusButton(flowerData["nickname"])}
                                    {this.MoreButton(this.state.flowerData[i])}
                                </View>
                            </View>
                        </View>
                    ))}
            </View>
        )
    }

    getImage(plantKey) {
        switch (plantKey) {
            case "Lily of the Nile":
                return (
                    <Image source={require('./../image/flower/Lily.jpg')} style={styles.image} />
                );
            case "First Light":
                return (
                    <Image source={require('./../image/flower/Sunflower.jpg')} style={styles.image} />
                );
            case "Ice n' Rose":
                return (
                    <Image source={require('./../image/flower/Rose.jpg')} style={styles.image} />
                );
            case "Victoria Blue":
                return (
                    <Image source={require('./../image/flower/mealycup-sage-victoria-blue.jpg')} style={styles.image} />
                );
            case "Harmony":
                return (
                    <Image source={require('./../image/flower/garden-mum-harmony.jpg')} style={styles.image} />
                );
        }
    }

    addPlantToGarden(plantKey) {
        if (!checkExist(this.state.myGarden, plantKey)) {
            let tempMyGarden = this.state.myGarden;
            let plant = this.state.flowerData.find(plant => plant["nickname"] === plantKey);
            tempMyGarden.push({
                key: plant["nickname"],
                plant: plant,
            });
            this.setState({
                myGarden: tempMyGarden,
            });
            this.props.navigation.navigate('Home', {
                myGarden: this.state.myGarden,
            });
            Alert.alert("Added " + plantKey + " to your garden successfully!");
        }
    }

    render() {
        return (
            <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }}
                horizontal={false}
                style={{ paddingHorizontal: 10, flex: 10 }}
            >
                {this.ManualData()}
            </ScrollView>
        )
    }
}

export default myPlant;