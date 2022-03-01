import { Overlay } from 'react-native-elements';
import { View, Text } from 'react-native';
import weatherStyles from './../WeatherTabs/weatherNow.style.js';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useState } from 'react';
import styles from './overlay.style.js';
'use strict';

const OverlayComponent = (props) => {

    const [visible, setVisible] = useState(false);

    const toggleOverlay = () => {
        setVisible(!visible);
    }

    return (
        <View>
            {props.icon === 'info'
                ? <Feather
                name='info'
                onPress={toggleOverlay}
                style={props.platform?weatherStyles['infoIcon-android']:weatherStyles['infoIcon-ios']}/>
                : <AntDesign
                name='questioncircleo'
                onPress={toggleOverlay}
                style={props.platform?weatherStyles['infoIcon-android']:weatherStyles['infoIcon-ios']}/>
            }
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