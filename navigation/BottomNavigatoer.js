import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Login'
import Intro from '../screens/Intro'
import Login from '../screens/Login';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();
const BottomNavigatoer = ({navigation}) => {
  return (
    <Tab.Navigator 
     screenOptions={{
      tabBarActiveTintColor: '#8f2592',
      headerShown:false
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}/>

<Tab.Screen
      name="Notification"
      component={Login}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
      }}/>

  </Tab.Navigator>
  )
}

export default BottomNavigatoer

const styles = StyleSheet.create({})