import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, Platform } from 'react-native';
import Toast from 'react-native-toast-message'; 

import styles from './styles';
import ExitModal from '../../components/exit';
import VerifiedModal from '../../components/verified';
import FailedAttemptModal from '../../components/failedattempts';
import CustomToast from '../../components/toastmsg';
import { Icons } from '../../assets/icons';

class OtpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ['', '', '', '', '', ''],
      errorMessage: '',
      attempts: 0,
      showModal: false,
      showSuccessModal: false,
      buttonDisabled: true,
      showLogout: false,
      resend: false,
      isOtpIncorrect: false, 
    };
    this.inputRefs = [];
  }

  handleTextChange = (text, index) => {
    const newCode = [...this.state.code];
    newCode[index] = text;

    this.setState(
      { code: newCode },
      () => {
        const allFilled = newCode.every((digit) => digit.length > 0);
        this.setState({ buttonDisabled: !allFilled });

        if (text && index < 5) {
          this.inputRefs[index + 1].focus();
        }
      }
    );
  };

  handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (!this.state.code[index] && index > 0) {
        this.inputRefs[index - 1].focus();
      }
    }
  };

  handleSubmit = () => {
    const enteredCode = this.state.code.join('');
    const defaultOTP = '123456'; 

    if (enteredCode !== defaultOTP) {
      const newAttempts = this.state.attempts + 1;
      this.setState({
        attempts: newAttempts,
        errorMessage: `The code you entered is incorrect, you have ${3 - newAttempts} attempts remaining.`,
        isOtpIncorrect: true, // Set to true for incorrect OTP
      });

      if (newAttempts >= 3) {
        this.setState({ showModal: true });
      }
    } else {
      this.setState({ 
        errorMessage: '',
        attempts: 0,
        showModal: false,
        showSuccessModal: true,
        isOtpIncorrect: false, 
      });
      console.log('Submitted code:', enteredCode);
    }
  };

  handleResendCode = () => {
    console.log('Resending OTP...');
    Toast.show({
      type: 'success',
      text1: 'OTP Resent Successfully!',
    });
    this.setState({ resend: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, showLogout: false });
    this.props.navigation.navigate('SignIn');
  };

  closeSuccessModal = () => {
    this.setState({ showSuccessModal: false, showLogout: true });
    this.props.navigation.navigate('SignIn');
  };

  render() {
    const { code, errorMessage, buttonDisabled, showModal, showSuccessModal, showLogout, resend, isOtpIncorrect } = this.state;

    return (
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}>
          <Image source={Icons.backArrow} style={styles.backIcon} />
        </TouchableOpacity>

        <View style={styles.contentContainer}>
          <Text style={styles.header}>Verify Account Access</Text>
          <Text style={styles.subHeader}>Enter the verification code sent to +91-1234567890</Text>
          <View style={styles.box}>
            <View style={styles.codeInputContainer}>
              {code.map((value, index) => (
                <TextInput
                  key={index}
                  style={[
                    styles.codeInput,
                    isOtpIncorrect ? { borderColor: 'red', color: 'red' } : {},
                  ]}
                  keyboardType="numeric"
                  maxLength={1}
                  value={value}
                  onChangeText={(text) => this.handleTextChange(text, index)}
                  onKeyPress={(e) => this.handleKeyPress(e, index)}
                  ref={(input) => { this.inputRefs[index] = input; }}
                />
              ))}
            </View>
          </View>
          {errorMessage ? (
            <View style={styles.errorContainer}>
              <Image 
                source={Icons.invalidIcon} 
                style={styles.errorImage} 
              />
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
          ) : null}

          <TouchableOpacity onPress={this.handleResendCode}>
            {resend ? (
              <Text style={styles.textCode}>Resend in 01:00</Text>
            ) : (
              <Text style={styles.textCode}>Resend</Text>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.loginButton,
              buttonDisabled ? styles.loginButtonDisabled : styles.loginButtonEnabled,
            ]}
            onPress={this.handleSubmit}
            disabled={buttonDisabled}
          >
            <Text style={styles.loginButtonText}>Confirm Code</Text>
          </TouchableOpacity>
        </View>

        <FailedAttemptModal
          visible={showModal}
          closeModal={this.closeModal}
        />

        <VerifiedModal
          visible={showSuccessModal}
          closeSuccessModal={this.closeSuccessModal}
        />

        {/* <ExitModal
          visible={showLogout}
          closeModal={this.closeModal}
        /> */}

        <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} ref={(ref) => Toast.setRef(ref)} />
      </KeyboardAvoidingView>
    );
  }
}

export default OtpScreen;
