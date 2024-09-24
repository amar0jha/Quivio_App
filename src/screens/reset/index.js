import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity,KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import CustomTextInput from '../../components/customInput';
import Toast from 'react-native-toast-message';
import { Icons } from '../../assets/icons';
import { Images } from '../../assets/images';
import CustomToast from '../../components/toastmsg';
import ResetModal from '../../components/resetpop';

class ResetScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      isPasswordVisible: false,
      isConfirmPasswordVisible: false,
      isTyping: false,
      isModalVisible: false,
    };
  }

  checkPassword = () => {
    const { password } = this.state;
    return {
      length: password.length >= 8,
      specialChar: /[^A-Za-z0-9]/.test(password),
      number: /\d/.test(password),
      upperLower: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
    };
  };

  handlePasswordChange = (value) => {
    this.setState({
      password: value,
      isTyping: value.length > 0 || this.state.confirmPassword.length > 0,
    });
  };

  handleConfirmPasswordChange = (value) => {
    this.setState({
      confirmPassword: value,
      isTyping: value.length > 0 || this.state.password.length > 0,
    });
  };

  togglePasswordVisibility = () => {
    this.setState(prevState => ({ isPasswordVisible: !prevState.isPasswordVisible }));
  };

  toggleConfirmPasswordVisibility = () => {
    this.setState(prevState => ({ isConfirmPasswordVisible: !prevState.isConfirmPasswordVisible }));
  };

  handleSubmit = () => {
    const { password, confirmPassword } = this.state;
    const passwordCriteria = this.checkPassword();

    if (password !== confirmPassword) {
      Toast.show({
        type: 'custom_error',
        text1: 'Your password doesn’t match',
      });
    } else if (!Object.values(passwordCriteria).every(Boolean)) {
      Toast.show({
        type: 'error',
        text1: 'Please meet all the password requirements.',
        position: 'top',
      });
    } else {
      this.setState({ isModalVisible: true });
    }
  };

  handleCloseModal = () => {
    this.setState({ isModalVisible: false });
    this.props.navigation.navigate('SignIn');
  };

  render() {
    const { password, confirmPassword, isPasswordVisible, isConfirmPasswordVisible, isTyping, isModalVisible } = this.state;
    const passwordCriteria = this.checkPassword();
    const isButtonDisabled = !isTyping;

    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container1}
    >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.header1}>
            <Image style={styles.back} source={Images.blueLogo} />
            <Image style={styles.forgotSideImg} source={Images.forgotsidebg} />
          </View>
          <View style={styles.TextView}>
            <Text style={styles.Title1}>Reset Password</Text>
            <Text style={styles.Title2}>Enter in your new password.</Text>

            <View style={styles.inputContainer}>
              <CustomTextInput 
                value={password} 
                onChangeText={this.handlePasswordChange} 
                placeholder="Password" 
                iconSource={Icons.password} 
                secureTextEntry={!isPasswordVisible}
                rightIconSource={isPasswordVisible ? Icons.eyeOpen : Icons.eyeClose} 
                onRightIconPress={this.togglePasswordVisibility}
              />
              
              {isTyping && (
                <View style={styles.criteriaContainer}>
                  <View style={styles.criteriaItem}>
                    <Image source={passwordCriteria.length ? Icons.greenTickIcon : Icons.redCrossIcon} style={styles.criteriaIcon} />
                    <Text style={passwordCriteria.length ? styles.valid : styles.invalid}>8 characters or above</Text>
                  </View>
                  <View style={styles.criteriaItem}>
                    <Image source={passwordCriteria.specialChar ? Icons.greenTickIcon : Icons.redCrossIcon} style={styles.criteriaIcon} />
                    <Text style={passwordCriteria.specialChar ? styles.valid : styles.invalid}>1 or more special characters</Text>
                  </View>
                  <View style={styles.criteriaItem}>
                    <Image source={passwordCriteria.number ? Icons.greenTickIcon : Icons.redCrossIcon} style={styles.criteriaIcon} />
                    <Text style={passwordCriteria.number ? styles.valid : styles.invalid}>1 or more numbers</Text>
                  </View>
                  <View style={styles.criteriaItem}>
                    <Image source={passwordCriteria.upperLower ? Icons.greenTickIcon : Icons.redCrossIcon} style={styles.criteriaIcon} />
                    <Text style={passwordCriteria.upperLower ? styles.valid : styles.invalid}>Upper and lowercase</Text>
                  </View>
                </View>
              )}
            </View>

            <View style={styles.inputContainer}>
              <CustomTextInput 
                value={confirmPassword} 
                onChangeText={this.handleConfirmPasswordChange} 
                placeholder="Confirm Password" 
                iconSource={Icons.password} 
                secureTextEntry={!isConfirmPasswordVisible}
                rightIconSource={isConfirmPasswordVisible ? Icons.eyeOpen : Icons.eyeClose} 
                onRightIconPress={this.toggleConfirmPasswordVisibility}
              />
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled]}
            disabled={isButtonDisabled}
            onPress={this.handleSubmit}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        <ResetModal
          visible={isModalVisible}
          closeModal={this.handleCloseModal} 
        />

        <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} />
      </KeyboardAvoidingView>
    );
  }
}

export default ResetScreen;
