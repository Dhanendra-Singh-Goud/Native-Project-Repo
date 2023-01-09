import { useState } from 'react';
import {  View,
  Text,
  Button, 
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
//  const [entererdText,setEntererdText]= useState('')
 const [courseGoal,setCourseGoal]= useState([])


  // function inputGoalhandler(enterGoal){
  //   setEntererdText(enterGoal)
  // }
  
  function courseGoalhandler(entererdText){
    setCourseGoal((currentGoalUpdated)=>[
      ...currentGoalUpdated,
     {text:entererdText, id:Math.random().toString()}, ])
  }
  return (
    <View style={styles.container}>
      {/* <View style={styles.inputContainer}>
        <TextInput style = {styles.textInput} placeholder='enter your goal ?' onChangeText={inputGoalhandler}/>
        <Button title='Add Goal' onPress={courseGoalhandler}/>
      </View> */}
      <GoalInput onAddGoal={courseGoalhandler}/>
      <View style={styles.goalsContainer}>
       <FlatList
       data={courseGoal}
       renderItem = {(itemData) =>{
        return <GoalItem text = {itemData.item.text} />
        //  (
        //  <View >
        //   <Text style = {styles.listInput}>{itemData.item.text}</Text>
        //  </View> 
        // );
       }} 
       keyExtractor={(item,index)=>{
        return item.id
       }}/>
        {/* {courseGoal.map((goal) =><Text key={goal}  style = {styles.listInput} >{goal}</Text>)} */}
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
  // inputContainer:{
  //   flex:1,
  //   flexDirection:'row',
  //   alignItems:'center',
  //   marginBottom:22,
  //   margin:10,
  //   borderBottomColor:"brown",
  //   borderBottomWidth:2
  // },
  // textInput:{
  //   borderWidth:2,
  //   borderColor:'red',
  //   width:'70%',
  //   padding:8,
  //   marginRight:10,
  //   paddingLeft:15

  // },
  goalsContainer:{
    flex:6,
  },
  // listInput:{
  //   borderRadius:6,
  //   borderWidth:2,
  //   padding:6,
  //   margin:6,
  //   backgroundColor:'purple',
  //   color:'white'
  // }
});
