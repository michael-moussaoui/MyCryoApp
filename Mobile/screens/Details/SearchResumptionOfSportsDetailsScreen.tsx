// import React, { useState } from "react";
// import {
// 	View,
// 	Text,
// 	StyleSheet,
// 	Image,
// 	FlatList,
// 	TouchableOpacity,
// } from "react-native";
// import { RouteProp } from "@react-navigation/native";
// import { RootStackParamList } from "../../routes/index";

// type SearchSportDetailsScreenRouteProp = RouteProp<
// 	RootStackParamList,
// 	"searchSportDetails"
// >;

// type Props = {
// 	route: SearchSportDetailsScreenRouteProp;
// };

// type ItemProps = {
// 	item: ItemData;
// 	onPress: () => void;
// };

// const SearchSportDetailsScreen: React.FC<Props> = ({ route }) => {
// 	const { sportData } = route.params;

// 	const [selectedSport, setSelectedSport] = useState(null);

// 	const handleSportSelect = (sport) => {
// 		setSelectedSport(sport);
// 	};

// 	const renderItem = ({ item, onPress }: ItemProps) => (
// 		<TouchableOpacity
// 			style={[
// 				styles.containerChoice,
// 				selectedSport?.title === item.title && styles.selectedChoice,
// 			]}
// 			onPress={() => handleSportSelect(item)}
// 		>
// 			<Text>{item.title}</Text>
// 			<Text>{item.description}</Text>
// 		</TouchableOpacity>
// 	);

// 	return (
// 		<View>
// 			<Text style={styles.titleList}>Selectionnez un choix</Text>
// 			<View style={styles.buttonSport}>
// 				<Image
// 					style={styles.imageSport}
// 					source={require("../../assets/sport.png")}
// 				></Image>
// 				<Text style={styles.textSport}>Sport</Text>
// 			</View>
// 			<FlatList
// 				data={sportData}
// 				renderItem={renderItem}
// 				keyExtractor={(item) => item.id}
// 			/>
// 			{/* {sportData.map((item) => (
// 				<View style={styles.containerChoice} key={item.id}>
// 					<Text>{item.title}</Text>
// 					<Text>{item.description}</Text>
// 				</View>
// 			))} */}
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	titleList: {
// 		marginTop: 100,
// 		marginBottom: 30,
// 		textAlign: "center",
// 		fontSize: 20,
// 	},
// 	imageSport: {
// 		position: "relative",
// 		width: 110,
// 		height: 80,
// 		left: 5,
// 	},
// 	textSport: {
// 		marginLeft: 20,
// 		color: "#00B4D8",
// 		fontWeight: "500",
// 		fontSize: 20,
// 	},
// 	buttonSport: {
// 		position: "relative",
// 		flexDirection: "row",
// 		backgroundColor: "#fff",
// 		width: "70%",
// 		height: "13%",
// 		marginLeft: "auto",
// 		marginRight: "auto",
// 		marginBottom: 20,
// 		borderRadius: 10,

// 		alignItems: "center",
// 		shadowColor: "#000",
// 		shadowOffset: {
// 			width: 0,
// 			height: 3,
// 		},
// 		shadowOpacity: 0.18,
// 		shadowRadius: 4.59,
// 		elevation: 5,
// 	},
// 	containerChoice: {
// 		backgroundColor: "#fff",
// 		width: "70%",
// 		height: "5%",
// 		marginLeft: 20,

// 		marginBottom: 20,
// 		borderRadius: 10,
// 		borderWidth: 1,
// 		borderColor: "#00B4D8",

// 		alignItems: "center",
// 		shadowColor: "#000",
// 		shadowOffset: {
// 			width: 0,
// 			height: 3,
// 		},
// 		shadowOpacity: 0.18,
// 		shadowRadius: 4.59,
// 		elevation: 5,
// 	},
// 	selectedChoice: {
// 		backgroundColor: "#00B4D8",
// 	},
// });

// export default SearchSportDetailsScreen;

//**************************** *//

// import React from "react";
// import {
// 	SafeAreaView,
// 	View,
// 	FlatList,
// 	StyleSheet,
// 	Text,
// 	StatusBar,
// } from "react-native";

// const DATA = [
// 	{
// 		id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
// 		title: "First Item",
// 	},
// 	{
// 		id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
// 		title: "Second Item",
// 	},
// 	{
// 		id: "58694a0f-3da1-471f-bd96-145571e29d72",
// 		title: "Third Item",
// 	},
// ];

// type ItemProps = { title: string };

// const Item = ({ title }: ItemProps) => (
// 	<View style={styles.item}>
// 		<Text style={styles.title}>{title}</Text>
// 	</View>
// );

// const SearchSportDetailsScreen = () => {
// 	return (
// 		<SafeAreaView style={styles.container}>
// 			<FlatList
// 				data={DATA}
// 				renderItem={({ item }) => <Item title={item.title} />}
// 				keyExtractor={(item) => item.id}
// 			/>
// 		</SafeAreaView>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		marginTop: StatusBar.currentHeight || 0,
// 	},
// 	item: {
// 		backgroundColor: "#f9c2ff",
// 		padding: 20,
// 		marginVertical: 8,
// 		marginHorizontal: 16,
// 	},
// 	title: {
// 		fontSize: 32,
// 	},
// });

// export default SearchSportDetailsScreen;

import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";

type SearchResumptionOfSportsDetailsScreenRouteProp = RouteProp<
	RootStackParamList,
	"SearchResumptionOfSportsDetails"
>;

type Props = {
	route: SearchResumptionOfSportsDetailsScreenRouteProp;
};

const SearchResumptionOfSportsDetailsScreen: React.FC<Props> = ({
	route,
}) => {
	const { resumptionOfSportsData } = route.params;

	return (
		<View>
			<Text style={styles.titleList}>Selectionnez un choix</Text>
			<View style={styles.button}>
				<Image
					style={styles.image}
					source={require("../../assets/reprise_sportive.png")}
				></Image>
				<Text style={styles.text}>Reprise sportive</Text>
			</View>
			{resumptionOfSportsData.map((item) => (
				<TouchableOpacity
					key={item.id}
					style={styles.containerChoice}
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
		marginLeft: 10,
		color: "#00B4D8",
		fontWeight: "500",
		fontSize: 20,
	},
	button: {
		position: "relative",
		flexDirection: "row",
		backgroundColor: "#fff",
		width: "70%",
		height: "18%",
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
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 20,
		borderRadius: 10,
		borderWidth: 1,
		borderColor: "#00B4D8",
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

export default SearchResumptionOfSportsDetailsScreen;
