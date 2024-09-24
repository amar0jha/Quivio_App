import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import styles from './styles';
import { Images } from '../../assets/images';
import { Icons } from '../../assets/icons';

class CustomToast extends Component {
  render() {
    const { text1 } = this.props;

    return (
      <View style={styles.toastContainer}>
        <View style={styles.toastContent}>
          <Image source={Icons.invalidToastIcon} style={styles.icon} />
          <Text style={styles.toastText}>{text1}</Text>
        </View>
      </View>
    );
  }
}

export default CustomToast;
