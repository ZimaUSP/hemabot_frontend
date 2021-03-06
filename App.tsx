import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useFonts} from 'expo-font';
import {Poppins_400Regular, Poppins_600SemiBold} from '@expo-google-fonts/poppins';
import {BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import { AppStack } from './src/routes/AppStack';
import AppLoading from 'expo-app-loading';
import AppProvider from './src/hooks';

export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    BebasNeue_400Regular,
  });
  if (!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <>
      <AppProvider>
        <AppStack/>
        <StatusBar style="auto" />
      </AppProvider>
      </>
  );
}

