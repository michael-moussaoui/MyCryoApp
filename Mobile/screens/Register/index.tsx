import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState, FC } from "react";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/index";
import axios from "axios";
import { colors } from "../../components/Colors";

const { primary } = colors;

type RegisterScreenProps = {
	navigation: NavigationProp<RootStackParamList, "Register">;
	route: RouteProp<RootStackParamList, "Register">;
	onPress: () => void;
};

const RegisterScreen: FC<RegisterScreenProps> = ({ navigation }) => {
	const [values, setValues] = useState({
		firstname: "",
		lastname: "",
		email: "",
		password: "",
	});

	const handleSubmit = () => {
		axios
			.post("http://localhost:8086/register", values)
			.then((res) => {
				if (res.data.Status === "Success") {
					navigation.navigate("Login");
				} else {
					console.log("Error");
				}
			})
			.catch((err) => {
				console.error(
					"Une erreur s'est produite lors de la requête Axios :",
					err
				);
				// Gérez l'erreur ici, par exemple, en affichant un message d'erreur à l'utilisateur
				// alert("Une erreur s'est produite lors de la requête Axios.");
			});
	};
	return (
		<View style={styles.container}>
			<Text style={styles.textLogo}>Attitude Cryo</Text>
			<Text style={styles.title}>Inscription</Text>
			<View style={styles.form}>
				<Text style={styles.label}>Prénom</Text>
				<TextInput
					style={styles.input}
					placeholder="Entrez votre prénom"
					onChangeText={(text) =>
						setValues({ ...values, firstname: text })
					}
				/>

				<Text style={styles.label}>Nom</Text>
				<TextInput
					style={styles.input}
					placeholder="Entrez votre nom"
					onChangeText={(text) =>
						setValues({ ...values, lastname: text })
					}
				/>

				<Text style={styles.label}>Email</Text>
				<TextInput
					style={styles.input}
					placeholder="Entrez votre email"
					onChangeText={(text) =>
						setValues({ ...values, email: text })
					}
					keyboardType="email-address"
				/>
				<Text style={styles.label}>Password</Text>
				<TextInput
					style={styles.input}
					placeholder="Entrez un mot de passe"
					onChangeText={(text) =>
						setValues({ ...values, password: text })
					}
					secureTextEntry={true}
				/>
				<TouchableOpacity
					style={[styles.button, { backgroundColor: "#00B4D8" }]}
					onPress={handleSubmit}
				>
					<Text style={styles.buttonText}>S'inscrire</Text>
				</TouchableOpacity>
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
});
export default RegisterScreen;

// import React, { useState } from "react";
// import {
// 	ImageBackground,
// 	View,
// 	Text,
// 	StyleSheet,
// 	TouchableOpacity,
// 	TextInput,
// 	Platform,
// } from "react-native";

// const API_URL =
// 	Platform.OS === "ios"
// 		? "http://localhost:5000"
// 		: "http://10.0.2.2:5000";

// const RegisterScreen = () => {
// 	const [email, setEmail] = useState("");
// 	const [name, setName] = useState("");
// 	const [password, setPassword] = useState("");

// 	const [isError, setIsError] = useState(false);
// 	const [message, setMessage] = useState("");
// 	const [isLogin, setIsLogin] = useState(true);

// 	const onChangeHandler = () => {
// 		setIsLogin(!isLogin);
// 		setMessage("");
// 	};

// 	const onLoggedIn = (token: string) => {
// 		fetch(`${API_URL}/private`, {
// 			method: "GET",
// 			headers: {
// 				"Content-Type": "application/json",
// 				Authorization: `Bearer ${token}`,
// 			},
// 		})
// 			.then(async (res) => {
// 				try {
// 					const jsonRes = await res.json();
// 					if (res.status === 200) {
// 						setMessage(jsonRes.message);
// 					}
// 				} catch (err) {
// 					console.log(err);
// 				}
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	};

