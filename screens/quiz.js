import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';

const Quiz = ({navigation}) => {
    const[question, setQuestion] = useState([]);
    const getQuiz = async() =>{
    const url ='https://opentdb.com/api.php?amount=3&category=18&difficulty=medium&type=multiple';
    const res = await fetch(url)
    const data = await res.json();
    setQuestion(data.results);
};
useEffect(()=>{
    getQuiz();
},[]);
  return (
    <View style={styles.container}>
    {question &&(
    <View style={styles.parent}>
      <View style={styles.question}>
        <Text style={styles.showquestion}> Q. This the questions</Text>
      </View>


      <View style={styles.options}>
        <TouchableOpacity style={styles.option1}>
            <Text> option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option2}>
            <Text> option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option3}>
            <Text> option 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option4}>
            <Text> option 4</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.nextquestion}>
        <TouchableOpacity style={styles.skipbutton}>
            <Text style={styles.skiptext}> SKIP </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextbutton}onPress={()=>navigation.navigate("Result")}>
            <Text style={styles.nexttext}> NEXT </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.finishbutton}onPress={()=>navigation.navigate("Result")}>
            <Text style={styles.finishtext}> Finish Test </Text>
        </TouchableOpacity>
      </View>
      </View>
    )}  
    </View>
  )
}

export default Quiz

const styles = StyleSheet.create({
    container:{
        justifyContent:'space-around',
        height:'100%',
    },
    question:{
        marginVertical:16,
       
    } ,
    options:{
       
        marginVertical:16,
        flex:1,
        alignItems:'center',
    },
    nextquestion:{
        marginBottom:12,
        paddingVertical:16,
        flexDirection:'row',
        
        justifyContent:'space-around',

    },
    option1:{
        margin:10,
        backgroundColor:'#b8e8ee',
        padding:10,
        borderRadius:15,
         width:'80%',
       
    },
    option2:{
        margin:10,
        backgroundColor:'#b8e8ee',
        padding:10,
        borderRadius:15,
         width:'80%',
        
    },
    option3:{
        margin:10,
        backgroundColor:'#b8e8ee',
        padding:10,
        borderRadius:15,
         width:'80%',
        
    },
    option4:{
        margin:10,
        backgroundColor:'#b8e8ee',
        padding:10,
        borderRadius:15,
         width:'80%',
        
    },
    skipbutton:{
        backgroundColor:'#46B4C3',
        padding:9,
        paddingHorizontal:20,
        borderRadius:15,

    },
    nextbutton:{
        backgroundColor:'#46B4C3',
        padding:9,
        paddingHorizontal:20,
        borderRadius:15,
    },
    finishbutton:{
        backgroundColor:'#F15152',
        padding:9,
        paddingHorizontal:20,
        borderRadius:15,
    },
    nexttext:{
        color:'white'
    },
    skiptext:{
        color:'white'
    },
    finishtext:{
        color:'white',
    },
    showquestion:{
        fontSize:25,
        alignItems:'center',
        
    },
    parent:{
        height:'100%'
    }
   
})