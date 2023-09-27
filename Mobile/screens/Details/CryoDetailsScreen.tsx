import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";

type CryoDetailsScreenRouteProp = RouteProp<
	RootStackParamList,
	"CryoDetails"
>;

type Props = {
	route: CryoDetailsScreenRouteProp;
};

const CryoDetailsScreen: React.FC<Props> = ({ route }) => {
	const { cryoData } = route.params;

	return (
		<View>
			<Text style={styles.titleList}>
				Liste de vos séances de cryothérapie :
			</Text>
			{cryoData.map((item) => (
				<View key={item.id} style={styles.sessionList}>
					<View style={styles.sessionDetail}>
						<Text style={styles.text}>{item.name}</Text>
						<Text style={styles.text}>Séance n° {item.id}</Text>
						<Text style={styles.text}>Date: {item.date}</Text>
					</View>
					<Image
						source={require("../../assets/Smiley_face.png")}
						style={styles.image}
					/>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	titleList: {
		marginTop: 100,
		marginBottom: 20,
		marginLeft: 20,
		fontSize: 20,
		fontWeight: "bold",
		color: "#00B4D8",
	},
	sessionList: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: "80%",
		height: 130,
		backgroundColor: "#fff",
		marginVertical: 5,
		marginLeft: 20,
		paddingLeft: 15,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.18,
		shadowRadius: 4.59,
		elevation: 5,
	},
	sessionDetail: {
		// borderColor: "#594",
		// borderWidth: 2,
		justifyContent: "flex-end",
		paddingBottom: 20,
	},
	text: {
		fontSize: 18,
	},
	image: {
		height: 110,
		width: 100,
		marginRight: 10,
	},
});

export default CryoDetailsScreen;
