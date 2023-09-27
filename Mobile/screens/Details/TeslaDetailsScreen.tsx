import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";

type TeslaDetailsScreenRouteProp = RouteProp<
	RootStackParamList,
	"TeslaDetails"
>;

type Props = {
	route: TeslaDetailsScreenRouteProp;
};

const TeslaDetailsScreen: React.FC<Props> = ({ route }) => {
	const { teslaData } = route.params;

	return (
		<View>
			<Text style={styles.titleList}>
				Liste des noms de cryothérapie :
			</Text>
			{teslaData.map((item) => (
				<View key={item.id}>
					<Text>nom: {item.name}</Text>
					<Text>Date: {item.date}</Text>
				</View>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	titleList: {
		marginTop: 100,
	},
});

export default TeslaDetailsScreen;
