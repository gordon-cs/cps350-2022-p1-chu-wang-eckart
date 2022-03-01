import { Overlay } from 'react-native-elements';
import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import styles from './overlay.style.js';
import { ScrollView } from 'react-native-gesture-handler';
'use strict';

const OverlayComponent = (props) => {

    const [visible, setVisible] = useState(false);
    const [keys] = useState(Object.keys(props.content));

    const toggleOverlay = () => {
        setVisible(!visible);
    }

    const getMonth = (month) => {
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

    const setContents = () => {
        return (
            keys.map((info) => (
                info === 'planting'
                || info === 'water requirement'
                || info === 'foliage'
                || info === 'bloom characteristics'
                || info === 'propagation methods'
                || info === 'soil pH requirements'
                || info === 'seed collecting'?
                    <View key={info}>
                        <View style={{ marginTop: 3, }}>
                            <Text style={styles.contentHeader}>{info}</Text>
                        </View>
                        {/* {console.log(props.content.key,info)} */}
                        {props.content[info].map((plantInfo, i) => 
                            <View key={i} style={styles.contentTextBlock}>
                                <Text style={styles.contentText}>
                                    {plantInfo}
                                </Text>
                            </View>
                        )}
                    </View>
                : info !== 'image'
                && info !== 'name'
                && info !== 'nickname'?
                    <View key={info}>
                        <View>
                            <Text style={styles.contentHeader}>{info}</Text>
                        </View>
                        <View style={styles.contentTextBlock}>
                            <Text style={styles.contentText}>
                                {info === 'bloom time'
                                    ? getMonth(props.content[info][0])
                                    + ' - '
                                    + getMonth(props.content[info][1])
                                    : info === 'plant hardiness zones'
                                        ? props.content[info][0]
                                        + ' to '
                                        + props.content[info][1]
                                        : props.content[info]
                                }
                            </Text>
                        </View>
                    </View>
                : null
            ))
        )
    }

    return (
        <View>
            <Feather
              name='more-horizontal'
              style={{ 
                  fontSize: 23,
                  color: "black",
                  textAlign: 'center',
              }}
                onPress={toggleOverlay}
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
                                {props.content["name"]}
                            </Text>
                            {props.content['nickname'] !== ''?
                                <Text style={styles.headerNickname}>
                                    {'"' + props.content["nickname"] + '"'}
                                </Text>
                                : null
                            }
                        </View>
                    </View>
                    <View style={styles.content}>
                        <ScrollView style={styles.scrollView}>
                            {setContents()}
                        </ScrollView>
                    </View>
                    <Pressable
                        title="Press me"
                        style={styles.closeButton}
                        onPress={toggleOverlay}
                    >
                        <Text style={styles.buttonText}>Close</Text>
                    </Pressable>
                </View>
                
            </Overlay>
        </View>
    )
}

export default OverlayComponent;