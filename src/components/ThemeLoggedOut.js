import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { HeaderLogPage, Footer } from "./";

function ThemeLoggedOut({ children, navigation }) {
  return (
    <View style={styles.container} navigation={navigation}>
      <View style={styles.Header}>
        <HeaderLogPage navigation={navigation} />
      </View>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContentContainer}
      >
        {children}
      </ScrollView>
      <View style={styles.Footer}>
        <Footer navigation={navigation} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    height: "80%",
    paddingTop: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "lightgray",
  },
  scrollContentContainer: {
    flexWrap: "wrap",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    margin: 5,
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Serif",
  },
  Header: {
    height: "0%",
    top: 0,
    margin:35
  },
  Footer: {
    height: "10%",
    bottom: 0,
    position: "relative",
  },
});
export default ThemeLoggedOut;
