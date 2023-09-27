import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	FlatList,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";
import Button from "../../components/Button/Button";

type RatingSessionCryoDetailsScreenRouteProp = RouteProp<
	RootStackParamList,
	"RatingSessionCryoDetails"
>;

type Props = {
	route: RatingSessionCryoDetailsScreenRouteProp;
};

const RatingCryoDetailsScreen: React.FC<Props> = ({ route }) => {
	const { sessionsData } = route.params;
	const [dates, setDates] = useState([]);
	// const { id, title, image, date, isRating } = sessionData;
	const navigation = useNavigation();

	// useEffect(() => {
	// 	fetchDates();
	// }, []);

	// const fetchDates = async () => {
	// 	try {
	// 		const response = await fetch(
	// 			"http://localhost:8086/api/sessions"
	// 		);
	// 		if (response.ok) {
	// 			const data = await response.json();
	// 			setDates(data);
	// 		} else {
	// 			console.error("Failed to fetch data");
	// 		}
	// 	} catch (error) {
	// 		console.error("Error fetching data:", error);
	// 	}
	// };

	return (
		<View style={styles.container}>
			<Text style={styles.textLogo}>Attitude Cryo</Text>
			<Text style={styles.title}>Evaluer votre séance</Text>
			<View style={styles.session}>
				<Text style={styles.sessionTitle}>Cryothérapie</Text>
			</View>

			{/* <Text style={styles.text}>Séance n°</Text> */}
			{sessionsData.map((item) => (
				<TouchableOpacity
					key={item.id}
					style={styles.itemSession}
					// onPress={() =>
					// 	navigation.navigate("SessionsDetailsScreen", {
					// 		sessionData: item.id,
					// 	})
					// }
				>
					<Text style={styles.itemSessionTitle}>
						Séance du {item.date}
					</Text>
					{item.image && (
						<Image source={item.image} style={styles.itemImage} />
					)}
				</TouchableOpacity>
			))}
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
	text: {
		position: "relative",
		textAlign: "center",
		marginBottom: 20,
		fontSize: 18,
	},

	session: {
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
	sessionTitle: {
		color: "#fff",
		fontWeight: "500",
		fontSize: 20,
	},
	itemSession: {
		width: "60%",
		height: 55,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 10,
		marginLeft: 20,
		borderColor: "#00B4D8",
		borderWidth: 2,
		borderRadius: 10,
		paddingHorizontal: 5,
		paddingVertical: 10,
	},
	itemSessionTitle: {
		marginLeft: 10,
	},
	itemImage: {
		width: 30,
		height: 30,
	},
});

export default RatingCryoDetailsScreen;
