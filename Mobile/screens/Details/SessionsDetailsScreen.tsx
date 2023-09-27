import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";

type SessionsDetailsScreenRouteProp = RouteProp<
	RootStackParamList,
	"SessionsDetailsScreen"
>;

type Props = {
	route: SessionsDetailsScreenRouteProp;
};

const SessionsDetailsScreen: React.FC<Props> = ({ route }) => {
	const { sessionData } = route.params;
	const [smileyClicked, setSmileyClicked] = useState(true);
	const [dizzyClicked, setDizzyClicked] = useState(false);

	const handleSmileyClick = () => {
		setSmileyClicked(true);
		setDizzyClicked(false);
	};

	const handleDizzyClick = () => {
		setSmileyClicked(false);
		setDizzyClicked(true);
	};

	return (
		<ScrollView>
			<Text style={styles.textLogo}>Attitude Cryo</Text>
			<Text style={styles.title}>Evaluer votre séance</Text>
			<View style={styles.session}>
				<Text style={styles.sessionTitle}>Cryothérapie</Text>
			</View>
			<Text style={styles.text}>{`Séance n° : ${sessionData}`}</Text>
			<View style={styles.choiceImage}>
				<TouchableOpacity
					style={[
						styles.choiceSmiley,
						smileyClicked && styles.choiceClicked,
					]}
					onPress={handleSmileyClick}
				>
					<Image
						source={require("../../assets/Smiley_face.png")}
						style={styles.imageSmiley}
					></Image>
				</TouchableOpacity>
				<TouchableOpacity
					style={[
						styles.choiceDizzy,
						dizzyClicked && styles.choiceClicked,
					]}
					onPress={handleDizzyClick}
				>
					<Image
						source={require("../../assets/Dizzy_face.png")}
						style={styles.imageDizzy}
					></Image>
				</TouchableOpacity>
			</View>
			<Text style={styles.textComment}>Ajouter un commentaire</Text>
			<TextInput
				// multiline={true}
				// numberOfLines={10}
				style={{
					height: 200,
					width: "90%",
					marginLeft: "auto",
					marginRight: "auto",
					backgroundColor: "#fff",
				}}
			/>
			<TouchableOpacity style={styles.validateButton}>
				<Text style={styles.textButton}>Valider</Text>
			</TouchableOpacity>
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
		top: 30,
		marginTop: 20,
	},
	title: {
		position: "relative",
		top: 30,
		marginTop: 20,
		marginBottom: 50,
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "center",
	},
	text: {
		position: "relative",
		textAlign: "center",
		marginBottom: 20,
		fontSize: 26,
		fontWeight: "bold",
		color: "#00B4D8",
	},

	session: {
		position: "relative",
		flexDirection: "row",
		backgroundColor: "#00B4D8",
		width: "70%",
		height: 60,
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
	choiceImage: {
		flexDirection: "row",
		marginTop: 20,
		marginBottom: 40,
		justifyContent: "space-between",
		paddingLeft: 10,
		paddingRight: 10,
	},
	choiceSmiley: {
		height: 180,
		width: "45%",
		borderColor: "#489",
		borderWidth: 2,
		borderRadius: 50 / 2,
	},
	choiceDizzy: {
		height: 180,
		width: "45%",
		borderColor: "#489",
		borderWidth: 2,
		borderRadius: 50 / 2,
	},
	choiceClicked: {
		backgroundColor: "#489",
	},
	imageSmiley: {
		width: "100%",
		height: 180,
	},
	imageDizzy: {
		width: "100%",
		height: 170,
	},
	textComment: {
		marginTop: 20,
		marginBottom: 5,
		marginLeft: 20,
		fontSize: 16,
	},
	validateButton: {
		backgroundColor: "#fff",
		width: "50%",
		height: 60,
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: 15,
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
	textButton: {
		color: "#00B4D8",
		fontWeight: "500",
	},
});

export default SessionsDetailsScreen;
