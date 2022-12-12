import { Dimensions, Image, Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Video, AVPlaybackStatus } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const {width,height}=Dimensions.get("window");

const Intro = ({navigation}) => {
    const video = React.useRef(null);
  return (
    <SafeAreaView>
          <Video
        ref={video}
        style={{ width:width, height:height,position:'absolute'}}
         source={{
          uri: 'https://player.vimeo.com/external/456095529.sd.mp4?s=7f32d0e38ee207fe474031e02ccde1cef371b460&profile_id=165&oauth2_token_id=57447761',
        }}
         resizeMode="cover"
         shouldPlay="true"
        isLooping="true"
        />
             <Text style={{fontSize:50,fontWeight:"700", color:"white",marginTop:440,marginLeft:10}}>Welcome to {"\n"}Ecstasy Fitness</Text>
                 <View style={{marginTop:50, marginLeft:10}}>
                  <TouchableOpacity 
                     onPress={()=> navigation.navigate('Login')}>
                      <View style={{width:width-20,height:50,backgroundColor:'#8f2592',justifyContent:"center",alignItems:"center",borderRadius:5}}>   
                        <Text style={{color:"white"}}>
                          LOGIN
                        </Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                         onPress={()=> navigation.navigate('SignUp')} >
                        <View style={{width:width-20,height:50,backgroundColor:'white',justifyContent:"center",alignItems:"center",marginTop:10,borderRadius:5}}>   
                            <Text style={{color:"#8f2592"}}>
                              SIGN UP
                            </Text>
                        </View>
                    </TouchableOpacity>
               </View>
    </SafeAreaView>
    
  )
}

export default Intro

const styles = StyleSheet.create({})