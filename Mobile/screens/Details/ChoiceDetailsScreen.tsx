import React from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
} from "react-native";
import Button from "../../components/Button/Button";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";

type ChoiceDetailsScreenRouteProp = RouteProp<
	RootStackParamList,
	"ChoiceDetailsScreen"
>;

type Props = {
	route: ChoiceDetailsScreenRouteProp;
};

const ChoiceDetailsScreen: React.FC<Props> = ({ route }) => {
	const { choiceSession } = route.params;
	const navigation = useNavigation();
	return (
		<View>
			<Text style={styles.textLogo}>Attitude Cryo</Text>
			<Text style={styles.textChoice}>Vous avez choisi</Text>
			<View style={styles.containerChoice}>
				<Text style={styles.containerText}>Séance</Text>
				<Text style={styles.containerText}>
					{" "}
					{` ${choiceSession}`}
				</Text>
			</View>
			<TouchableOpacity
				onPress={() => navigation.navigate("BookingSessionScreen")}
				style={styles.button}
			>
				<Text style={styles.buttonText}>Reserver une séance</Text>
			</TouchableOpacity>

			<Text style={styles.textInfo}>
				Rendez-vous sur www.attitudecryo.com pour plus d'informations.
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textLogo: {
		color: "#000",
		fontSize: 30,
		textAlign: "center",
		position: "relative",
		top: 30,
		marginTop: 20,
		marginBottom: 70,
	},
	textChoice: {
		marginBottom: 30,
		textAlign: "center",
		fontSize: 16,
		fontWeight: "bold",
	},
	containerChoice: {
		backgroundColor: "#00B4D8",
		width: "60%",
		paddingVertical: 20,
		borderRadius: 10,
		marginLeft: "auto",
		marginRight: "auto",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 80,
	},
	containerText: {
		color: "#fff",
		fontSize: 22,
		fontWeight: "bold",
	},
	button: {
		backgroundColor: "#fff",
		width: "50%",
		borderRadius: 10,
		paddingVertical: 30,
		marginLeft: "auto",
		marginRight: "auto",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 50,
	},
	buttonText: {
		color: "#00B4D8",
		fontSize: 18,
		fontWeight: "700",
	},
	textInfo: {
		textAlign: "center",
		fontSize: 16,
	},
});
export default ChoiceDetailsScreen;
