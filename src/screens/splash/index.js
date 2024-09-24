import React from "react";
import { Component } from "react";
import { Text,Image,ImageBackground,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Images } from "../../assets/images";
import styles from "./styles";
import { Icons } from "../../assets/icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class SplashScreen extends Component{
        
        handleNavigation = async () => {
            try{
                const {navigation} = this.props;
                let item = await AsyncStorage.getItem('isLogin');
                if (item === 'true')
                {
                    navigation.navigate('Home');
                }
                else{
                    navigation.navigate('Tutorial');
                }
            }
            catch (error){
    
            }
        };
    
        componentDidMount() {
            setTimeout(() => {this.handleNavigation()},3000)
        }
        // handleNav = () =>{
        //   const{navigation}=this.props;
        //   navigation.navigate('Tutorial')
        // }
    
        // componentDidMount() {
        //        setTimeout(() => {
        //         this.handleNav()
        //       },3000)
        //   }

        render(){ 
            return(
                <View style={styles.container}>
                <ImageBackground source={Images.appbg} 
                 style={styles.appBg}>
                  <Image style={styles.appLogo}
                  source={Images.applogo}/>
                </ImageBackground>
              </View>
            );
        }
    }