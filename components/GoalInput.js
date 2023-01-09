import { useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

function GoalInput(props){
    const [entererdText,setEntererdText]= useState('')

    function inputGoalhandler(enterGoal){
        setEntererdText(enterGoal)
      }
      function AddGoalHandler(){
        props.onAddGoal(entererdText)
        setEntererdText('')
      }
    return(
        <View style={styles.inputContainer}>
        <TextInput style = {styles.textInput}
         placeholder='enter your goal ?' 
         onChangeText={inputGoalhandler}
         value={entererdText}/>
        <Button title='Add Goal' onPress={AddGoalHandler}/>
      </View>
    )
}

const styles = StyleSheet.create({
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
})

export default GoalInput ;