// 	const onSubmitHandler = () => {
// 		const payload = {
// 			email,
// 			name,
// 			password,
// 		};
// 		fetch(`${API_URL}/${isLogin ? "login" : "signup"}`, {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(payload),
// 		})
// 			.then(async (res) => {
// 				try {
// 					const jsonRes = await res.json();
// 					if (res.status !== 200) {
// 						setIsError(true);
// 						setMessage(jsonRes.message);
// 					} else {
// 						onLoggedIn(jsonRes.token);
// 						setIsError(false);
// 						setMessage(jsonRes.message);
// 					}
// 				} catch (err) {
// 					console.log(err);
// 				}
// 			})
// 			.catch((err) => {
// 				console.log(err);
// 			});
// 	};

// 	const getMessage = () => {
// 		const status = isError ? `Error: ` : `Success: `;
// 		return status + message;
// 	};

// 	return (
// 		<ImageBackground
// 			source={require("../../assets/bien_etre.png")}
// 			style={styles.image}
// 		>
// 			<View style={styles.card}>
// 				<Text style={styles.heading}>
// 					{isLogin ? "Login" : "Signup"}
// 				</Text>
// 				<View style={styles.form}>
// 					<View style={styles.inputs}>
// 						<TextInput
// 							style={styles.input}
// 							placeholder="Email"
// 							autoCapitalize="none"
// 							onChangeText={setEmail}
// 						></TextInput>
// 						{!isLogin && (
// 							<TextInput
// 								style={styles.input}
// 								placeholder="Name"
// 								onChangeText={setName}
// 							></TextInput>
// 						)}
// 						<TextInput
// 							secureTextEntry={true}
// 							style={styles.input}
// 							placeholder="Password"
// 							onChangeText={setPassword}
// 						></TextInput>
// 						<Text
// 							style={[
// 								styles.message,
// 								{ color: isError ? "red" : "green" },
// 							]}
// 						>
// 							{message ? getMessage() : null}
// 						</Text>
// 						<TouchableOpacity
// 							style={styles.button}
// 							onPress={onSubmitHandler}
// 						>
// 							<Text style={styles.buttonText}>Done</Text>
// 						</TouchableOpacity>
// 						<TouchableOpacity
// 							style={styles.buttonAlt}
// 							onPress={onChangeHandler}
// 						>
// 							<Text style={styles.buttonAltText}>
// 								{isLogin ? "Sign Up" : "Log In"}
// 							</Text>
// 						</TouchableOpacity>
// 					</View>
// 				</View>
// 			</View>
// 		</ImageBackground>
// 	);
// };

// const styles = StyleSheet.create({
// 	image: {
// 		flex: 1,
// 		width: "100%",
// 		alignItems: "center",
// 	},
// 	card: {
// 		flex: 1,
// 		backgroundColor: "rgba(255, 255, 255, 0.4)",
// 		width: "80%",
// 		marginTop: "40%",
// 		borderRadius: 20,
// 		maxHeight: 380,
// 		paddingBottom: "30%",
// 	},
// 	heading: {
// 		fontSize: 30,
// 		fontWeight: "bold",
// 		marginLeft: "10%",
// 		marginTop: "5%",
// 		marginBottom: "30%",
// 		color: "black",
// 	},
// 	form: {
// 		flex: 1,
// 		justifyContent: "space-between",
// 		paddingBottom: "5%",
// 	},
// 	inputs: {
// 		width: "100%",
// 		flex: 1,
// 		alignItems: "center",
// 		justifyContent: "center",
// 		paddingTop: "10%",
// 	},
// 	input: {
// 		width: "80%",
// 		borderBottomWidth: 1,
// 		borderBottomColor: "black",
// 		paddingTop: 10,
// 		fontSize: 16,
// 		minHeight: 40,
// 	},
// 	button: {
// 		width: "80%",
// 		backgroundColor: "black",
// 		height: 40,
// 		borderRadius: 50,
// 		justifyContent: "center",
// 		alignItems: "center",
// 		marginVertical: 5,
// 	},
// 	buttonText: {
// 		color: "white",
// 		fontSize: 16,
// 		fontWeight: "400",
// 	},
// 	buttonAlt: {
// 		width: "80%",
// 		borderWidth: 1,
// 		height: 40,
// 		borderRadius: 50,
// 		borderColor: "black",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		marginVertical: 5,
// 	},
// 	buttonAltText: {
// 		color: "black",
// 		fontSize: 16,
// 		fontWeight: "400",
// 	},
// 	message: {
// 		fontSize: 16,
// 		marginVertical: "5%",
// 	},
// });

// export default RegisterScreen;
