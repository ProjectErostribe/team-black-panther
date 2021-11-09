import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeLoggedIn from "./ThemeLoggedIn";

function Images({ navigation }) {
	return (
		<ThemeLoggedIn navigation={navigation}>
			<View style={styles.container}>
					<View style={styles.body}>
						<Text style={styles.text}>Images!</Text>
					</View>
			</View>
		</ThemeLoggedIn>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	body: {
		backgroundColor: "#fff",
		height: "80%",
		width: "100%",
		textAlign: "center",
		justifyContent: "center",
	},
	text: {
		margin: 5,
		fontSize: 1.5, // was "1.5em"
		fontWeight: "100",
		fontFamily: "Serif",
	},
});
export default Images;
