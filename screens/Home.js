import { StyleSheet, Text,Image, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'
import HomeCard from '../components/HomeCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from "react-native-vector-icons/Ionicons"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login'
import SecondCategory from '../components/SecondCategory'
import BottomTabs from '../components/BottomTabs'
const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <SafeAreaView>
     <TouchableOpacity
        ><Ionicons name='menu-outline' color="#8f2592"  size={24}></Ionicons></TouchableOpacity>
        <Text style={{ marginLeft:2,fontSize:17,color:'black',fontWeight:'600',marginTop:10}} >Good morning Taiwo !</Text>
       
        <HomeCard/> 
        <Categories/>
     <View style={{marginLeft:10, display:'flex',flexDirection:'row',marginTop:20 }}>
        <TouchableOpacity style={{width:162, height:170, backgroundColor:'#d2d2d2'}}>
            <Image style={{width:160,height:100}}
              source={require('../assets/dumbell.jpg')}></Image>
             <Text style={{ marginLeft:2,fontSize:17,color:'black',fontWeight:'600',marginTop:5}}>Get a Schedule</Text>
             <Ionicons style={{marginLeft:10}} name='arrow-forward-circle' size={24} ></Ionicons>
        </TouchableOpacity> 
        <TouchableOpacity style={{width:160, height:170, backgroundColor:'#d2d2d2',marginLeft:15}}>
             <Image style={{width:160,height:100}}
              source={require('../assets/train.jpg')}></Image>
              <Text style={{ marginLeft:2,fontSize:17,color:'black',fontWeight:'600',marginTop:5}}>Get a Trainer</Text>
              <Ionicons style={{marginLeft:10}} name='arrow-forward-circle' size={24} ></Ionicons>
        </TouchableOpacity>

        </View>  
         
        <SecondCategory/>
        
       <BottomTabs/>
    </SafeAreaView>
     
  )
}

export default Home

const styles = StyleSheet.create({})