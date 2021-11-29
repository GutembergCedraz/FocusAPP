import React from "react";
import { StatusBar, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Perfil from "./Perfil";
import HomeScreen from "./HomeScreen";
import MaisScreen from "./MaisScreen";
import {
	SimpleLineIcons,
	Feather,
	FontAwesome,
	Entypo
} from "react-native-vector-icons";
import NotificationScreen from "./NotificationScreen";

const Tab = createBottomTabNavigator();

export default function Home() {
	const options = {
		headerShown: false,
	};

	return (
    <NavigationContainer independent={true} options={options}>
      <StatusBar/>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: "absolute",
            right: 0,
            left: 0,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            backgroundColor: "#3B5998",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <SimpleLineIcons
                  name="home"
                  size={30}
                  color={focused ? "white" : "black"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <FontAwesome
                  name="user-o"
                  size={30}
                  color={focused ? "white" : "black"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Notificacoes"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Entypo
                  name="notification"
                  size={30}
                  color={focused ? "white" : "black"}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={MaisScreen}
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Feather
                  name="plus-circle"
                  size={28}
                  color={focused ? "white" : "black"}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
