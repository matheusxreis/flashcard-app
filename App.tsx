import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-navigation';
import { SignIn } from './src/pages/SignIn';
import { MaterialCommunityIcons } from "@expo/vector-icons";


import { useFonts,
Roboto_100Thin,
Roboto_300Light,
Roboto_500Medium,
Roboto_700Bold } from '@expo-google-fonts/roboto';

import {
  Satisfy_400Regular
} from "@expo-google-fonts/satisfy";

import {
KaushanScript_400Regular
} from "@expo-google-fonts/kaushan-script"
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles/theme';
import { BottomAuthRoutes } from './src/routes/authRoutes/auth.bottom';
import { Routes } from './src/routes';

export default function App() {


  const [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_500Medium,
    Roboto_700Bold,
    KaushanScript_400Regular
  });

  if(!fontsLoaded){
    return null;
  };

  return (
   <ThemeProvider theme={theme}>
      <View style={styles.container}>
       <Routes />
       </View>
    </ThemeProvider>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 0 : 0,
    backgroundColor: 'rgba(57, 122, 249, 0.2)',
    width:'100%'
   
  },
});
