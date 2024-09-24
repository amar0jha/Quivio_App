import React, { Component } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";
import { Icons } from "../../assets/icons";
import styles from "./styles";
import CountryPicker1 from 'react-native-country-picker-modal';
import Toast from "react-native-toast-message";
import CustomToast from "../../components/toastmsg";
import ExitModal from "../../components/exit";

export default class PhoneScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonDisabled: true,
      phoneNumber: '',
      countryCode: 'IN',
      callingCode: '91',
      showModal: false,
    };
  }

  handlePhoneNumberChange = (phoneNumber) => {
    const digitsOnly = phoneNumber.replace(/[^0-9]/g, '');
    this.setState({
      phoneNumber: digitsOnly,
      buttonDisabled: digitsOnly.length < 10,
    });
  };

  handleCountrySelect = (country) => {
    this.setState({
      countryCode: country.cca2,
      callingCode: country.callingCode[0],
    });
  };

  handlePress = () => {
    const { phoneNumber } = this.state;
    const defaultPhoneNumber = '1234512345';

    if (phoneNumber === defaultPhoneNumber) {
      Toast.show({
        type: 'custom_error',
        text1: 'User exists. Try a different number.',
      });
    } else {
      this.props.navigation.navigate('Otp');
    }
  };

  handleBackButtonPress = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  handleModalChoice = (choice) => {
    this.closeModal();
    if (choice === 'yes') {
      this.props.navigation.navigate('Home');
    } else {
      this.props.navigation.navigate('Phone');
    }
  };

  render() {
    const { phoneNumber, countryCode, callingCode, buttonDisabled, showModal } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.backBox}>
            <TouchableOpacity style={styles.backButton} onPress={this.handleBackButtonPress}>
              <Image source={Icons.backArrow} style={styles.backIcon} />
            </TouchableOpacity>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.formContainer}>
              <View style={styles.header}>
                <Text style={styles.headerText}>Add Phone Number</Text>
                <Text style={styles.subHeaderText}>
                  To initiate the two-factor authentication, provide your phone number below.
                </Text>
              </View>
              <View style={styles.form}>
                <View style={styles.flagBackground}>
                  <CountryPicker1
                    countryCode={countryCode}
                    withFlag
                    withCallingCode
                    withFilter
                    onSelect={this.handleCountrySelect}
                    containerButtonStyle={styles.countryPicker}
                  />
                </View>
                <View style={styles.phoneInputContainer}>
                  <Text style={styles.countryCode}>+{callingCode}</Text>
                  <TextInput
                    style={styles.phoneInput}
                    placeholder="Phone Number"
                    keyboardType="phone-pad"
                    value={phoneNumber}
                    onChangeText={this.handlePhoneNumberChange}
                  />
                </View>
              </View>
            </View>
            <View style={{ flex: 1 }} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.loginButton,
                buttonDisabled ? styles.loginButtonDisabled : styles.loginButtonEnabled,
              ]}
              onPress={this.handlePress}
              disabled={buttonDisabled}
            >
              <Text style={styles.buttonText}>Send Code</Text>
            </TouchableOpacity>
          </View>

          <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} />

          <ExitModal
            visible={showModal}
            closeModal={this.closeModal}
            onChoice={this.handleModalChoice}
          />
          
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}
