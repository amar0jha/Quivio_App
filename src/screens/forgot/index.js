import React, { Component } from "react";
import { SafeAreaView,View,Text, Image, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { Images } from "../../assets/images";
import styles from "./styles";
import Button from "../../components/button";
import { Icons } from "../../assets/icons";
import CustomTextInput from "../../components/customInput";
import ForgotModal from "../../components/forgotpop";
import Toast from "react-native-toast-message";
import CustomToast from "../../components/toastmsg";
import { CommonActions } from '@react-navigation/native';


export default class ForgetScreen extends Component{

    constructor(props) {
        super(props);
        this.state = {
          email: '',
          errors: {},
          isModalVisible: false,
        };
      }
      handleEmailChange = email => {
        this.setState({email}, this.validateInputs);
      };

    handleNav =()=>{
        const { navigation } = this.props;
            navigation.navigate('SignIn')
    }

    validateInputs = () => {
      const {email,} = this.state;
      const errors = {};
  
      if (!email.trim()) {
        errors.email = 'Email Address is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email Address is invalid';
      }
  
      this.setState({errors});
    };


  handleLogin = () => {
    const {email,} = this.state;
    const validEmail = 'Amar@gmail.com';

    if (email !== validEmail) {
      Toast.show({
        type: 'error',
        text1: 'Invalid credentials. Please try again',
      });
      return;
    }

    Toast.show({
      type: 'success',
      text1: 'Login successful!',
    });
  };

  handleHelp = () => {
    this.setState({isModalVisible: true});
  };

  closeModal = () => {
   
    this.setState({ isModalVisible: false });
    this.props.navigation.navigate('Reset');
  
    // this.props.navigation.dispatch(
    //   CommonActions.reset({
    //     index: 1,
    //     routes: [
    //       { name: 'SignIn' },
    //     ],
    //   })
    // );
  };

  isButtonDisabled = () => {
    const {email, errors} = this.state;
    return Object.keys(errors).length > 0 || !email ;
  };

  handleClickPassword = () => {
    const navigation = this.context;
    navigation.navigate('Reset');
  };

  handlePress = () => {
    const {email,} = this.state;
    const validEmail = 'Amar@gmail.com';
    

    if (email !== validEmail) {
      this.handleLogin();
    } else {
      this.handleHelp();
    }
  };

    render(){

        const {email, errors, isModalVisible,} =
      this.state;
      const buttonDisabled = this.isButtonDisabled();


        return(
          
          <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
            <View style={styles.header}>
          <TouchableOpacity onPress={this.handleNav}>
            <Image style={styles.back} source={Icons.backArrow} />
          </TouchableOpacity>
          <Image style={styles.forgotSideImg} source={Images.forgotsidebg} />
        </View>

                <View style={styles.TextView}>
                <Text style={styles.Title1}>Forgot Password</Text>
                <Text style={styles.Title2}>Reset your password with just a few clicks</Text>
              
                <View style={styles.commonGap}>
                <CustomTextInput
              value={email}
              onChangeText={this.handleEmailChange}
              placeholder="Email Address"
              iconSource={Icons.email}
              error={errors.email}
              iconColor={errors.email ? 'red' : 'black'}
            />
            </View>
                </View>
                <View style={styles.buttonStyle}>
                <TouchableOpacity
              style={[
                styles.loginButton,
                buttonDisabled
                  ? styles.loginButtonDisabled
                  : styles.loginButtonEnabled,
              ]}
              onPress={this.handlePress}
              disabled={buttonDisabled}>
              <Text style={styles.loginButtonText}>Send Link</Text>
            </TouchableOpacity>
                </View>
                <ForgotModal
          visible={isModalVisible}
          closeModal={this.closeModal}
        />
        <Toast
          config={{error: ({text1}) => <CustomToast text1={text1} />}}
          ref={ref => Toast.setRef(ref)}
        />
           </KeyboardAvoidingView>

        )
    }
}