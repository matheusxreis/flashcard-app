import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator, Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-navigation';
import { SignIn } from './src/modules/auth/views/SignIn';
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
import { theme } from './src/global/styles/theme';
import { BottomAuthRoutes } from './src/global/routes/authRoutes/auth.bottom';
import { Routes } from './src/global/routes';
import { Provider } from 'react-redux';
import { store, persistor } from './src/global/store';
import { PersistGate } from 'redux-persist/integration/react';
import { MyThemeProvider } from './src/global/styles/themeProvider';
import './src/global/services/translation/i18n';

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
    <Provider store={store}>
    <PersistGate persistor={persistor}>
   
      <MyThemeProvider>
        <View style={styles.container}>
        <Routes />
        </View>
        </MyThemeProvider>
    </PersistGate>
    </Provider>
   
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
