import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './screens/Cadastro';
import Home from './screens/Home';
import HomeFreelancer from "./screensFreelancer/Home";
import Login from './screens/Login';
import LoginFreelancer from './screensFreelancer/Login'
import CadastroFreelancer from './screensFreelancer/Cadastro'
import SplashScreen from './screens/SplashScreen'
import TelaDeInicio from './screens/TelaDeInicio';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AtivarLocalizacao from './screens/AtivarLocalizacao';
import StackNavigation from './screens/StackNavigation';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Stack" component={StackNavigation} />
        <Stack.Screen name="TabNavigation" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

