import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './suggestion.style.js';
import MyPlants from './../../Garden/myPlant.js';

'use strict';

class Suggestion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            garden: [],
        }
    }

    handleCallback(childData) {
        
        this.setState({garden: childData});
        
    }

    renderPlants() {
        // console.log(this.state.plant);
        return (
            this.state.garden.map((plant) => (
                <View style={{ height: 100, flexDirection: 'row', }}>
                    <View style={styles.plantState}>
                        <Text>Hello</Text>
                    </View>
                </View>
            ))
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <MyPlants parentCallBack={this.handleCallback} />
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1 }}
                    horizontal={false}
                    style={{ paddingHorizontal: 10, flex: 10 }}
                >
                    {this.renderPlants()}
                    <View style={{ height: 100, flexDirection: 'row', }}>
                        <View style={styles.plantState}>
                        </View>
                    </View>
                </ScrollView>
                
            </View>
        )
    }
}

export default Suggestion;