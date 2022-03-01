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
            // this.setState({
            //     dailyStatus:'hot',
            // });
            return(
                <Text style={styles.plantState}>🥵</Text>
                );
        } else if (weather == exposure) {
            // this.setState({
            //     dailyStatus:'great',
            // });
            return(
                <Text style={styles.plantState}>😊</Text>
                );
        } else {
            // this.setState({
            //     dailyStatus:'cold',
            // });
            return(
                <Text style={styles.plantState}>🥶</Text>
                );
        }
       
    }

    seasonStatus(season) { 
        let start = season?season[0]:7;
        let end = season?season[0]:7;
        let current = new Date().getMonth()+1;
        if(start<=current && end >= current) {
            // this.setState({
            //     seasonalStatus:'flowering',
            // });
            return(
                <Text style={styles.plantState}>🌺</Text>
                );
        } else if (current == end+1) {
            // this.setState({
            //     seasonalStatus:'wither',
            // });
            return(
                <Text style={styles.plantState}>🥀</Text>
                );
        } else {
            // this.setState({
            //     seasonalStatus:'dormancy',
            // });
            return(
                <Text style={styles.plantState}>😴</Text>
                );
        }

    }

    render() {
        // console.log(this.props.route);
        console.log(this.props.weather);
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
                                        {this.dailyStatus(plant.plant.exposure)}
                                        <Text style={styles.plantState}>  </Text>
                                        <Text style={styles.plantState}>  </Text>
                                        {this.seasonStatus(plant.plant.flowering)}
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