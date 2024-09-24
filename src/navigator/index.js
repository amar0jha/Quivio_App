import React from 'react';
import {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenNames} from './screennames';
import BottomTab from './bottomtab';
import SplashScreen from '../screens/splash';
import SignInScreen from '../screens/signin';
import TutorialScreen from '../screens/tutorial';
import ForgetScreen from '../screens/forgot';
import ResetScreen from '../screens/reset';
import PhoneScreen from '../screens/phone';
import OtpScreen from '../screens/otp';

export default class Rootnavigator extends Component {
  render() {
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
          }}>
            

          <Stack.Screen
            component={SplashScreen}
            name={ScreenNames.Splash}
            options={{headerShown: false}}
          />

          <Stack.Screen
            component={TutorialScreen}
            name={ScreenNames.Tutorial}
            options={{headerShown: false}}
          />

          <Stack.Screen
            component={SignInScreen}
            name={ScreenNames.SignIn}
            options={{headerShown: false}}
          />

          <Stack.Screen
            component={ForgetScreen}
            name={ScreenNames.Forgot}
            options={{headerShown: false}}
          />

          <Stack.Screen
            component={ResetScreen}
            name={ScreenNames.Reset}
            options={{headerShown: false}}
          />

          <Stack.Screen
            component={OtpScreen}
            name={ScreenNames.Otp}
            options={{headerShown: false}}
          />

          <Stack.Screen
            component={PhoneScreen}
            name={ScreenNames.Phone}
            options={{headerShown: false}}
          />

          <Stack.Screen
            component={BottomTab}
            name={ScreenNames.BottomTab}
            options={{headerShown: false}}
          />
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
