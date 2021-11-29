import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { ProgressBar, Colors } from "react-native-paper";

export default function TimelineItem({ status }) {
  function Progress() {
    switch (status) {
      case 1:
        return 0.25;
      case 2:
        return 0.5;
      case 3:
        return 0.75;
      case 4:
        return 1;
    }
  }

  function Status() {
    switch (status) {
      case 1:
        return "Verificação com o Tecnico";
      case 2:
        return "Tecnico indo até o local";
      case 3:
        return "Em andamento";
      case 4:
        return "Serviço Finalizado";
    }
  }

  return (
    <>
      <ProgressBar
        progress={Progress()}
        color={Colors.black}
        style={{
          height: 15,
          width: "100%",
          alignSelf: "center",
          borderRadius: 10,
        }}
      />

      <View
        style={{ width: "80%", alignSelf: "flex-start", flexDirection: "row" }}
      >
        <Text style={{ marginTop: 20 }}>
          Status:{/* */} {Status()}
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  dotfill: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: "black",
  },
  dot: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black",
  },
  row: {
    height: 3,
    width: 90,
    backgroundColor: "black",
  },
});
