import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Checkbox({checked, setChecked}) {
    

    return (
        <TouchableOpacity onPress={()=> setChecked(!checked)}>

            <View style={{...styles.checkbox, backgroundColor: checked ? 'black': 'white'}}>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    checkbox: {
        width: 16,
        height: 9,
        borderWidth: 1,
        borderRadius: 5
    }
})