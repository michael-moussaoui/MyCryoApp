import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";

type BookingSessionScreenRouteProp = RouteProp<
	RootStackParamList,
	"BookingSessionsScreen"
>;

type Props = {
	route: BookingSessionScreenRouteProp;
};

const BookingSessionScreen = () => {
	return (
		<WebView
			source={{
				uri: " https://member-app.deciplus.pro/#/attitudecryo/calendar",
			}}
		></WebView>
	);
};

const styles = StyleSheet.create({});

export default BookingSessionScreen;
