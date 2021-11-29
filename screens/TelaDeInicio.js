import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function TelaDeInicio({navigation}) {
	return (
		<View style={styles.container}>
			<View style={styles.containerWhite}>
				<View style={{ width: "80%" }}>
					<Text
						style={{
							color: "#3B5998",
							fontWeight: "700",
							fontSize: 24,
							alignSelf: "flex-start",
							marginRight: 10,
							marginTop: 50,
						}}
					>
						Quero Ser
					</Text>
					<Text
						style={{
							color: "#3B5998",
							fontWeight: "700",
							fontSize: 24,
							alignSelf: "flex-start",
						}}
					>
						Cliente
					</Text>
					<View style={styles.buttonWrapper}>
						<TouchableOpacity onPress={() => navigation.navigate("Login")}>
							<View
								style={{
									height: 44,
									width: 146,
									backgroundColor: "#3B5998",
									borderRadius: 15,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Text
									style={{ color: "white", fontWeight: "700", fontSize: 20 }}
								>
									Começar
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<View style={styles.containerBlue}>
				<View style={{ width: "80%" }}>
					<Text
						style={{
							color: "white",
							fontWeight: "700",
							fontSize: 24,
							alignSelf: "flex-end",
							marginRight: 10,
							marginTop: 50,
						}}
					>
						Quero Ser
					</Text>
					<Text
						style={{
							color: "white",
							fontWeight: "700",
							fontSize: 24,
							alignSelf: "flex-end",
						}}
					>
						Freelancer
					</Text>
					<View style={styles.buttonWrapper}>
						<TouchableOpacity
							onPress={() => navigation.navigate("LoginFreelancer")}
						>
							<View
								style={{
									height: 44,
									width: 146,
									backgroundColor: "white",
									borderRadius: 15,
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Text
									style={{ color: "#3B5998", fontWeight: "700", fontSize: 20 }}
								>
									Começar
								</Text>
							</View>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	buttonWrapper: {
		width: "100%",
		alignItems: "center",
		justifyContent: "flex-end",
		marginTop: "70%",
	},
	containerWhite: {
		height: "50%",
		alignItems: "center",
	},
	containerBlue: {
		height: "50%",
		backgroundColor: "#3B5998",
		alignItems: "center",
	},
});
