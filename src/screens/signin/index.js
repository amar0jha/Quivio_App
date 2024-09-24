import React, {Component} from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-toast-message';
import CustomToast from '../../components/toastmsg';
import AccountLockedModal from '../../components/signinpop';
import BackgroundImage from '../../components/background';
import CustomTextInput from '../../components/customInput';
import styles from './styles';
import {Icons} from '../../assets/icons';



export default class SignInScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isModalVisible: false,
      isPasswordVisible: false,
      loginAttempts: 0,
    };
  }

  _storeData = async () => {
    try {
      await AsyncStorage.setItem('isLogin', 'true');
    } catch (error) {
      // catch
    }
  };

  handleNav = () => {
    const {navigation} = this.props;
    navigation.navigate('Forgot');
  };

  handleEmailChange = email => {
    this.setState({email}, this.validateInputs);
  };

  handlePasswordChange = password => {
    this.setState({password}, this.validateInputs);
  };

  togglePasswordVisibility = () => {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  };

  validateInputs = () => {
    const {email, password} = this.state;
    const errors = {};

    if (!email.trim()) {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email Address is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    }

    this.setState({errors});
  };

  handleLogin = () => {
    const {email, password, loginAttempts} = this.state;
    const validEmail = 'Amar@gmail.com';
    const validPassword = 'Amar@1234';

    if (email !== validEmail || password !== validPassword) {
      const newAttempts = loginAttempts + 1;
      this.setState({loginAttempts: newAttempts});

      if (newAttempts >= 3) {
        this.setState({isModalVisible: true});
      } else {
        Toast.show({
          type: 'error',
          text1: 'Invalid credentials. Please try again',
        });
      }
      return;
    }
    this._storeData();
    this.props.navigation.reset({
      index: 0,
      routes: [{name: 'BottomTab'}],
    });

    Toast.show({
      type: 'success',
      text1: 'Login successful!',
    });
    this.setState({loginAttempts: 0});
  };

  closeModal = () => {
    this.setState({isModalVisible: false, loginAttempts: 0});
  };

  isButtonDisabled = () => {
    const {email, password, errors} = this.state;
    return Object.keys(errors).length > 0 || !email || !password;
  };

  render() {
    const {email, password, errors, isModalVisible, isPasswordVisible} =
      this.state;
    const buttonDisabled = this.isButtonDisabled();

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <BackgroundImage>
          <View style={styles.loginBox}>
            <Text style={styles.title}>Sign In</Text>
            <Text style={styles.subtitle}>with your valid credentials</Text>

            <CustomTextInput
              value={email}
              onChangeText={this.handleEmailChange}
              placeholder="Email Address"
              iconSource={Icons.email}
              error={errors.email}
              iconColor={errors.email ? 'red' : 'black'}
            />

            <CustomTextInput
              value={password}
              onChangeText={this.handlePasswordChange}
              placeholder="Password"
              iconSource={Icons.password}
              error={errors.password}
              secureTextEntry={!isPasswordVisible}
              rightIconSource={
                isPasswordVisible ? Icons.eyeOpen : Icons.eyeClose
              }
              onRightIconPress={this.togglePasswordVisibility}
              iconColor={errors.password ? 'red' : 'black'}
            />

            <TouchableOpacity onPress={this.handleNav}>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>

            <View style={{marginBottom: 60}} />
            <TouchableOpacity
              style={[
                styles.loginButton,
                buttonDisabled
                  ? styles.loginButtonDisabled
                  : styles.loginButtonEnabled,
              ]}
              onPress={this.handleLogin}
              disabled={buttonDisabled}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </BackgroundImage>
        <AccountLockedModal
          visible={isModalVisible}
          closeModal={this.closeModal}
        />
        <Toast
          config={{error: ({text1}) => <CustomToast text1={text1} />}}
          ref={ref => Toast.setRef(ref)}
        />
      </KeyboardAvoidingView>
    );
  }
}
