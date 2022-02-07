import React, { useState } from 'react';
import { Platform, StyleSheet } from 'react-native';
import Home from './src/Home/home.js';
import Garden from './src/Garden/garden.js';
import Profile from './src/Profile/profile.js';
import Settings from './src/Settings/settings.js';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { tabBgColors, tabActiveColors, tabInactiveColors,
    tabFontSize, tabFontFamilies, tabIconSize } from './App.ThemeStyle.js';
import { AntDesign, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {

    const [darkMode, setDarkMode] = useState(false);

    let tabBgColor = tabBgColors;
    let tabActiveColor = tabActiveColors;
    let tabInactiveColor = tabInactiveColors;
    let tabFontFamily = Platform.OS === 'android'? tabFontFamilies[0] : tabFontFamilies[1];

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={{
                    tabBarActiveTintColor: tabActiveColor,
                    tabBarInactiveTintColor: tabInactiveColor,
                    headerShown: false,
                    tabBarStyle: {
                        position: 'absolute',
                        buttom: 25,
                        left: 20,
                        right: 20,
                        backgroundColor: tabBgColor,
                        borderRadius: 15,
                        paddingBottom: 13,
                        marginBottom: 20,
                        ...style.shadow,
                    },
                    tabBarLabelStyle: {
                        fontSize: tabFontSize,
                        fontFamily: tabFontFamily,
                        position: 'absolute'
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
