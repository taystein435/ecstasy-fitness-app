import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
const {width,height}=Dimensions.get("window");
const items=[
    {
     image:require('../assets/gym3.jpg'),
     text:" BEGINNER",
    
    },
    {
        image:require('../assets/gym.jpg'),
        text:" INTERMEDIATE",
       
       },
    {
     image:require('../assets/gym2.jpg'),
     text:" PROFESSIONAL",
    
    },   
       
]

export default function SecondCategory() {
  return (
    
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:40,marginBottom:30}}>
    {items.map((item,index)=>(
    <View key={index}>
        <Image
         style={{width:width-250,height:150,marginLeft:9}}
         resizeMode="cover"
            source={item.image}>
            
         </Image>
         <Text style={{ marginLeft:2,fontSize:12,color:'black',fontWeight:'600',marginTop:2}}>
                {item.text}
              </Text>  
           
            
     
      
    </View>))}
</ScrollView>
  )
}