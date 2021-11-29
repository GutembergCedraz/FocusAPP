import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import Timeline from 'react-native-timeline-flatlist'
import TimelineItem from "../components/TimelineItem";


export default function TimeLine(){

    

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ width: "80%", alignSelf: "center", alignItems: "center"}}>

                <TimelineItem status={1}/>

                <TouchableOpacity style={styles.button}>
                    <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>Cancela Pedido</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: "center",
        justifyContent: "center",
    },
    button: {
        height: 44,
        width: 180,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3B5998",
        marginTop: 120,
        borderRadius: 15
    }
})