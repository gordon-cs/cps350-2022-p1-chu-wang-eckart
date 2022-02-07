import React, { useState } from 'react';
import { Platform, StyleSheet, Dimensions } from 'react-native';
import Home from './src/Home/home.js';
import Garden from './src/Garden/garden.js';
import Profile from './src/Profile/profile.js';
import Settings from './src/Settings/settings.js';
import { NavigationContainer } from '@react-navigation/native';
import { tabBgColors, 
    tabActiveColors,
    tabInactiveColors,
    tabBarPressColors,
    tabFontSize,
    tabFontFamilies,
    tabIconSize } from './App.ThemeStyle.js';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default function App() {

    const [darkMode, setDarkMode] = useState(false);

    let tabFontFamily = Platform.OS === 'android'? tabFontFamilies[0] : tabFontFamilies[1];
    let tabPaddingTop = Platform.OS === 'andriod'? 0 : 5;
    let screenWidth = Dimensions.get('window').width;
    let indicatorWidth = screenWidth * .9 * .25;

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                tabBarPosition='bottom'
                screenOptions={{
                    tabBarActiveTintColor: tabActiveColors,
                    tabBarInactiveTintColor: tabInactiveColors,
                    tabBarPressColor: tabBarPressColors,
                    tabBarIndicatorStyle: {
                        backgroundColor: 'white',
                        justifyContent: 'center',
                        width: indicatorWidth * .8,
                        left: indicatorWidth * .1,
                        height: 5
                    },
                    tabBarStyle: {
                        height: 75,
                        width: screenWidth * .9,
                        left: screenWidth * .05,
                        right: screenWidth * .05,
                        backgroundColor: tabBgColors,
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
                        fontFamily: tabFontFamily,
                    },
                }}
                
                >
                <Tab.Screen
                    name="Profile"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name='profile' size={tabIconSize} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Garden"
                    component={Garden}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <Entypo name='tree' size={tabIconSize} color={color} />
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
                <Tab.Screen
                    name="Settings"
                    component={Settings}
                    options={{
                        tabBarIcon: ({ color }) => (
                            <AntDesign name='setting' size={tabIconSize} color={color} />
                        ),
                    }}
                />
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
