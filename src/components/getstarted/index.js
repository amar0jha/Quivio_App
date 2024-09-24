import React, {Component, createRef} from 'react';
import {View, Text, Dimensions, Image, TouchableOpacity} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {Icons} from '../../assets/icons';
import {Images} from '../../assets/images';
import styles from './styles';
import { ScreenNames } from '../../navigator/screennames';

export default class GetStarted extends Component {
  refRBSheet = createRef();

  componentDidUpdate(prevProps) {
    const {visible} = this.props;
    if (visible !== prevProps.visible) {
      if (visible) {
        this.refRBSheet.current.open();
      } else {
        this.refRBSheet.current.close();
      }
    }
  }

  handleLogin = () => {
    // this.props.onClose
    const {navigation} = this.props;
    // Navigate to Phone screen
    navigation.navigate('Phone');
    this.refRBSheet.current.close()
  };

  render() {
    const {onClose} = this.props;

    return (
      <RBSheet
        ref={this.refRBSheet}
        closeOnPressMask
        useNativeDriver={false}
        height={Dimensions.get('window').height / 1.5}
        style={{overflow:'hidden'}}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0,0,0,0.5)',
          },
          container: {
            borderRadius:20
          }
        }}
        onClose={onClose}>
        <View style={styles.bgColor}>
          <View style={styles.centerImage}>
            <Image style={styles.imageSize} source={Images.getBackImg} />
          </View>
          <View style={styles.commonMargin}>
            <Text style={styles.headingText}>Secure your Account ?</Text>
            <Text style={styles.headingDescription}>
              Setup two-factor authentication to secure{'\n'}your account in
              just two steps.
            </Text>
          </View>

          <View style={styles.commonMargin}>
            <View style={styles.rowContainer}>
              <Image style={styles.iconSize} 
              source={Images.linkPhone}/>
              <Text style={styles.containerText}>Link your account with your phone{'\n'}number</Text>
            </View>
            <View style={styles.rowContainer}>
              <Image style={styles.iconSize} 
              source={Images.oneTimePass}/>
              <Text style={styles.containerText}>Enter the one-time passcode</Text>
            </View>
            <View style={styles.rowContainer}>
              <Image style={styles.iconSize} 
              source={Images.secureAccount}/>
              <Text style={styles.containerText}>Secure your account</Text>
            </View>
          </View>

          <View style={styles.marginSide}>
          <View style={styles.btnContainer}>
          <TouchableOpacity
              onPress={this.handleLogin}>
              <Text style={styles.getStartedBtn}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>

      </RBSheet>
    );
  }
}
