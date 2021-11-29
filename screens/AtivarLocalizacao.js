import React, {useState, useEffect} from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import * as Location from "expo-location";

export default function AtivarLocalizacao({ navigation }) {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);


  const requestLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    if (status === "granted") {
      navigation.navigate("servicos");
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  useEffect(() => {
    requestLocation()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", alignItems: "center", marginTop: 100 }}>
        <Text style={styles.text}>Ative a Localização</Text>
      </View>

      <View style={{ width: "100%", alignItems: "center" }}>
        <TouchableOpacity style={styles.button} onPress={requestLocation}>
          <Text style={styles.textButton}>Ativar localização</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 30,
        fontWeight: "400",
    },
    button: {
        backgroundColor: "#3B5998",
        width: 172,
        height: 44,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        marginTop: 200
    },
    textButton: {
        fontSize: 18,
        fontWeight: "700",
        color: 'white'
    }
});
