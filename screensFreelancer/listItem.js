import React from "react";
import {View, Text} from "react-native";
import { ListItem} from "react-native-elements";

export default function ListItemComponent({item}){
    return (
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{item.servico}</ListItem.Title>
          <ListItem.Subtitle>{item.valor}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
}