import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Result from './result';

const Quiz = ({navigation}) => {
    const [question, setQuestion] = useState(0);
//     const getQuiz = async() =>{
//     const url ='https://opentdb.com/api.php?amount=3&category=18&difficulty=medium&type=multiple';
//     const res = await fetch(url)
//     const data = await res.json();
  
// };
// useEffect(()=>{
//     getQuiz();
// },[]);
  return (
    <View style={styles.container}>
    {/* {question &&( */}
    <View style={styles.parent}>
        <ScrollView>
      <View style={styles.question}>
        <Text style={styles.showquestion}>All of the following programs are classified as raster graphics editors EXCEPT:</Text>
      </View>


      <View style={styles.options}>
        <TouchableOpacity style={styles.option1} onPress= {()=>setQuestion(question+1)}>
            <Text>Inkscape</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option2}>
            <Text> Paint.NET</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option3}>
            <Text> GIMP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option4}>
            <Text> Adobe Photoshop</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.question}>
        <Text style={styles.showquestion}>Laserjet and inkjet printers are both examples of what type of printer?</Text>
      </View>


      <View style={styles.options}>
        <TouchableOpacity style={styles.option1} onPress= {()=>setQuestion(question+1)}>
            <Text>Non-impact printer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option2}>
            <Text> Impact printer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option3}>
            <Text> Daisywheel printer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option4}>
            <Text>Dot matrix printer</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.question}>
        <Text style={styles.showquestion}>In programming, what do you call functions with the same name but different implementations?</Text>
      </View>


      <View style={styles.options}>
        <TouchableOpacity style={styles.option1} onPress= {()=>setQuestion(question+1)}>
            <Text>Overloading</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option2}>
            <Text> Overriding</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option3}>
            <Text> Overriding</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option4}>
            <Text>Inheriting</Text>
        </TouchableOpacity>
      </View>

      {/* <View style={styles.question}>
        <Text style={styles.showquestion}>Questions Here</Text>
      </View>


      <View style={styles.options}>
        <TouchableOpacity style={styles.option1}>
            <Text>option1</Text>
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
      </View> */}

      </ScrollView>
      <Text>{question}</Text>


      <View style={styles.nextquestion}>
        <TouchableOpacity style={styles.skipbutton}>
            <Text style={styles.skiptext}> SKIP </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextbutton}onPress={()=>navigation.navigate("Result")}>
            <Text style={styles.nexttext}> NEXT </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.finishbutton}onPress={()=>navigation.navigate("Result",{
            name:question,
        })}>
            <Text style={styles.finishtext}> Finish Test </Text>
        </TouchableOpacity>
      </View>
      </View>
    
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
        marginHorizontal:20,
        fontSize:20,
        alignItems:'center',
        
    },
    parent:{
        height:'100%'
    }
   
})