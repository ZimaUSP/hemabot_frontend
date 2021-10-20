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
        screenOptions={{ headerShown: false}}>
            <Screen
            name="MainPage"
            component={MainPage}
            options={{
                tabBarLabel:'',
                tabBarIcon:({color, size, focused}) =>{
                    return(
                        <FontAwesome name='paper-plane' size={size} color={focused ? "#FF545E" : color}/>
                    );
                }
            }}/>
            <Screen 
            name="Info" 
            component ={Info}
            options={{
                tabBarLabel:'',
                tabBarIcon:({color, size, focused}) =>{
                    return(
                        <FontAwesome name='book' size={size} color={focused ? "#FF545E" : color}/>
                    );
                }
            }} />
            <Screen 
            name="Profile" 
            component ={Profile}
            options={{
                tabBarLabel:'',
                tabBarIcon:({color, size, focused}) =>{
                    return(
                        <FontAwesome name='user' size={size} color={focused ? "#FF545E" : color}/>
                    );
                }
            }} />


        </Navigator>
    )

}

export default BottomTabs;