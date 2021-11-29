import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen({navigation}) {
	return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerLogo}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../assets/imglogo.png")}
            style={styles.logo}
          />
          <Text style={{ fontWeight: "600", marginLeft: 10, fontSize: 48 }}>
            Focus
          </Text>
        </View>
      </View>

      <View style={{ alignSelf: "center", width: "80%" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("AtivarLocalizacao")}
        >
          <ImageBackground
            style={{ ...styles.buttons, marginTop: 50 }}
            source={require("../assets/buttoncomputador.png")}
            resizeMode="contain"
          >
            <Text style={styles.buttonText}>Computadores</Text>
          </ImageBackground>
        </TouchableOpacity>
        <ImageBackground
          style={{ ...styles.buttons, marginTop: 50 }}
          source={require("../assets/buttoncelular.png")}
          resizeMode="contain"
        >
          <Text style={styles.buttonText}>Celulares/Tablet</Text>
        </ImageBackground>
        <ImageBackground
          style={{ ...styles.buttons, marginTop: 50 }}
          source={require("../assets/buttontv.png")}
          resizeMode="contain"
        >
          <Text style={styles.buttonText}>Televisão</Text>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerLogo: {
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		height: 50,
		width: 50,
	},
	buttons: {
		height: 126,
		width: '100%',
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 15
	},
	buttonText: {
		fontSize: 24,
		fontWeight: "700",
		color: "white",
	}
});
