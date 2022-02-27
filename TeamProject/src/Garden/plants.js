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
            flowerData: [
                {
                    "scientific name": "Agapanthus",
                    "common name": "Stevie's Wonder",
                    "nickname": "Lily of the Nile",
                    "family": "Liliaceae",
                    "type": "perennial",
                    "height": "24 to 40 inches (0.6 to 1 m)",
                    "exposure": "full sun",
                    "soil": "ordinary, well drained",
                    "flowering": ["06","09"],   // starting month - end month
                    "description": "Agapanthus 'Stevie's Wonder' is an introduction from California's Emerisa Gardens that we picked up on a West Coast swing many years ago...as much for the name as anything else. Over the years, this has been a star in our agapanthus trials for winter hardiness, deer-resistance, and outstanding flowering. The 2.5' to 3' tall (over 6' tall in the Pacific Northwest) spikes are topped with 4' ball-shaped heads composed of rich blue-violet, hummingbird-attracting flowers.",
                    "image": './../imageimage/flower/Lily.jpg',
                    "planting": ["For regions with rather cool winters, plant your lily of the Nile in spring, for them to harden before the first winter.",
                        "Elsewhere, for mild-wintered climates, lily of the Nile can be planted in fall.",
                        "If you have purchased your Agapanthus in pots, you can plant them all year round, except during frost and heat spells."],
                    "plant hardiness zones": ["7b", "10b"],
                },
                {
                    "scientific name": "Helianthus Angustifolius",
                    "common name": "Swamp Sunflower",
                    "nickname": "First Light",
                    "family": "Asteraceae",
                    "type": "annual",
                    "height": "6 to 13 feet (2 to 4 meters)",
                    "exposure": "full sun",
                    "soil": "rich enough",
                    "flowering": ["07","10"],   // starting month - end month
                    "description": "You are sure to love this Keith Hammett (of New Zealand) selection of our US native Helianthus angustifolius...even though the patent lists it as a completely different species, Helianthus salicifolius. Instead of the typical 10' tall specimen, Helianthus angustifolius 'First Light' forms a nice, deer-resistant, compact 4' tall clump of fuzzy linear leaves, topped from late September through October with terminal spikes of 2' bright yellow-orange daisies.",
                    "image": './../image/flower/Sunflower.jpg',
                    "planting": ["If you’ve purchased your sunflower plants already formed as young seedlings, transplant them from their nursery pot to the ground from April to June.",
                        "Water often at the start, especially in case of elevated temperatures."],
                    "plant hardiness zones": ["5a", "9b"],
                },
                {
                    "scientific name":"Helleborus x Glandorfensis",
                    "common name": "Lenten Rose",
                    "nickname": "Ice n' Rose",
                    "family": "Ranunculaceae",
                    "type": "perennial herbaceous flower",
                    "height": "12 to 30 inches (30 to 80 cm)",
                    "exposure": "shade to part shade",
                    "soil": "rich, cool, well-draining",
                    "flowering": ["02","04"],   // starting month - end month
                    "description": "Helleborus 'Ice N' Roses Rose' is a slightly darker pink version of Helleborus 'Ice N' Roses Picotee' with light pink outfacing flowers, edged in dark pink, with a dark pink back. The flowers top the 2' wide, black-green foliaged clumps, staring for us in mid-February.",
                    "image":'./../image/flower/Rose.jpg',
                    "planting": ["spring, end of summer"],
                    "plant hardiness zones": ["5a", "8b"],
                },
                {
                    "scientific name":"Callirhoe Involucrata var. Tenuissima",
                    "common name": "Mexican Wine Cups",
                    "nickname": "Mexican Wine Cups",
                    "exposure":'Sun to Part Sun',
                    "description": "If regular wine cups don't fit into your color scheme (they do clash with old blue Chevys and flue-pipe planters), then Callirhoe involucrata var. tenuissima is the plant for you. With a groundcover growth habit to 3' wide, Callirhoe involucrata var. tenuissima is a cutleaf variety of the drought-tolerant wine cups from 7,000' elevation in Los Lirios, Coahuila State, Mexico.",
                    "image":'./../image/flower/Wine-cup.jpg',
                    "plant hardiness zones": ["4a", "9b"],
                },
                {
                    "scientific name":"Chrysanthemum",
                    "common name": "Hardy Garden Mum",
                    "nickname": "Country Girl",
                    "family": "Asteraceae",
                    "type": "annual and perennial (depending on the variety)",
                    "height": "15 to 40 inches (40 to 100 cm)",
                    "exposure": "full sun",
                    "soil": "ordinary",
                    "flowering": ["06","09"],   // starting month - end month
                    "description": "For over a decade, we have been so pleased by the performance of Chrysanthemum 'Country Girl' in our hardy mum trials. The low-spreading clump (5' wide in 5 years) is topped in mid-October with a solid cover of lovely, 3', soft, light pink flowers...perfect to cheer you up on a dreary fall day. Chrysanthemum 'Country Girl' seems to have originated in TX, possibly as a seedling of the well-known Chrysanthemum 'Sheffield Pink', but our detective work continues.",
                    "image":'./../image/flower/Chrysanthemum.jpg',
                    "planting": ["Chrysanthemum is planted ideally in spring. Indeed, blooms at the end of summer or during fall, it will have developed a great root system and will resist the harshness of fall and winter much better.",
                        "Plant Chrysanthemum purchased in pots in fall directly to the ground. Also possible are larger pots and garden boxes, preferably with soil mix, but hardiness won’t be as good."],
                    "plant hardiness zones": ["6a", "9b"],
                },
            ]
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
                {/* <ScrollView 
                  contentContainerStyle={{ flexGrow: 1 }}
                  horizontal={false}
                  style={{ flexDirection: 'column', marginBottom: 0 }}
                > */}
                  {this.state.flowerData.map((flowerData,i) => (
                      
                        <View key={i} style={styles.block}>
                            <View style={{ flexDirection: 'row', }}>
                                {this.getImage(flowerData["common name"])}
                                <View style={{ flex: 9, }}>
                                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', }}>
                                        <Text style={styles.nameContent}>{flowerData["common name"]}</Text>
                                        <Text style={styles.nicknameContent}>{'"' + flowerData["nickname"] + '"'}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 2, justifyContent: 'center', }}>
                                    {this.PlusButton(flowerData["common name"])}
                                    {this.MoreButton(this.state.flowerData[i])}
                                </View>
                            </View>
                        </View>
                    ))}
              {/* </ScrollView> */}
            </View>
        )
    }

    getImage(plantKey) {
        switch (plantKey) {
            case "Stevie's Wonder":
                return (
                    <Image source={require('./../image/flower/Lily.jpg')} style={styles.image} />
                );
            case "Swamp Sunflower":
                return (
                    <Image source={require('./../image/flower/Sunflower.jpg')} style={styles.image} />
                );
            case "Lenten Rose":
                return (
                    <Image source={require('./../image/flower/Rose.jpg')} style={styles.image} />
                );
            case "Mexican Wine Cups":
                return (
                    <Image source={require('./../image/flower/Wine-cup.jpg')} style={styles.image} />
                );
            case "Hardy Garden Mum":
                return (
                    <Image source={require('./../image/flower/Chrysanthemum.jpg')} style={styles.image} />
                );
        }
    }

    addPlantToGarden(plantKey) {
        if (!checkExist(this.state.myGarden, plantKey)) {
            let tempMyGarden = this.state.myGarden;
            let plant = this.state.flowerData.find(plant => plant["common name"] === plantKey);
            // console.log(this.state.flowerData.find(plant => plant.name === plantKey));
            tempMyGarden.push({
                key: plant["common name"],
                plant: plant,
            });
            this.setState({
                myGarden: tempMyGarden,
            });
            this.props.navigation.navigate('Home', {
                myGarden: this.state.myGarden,
            });
            // console.log(this.state.myGarden);
            // console.log('My Garden: ', this.state.myGarden);
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