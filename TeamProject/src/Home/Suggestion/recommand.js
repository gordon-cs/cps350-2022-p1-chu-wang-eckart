import React from 'react';
import { View, ScrollView, Text, Image } from 'react-native';
import styles from './recommand.style.js';
import iconStyles from './../Weather/WeatherTabs/weatherNow.style.js';
import { Feather } from '@expo/vector-icons';
import InfoOverlay from './../Weather/Overlay/overlayDefinition.js';
import { plantHardiness } from './../Weather/infoContent.js';
import { plantData } from './../../Garden/plantData.js';
'use strict';

let instructionHeader = 'Instruction';
let instructionContent = 'Open "Set Location" >\nEnter your zipcode as Location >\nClick "Save" and "Close" >\nClick "Sync" icon on Recommandation view';

class Recommand extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            plantHardiness: '',
            recommandList: [],
            platform: Platform.OS === 'android',
        }
    }

    async getPlantHardiness() {
        try {
            const url = "https://phzmapi.org/" + this.props.location + ".json";
            const result = await fetch(url);
            const weatherJson = await result.json();
            this.setState ({
                plantHardiness: weatherJson.zone,
            });
        }
        catch (e) {
            this.setState ({
                plantHardiness: 'error',
            })
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

    getRecommandPlants() {
        let currentZone = this.state.plantHardiness;
        let currentZoneContent = [parseInt(currentZone.slice(0, -1)), currentZone.slice(-1)];
        let recommandList = [];

        for (let i = 0; i < plantData.length; i++) {
            let minZone = plantData[i]["plant hardiness zones"][0];
            let minZoneContent = [parseInt(minZone.slice(0, -1)),minZone.slice(-1)];
            let maxZone = plantData[i]["plant hardiness zones"][1];
            let maxZoneContent = [parseInt(maxZone.slice(0, -1)),maxZone.slice(-1)];

            if (((currentZoneContent[0] === minZoneContent[0]) 
                && (currentZoneContent[1] >= minZoneContent[1]))
                || (currentZoneContent[0] > minZoneContent[0])) {
                    if (((currentZoneContent[0] === maxZoneContent[0]) 
                    && (currentZoneContent[1] <= maxZoneContent[1]))
                    || (currentZoneContent[0] < maxZoneContent[0])) {
                        recommandList.push(plantData[i]["nickname"]);
                }
            }
        }

        this.setState ({
            recommandList: recommandList,
        })
    }

    async componentDidMount() {
        await this.getPlantHardiness();

        if (this.state.plantHardiness !== 'error') {
            this.getRecommandPlants();
        }
    }

    SyncIcon() {
        return (
            <Feather
                name='refresh-cw'
                style={this.state.platform?iconStyles['infoIcon-android']:iconStyles['infoIcon-ios']}
                onPress={async () => await this.componentDidMount()}
            />
        )
    }

    RecommandView() {
        return (
            <View style={styles.view}>
                <View style={styles.header}>
                    <View style={{ flex: 10, justifyContent: 'center', }}>
                        <Text style={styles.headerContent}>
                            {'Current Hardiness Zone: ' + this.state.plantHardiness}
                        </Text>
                    </View>
                    {this.SyncIcon()}
                    <InfoOverlay platform={false} icon='info' header={plantHardiness[0]} content={plantHardiness[1]} />
                </View>
                <View style={styles.recommand}>
                    <ScrollView 
                        contentContainerStyle={{ flexGrow: 1 }}
                        horizontal={true}
                        style={{ paddingRight: 20, flex: 10 }}
                    >
                        {this.state.recommandList.map((plantKey) => 
                            <View key={plantKey} style={styles.recommandComponent}>
                                <View style={{flex: 5}}>
                                    {this.getImage(plantKey)}
                                </View>
                                <View style={{ flex: 2, alignContent: 'center', }}>
                                    <Text style={styles.recommandFont}>{plantKey}</Text>
                                </View>
                            </View>
                        )}
                    </ScrollView>
                    
                </View>
            </View>
        )
    }

    ErrorView() {
        return (
            <View style={styles.view}>
                <View style={styles.header}>
                    <View style={{ flex: 10, justifyContent: 'center', }}>
                        <Text style={styles.headerErrorContent}>Recommandation</Text>
                    </View>
                    {this.SyncIcon()}
                    <InfoOverlay platform={false} icon='question' header={instructionHeader} content={instructionContent} />
                </View>
                <View style={styles.error}>
                    <Text style={styles.errorContent}>
                        Enter a valid zipcode to get recommanded plants on your location
                    </Text>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.plantHardiness !== 'error'
                    ? this.RecommandView()
                    : this.ErrorView()}
            </View>
        )
    }
}

export default Recommand;