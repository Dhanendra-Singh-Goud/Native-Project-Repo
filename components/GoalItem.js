import { View, Text, StyleSheet } from "react-native";

function GoalItem(props){
    return(
        <View >
        <Text style = {styles.listInput}>{props.text}</Text>
       </View> 
    )
}

export default GoalItem;

const styles = StyleSheet.create({
      listInput:{
        borderRadius:6,
        borderWidth:2,
        padding:6,
        margin:6,
        backgroundColor:'purple',
        color:'white'
      }
})