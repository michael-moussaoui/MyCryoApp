import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
} from "react-native";
import React, { FC, useState } from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";
import axios from "axios";

type LoginScreenProps = {
	navigation: NavigationProp<RootStackParamList, "Login">;
	route: RouteProp<RootStackParamList, "Login">;
	onPress: () => void;
};

const LoginScreen: FC<LoginScreenProps> = ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailErrorMessage, setEmailErrorMessage] = useState("");
	const login = () => {
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		setEmailErrorMessage("");

		if (email === "") {
			setEmailErrorMessage("Veuillez renseigner votre email");
			// } else if (reg.test(email === false)) {
			// 	setEmailErrorMessage("Votre email n'est pas valide");
		} else if (password === "") {
			setEmailErrorMessage("Veuillez renseigner votre mot de passe");
		} else {
			axios
				.post(
					"http://192.168.1.49:3006/api/v1/users",
					{
						email: email,
						password: password,
					},
					{
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
					}
				)
				.then((response) => {
					if (response.status === 200) {
						console.log("Succes login");
						navigation.navigate("Welcome");
					} else {
						console.log("Failed login");
					}
				})
				.catch((error) => {
					console.log(error);
				});
		}
	};

	const handleSubmit = () => {
		// Handle form submission here
		console.log("Email:", email);
	};
	return (
		<View style={styles.container}>
			<Text style={styles.textLogo}>Attitude Cryo</Text>
			<Text style={styles.title}>Connexion</Text>
			<View style={styles.form}>
				<Text style={styles.label}>Email</Text>
				<TextInput
					style={styles.input}
					placeholder="Entrez votre email"
					value={email}
					onChangeText={setEmail}
					keyboardType="email-address"
				/>
				<Text style={styles.label}>Password</Text>
				<TextInput
					style={styles.input}
					secureTextEntry
					placeholder="Entrez un mot de passe"
					value={password}
					onChangeText={setPassword}
					// keyboardType="email-address"
				/>

				<TouchableOpacity
					style={[styles.button, { backgroundColor: "#00B4D8" }]}
					onPress={login}
				>
					<Text style={styles.buttonText}>Se connecter</Text>
				</TouchableOpacity>
				<Text style={styles.forgotPassword}>Mot de passe oublié</Text>
			</View>
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
		top: 30,
		marginTop: 20,
	},
	title: {
		color: "#00B4D8",
		fontSize: 25,
		textAlign: "center",
		top: 70,
		marginTop: 20,
		paddingHorizontal: 30,
		paddingVertical: 10,
		backgroundColor: "#fff",
		width: "70%",
		marginLeft: "auto",
		marginRight: "auto",
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
	form: {
		position: "relative",
		top: 110,
	},
	label: {
		position: "relative",
		left: "23%",
		top: 20,

		color: "#00B4D8",
	},
	input: {
		position: "relative",
		width: "60%",
		height: 40,
		backgroundColor: "#fff",
		// borderColor: "gray",
		// borderWidth: 1,
		marginBottom: 10,
		marginTop: 20,
		padding: 10,
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: 5,
	},
	button: {
		backgroundColor: "#00B4D8",
		width: "50%",
		height: 50,
		marginTop: 30,
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		textAlign: "center",
	},
	forgotPassword: {
		color: "#00B4D8",
		marginTop: 10,
		textAlign: "center",
	},
});

export default LoginScreen;
