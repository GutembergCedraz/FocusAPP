import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListComponent from "../components/listItemServicos";
import PickerComponent from "../components/Picker";
import SearchBar from "../components/SearchBar";
import { io } from "socket.io-client";
const socket = io("https://apiprojectfocus.herokuapp.com");

export default function Servicos({ navigation }) {
  const [servico, setServico] = useState({});
  const [data, setData] = useState([]);

  const DataPickerCategory = [
    {
      id: 1,
      label: "Proximidade",
      value: "proximidade",
    },
  ];

  const DataPickerService = [
    {
      id: 1,
      label: "Formatacao",
      value: "formatacao",
    },
  ];

  const fetchService = async () => {
    socket.emit('get_service')
    socket.on('fetch_service', ({services})=> {
      console.log(services)
      const arr = []
      services.map((service)=> {
        service.services.forEach(val => {
          arr.push(val)
        });
      })
      setData(arr)
    })
  }

  useEffect(()=> {
    fetchService()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <SearchBar />
      <View
        style={{
          width: "80%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <PickerComponent label="Categoria" data={DataPickerCategory} />
        <PickerComponent label="Serviço" data={DataPickerService} />
      </View>
      <FlatList
        style={{ marginTop: 20 }}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListComponent
            item={item}
            navigation={navigation}
            setServico={setServico}
          />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    width: "90%",
    height: 138,
    backgroundColor: "#8CA7C8",
    borderRadius: 15,
  },
  button: {
    width: 120,
    height: 44,
    backgroundColor: "#3B5998",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonWrapper: {
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
});
