import React, { FC } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";

const buttonData = [
	{
		text: "Cryothérapie",
		id: 1,
	},
	{
		text: "Infrathérapie",
		id: 2,
	},
	{
		text: "TESLA",
		id: 3,
	},
];

interface ItemSessionData {
	id: number;
	title: string;
	date: string;
	image?: string;
	isRating: boolean;
}
const sessionData = [
	{
		id: 1,
		title: "cryothérapie",
		date: "15/08/2023",
		image: require("../../assets/boule_verte.png"),
		isRating: true,
	},
	{
		id: 2,
		title: "cryothérapie",
		date: "17/08/2023",
		image: require("../../assets/boule_verte.png"),
		isRating: true,
	},
	{
		id: 3,
		title: "cryothérapie",
		date: "21/08/2023",
		image: require("../../assets/boule_rouge.png"),
		isRating: true,
	},
	{
		id: 4,
		title: "infrathérapie",
		date: "21/08/2023",
		image: require("../../assets/boule_verte.png"),
		isRating: false,
	},
	{
		id: 5,
		title: "infrathérapie",
		date: "21/08/2023",
		image: require("../../assets/boule_verte.png"),
		isRating: false,
	},
	{
		id: 6,
		title: "infrathérapie",
		date: "21/08/2023",
		image: require("../../assets/boule_rouge.png"),
		isRating: false,
	},
	{
		id: 7,
		title: "tesla",
		date: "21/08/2023",
		image: require("../../assets/boule_verte.png"),
		isRating: false,
	},
	{
		id: 8,
		title: "tesla",
		date: "21/08/2023",
		image: require("../../assets/boule_verte.png"),
		isRating: false,
	},
	{
		id: 9,
		title: "tesla",
		date: "21/08/2023",
		image: require("../../assets/boule_rouge.png"),
		isRating: false,
	},
];

interface RatingScreenProps {
	navigation: NavigationProp<RootStackParamList, "Rating">;
	route: RouteProp<RootStackParamList, "Rating">;
	onPress: () => void;
}

const RatingScreen: FC<RatingScreenProps> = ({ navigation }) => {
	const handleCryoButtonPress = (cryotherapie: string) => {
		console.log("Le bouton cryo a été pressé !");

		const sessionsData = sessionData.filter(
			(item) => item.title === cryotherapie
		);
		navigation.navigate("RatingSessionCryoDetails", {
			sessionsData,
		});
	};
	const handleInfraButtonPress = (infrathérapie: string) => {
		console.log("Le bouton cryo a été pressé !");

		const infraSessionData = sessionData.filter(
			(item) => item.title === infrathérapie
		);
		navigation.navigate("RatingSessionInfraDetails", {
			infraSessionData,
		});
	};
	const handleTeslaButtonPress = (tesla: string) => {
		console.log("Le bouton cryo a été pressé !");

		const teslaSessionData = sessionData.filter(
			(item) => item.title === tesla
		);
		navigation.navigate("RatingSessionTeslaDetails", {
			teslaSessionData,
		});
	};
	return (
		<View style={styles.container}>
			<Text style={styles.textLogo}>Attitude Cryo</Text>
			<Text style={styles.title}>Evaluer votre séance</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => handleCryoButtonPress("cryothérapie")}
			>
				<Text style={styles.buttonTitle}>Cryothérapie</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => handleInfraButtonPress("infrathérapie")}
			>
				<Text style={styles.buttonTitle}>Infrathérapie</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.button}
				onPress={() => handleTeslaButtonPress("tesla")}
			>
				<Text style={styles.buttonTitle}>TESLA</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: "#D9D9D9",
	},
	textLogo: {
		color: "#000",
		fontSize: 30,
		textAlign: "center",
		position: "relative",
		top: 40,
		marginTop: 20,
	},
	title: {
		position: "relative",
		top: 40,
		marginTop: 20,
		marginBottom: 140,
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
	},

	button: {
		position: "relative",
		flexDirection: "row",
		backgroundColor: "#00B4D8",
		width: "70%",
		height: "13%",
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 30,
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.18,
		shadowRadius: 4.59,
		elevation: 5,
	},
	buttonTitle: {
		color: "#fff",
		fontWeight: "500",
		fontSize: 20,
	},
});

export default RatingScreen;
