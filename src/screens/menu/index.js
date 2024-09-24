import React, { Component } from "react";
import { SafeAreaView, Text, View,TouchableOpacity} from "react-native";
import styles from "./styles";

export default class MenuScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
      <TouchableOpacity> 
        <Text style={styles.textTitle}>Menu</Text>
      </TouchableOpacity> 
      </View>
    )
  }
}