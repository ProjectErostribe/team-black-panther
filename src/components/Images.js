import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header, Footer, ThemeLoggedIn } from "./";

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
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Serif",
  },
});
export default Images;
