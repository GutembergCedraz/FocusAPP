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
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { io } from "socket.io-client";
const socket = io("https://apiprojectfocus.herokuapp.com/");


export default function Contratar({ navigation, route }) {
  const [visible, setVisible] = useState(false);
  const [profile, setPerfil] = useState({});

  const perfil = {
    nome: route.params.item.prestador,
    sobre: "Sou formado em ciencia da computacao",
    resumoProfissional: {
      instrucao:
        "Ensino medio completo, DATACONTROL Curso: Manutencao, Webdesign e pacote office",
    },
    servico: route.params.item.servico,
    valor: `R${route.params.item.valor}`,
    location: {
      endereco: "Av.antonio Ribas, 200",
      distance: "10",
    },
  };

  const perfil_load = async () => {
    const email = await AsyncStorage.getItem("emailCliente");
    socket.emit("carregar_perfil_cliente", { email: email });
    const arr = [];
    socket.on("perfil_cliente", ({ perfil }) => {
      //console.log(perfil.service);
      console.log(perfil);

      setPerfil(perfil);
    });
  };

  const contratar = async () => {
    const split = route.params.item.prestador.split(" ");

    socket.emit("contract_service", {
      nome: split[0],
      sobrenome: split[1],
      service: {
        id: route.params.item.id,
        cliente: `${profile.nome} ${profile.sobrenome}`,
        valor: `R$${route.params.item.valor}`,
        local: profile.endereco,
        servico: route.params.item.servico,
      },
    });
    navigation.navigate('servicos')
  };

  useEffect(() => {
    perfil_load();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <StatusBar />
        <ScrollView style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <View style={styles.fotoPerfil}>
              <Image height={"100%"} width={"100%"} />
            </View>
            <Text style={{ fontSize: 18, fontWeight: "400", marginLeft: 20 }}>
              {perfil.nome}
            </Text>
          </View>
          <View style={{ width: "90%", alignSelf: "center", marginTop: 20 }}>
            <Text style={{ fontSize: 16, fontWeight: "500" }}> Sobre mim:</Text>
            <View style={{ width: "90%", alignSelf: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "400" }}>
                {perfil.sobre}
              </Text>
            </View>
          </View>
          <View style={{ width: "100%", alignItems: "center" }}>
            <TouchableOpacity style={styles.button}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
                Contratar
              </Text>
            </TouchableOpacity>
          </View>
          <Modal
            visible={true}
            transparent
            animationType="slide"
            onRequestClose={() => {
              setVisible(!visible);
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View style={styles.modalView}>
                <View
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginBottom: 0,
                  }}
                >
                  <TouchableOpacity
                    style={{ ...styles.button2, marginTop: 30 }}
                    onPress={() => navigation.navigate('servicos')}
                  >
                    <Text
                      style={{
                        color: "white",
                        fontSize: 20,
                        fontWeight: "700",
                      }}
                    >
                      Cancelar
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ ...styles.button2, marginTop: 30 }}
                    onPress={contratar}
                  >
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
              </View>
            </View>
          </Modal>
        </ScrollView>
      </SafeAreaView>
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
