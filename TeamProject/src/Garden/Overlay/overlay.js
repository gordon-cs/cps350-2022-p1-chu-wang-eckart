import { Overlay } from 'react-native-elements';
import { View, Text, Dimensions } from 'react-native';
import weatherStyles from '../../Home/Weather/weather.style.js';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import styles from './overlay.style.js';
import { Button } from 'react-native-elements/dist/buttons/Button';
'use strict';

const OverlayComponent = (props) => {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    }

    return (
        <View>
            <Feather
                name='info'
                onPress={toggleOverlay}
                style={{ 
                    
                    fontSize: 23,
                    color: "black",
                    textAlign: 'right',
                    paddingRight: 5,}}
            />
            <Overlay
                isVisible={visible}
                onBackdropPress={toggleOverlay}
                overlayStyle={styles.overlay}
            >
                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>
                                {props.header}
                            </Text>
                        </View>
                        <Feather
                            name='x'
                            onPress={toggleOverlay}
                            style={styles.icon}
                        />
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.contentText}>
                            {props.content}
                        </Text>
                    </View>
                </View>
                
            </Overlay>
        </View>
    )
}

export default OverlayComponent;