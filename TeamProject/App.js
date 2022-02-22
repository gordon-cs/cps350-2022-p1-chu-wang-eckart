import React, { useState } from 'react';
import { Platform, StyleSheet, Dimensions, StatusBar } from 'react-native';
import Home from './src/Home/home.js';
import Garden from './src/Garden/garden.js';
import Profile from './src/Profile/profile.js';
import Settings from './src/Settings/settings.js';
import { NavigationContainer } from '@react-navigation/native';
import { tabBgColors, 
    tabActiveColors,
    tabInactiveColors,
    tabFontSize,
    fontFamilies,
    tabIconSize,
    theme2 } from './App.ThemeStyle.js';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function App() {

    const [darkMode, setDarkMode] = useState(false);

    let tabPaddingTop = Platform.OS === 'andriod'? 0 : 5;
    let screenWidth = Dimensions.get('window').width;
    let indicatorWidth = screenWidth * .9 * .5;

    

    return (
        <NavigationContainer>
            <StatusBar hidden={true}/>
            <Tab.Navigator
                initialRouteName='Home'
                tabBarPosition='bottom'
                style={{ backgroundColor: theme2 }}
                screenOptions={{
                    tabBarActiveTintColor: tabActiveColors,
                    tabBarInactiveTintColor: tabInactiveColors,
                    tabBarIndicatorStyle: {
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        width: indicatorWidth * .8,
                        left: indicatorWidth * .1,
                        height: 5,
                    },
                    cardStyle: {
                        backgroundColor: 'black',
                      },
                    tabBarStyle: {
                        height: 75,
                        width: screenWidth * .9,
                        left: screenWidth * .05,
                        right: screenWidth * .05,
                        backgroundColor: tabBgColors,
                        overflow: 'visible',
                        borderRadius: 15,
                        paddingTop: tabPaddingTop,
                        marginBottom: 20,
                        ...style.shadow,
                    },
                    tabBarItemStyle: {
                        position: 'relative',
                        
                    },
                    tabBarLabelStyle: {
                        fontSize: tabFontSize,
                        fontFamily: fontFamilies,
                    },
                }}>
                {/* <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name='profile' size={tabIconSize} color={color} />
                        ),
                    }}
                /> */}
                <Tab.Screen
                    name="Store"
                    component={Garden}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Entypo name='shop' size={tabIconSize} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name='home' size={tabIconSize} color={color} />
                        ),
                    }}
                />
                {/* <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name='setting' size={tabIconSize} color={color} />
                        ),
                    }}
                /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const style = StyleSheet.create({
    shadow: {
      shadowColor: 'black',
      shadowOffset: {
        width: 0, 
        height: 6
      },
      shadowOpacity: 0.8,
      shadowRadius: 3.5,
      elevation: 5,
    }
  });
