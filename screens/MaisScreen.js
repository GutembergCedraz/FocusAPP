import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function MaisScreen() {
	return (
		<View style={styles.container}>
			<Text>MaisScreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
