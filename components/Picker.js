import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function PickerComponent({data, label}) {
  return (
    <View>
        <Text>{label}</Text>
      <View style={styles.container}>
        <Picker style={{ width: "100%" }}>
          {/* <Picker.Item label="Formatacao" value="formatacao" />
          <Picker.Item label="Formatacao" value="formatacao" />
          <Picker.Item label="Formatacao" value="formatacao" />
          <Picker.Item label="Formatacao" value="formatacao" /> */}
          {data.map((item, i) => {
              return <Picker.Item label={item.label} value={item.value}/>
          })}
        </Picker>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: 131,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#000000",
    flexDirection: "row",
    alignItems: "center",
  },
});
