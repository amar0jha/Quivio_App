import React, { Component } from "react";
import { SafeAreaView, Text, View,TouchableOpacity} from "react-native";
import styles from "./styles";

export default class AccountScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
      <TouchableOpacity> 
        <Text style={styles.textTitle}>Profile</Text>
      </TouchableOpacity> 
      </View>
    )
  }
}