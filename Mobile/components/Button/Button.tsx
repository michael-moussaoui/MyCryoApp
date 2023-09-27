import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ViewStyle,
} from "react-native";
import React, { FC } from "react";

interface ButtonProps {
	title: string;
	onPress: () => void;
}

const Button: FC<ButtonProps> = ({ title, onPress }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

interface Styles {
	buttonText: ViewStyle;
}

const styles = StyleSheet.create<Styles>({
	buttonText: {
		color: "#00B4D8",
		fontSize: 25,
		paddingHorizontal: 50,
		paddingVertical: 15,
		backgroundColor: "#fff",
		borderColor: "#00B4D8",
		borderWidth: 2,
		borderRadius: 10,
		margin: 10,
		height: 70,
		width: "60%",
		marginStart: "25%",
		position: "relative",
		top: 200,
	},
});

export default Button;
