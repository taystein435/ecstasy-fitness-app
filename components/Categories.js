import { StyleSheet,ScrollView,TouchableOpacity,Text, View } from 'react-native'
import React from 'react'
const items=[
    {
     button:"ALL",
    },
    {
     button:"FAT ",
       },
    {
      button:"CHEST",
       },
    {
      button:"LEG",
          },
   {
     button:"ABS",
     },
   {
    button:"SHOULDER",
              },       
]
const Categories = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:5}}>
    {items.map((item,index)=>(
    <View key={index}>       
               <TouchableOpacity
                     >
                    <View style={{marginLeft:2,width:70,height:35,justifyContent:"center",alignItems:"center",marginTop:10,borderRadius:5,backgroundColor:'#8f2592',borderColor:'white',borderWidth:1}}>   
                        <Text style={{color:"white"}}>
                         {item.button}
                        </Text>
                    </View>
                </TouchableOpacity>
       
      
     
      
    </View>))}
</ScrollView>
  )
}

export default Categories

const styles = StyleSheet.create({})