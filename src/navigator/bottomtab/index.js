import React from "react";
import { Component } from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { ScreenNames } from "../screennames";
import { Icons } from "../../assets/icons";
import { Image } from "react-native";
import { Images } from "../../assets/images";
import HomeScreen from "../../screens/home";
import AccountScreen from "../../screens/accounts";
import FavouriteScreen from "../../screens/favorites";
import MenuScreen from "../../screens/menu";

const Tab = createBottomTabNavigator();

export default class BottomTab extends Component{
    render(){
        return(
            <Tab.Navigator 
            screenOptions={({route}) =>({
                tabBarIcon:({ focused,color,size}) =>{
                    let iconName ;
                   
                    switch (route.name) {
                        case ScreenNames.Home:
                            iconName = focused ? Icons.homeSelected : Icons.homeUnSelected;
                            break;
                        case ScreenNames.Account:
                            iconName = focused ? Icons.accountSelected : Icons.accountUnSelected;
                            break;
                        case ScreenNames.Favourite:
                            iconName = focused ? Icons.favouritesSelected : Icons.favouritesUnSelected;
                            break;
                        case ScreenNames.Menu:
                            iconName = focused ? Icons.menuSelected : Icons.menuUnSelected;
                            break;
                        default:
                            iconName = Icons.homeSelected;
                            break;
                    }
                   return <Image
                   source = {iconName}
                   style = {{width:20,height:20,}}/>
                }
            })}>
                <Tab.Screen
                component={HomeScreen}
                name={ScreenNames.Home}
                options={{headerShown:false}}
                />
                <Tab.Screen
                component={AccountScreen}
                name={ScreenNames.Account}
                options={{headerShown:false}}
                />
                <Tab.Screen
                component={FavouriteScreen}
                name={ScreenNames.Favourite}
                options={{headerShown:false}}
                />
                <Tab.Screen
                component={MenuScreen}
                name={ScreenNames.Menu}
                options={{headerShown:false}}
                />
            </Tab.Navigator>
        )
    }
}