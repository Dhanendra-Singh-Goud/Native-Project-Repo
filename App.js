import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
 const [entererdText,setEntererdText]= useState('')
 const [courseGoal,setCourseGoal]= useState([])


  function inputGoalhandler(enterGoal){
    setEntererdText(enterGoal)
  }
  
  function courseGoalhandler(){
    setCourseGoal((currentGoalUpdated)=>[...currentGoalUpdated,entererdText])
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style = {styles.textInput} placeholder='enter your goal ?' onChangeText={inputGoalhandler}/>
        <Button title='Add Goal' onPress={courseGoalhandler}/>
      </View>
      <View style={styles.goalsContainer}>
       
        {courseGoal.map((goal)=> <Text key={goal}>{goal}</Text>)}
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:40,
    paddingHorizontal:15
   
  },
  inputContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:22,
    margin:10,
    borderBottomColor:"brown",
    borderBottomWidth:2
  },
  textInput:{
    borderWidth:2,
    borderColor:'red',
    width:'70%',
    padding:8,
    marginRight:10,
    paddingLeft:15

  },
  goalsContainer:{
    flex:6,
  },
});
