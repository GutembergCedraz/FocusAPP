import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Home from "./Home";
import HomeFreelancer from "../screensFreelancer/Home";
import Login from "./Login";
import LoginFreelancer from "../screensFreelancer/Login";
import CadastroFreelancer from "../screensFreelancer/Cadastro";
import SplashScreen from "./SplashScreen";
import TelaDeInicio from "./TelaDeInicio";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AtivarLocalizacao from "./AtivarLocalizacao";
import Cadastro from "./Cadastro";
import AdcCartao from "./AdcCartao";
import Servicos from "./servicos";
import TimeLine from "./Timeline";
import Contratar from "../screensFreelancer/MaisScreen";
import Historico from "./Historico";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="TelaDeInicio"
        component={TelaDeInicio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: true }}
      />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="TimeLine" component={TimeLine} />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AdcCartao" component={AdcCartao} />
      <Stack.Screen name="servicos" component={Servicos} />
      <Stack.Screen name="AtivarLocalizacao" component={AtivarLocalizacao} />
      <Stack.Screen name="Contratar" component={Contratar} />
      <Stack.Screen name="Historico" component={Historico} />
      {/* screens freelancer */}
      <Stack.Screen name="LoginFreelancer" component={LoginFreelancer} />
      <Stack.Screen name="CadastroFreelancer" component={CadastroFreelancer} />
      <Stack.Screen
        name="HomeFreelancer"
        component={HomeFreelancer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
