import React from "react";
import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	StatusBar,
	Image,
} from "react-native";

export default function SplashScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.header}></View>
			<SafeAreaView style={{ backgroundColor: "white", flex: 1 }}>
				<View style={styles.containerLogo}>
					<View style={{ flexDirection: "row", alignItems: "center" }}>
						<Image
							source={require("../assets/imglogo.png")}
							style={styles.logo}
						/>
						<Text style={{ fontWeight: "700", marginLeft: 20, fontSize: 64 }}>
							Focus
						</Text>
					</View>
				</View>
				<View style={styles.botton}></View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		height: 60,
		backgroundColor: "#3B5998",
		top: 0,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
	},
	botton: {
		height: 80,
		backgroundColor: "#3B5998",
		bottom: 0,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	containerLogo: {
		height: "95%",
		justifyContent: "center",
		alignItems: "center",
	},
	logo: {
		width: 80,
		height: 80,
	},
});
