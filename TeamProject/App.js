import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button } from 'react-native';
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
