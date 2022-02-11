import { Overlay } from 'react-native-elements';
import { View, Text } from 'react-native';
import weatherStyles from '../weather.style.js';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
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
                style={props.platform?weatherStyles['infoIcon-android']:weatherStyles['infoIcon-ios']}
            />
            <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                <Feather
                    name='x'
                    onPress={toggleOverlay}
                />
            </Overlay>
        </View>
    )
}

export default OverlayComponent;