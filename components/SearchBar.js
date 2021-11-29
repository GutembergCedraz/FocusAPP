import React from "react";
import {View, StyleSheet, TextInput} from 'react-native'
import {Octicons} from 'react-native-vector-icons'


export default function SearchBar(props){
    return (
        <View style={styles.container}>
            <TextInput style={styles.input}/>
            <Octicons name="search" size={30} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 1,
        height: 44,
        alignItems: 'center',
        marginBottom: 20
    },
    input: {
        width: '87%',
        paddingLeft: 20, 
        paddingRight: 20, 
    }
})