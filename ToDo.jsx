// Gather Application - Incomplete Page
// Authors:
// Srikar Dabbara, Nick Morgan, Megan Richardson, Josh Seaman
// !!Work Breakdown!!
// Main Copy: Josh Seaman
// Overall Styling: Josh Seaman
// Implementation: Nick Morgan

import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";

var mainColor = "#74c69d";
var textColor = "#081c15";
const styles = StyleSheet.create({
  TodoHeader: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textAlign: "center"
  },
  mainText: {
    color: mainColor,
    padding: 1,
    fontSize: 35,
    fontFamily: "Avenir-Light"
  },
  subText: {
    color: textColor,
    padding: 1,
    fontSize: 18,
    fontFamily: "Avenir-Light"
  }
});

export default function ToDo() {
  return (
    <View>
      <View style={styles.TodoHeader}>
        <br />
        <br />
        <Image
          style={{ padding: 30 }}
          source={"https://img.icons8.com/ios/80/000000/warning-shield.png"}
        />
        <Text style={styles.mainText}>Current Page in Proccess</Text>
        <Text style={styles.subText}>Pardon our dust</Text>
      </View>
    </View>
  );
}
