import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { io } from "socket.io-client";
const socket = io("https://apiprojectfocus.herokuapp.com");

export default function Perfil({ navigation }) {
  const [perfil, setPerfil] = useState({});
  const [data, setData] = useState([]);

  const loadProfile = async () => {
    const email = await AsyncStorage.getItem("emailCliente");
    socket.emit("carregar_perfil_cliente", { email: email });
    const arr = [];
    socket.on("perfil_cliente", ({ perfil }) => {
      //console.log(perfil.service);
      
      setData(arr);
      setPerfil(perfil);
    });
  };

  useEffect(() => {
    loadProfile();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "400",
          alignSelf: "center",
          marginTop: 81,
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
              <TextInput value={perfil.sobrenome} style={{ marginLeft: 10 }} />
            </View>
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={{ width: "45%" }}>
            <Text style={{ marginTop: 20 }}>CPF</Text>
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
              <TextInput value={perfil.complemento} style={{ marginLeft: 10 }} />
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
        <View style={styles.inputRow}>
          <View style={{ width: "45%" }}>
            <Text style={{ marginTop: 20 }}>Pagamentos</Text>
            <View style={styles.input}>
              <TextInput style={{ marginLeft: 10 }} />
            </View>
          </View>
          <View style={{ width: "45%" }}>
            <TouchableOpacity
              style={{ ...styles.button, marginTop: 30 }}
              onPress={() => navigation.navigate("AdcCartao")}
            >
              <Text style={{ color: "white", fontSize: 18, fontWeight: "700" }}>
                Add Cartão
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity style={{ ...styles.button, marginTop: 30 }} onPress={()=> navigation.navigate('Historico')}>
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
      </View>
    </SafeAreaView>
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
});
