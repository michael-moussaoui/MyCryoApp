import React, { FC } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
} from "react-native";
import {
	NavigationProp,
	RouteProp,
	useNavigation,
} from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";

interface ItemData {
	id: number;
	title: string;
	description: string;
	session: string;
}

const buttonData = [
	{
		imageSource: require("../../assets/sport.png"),
		text: "Sport",
		id: 1,
	},
	{
		imageSource: require("../../assets/la_douleur.png"),
		text: "Douleur",
		id: 2,
	},
	{
		imageSource: require("../../assets/bien_etre.png"),
		text: "Bien-être",
		id: 3,
	},
	{
		imageSource: require("../../assets/reprise_sportive.png"),
		text: "Reprise sportive",
		id: 4,
	},
];

export const searchData: ItemData[] = [
	{
		id: 1,
		title: "sport",
		description: "Récupération",
		session: "Cryothérapie",
	},
	{
		id: 2,
		title: "sport",
		description: "choix n°2",
		session: "Tesla",
	},
	{
		id: 3,
		title: "sport",
		description: "choix n°3",
		session: "Cryothérapie",
	},
	{
		id: 4,
		title: "douleur",
		description: "choix n°1",
		session: "Cryothérapie",
	},
	{
		id: 5,
		title: "douleur",
		description: "choix n°2",
		session: "Cryothérapie",
	},
	{
		id: 6,
		title: "douleur",
		description: "choix n°3",
		session: "Infrathérapie",
	},
	{
		id: 7,
		title: "douleur",
		description: "choix n°4",
		session: "Infrathérapie",
	},
	{
		id: 8,
		title: "douleur",
		description: "choix n°5",
		session: "Cryothérapie",
	},
	{
		id: 9,
		title: "bien-etre",
		description: "choix n°1",
		session: "Infrathérapie",
	},
	{
		id: 10,
		title: "bien-etre",
		description: "choix n°2",
		session: "Infrathérapie",
	},
	{
		id: 11,
		title: "bien-etre",
		description: "choix n°3",
		session: "Infrathérapie",
	},
	{
		id: 12,
		title: "bien-etre",
		description: "choix n°4",
		session: "Tesla",
	},
	{
		id: 13,
		title: "reprise sportive",
		description: "choix n°1",
		session: "Tesla",
	},
	{
		id: 14,
		title: "reprise sportive",
		description: "choix n°2",
		session: "Infrathérapie",
	},
	{
		id: 15,
		title: "reprise sportive",
		description: "choix n°3",
		session: "Cryothérapie",
	},
	{
		id: 16,
		title: "sport",
		description: "choix n°4",
		session: "Cryothérapie",
	},
	{
		id: 17,
		title: "sport",
		description: "choix n°5",
		session: "Infrathérapie",
	},
];

interface SearchScreenProps {
	navigation: NavigationProp<RootStackParamList, "Search">;
	route: RouteProp<RootStackParamList, "Search">;
	onPress: () => void;
}

const SearchScreen: FC<SearchScreenProps> = ({ navigation }) => {
	const handleSearchSportButtonPress = (sport: string) => {
		console.log("Le bouton a été pressé avec l'ID : ");

		const sportData = searchData.filter(
			(item) => item.title === sport
		);
		console.log(sportData);

		navigation.navigate("SearchSportDetails", { sportData });
	};

	const handleSearchPainButtonPress = (douleur: string) => {
		console.log("Le bouton a été pressé avec l'ID : ");

		const painData = searchData.filter(
			(item) => item.title === douleur
		);
		navigation.navigate("SearchPainDetails", { painData });
	};

	const handleSearchWellnessButtonPress = (wellness: string) => {
		console.log("Le bouton a été pressé avec l'ID : ");

		const wellnessData = searchData.filter(
			(item) => item.title === wellness
		);
		navigation.navigate("SearchWellnessDetails", { wellnessData });
	};

	const handleSearchResumptionOfSportsButtonPress = (
		resumptionOfSports: string
	) => {
		console.log("Le bouton a été pressé avec l'ID: ");

		const resumptionOfSportsData = searchData.filter(
			(item) => item.title === resumptionOfSports
		);
		navigation.navigate("SearchResumptionOfSportsDetails", {
			resumptionOfSportsData,
		});
	};
	return (
		<View style={styles.container}>
			<Text style={styles.textLogo}>Attitude Cryo</Text>
			<Text style={styles.title}>Quel est votre objectif?</Text>
			<TouchableOpacity
				onPress={() => handleSearchSportButtonPress("sport")}
				style={[styles.buttonSport, { backgroundColor: "#fff" }]}
			>
				<Image
					style={styles.imageSport}
					source={require("../../assets/sport.png")}
				></Image>
				<Text style={styles.textSport}>Sport</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() => handleSearchPainButtonPress("douleur")}
				style={[styles.buttonSport, { backgroundColor: "#fff" }]}
			>
				<Image
					style={styles.imageSport}
					source={require("../../assets/la_douleur.png")}
				></Image>
				<Text style={styles.textSport}>Douleur</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => handleSearchWellnessButtonPress("bien-etre")}
				style={[styles.buttonSport, { backgroundColor: "#fff" }]}
			>
				<Image
					style={styles.imageSport}
					source={require("../../assets/bien_etre.png")}
				></Image>
				<Text style={styles.textSport}>Bien-être</Text>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={() =>
					handleSearchResumptionOfSportsButtonPress(
						"reprise sportive"
					)
				}
				style={[styles.buttonSport, { backgroundColor: "#fff" }]}
			>
				<Image
					style={styles.imageSport}
					source={require("../../assets/reprise_sportive.png")}
				></Image>
				<Text style={styles.textSport}>Reprise sportive</Text>
			</TouchableOpacity>

			{/* {buttonData.map((button) => (
				<TouchableOpacity
					key={button.id}
					onPress={() => handleSearchButtonPress(button)}
					style={[styles.buttonSport, { backgroundColor: "#fff" }]}
				>
					<Image
						style={styles.imageSport}
						source={button.imageSource}
					></Image>
					<Text style={styles.textSport}>{button.text}</Text>
				</TouchableOpacity>
			))} */}
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
		marginBottom: 80,
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
	},

	imageSport: {
		position: "relative",
		width: 110,
		height: 80,
		left: 5,
	},
	buttonSport: {
		position: "relative",
		flexDirection: "row",
		backgroundColor: "#fff",
		width: "70%",
		height: "13%",
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 20,
		borderRadius: 10,

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
	textSport: {
		color: "#000",
		fontWeight: "500",
		fontSize: 17,
	},
});

export default SearchScreen;
