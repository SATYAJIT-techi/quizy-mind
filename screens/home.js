import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/title'


export default function Home({navigation}){
  return (
    <View style={styles.container}>
      <Title/>
     <View style={styles.bannerContainer}>
      <Image 
      source={require( "../assets/front1.png")} 
      style={styles.banner}
      resizeMode='contain'
      />
        
      
    </View>
   
   <View style={styles.button}>
   <TouchableOpacity style={styles.testenter}onPress={()=>navigation.navigate("Quiz")}>
      <Text style={styles.enter}> Enter to Take Quiz </Text>
    </TouchableOpacity>
   </View>
   
   
    {/* <Quiz/>
    <Result/> */}
    
  </View>
  )
}



const styles = StyleSheet.create({
  container:{
    paddingTop:10,
    fontWeight:'bold',
    height:'100%'
  },
  banner:{
    height:600,
    width:600,
  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,

  },
  testenter:{
    backgroundColor:'cyan',
   width:"80%",
    
   justifyContent:"center",
    borderRadius:16,
    alignItems:'center',

   
  },
  enter:{
    fontWeight:'bold',
    alignItems:'center',
    padding:16,
    
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    marginBottom:40,
    
  }

})