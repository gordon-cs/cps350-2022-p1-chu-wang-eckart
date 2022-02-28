import React from 'react';
import { View, ScrollView, Text, Image, Alert,} from 'react-native';
import styles from './suggestion.style.js';
import Recommand from './recommand.js';
import debounce from 'lodash/debounce';
import { Feather } from '@expo/vector-icons';
import InfoOverlay from'./../../Garden/Overlay/overlay.js';
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
            case "Lily of the Nile":
                return (
                    <Image source={require('./../../image/flower/Lily.jpg')} style={styles.image} />
                );
            case "First Light":
                return (
                    <Image source={require('./../../image/flower/Sunflower.jpg')} style={styles.image} />
                );
            case "Ice n' Rose":
                return (
                    <Image source={require('./../../image/flower/Rose.jpg')} style={styles.image} />
                );
            case "Victoria Blue":
                return (
                    <Image source={require('./../../image/flower/mealycup-sage-victoria-blue.jpg')} style={styles.image} />
                );
            case "Harmony":
                return (
                    <Image source={require('./../../image/flower/garden-mum-harmony.jpg')} style={styles.image} />
                );
        }
    }

    MoreButton(plant) {
        return (
            <View style={styles.button}>
                {/* <InfoOverlay content={plant}/> */}
            </View>
        )
    }
    deletPlantToGarden(key) {
        let tempMyGarden = this.props.route;
        tempMyGarden.splice(tempMyGarden.indexOf(tempMyGarden[key]), 1);
        console.log(2);
        console.log(tempMyGarden);
        this.setState({
            myGarden: tempMyGarden,
        });
        console.log(3);
        this.props.navigation.navigate('Garden', {
            myGarden: tempMyGarden,
        });
        console.log(4);
    }

    deleteButton(key) {
        const handleClick = () => {
            this.deletPlantToGarden(key);
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
                <View style={{ flex: 6, }}>
                    <Recommand
                        location={this.props.location}
                    />
                </View>
                <View style={{ flex: 11, }}>
                    <ScrollView 
                        contentContainerStyle={{ flexGrow: 1 }}
                        horizontal={false}
                        style={{ paddingHorizontal: 10, }}
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
                                            {/* {console.log(plant.key)} */}
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
            </View>
            
        )
    }
}

export default Suggestion;