import React, { Component } from 'react';
import styles from './styles';
import { View, TextInput, Image, TouchableOpacity, Text } from 'react-native';
import { Icons } from '../../assets/icons';

class CustomTextInput extends Component {
  render() {
    const { 
      value, 
      onChangeText, 
      placeholder, 
      iconSource, 
      rightIconSource, 
      secureTextEntry, 
      onRightIconPress, 
      error 
    } = this.props;

    return (
      <View style={styles.inputContainer}>
       
        <View style={[styles.inputWrapper, error ? styles.inputWrapperError : null]}>
          {iconSource && (
            <Image 
              source={iconSource} 
              style={[styles.leftIcon, { tintColor: error ? 'red' : undefined }]} 
            />
          )}
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            style={styles.input}
          />
          
          {rightIconSource && (
            <TouchableOpacity onPress={onRightIconPress}>
              <Image 
                source={rightIconSource} 
                style={[styles.rightIcon, { tintColor: error ? 'red' : undefined }]} 
              />
            </TouchableOpacity>
          )}
          
        </View>
        {error &&
        (<View style={{flexDirection:'row',marginTop:10}}>
          <Image source={Icons.invalidIcon}
          style={{height:20,width:20,marginHorizontal:5}}/>
         <Text style={styles.errorText}>{error}</Text>
         
         </View>)}
      </View>
    );
  }
}

export default CustomTextInput;
