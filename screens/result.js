import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Result = ({navigation, route}) => {
  return (
    <View>
      <View>
        <Text> Exams Over enjoyy </Text>
        <Text style={{fontSize:20, margin:50}}> You score {route.params.name}/3 </Text>
      </View>
      
      <View style={styles.photo}>
            <Image  style={styles.photos} source={require('../assets/result.png')} />
      </View>
        
        <View style={styles.returnhome}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Home")}>
          <Text> Return to Home </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
    photo:{
        
    },
    photos:{
      
      margin:50,
      height:"50%",
      width:'50%',
    },
    returnhome:{
     
      justifyContent:'center',
      alignItems:'center',
      
    },
    button:{
      backgroundColor:'cyan',
      padding:20,
      borderRadius:19,
      width:"50%"
    }
   
})