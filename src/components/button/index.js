import React, { Component } from "react";
import { View,Image, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default class Button extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
           <TouchableOpacity style={styles.buttonBg}>
                <Text style={styles.buttontext}>{this.props.title}</Text>
           </TouchableOpacity>
        )
    }
}