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
            dailyStatus:'',
            seasonalStatus:'',
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
        this.setState({
            myGarden: tempMyGarden,
        });
        this.props.navigation.navigate('Garden', {
            myGarden: tempMyGarden,
        });
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
    
    dailyStatus(exposure) {
        let weather = this.props.weather;
        switch(exposure){
            case 'full sun':
                //'clear-day'
                exposure = 3;
                break;
            case 'Sun to Part Sun':
                //'clear-day'
                exposure = 2;
                break;
            case 'sun to partial shade':
                //'cloudy'
                exposure = 2;
                break;
            case 'shade to part shade':
                //'cloudy'
                exposure = 1;
                break;  
             
        }
        switch(weather){
            case 'clear-day':
                weather = 3;
                break;
            case 'partly-cloudy-day':
                weather = 2;
                break;
            case 'rainy-day':
                weather = 1;
                break;   
            case 'partly-rainy-day':
                weather = 1;
                break;
            case 'snowy-day':
                weather = 1;
                break;     
            case 'partly-snowy-day':
                weather = 1;
                break;
            // night
            case 'clear-night':
                weather = 3;
                break;
            case 'partly-cloudy-night':
                weather = 2;
                break;
            case 'rainy-night':
                weather = 1;
                break;   
            case 'partly-rainy-night':
                weather = 1;
                break;
            case 'snowy-night':
                weather = 1;
                break;     
            case 'partly-snowy-night':
                weather = 1;
                break;
        }
        if(weather>exposure) {
            const handleClick = () => {
                Alert.alert("I prefer the shade, please don't let me get sunburned!\n🥺");
            }
            return(
                <Text style={styles.plantState} 
                      onPress={handleClick} 
                >🥵</Text>
                );
        } else if (weather == exposure) {
            const handleClick = () => {
                Alert.alert("I like today's weahter, don't worry about me.\n😚");
            }
            return(
                <Text style={styles.plantState}
                      onPress={handleClick}
                >😊</Text>
                );
        } else {
            const handleClick = () => {
                Alert.alert("I prefer a place with sunshine, please put me in a place with sunshine!\n🥺");
            }
            // console.log(weather);
            // console.log(exposure);
            return(
                <Text style={styles.plantState}
                      onPress={handleClick}
                >🥶</Text>
                );
        }
       
    }


    getMonth = (month) => {
        switch(month) {
            case '01': return 'January';
            case '02': return 'Febuary';
            case '03': return 'March';
            case '04': return 'April';
            case '05': return 'May';
            case '06': return 'June';
            case '07': return 'July';
            case '08': return 'August';
            case '09': return 'September';
            case '10': return 'October';
            case '11': return 'November';
            case '12': return 'December';
        }
    }

    seasonStatus(plant) { 
        let season = plant.flowering;
        let start = season?season[0]:'07';
        let end = season?season[0]:'09';
        let current = new Date().getMonth()+1;
        if(start<=current && end >= current) {
            const handleClick = () => {
                Alert.alert("I'm in bloom, don't forget to take pictures of me!\n😚");
            }
            return(
                <Text style={styles.plantState}
                      onPress={handleClick}
                >🌺</Text>
                );
        } else if (current == end+1) {
            const handleClick = () => {
                Alert.alert("It's past my blooming season, come see me next year "
                            + getMonth(state) + " to "
                            + getMonth(end) + "!\n😅");
            }
            return(
                <Text style={styles.plantState}
                      onPress={handleClick}
                >🥀</Text>
                );
        } else {
            const handleClick = () => {
                Alert.alert("I'm sleeping, don't worry and wait until "
                + this.getMonth(start) + " to "
                + this.getMonth(end) + ".\n🤫");
            }
            return(
                <Text style={styles.plantState}
                      onPress={handleClick}
                >😴</Text>
                );
        }

    }

    render() {
        // console.log(this.props.route);
        // console.log(this.props.weather);
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
                            <View key={i}>
                                <View style={styles.plantMenu}> 
                                
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
                                        {this.dailyStatus(plant.plant["sun exposure"])}
                                        <Text style={styles.plantState}>  </Text>
                                        <Text style={styles.plantState}>  </Text>
                                        {this.seasonStatus(plant.plant)}
                                    </View>
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