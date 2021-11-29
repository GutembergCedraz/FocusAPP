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
import ListItemHistorico from "../components/listItemHistorico";
import ListItemNotification from "../components/listItemNotifications";
const socket = io("https://apiprojectfocus.herokuapp.com");

export default function Historico({ navigation }) {
  const [perfil, setPerfil] = useState({});
  const [data, setData] = useState([]);

  const loadProfile = async () => {
    const email = await AsyncStorage.getItem("emailCliente");
    socket.emit("carregar_perfil_cliente", { email: email });
    const arr = [];
    socket.on("perfil_cliente", ({ perfil }) => {
      //console.log(perfil.service);
      console.log(perfil);
      setData(perfil.historico);
    });
  };

  socket.on("contracted_service", () => {
    console.log("load_profile");
    loadProfile();
  });

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <FlatList
        style={{height: '100%', width: '100%'}}
        data={data}
        keyExtractor={(item) => item.cliente}
        renderItem={({ item }) => <ListItemHistorico item={item} />}
      />
    </SafeAreaView>
  );
}
