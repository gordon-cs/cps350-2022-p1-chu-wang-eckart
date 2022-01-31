import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, NativeModules, View, Text, Button } from 'react-native';
import styles from './src/main.style.js';

// import statusbar-height-related code from jmurzy at
// https://stackoverflow.com/questions/35436643/how-to-find-height-of-status-bar-in-android-through-react-native
const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const App = () => {
  const [hidden, setHidden] = useState(true);

  const changeStatusBarVisibility = () => {
    setHidden(!hidden);
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={hidden} />
      <View style={hidden? styles.StatusbarHidden : styles.statusbarNormal(STATUSBAR_HEIGHT)} />
      <Text>Team Project</Text>
      <Text>{'Current height: ' + STATUSBAR_HEIGHT}</Text>
      <Button
          title="Toggle StatusBar"
          onPress={changeStatusBarVisibility} />
    </View>
  )
}

export default App;
