import {
	ImageBackground,
	StyleSheet,
	View,
	Text,
} from "react-native";
import React, { FC } from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";
import Button from "../../components/Button/Button";

// type RootStackParamList = {
// 	Home: undefined;
// 	Login: undefined;
// 	Register: undefined;
// };

type HomeScreenProps = {
	navigation: NavigationProp<RootStackParamList, "Home">;
	route: RouteProp<RootStackParamList, "Home">;
	onPress: () => void;
};

const image = require("../../assets/cryo1.jpg");

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
	const handleLoginButtonPress = () => {
		console.log("Le bouton login a été pressé !");
		navigation.navigate("Login");
	};
	const handleRegisterButtonPress = () => {
		console.log("Le bouton register a été pressé !");
		navigation.navigate("Register");
	};
	return (
		<View style={styles.container}>
			<ImageBackground source={image} style={styles.image}>
				<Text style={styles.textLogo}>Attitude Cryo</Text>
				<Button title="Connexion" onPress={handleLoginButtonPress} />
				<Button
					title="Inscription"
					onPress={handleRegisterButtonPress}
				/>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	image: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},

	logo: {
		width: 150,
		height: 200,
	},
	textLogo: {
		color: "#fff",
		fontSize: 30,
		left: "25%",
		position: "absolute",
		top: 50,
		marginTop: 20,
	},
});

export default HomeScreen;
