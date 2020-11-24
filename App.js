// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Button } from "react-native";
import logo from "./assets/logo.png";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "gather" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <Button
      title="My Profile"
      onPress={() => navigation.navigate("Profile", { name: "USER NAME" })}
    />
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default App;

// export default function App() {
//   const [message, setMessage] = useState("Hello Megan!");
//   return (
//     <View style={styles.container}>
//       <Text style={styles.gather}>gather</Text>
//       <Image source={logo} style={styles.logo} />
//       {/* <Text>{message}</Text> */}
//       <Button title="Home" style={styles.button} />
//       <Button title="Profile" style={styles.button} />
//       <Button title="Search" style={styles.button} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   logo: {
//     width: 50,
//     height: 50,
//     marginTop: 10
//     // marginBottom: 20
//   },
//   gather: {
//     color: "#358f35",
//     fontSize: 50
//   },
//   button: {
//     // variant: "outline-dark",
//     size: "lg"
//   }
// });
