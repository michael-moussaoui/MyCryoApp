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

interface WelcomeScreenProps {
	navigation: NavigationProp<RootStackParamList, "Welcome">;
	route: RouteProp<RootStackParamList, "Welcome">;
	onPress: () => void;
}

const WelcomeScreen: FC<WelcomeScreenProps> = ({ navigation }) => {
	const handleSearchButtonPress = () => {
		// console.log("Le bouton a été pressé !");
		navigation.navigate("Search");
	};
	const handleRatingButtonPress = () => {
		// console.log("Le bouton a été pressé !");
		navigation.navigate("Rating");
	};
	return (
		<View style={styles.container}>
			<Text style={styles.textLogo}>Attitude Cryo</Text>
			<Text style={styles.title}>Bienvenue sur Attitude Cryo</Text>
			<View style={styles.searchContainer}>
				<Image
					style={styles.imageTop}
					source={require("../../assets/Yoga.png")}
				></Image>
			</View>
			<TouchableOpacity
				style={[styles.buttonSearch, { backgroundColor: "#fff" }]}
				onPress={handleSearchButtonPress}
			>
				<Text style={styles.textSearch}>Rechercher une séance</Text>
			</TouchableOpacity>
			<View style={styles.ratingContainer}>
				<Image
					style={styles.imageBottom}
					source={require("../../assets/rating.png")}
				></Image>
			</View>
			<TouchableOpacity
				style={[styles.buttonRating, { backgroundColor: "#fff" }]}
				onPress={handleRatingButtonPress}
			>
				<Text style={styles.textRating}>Evaluer une séance</Text>
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
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
	},

	searchContainer: {
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
	imageTop: {
		width: 100,
		height: 150,
		marginLeft: "auto",
		marginRight: "auto",
	},
	buttonSearch: {
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

export default WelcomeScreen;
