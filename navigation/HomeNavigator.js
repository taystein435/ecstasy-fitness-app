import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import BottomNavigatoer from '../navigation/BottomNavigatoer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
const Stack = createNativeStackNavigator();
export default function HomeNavigator() {
  return (
          <Stack.Navigator> 
       
       
         <Stack.Screen
        name="Home" 
        component={Home} 
        options={{
          headerShown:false
              }}/>
       
      </Stack.Navigator>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
