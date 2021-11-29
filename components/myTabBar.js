import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function MyTabBar({ state, descriptors, navigation }) {
	return (
		<View style={{ flexDirection: "row" }}>
			{state.routes.map((route, index) => {
				const { options } = descriptors[route.key];

				const label =
					options.tabBarLabel !== undefined
						? options.tabBarLabel
						: options.title !== undefined
						? options.title
                            : route.name;
                const isFocused = state.index === index
			})}
		</View>
	);
}
