import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Entypo, FontAwesome5, AntDesign } from "react-native-vector-icons";

export default function ListComponent({ item, setVisible, navigation}) {
  return (
    <TouchableOpacity style={styles.listContainer} onPress={() => {navigation.navigate('Contratar', {item: item})}}>
      <View style={{alignItems: "center"}}>
        <View style={styles.fotoPerfil}>
          <Image />
        </View>
        <Text style={{ marginTop: 10 }}>{item.prestador}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="tool" size={15} />
          <Text>{item.servico}</Text>
          <FontAwesome5
            name="coins"
            size={15}
            color="#FFAA04"
            style={{ marginLeft: 5, marginRight: 5 }}
          />
          <Text>R${item.valor}</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 30,
          }}
        >
          <Entypo
            name="location"
            size={15}
            color="black"
            style={{ marginRight: 5 }}
          />
          <Text>{item.distance}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fotoPerfil: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "black",
  },
  listContainer: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});
