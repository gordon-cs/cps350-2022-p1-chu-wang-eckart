import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import styles from './suggestion.style.js';
import Recommand from './recommand.js';

'use strict';

class Suggestion extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Recommand
                    location={this.props.location}
                />
                {this.props.myGarden.map((plant) => 
                    <View key={plant.key} style={styles.plantState}>
                        <Text>{plant.key}</Text>
                    </View>
                )}
            </View>
        )
    }
}

export default Suggestion;