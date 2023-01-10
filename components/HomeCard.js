import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import React from 'react'
const {width,height}=Dimensions.get("window");
const items=[
    {
     image:require('../assets/gym3.jpg'),
     text:" Fitness Meter",
     subone:" Track your fitness goal and watch ",
     subtwo:"your calories",
     button:"Discover more",
    },
    {
        image:require('../assets/gym.jpg'),
        text:" Fitness Meter",
        subone:" Track your fitness goal and watch ",
        subtwo:"your calories",
        button:"Explore more",
       },
    {
     image:require('../assets/gym2.jpg'),
     text:" Fitness Meter",
     subone:" Track your fitness goal and watch ",
     subtwo:"your calories",
     button:"Discover more",
    },   
       
]
const HomeCard = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:10}}>
        {items.map((item,index)=>(
        <View key={index}>
            <ImageBackground style={{width:width-20,height:200,marginLeft:9}}
             resizeMode="cover"
                source={item.image}>
                  <Text style={{ marginLeft:2,fontSize:30,color:'white',fontWeight:'600',marginTop:50}}>
                    {item.text}
                  </Text>  
                  <Text style={{ marginLeft:2,fontSize:14,color:'white',fontWeight:'600',marginTop:10}}>
                    {item.subone}  {"\n"} {item.subtwo}
                   </Text>
                   <TouchableOpacity
                          >
                        <View style={{marginLeft:2,width:width-200,height:35,justifyContent:"center",alignItems:"center",marginTop:10,borderRadius:5,backgroundColor:'transparent',borderColor:'white',borderWidth:1}}>   
                            <Text style={{color:"white"}}>
                             {item.button}
                            </Text>
                        </View>
                    </TouchableOpacity>
             </ImageBackground>
          
         
          
        </View>))}
    </ScrollView>
  )
}

export default HomeCard

const styles = StyleSheet.create({})