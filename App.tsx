import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import MyStack from './navigation';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';



const App=()=> {

  return (
    <NavigationContainer>
    <MyStack />
    </NavigationContainer>
   
  )
}
export default App;

const styles = StyleSheet.create({
  

})