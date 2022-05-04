import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome} from '@expo/vector-icons'
import MainPage from '../pages/main-page';
import Info from '../pages/info';
import Profile from '../pages/profile';

const{Navigator, Screen} = createBottomTabNavigator();

function BottomTabs(){
    return(
        <Navigator 
            screenOptions={{headerShown:false}}
             //@ts-ignore
            tabBarOptions={{ 
            style:{
                elevation: 0,
                shadowOpacity: 0,
                height: 64,
            },
            tabStyle:{
                flexDirection: 'column',
            },
            iconStyle:{
                width: 20,
                height: 20,
            },
            inactiveBackgroundColor: "#1455d1",
            activeBackgroundColor: "#133c8B",
            inactiveTintColor:"#FFFFF"}}
            >
            <Screen
            name="MainPage"
            component={MainPage}
            options={{
                tabBarLabel:'',
                tabBarIcon:({size}) =>{
                    return(
                        <FontAwesome name='paper-plane' size={size} color={"#F5F5EF"}/>
                    );
                }
            }}/>
            <Screen 
            name="Info" 
            component ={Info}
            options={{
                tabBarLabel:'',
                tabBarIcon:({size}) =>{
                    return(
                        <FontAwesome name='book' size={size} color={"#F5F5EF"}/>
                    );
                }
            }} />
            <Screen 
            name="Profile" 
            component ={Profile}
            options={{
                tabBarLabel:'',
                tabBarIcon:({size}) =>{
                    return(
                        <FontAwesome name='user' size={size} color={"#F5F5EF"}/>
                    );
                }
            }} />


        </Navigator>
    )

}

export default BottomTabs;