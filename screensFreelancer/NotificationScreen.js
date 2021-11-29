import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { io } from "socket.io-client";
import ListItemNotification from "../components/listItemNotifications";
const socket = io("https://apiprojectfocus.herokuapp.com");

export default function NotificationScreen({ navigation }) {
  const [perfil, setPerfil] = useState({});
  const [data, setData] = useState([]);

  const loadProfile = async () => {
    const email = await AsyncStorage.getItem("email");
    socket.emit("carregar_perfil", { email: email });
    const arr = [];
    socket.on("perfil_freela", ({ perfil }) => {
      //console.log(perfil.service);
    console.log(perfil)
      setData(perfil.notifications);
      setPerfil(perfil);
    });
  };

  socket.on('contracted_service', ()=> {
      console.log('load_profile')
      loadProfile()
  })

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <FlatList
        style={{flex: 1}}
        data={data}
        keyExtractor={(item) => item.cliente}
        renderItem={({ item }) => (<ListItemNotification item={item} />)}
      />
    </SafeAreaView>
  );
}
