import AsyncStorage from "@react-native-async-storage/async-storage";
import { Picker } from "@react-native-picker/picker";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StatusBar,
  Platform,
  FlatList,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { io } from "socket.io-client";
const socket = io("https://apiprojectfocus.herokuapp.com");
import ListItem from "./listItem";

export default function Perfil() {
  const [perfil, setPerfil] = useState({});
  const [data, setData] = useState([]);

  const loadProfile = async () => {
    const email = await AsyncStorage.getItem("email");
    socket.emit("carregar_perfil", { email: email });
    const arr = [];
    socket.on("perfil_freela", ({ perfil }) => {
      //console.log(perfil.service);

      setData(perfil.services);
      setPerfil(perfil);
    });
  };

  const [visible, setVisible] = useState(false);
  const [servico, setServico] = useState("");
  const [valor, setValor] = useState("");

  const addservice = async () => {
    console.log(data);
    setVisible(true);
  };

  const salvarServico = async () => {
    const email = await AsyncStorage.getItem("email");

    socket.emit("cadastrar_servico", {
      email: email,
      service: {
        servico: servico,
        prestador: `${perfil.nome} ${perfil.sobrenome}`,
      },
    });
    setVisible(!visible);
  };

  useEffect(() => {
    loadProfile();
    console.log(perfil);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ height: "80%", width: "100%" }}>
        <View
          style={{
            backgroundColor: "black",
            height: 100,
            width: 100,
            alignSelf: "center",
            marginTop: Platform.OS === "ios" ? 50 : StatusBar.currentHeight,
            borderRadius: 50,
          }}
        ></View>

        <View style={styles.inputWrapper}>
          <View style={styles.inputRow}>
            <View style={{ width: "100%" }}>
              <Text style={{}}>Sobre você</Text>
              <View
                style={{
                  ...styles.input,
                  height: 200,
                  justifyContent: "flex-start",
                }}
              >
                <TextInput style={{ marginLeft: 10 }} />
              </View>
            </View>
          </View>
        </View>

        <Text
          style={{
            fontSize: 24,
            fontWeight: "400",
            alignSelf: "center",
            marginTop: 41,
          }}
        >
          Dados Pessoais
        </Text>
        <View style={styles.inputWrapper}>
          <View style={styles.inputRow}>
            <View style={{ width: "45%" }}>
              <Text style={{ marginTop: 40 }}>Nome</Text>
              <View style={styles.input}>
                <TextInput value={perfil.nome} style={{ marginLeft: 10 }} />
              </View>
            </View>
            <View style={{ width: "45%" }}>
              <Text style={{ marginTop: 40 }}>Sobrenome</Text>
              <View style={styles.input}>
                <TextInput
                  value={perfil.sobrenome}
                  style={{ marginLeft: 10 }}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputRow}>
            <View style={{ width: "45%" }}>
              <Text style={{ marginTop: 20 }}>CPF/CNPJ</Text>
              <View style={styles.input}>
                <TextInput value={perfil.cpf} style={{ marginLeft: 10 }} />
              </View>
            </View>
            <View style={{ width: "45%" }}>
              <Text style={{ marginTop: 20 }}>E-mail</Text>
              <View style={styles.input}>
                <TextInput value={perfil.email} style={{ marginLeft: 10 }} />
              </View>
            </View>
          </View>

          <View style={styles.inputRow}>
            <View style={{ width: "45%" }}>
              <Text style={{ marginTop: 50 }}>CEP</Text>
              <View style={styles.input}>
                <TextInput value={perfil.cep} style={{ marginLeft: 10 }} />
              </View>
            </View>
          </View>
          <View style={styles.inputRow}>
            <View style={{ width: "45%" }}>
              <Text style={{ marginTop: 20 }}>Endereço</Text>
              <View style={styles.input}>
                <TextInput value={perfil.endereco} style={{ marginLeft: 10 }} />
              </View>
            </View>
            <View style={{ width: "45%" }}>
              <Text style={{ marginTop: 20 }}>Complemento</Text>
              <View style={styles.input}>
                <TextInput
                  value={perfil.complemento}
                  style={{ marginLeft: 10 }}
                />
              </View>
            </View>
          </View>
          <View style={styles.inputRow}>
            <View style={{ width: "45%" }}>
              <Text style={{ marginTop: 20 }}>Cidade</Text>
              <View style={styles.input}>
                <TextInput value={perfil.cidade} style={{ marginLeft: 10 }} />
              </View>
            </View>
            <View style={{ width: "45%" }}>
              <Text style={{ marginTop: 20 }}>Estado</Text>
              <View style={styles.input}>
                <TextInput value={perfil.estado} style={{ marginLeft: 10 }} />
              </View>
            </View>
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 100,
            }}
          >
            <TouchableOpacity style={{ ...styles.button, marginTop: 30 }}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
                Historico
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.button, marginTop: 30 }}>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "700" }}>
                Salvar
              </Text>
            </TouchableOpacity>
          </View>

          <Text
            style={{
              fontSize: 24,
              fontWeight: "400",
              alignSelf: "center",
              marginTop: 0,
            }}
          >
            Servicos
          </Text>

          <View>
            {/* <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <ListItem item={item} />}
            /> */}
            <ScrollView style={{ marginBottom: 0, height: 400 }}>
              {data.map((item, i) => (
                <ListItem item={item} key={i} />
              ))}
            </ScrollView>

            <TouchableOpacity
              style={{ marginBottom: 100, marginTop: 20 }}
              onPress={() => addservice()}
            >
              <Text>Adcionar servico</Text>
            </TouchableOpacity>

            <Modal
              visible={visible}
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
                  <Picker
                    style={{ width: "100%" }}
                    selectedValue={servico}
                    onValueChange={(itemValue, itemIndex) => {
                      console.log(itemValue)
                      setServico(itemValue);
                      
                      console.log(valor)
                    }}
                  >
                    <Picker.Item label="Formatacao" value="formatacao" />
                    <Picker.Item label="Manutencao" value="manutencao" />
                    <Picker.Item label="Montagem" value="montagem" />
                    <Picker.Item label="Limpeza" value="limpeza" />
                  </Picker>
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      marginBottom: 0,
                    }}
                  >
                    <TouchableOpacity
                      style={{ ...styles.button, marginTop: 30 }}
                      onPress={() => setVisible(!visible)}
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
                      style={{ ...styles.button, marginTop: 30 }}
                      onPress={salvarServico}
                    >
                      <Text
                        style={{
                          color: "white",
                          fontSize: 20,
                          fontWeight: "700",
                        }}
                      >
                        Salvar
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputWrapper: {
    width: "85%",
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    width: "100%",
    height: 24,
    borderRadius: 15,
    justifyContent: "center",
  },
  inputMid: {
    borderWidth: 1,
    width: "45%",
    height: 24,
    borderRadius: 15,
    justifyContent: "center",
  },
  checkboxview: {
    flexDirection: "row",
    marginTop: 30,
    alignItems: "center",
  },
  button: {
    height: 38,
    width: 105,
    backgroundColor: "#3B5998",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  inputRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
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
