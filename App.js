import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, NativeModules, View, Text, Button } from 'react-native';
import styles from './src/main.style.js';
import Main from './src/main.js';

const App = () => {

  return (
    <View>
      <StatusBar hidden={true} />
      <Main />
    </View>
  )
}

export default App;
