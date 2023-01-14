import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.top}>
      <Text style={styles.title}>Quizy Mind </Text>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
  title:{
    fontWeight:'600',
    fontSize:40,
    color:'cyan'
  },
  top:{
    paddingTop:20,
    paddingVertical:30,
    justifyContent:'center',
    alignItems:'center'
  }
})