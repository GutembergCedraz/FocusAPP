import React from "react";
import { View, Text } from "react-native";
import { ListItem } from "react-native-elements";

export default function ListItemHistorico({ item }) {
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>Endereco: {item.local}</ListItem.Title>
        <ListItem.Subtitle>Cliente: {item.cliente}</ListItem.Subtitle>
        <ListItem.Subtitle>Servico: {item.servico}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}
