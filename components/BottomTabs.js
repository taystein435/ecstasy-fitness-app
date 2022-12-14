import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login'
import Intro from '../screens/Intro'
import SignUp from '../screens/SignUp'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const BottomTabs = ({navigation}) => {
  return (
    <Tab.Navigator 

    initialRouteName="Notifications"
    screenOptions={{
      tabBarActiveTintColor: '#8f2592',
    }}
  >
    <Tab.Screen
      name="Feed"
      component={Login}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={Intro}
      options={{
        tabBarLabel: 'Updates',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="bell" color={color} size={size} />
        ),
       
      }}
    />

  </Tab.Navigator>
)}

export default BottomTabs

const styles = StyleSheet.create({})