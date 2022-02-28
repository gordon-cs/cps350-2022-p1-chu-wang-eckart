import React from 'react';
import { View, ScrollView, Text, Image, Alert,} from 'react-native';
import styles from './suggestion.style.js';
import debounce from 'lodash/debounce';
import { Feather } from '@expo/vector-icons';
import InfoOverlay from'./../../Garden/Overlay/overlay.js'
import { keyboardProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
'use strict';

class Suggestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            myGarden: [],
        }
    }

    getImage(plantKey) {
        switch (plantKey) {
            case "Stevie's Wonder":
                return (
                    <Image source={require('./../../image/flower/Lily.jpg')} style={styles.image} />
                );
            case "Swamp Sunflower":
                return (
                    <Image source={require('./../../image/flower/Sunflower.jpg')} style={styles.image} />
                );
            case "Lenten Rose":
                return (
                    <Image source={require('./../../image/flower/Rose.jpg')} style={styles.image} />
                );
            case "Mexican Wine Cups":
                return (
                    <Image source={require('./../../image/flower/Wine-cup.jpg')} style={styles.image} />
                );
            case "Hardy Garden Mum":
                return (
                    <Image source={require('./../../image/flower/Chrysanthemum.jpg')} style={styles.image} />
                );
        }
    }

    MoreButton(plant) {
        return (
            <View style={styles.button}>
                <InfoOverlay content={plant}/>
            </View>
        )
    }
    deletPlantToGarden(key) {
        console.log(key);
        let tempMyGarden = this.props.route;
        let value = key;
        tempMyGarden.splice(tempMyGarden.indexOf(tempMyGarden[key]), 1);
        console.log(tempMyGarden);
        this.setState({
            myGarden: tempMyGarden,
        });
        this.props.navigation.navigate('Garden', {
            myGarden: tempMyGarden,
        });
    }

    deleteButton(key) {
        const handleClick = () => {
            this. deletPlantToGarden(key);
        }
        return (
            <Feather
            name='trash-2'
            style={styles.deleteButton}
            onPress={debounce(handleClick,50)}
         />
        )
    }
    
    dailyStatus() {

    }

    seasonStatus() { 


    }

    render() {
        // console.log(this.props.route);
        return (
            <View style={styles.container}>
                <ScrollView 
                contentContainerStyle={{ flexGrow: 1 }}
                horizontal={false}
                style={{ paddingHorizontal: 10, flex: 10 }}
                 >
                {this.props.route.map((plant,i) => 
                    <View key={i} style={styles.plantMenu}> 
                        
                        {this.getImage(plant.key)}
                       
                        <View name="Info" style={{flexDirection: 'column'}}>
                            <View name="Top" style={{flex:2, flexDirection: 'row'}}>
                                <View key={plant.key} style={styles.infoTop}>
                                    <Text style={styles.text}>{plant.key}</Text>
                                </View>
                                <View name='Button' style={{flex:1, flexDirection: 'column'}}>
                                    {this.MoreButton(plant.plant)}
                                    {this.deleteButton(i)}
                                    {console.log(plant.key)}
                                </View>
                            </View>
                            <View name="Bottom" style={styles.infoBottom}>
                                <Text style={styles.plantState}>🥀</Text>
                                <Text style={styles.plantState}>🥀</Text>
                                <Text style={styles.plantState}>🥀</Text>
                            </View>
                        </View>
                        
                    </View>
                    
                )}
                </ScrollView>
            </View>
            
        )
    }
}

export default Suggestion;