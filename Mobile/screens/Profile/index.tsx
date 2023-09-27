import React, { FC } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	FlatList,
	ScrollView,
} from "react-native";

import {
	NavigationProp,
	RouteProp,
	useNavigation,
} from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";
import MyCarousel from "../../components/Animation/Carousel/carousel";

const DATA = [
	{
		id: 1,
		name: "cryothérapie",
		séance: 1,
		date: "19BBY",
	},
	{
		name: "infrathérapie",
		séance: 2,
		date: "112BBY",
	},
	{
		id: 3,
		name: "tesla",
		séance: 3,
		date: "33BBY",
	},
	{
		id: 4,
		name: "cryothérapie",
		séance: 4,
		date: "41.9BBY",
	},
	{
		id: 5,
		name: "infrathérapie",
		séance: 5,
		date: "19BBY",
	},
	{
		id: 6,
		name: "tesla",
		séance: 6,
		date: "19BBY",
	},
];

interface ProfileScreenProps {
	navigation: NavigationProp<RootStackParamList, "Welcome">;
	route: RouteProp<RootStackParamList, "Welcome">;
	onPress: () => void;
}

const userName = "Michael";

const ProfileScreen: FC<ProfileScreenProps> = ({ navigation }) => {
	const handleCryoButtonPress = (cryotherapie: string) => {
		console.log("Le bouton cryo a été pressé !");
		const cryoData = DATA.filter(
			(item) => item.name === cryotherapie
		);
		navigation.navigate("CryoDetails", { cryoData });
	};
	const handleInfraButtonPress = (infratherapie: string) => {
		console.log("Le bouton infra a été pressé !");
		const infraData = DATA.filter(
			(item) => item.name === infratherapie
		);
		navigation.navigate("InfraDetails", { infraData });
	};
	const handleTeslaButtonPress = (tesla: string) => {
		console.log("Le bouton tesla a été pressé !");
		const teslaData = DATA.filter((item) => item.name === tesla);
		navigation.navigate("TeslaDetails", { teslaData });
	};

	return (
		<ScrollView style={styles.container}>
			<View>
				<Text style={styles.textLogo}>Attitude Cryo</Text>
				<Text style={styles.welcome}>Hello {userName}</Text>
				<View style={styles.historyContainer}>
					<Image
						style={styles.imageHistory}
						source={require("../../assets/historique.png")}
					></Image>
					<Text style={styles.title}>Mon historique</Text>
				</View>
				<Text style={styles.session}>Mes séances</Text>
				<View style={styles.buttonGroup}>
					<TouchableOpacity
						style={[styles.buttonSearch, { backgroundColor: "#fff" }]}
						onPress={() => handleCryoButtonPress("cryothérapie")}
					>
						<Text style={styles.textSearch}>Cryothérapie</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.buttonSearch, { backgroundColor: "#fff" }]}
						onPress={() => handleInfraButtonPress("infrathérapie")}
					>
						<Text style={styles.textSearch}>Infrathérapie</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[styles.buttonSearch, { backgroundColor: "#fff" }]}
						onPress={() => handleTeslaButtonPress("tesla")}
					>
						<Text style={styles.textSearch}>TESLA</Text>
					</TouchableOpacity>
				</View>
				<View></View>
				<Text>Mes photos:</Text>
				<MyCarousel />
			</View>
		</ScrollView>
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
		top: 10,
		marginTop: 10,
	},
	title: {
		position: "relative",
		marginLeft: 10,
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
		color: "#00B4D8",
	},
	welcome: {
		position: "relative",
		top: 50,
		marginBottom: 10,
		fontSize: 18,

		textAlign: "center",
	},

	historyContainer: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 50,
		backgroundColor: "#fff",
		marginBottom: 30,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.18,
		shadowRadius: 4.59,
		elevation: 5,
	},
	imageHistory: {
		width: 100,
		height: 100,
		marginLeft: 5,
	},

	session: {
		fontWeight: "600",
		marginLeft: 10,
		marginBottom: 20,
	},

	buttonGroup: {
		flexDirection: "row",
	},

	buttonSearch: {
		backgroundColor: "#fff",
		width: "30%",
		height: 60,
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 20,
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
	textSearch: {
		color: "#00B4D8",
		fontWeight: "500",
	},
	ratingContainer: {
		backgroundColor: "#fff",
		marginTop: 50,
		marginBottom: 30,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.18,
		shadowRadius: 4.59,
		elevation: 5,
	},
	imageBottom: {
		width: 200,
		height: 150,
		marginLeft: "auto",
		marginRight: "auto",
	},
	buttonRating: {
		backgroundColor: "#fff",
		width: "50%",
		height: 60,
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 20,
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
	textRating: {
		color: "#00B4D8",
		fontWeight: "500",
	},
});

export default ProfileScreen;
