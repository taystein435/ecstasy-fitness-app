import { StyleSheet,SafeAreaView, Text, View, TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={()=> navigation.goBack()}><Ionicons name='arrow-back-circle-outline' color="#8f2592"  size={24}></Ionicons></TouchableOpacity>
      <Text style={{fontSize:30,fontWeight:"700",marginLeft:90,marginTop:20 }}>Ecstasy Fitness</Text>
      <View style={{marginTop:10}}><Text >Enter your username</Text>
      <TextInput  placeholder={'Username'}
                         keyboardType={"ascii-capable"}
                         maxLength={12}
                         returnKeyType={"done"}
                         style={{borderColor:'#8f2592',borderWidth:1,height:40,width:380,marginTop:10,marginLeft:2}}></TextInput>
        
      <Text style={{marginTop:10}}>Enter your password</Text>
      <TextInput  placeholder={'Password'}
                         keyboardType={"ascii-capable"}
                         maxLength={12}
                         returnKeyType={"done"}
                         style={{borderColor:'#8f2592',borderWidth:1,height:40,width:380,marginTop:10,marginLeft:2 }}></TextInput>
      <TouchableOpacity
        onPress={()=> navigation.navigate('Home')} >
                      <View style={{width:380, marginLeft:2,height:40,backgroundColor:'#8f2592',justifyContent:"center",alignItems:"center",borderRadius:5,marginTop:20}}>   
                        <Text style={{color:"white"}}>
                          Login
                        </Text>
                      </View>
                    </TouchableOpacity>
        </View>                                 
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({})