import React, {useState, useEffect} from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";

export default function AdcCartao({ navigation }) {

  

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.buttonBack}
          onPress={() => navigation.goBack()}
        ></TouchableOpacity>
      </View>
      <View style={styles.appWrapper}>
        <Text style={{ fontSize: 28, fontWeight: "500", alignSelf: "center" }}>
          Adicionar Cartão
        </Text>

        <View>
          <Text style={{ marginTop: 40 }}>Nome completo</Text>
          <View style={styles.input}>
            <TextInput style={{ marginLeft: 10 }} />
          </View>
        </View>
        <View>
          <Text style={{ marginTop: 40 }}>Numero do Cartão</Text>
          <View style={styles.input}>
            <TextInput style={{ marginLeft: 10 }} />
          </View>
        </View>
        <View style={styles.inputRow}>
          <View style={{ width: "45%" }}>
            <Text style={{ marginTop: 20 }}>Data de Validade</Text>
            <View style={styles.input}>
              <TextInput style={{ marginLeft: 10 }} />
            </View>
          </View>
          <View style={{ width: "45%" }}>
            <Text style={{ marginTop: 20 }}>CVV</Text>
            <View style={styles.input}>
              <TextInput style={{ marginLeft: 10 }} />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: "#FFF", fontWeight: "700", fontSize: 20 }}>
            Confirmar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "95%",
    alignSelf: "center",
  },
  buttonBack: {
    height: 40,
    width: 74,
    backgroundColor: "#3B5998",
    borderRadius: 15,
  },
  appWrapper: {
    width: "80%",
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    width: "100%",
    height: 24,
    borderRadius: 15,
    justifyContent: "center",
  },
  inputRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    width: 146,
    height: 44,
    backgroundColor: "#3b5998",
    alignSelf: "center",
    marginTop: 100,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
