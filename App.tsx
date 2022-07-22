import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-navigation';
import { SignIn } from './src/pages/SignIn';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function App() {
  return (
   
    <View style={styles.container}>
  <SignIn />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 50 : 0,
    backgroundColor: '#fff'
   
  },
});
