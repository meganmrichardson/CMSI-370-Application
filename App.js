// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Button } from "react-native";
import logo from "./assets/logo.png";

export default function App() {
  const [message, setMessage] = useState("Hello Megan!");
  return (
    <View style={styles.container}>
      <Text style={styles.gather}>gather</Text>
      <Image source={logo} style={styles.logo} />
      {/* <Text>{message}</Text> */}
      <Button title="Home" style={styles.button} />
      <Button title="Profile" style={styles.button} />
      <Button title="Search" style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 50,
    height: 50,
    marginTop: 10
    // marginBottom: 20
  },
  gather: {
    color: "#358f35",
    fontSize: 50
  },
  button: {
    // variant: "outline-dark",
    size: "lg"
  }
});
