import { Overlay } from 'react-native-elements';
import { View, Text, TextInput, Pressable, Component } from 'react-native';
import weatherStyles from './../weather.style.js';
import React from 'react';
import styles from './overlay.style.js';
import { Entypo } from '@expo/vector-icons';
import debounce from 'lodash/debounce';
'use strict';

class OverlayAddress extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            text: '',
        }
    }

    toggleOverlay = () => {
        this.setState({
            visible: !this.state.visible,
        });
    }

    render() {
        return (
            <View style={weatherStyles.locationIcon}>
                <Entypo 
                    name='location'
                    style={weatherStyles.icon}
                    size={30}
                    onPress={this.toggleOverlay}
                />
                <Overlay
                    isVisible={this.state.visible}
                    onBackdropPress={this.toggleOverlay}
                    overlayStyle={styles.overlay}
                >
                    <View style={styles.container}>
                        <View style={styles.topBar}>
                            <View style={styles.addressHeader}>
                                <Text style={styles.headerText}>
                                    Set Location
                                </Text>
                            </View>
                        </View>
                        <View style={styles.content}>
                            <View style={styles.row}>
                                <TextInput
                                    style={styles.textInput}
                                    placeholder="Enter Location"
                                    placeholderTextColor={'grey'}
                                    onChangeText={(newText) => this.setState({ text: newText })}
                                    defaultValue={this.state.text}
                                />
                                <Pressable
                                    title="Press me"
                                    disabled={this.state.disabled}
                                    style={styles.button}
                                    onPress={debounce(this.props.clickConfirm.bind(this, this.state.text), 500)}
                                >
                                    <Text style={styles.buttonText}>Save</Text>
                                </Pressable>
                            </View>
                            <View style={styles.row}>
                                <View style={styles.blank}/>
                                <Pressable
                                    title="Press me"
                                    style={styles.button}
                                    onPress={this.toggleOverlay}
                                >
                                    <Text style={styles.buttonText}>Close</Text>
                                </Pressable>
                                <View style={styles.blank}/>
                            </View>
                        </View>
                    </View>
                </Overlay>
            </View>
        )
    }
}

export default OverlayAddress;