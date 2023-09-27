import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";
import { searchData } from "../Search";

type SearchSportDetailsScreenRouteProp = RouteProp<
	RootStackParamList,
	"SearchSportDetails"
>;

type Props = {
	route: SearchSportDetailsScreenRouteProp;
};

const SearchSportDetailsScreen: React.FC<Props> = ({ route }) => {
	const { sportData } = route.params;
	const navigation = useNavigation();
	// const handleChoicePress = (choiceSession: string) => {
	// 	navigation.navigate("ChoiceDetailsScreen", { choiceSession });
	// };

	return (
		<View>
			<Text style={styles.titleList}>Selectionnez un choix</Text>
			<View style={styles.button}>
				<Image
					style={styles.image}
					source={require("../../assets/sport.png")}
				></Image>
				<Text style={styles.text}>Sport</Text>
			</View>
			{sportData.map((item) => (
				<TouchableOpacity
					key={item.id}
					style={styles.containerChoice}
					onPress={() =>
						navigation.navigate("ChoiceDetailsScreen", {
							choiceSession: item.session,
						})
					}
				>
					<Text style={styles.textChoice}>{item.description}</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	titleList: {
		marginTop: 100,
		marginBottom: 30,
		textAlign: "center",
		fontSize: 20,
	},
	image: {
		position: "relative",
		width: 110,
		height: 80,
		left: 5,
	},
	text: {
		marginLeft: 20,
		color: "#00B4D8",
		fontWeight: "500",
		fontSize: 20,
	},
	button: {
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
	containerChoice: {
		backgroundColor: "#fff",
		width: "70%",
		height: "9%",
		marginLeft: 20,
		justifyContent: "center",
		alignContent: "center",
		marginBottom: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#00B4D8",

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
	textChoice: {
		fontSize: 17,
		fontWeight: "bold",
	},
});

export default SearchSportDetailsScreen;
