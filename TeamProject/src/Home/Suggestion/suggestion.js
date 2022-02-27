import React from 'react';
import { View, ScrollView, Text, Image, Alert,} from 'react-native';
import styles from './suggestion.style.js';
import debounce from 'lodash/debounce';
import { Feather } from '@expo/vector-icons';
import InfoOverlay from'./../../Garden/Overlay/overlay.js'
'use strict';

class Suggestion extends React.Component {

    constructor(props) {
        super(props);
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
    deletPlantToGarden() {

        Alert.alert("Delete something");
    }

    deleteButton(plant) {
        const handleClick = () => {
            this. deletPlantToGarden();
        }
        return (
            <Feather
            name='trash-2'
            style={styles.deleteButton}
            onPress={debounce(handleClick,50)}
         />
        )
    }
    
    render() {
        console.log(this.props.route);
        return (
            <View style={styles.container}>
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
                                    {this.deleteButton(plant.plant)}
                                    
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
            </View>
        )
    }
}

export default Suggestion;