import React from "react";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Routes from "./routes";

type RootStackParamList = {
	Home: undefined;
	Login: undefined;
	Register: undefined;
};

export default function App() {
	return (
		<View style={{ flex: 1 }}>
			<Routes />
			<StatusBar style="auto" />
		</View>
	);
}
