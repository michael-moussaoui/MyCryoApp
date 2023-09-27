import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";

type InfraDetailsScreenRouteProp = RouteProp<
	RootStackParamList,
	"InfraDetails"
>;

type Props = {
	route: InfraDetailsScreenRouteProp;
};

const InfraDetailsScreen: React.FC<Props> = ({ route }) => {
	const { infraData } = route.params;

	return (
		<View>
			<Text style={styles.titleList}>
				Liste des noms de cryothérapie :
			</Text>
			{infraData.map((item) => (
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

export default InfraDetailsScreen;
