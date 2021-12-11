import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { io } from "socket.io-client";
const socket = io("https://apiprojectfocus.herokuapp.com");
//const socket = io("http://localhost:3030");

export default function ListItemNotification({ item, perfil }) {
  const [data, setData] = useState({});

  const aceitar = async () => {
    console.log(perfil.nome);

    socket.emit("aceitar_servico", {
      item: item,
      nome: perfil.nome,
      sobrenome: perfil.sobrenome,
    });
  };

  return (
    <>
      {item.aceitar === true ? (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Endereco: {item.local}</ListItem.Title>
            <ListItem.Subtitle>Cliente: {item.cliente}</ListItem.Subtitle>
            <ListItem.Subtitle>Servico: {item.servico}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ) : (
        <ListItem bottomDivider>
          <ListItem.Content>
            <ListItem.Title>Endereco: {item.local}</ListItem.Title>
            <ListItem.Subtitle>Servico: {item.servico}</ListItem.Subtitle>
            <View
              style={{
                marginBottom: 0,
              }}
            >
              <TouchableOpacity style={{ ...styles.button2 }} onPress={aceitar}>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "700",
                  }}
                >
                  Confirmar
                </Text>
              </TouchableOpacity>
            </View>
          </ListItem.Content>
        </ListItem>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fotoPerfil: {
    height: 100,
    width: 100,
    backgroundColor: "#3B5998",
    borderRadius: 50,
  },
  button: {
    height: 44,
    width: 172,
    backgroundColor: "#3B5998",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  button2: {
    height: 38,
    width: 105,
    backgroundColor: "#3B5998",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position: "absolute",
    left: 0,
    right: 0,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
