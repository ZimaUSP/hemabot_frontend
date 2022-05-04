import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../pages/login';
import BottomTabs from './BottomTabs';
import LoadingPage from '../pages/loading-page';
import WaitingPage from '../pages/waiting-page';
import SignUp from '../pages/sign-up';

// export type AppStackScreenList = {Login:undefined, MainPage:undefined}

const{ Navigator, Screen }= createStackNavigator();/*<AppStackScreenList>*/

export const AppStack = () => (
    <NavigationContainer>
        <Navigator screenOptions={{headerShown:false}}>
            <Screen name="Login" component={Login}/>
            <Screen name="SignUp" component={SignUp}/>
            <Screen name="WaitingPage" component={WaitingPage}/>
            <Screen name="LoadingPage" component={LoadingPage}/>
            <Screen name="BottomTabs" component={BottomTabs}/>
        </Navigator>
    </NavigationContainer>
);