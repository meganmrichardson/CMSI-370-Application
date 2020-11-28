// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Button
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Form, Container, Row, Col } from "react-bootstrap";
import UserProfile from "./UserProfile";
import PostForm from "./PostForm";
import PostDesign from "./PostDesign";
import Search from "./Search.js";
import { SearchBar } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import { ToggleButton } from "react-toggle-button";
import { redBright } from "colorette";
import "bootstrap/dist/css/bootstrap.min.css";

const Stack = createStackNavigator();
var mainColor = "#74c69d";
var textColor = "#081c15";

function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "Welcome to gather!" }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "gather" }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="Create" component={PostScreen} />
          <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
      }
    </NavigationContainer>

    // Post List
  );
}

// const styles = StyleSheet.create({
//   textStyle: {
//     fontSize: 20,
//     fontFamily: "Trebuchet MS"
//   },
//   otherStyle: {
//     position: "absolute",
//     justifyContent: "center",
//     background: "green"
//   }
// });

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("Default User");
  return (
    <View>
      <TextInput
        style={{ height: 40, padding: 20 }}
        borderColor="gray"
        placeholder="Username"
        onChangeText={username => setUsername(username)}
      />
      <TextInput
        style={{ height: 40, padding: 20 }}
        borderColor="gray"
        placeholder="Password"
      />
      <Button
        color="#76AF57"
        title="Login"
        onPress={() => navigation.navigate("Home", { user: username })}
      />
    </View>
  );
};

const HomeScreen = ({ navigation, route }) => {
  return (
    <View>
      <Button
        color="#90C573"
        title="My Profile"
        onPress={() =>
          navigation.navigate("Profile", { name: route.params.user })
        }
      />
      <Button
        color="#76AF57"
        title="Create Post"
        onPress={() => navigation.navigate("Create")}
      />
      <Button
        color="#609B3F"
        title="Search"
        onPress={() => navigation.navigate("Search")}
      />
      <PostDesign />
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  const [body, setBody] = useState("");

  // return (
  //   <View>
  //     <Text style={{ color: "black" }}>
  //       This is {route.params.name}'s profile
  //     </Text>
  //     <Text>Bio:</Text>
  //     <Form.Control
  //       as="textarea"
  //       rows={10}
  //       value={body}
  //       onChange={event => setBody(event.target.value)}
  //     />
  //     <form action="upload.php" method="post" enctype="multipart/form-data">
  //       Select Image:
  //       <input type="file" name="fileToUpload" id="fileToUpload" />
  //       <input type="submit" value="Upload Image" name="submit" />
  //     </form>
  //     <Text>Join Communities:</Text>
  //     <Form.Check type="checkbox" label="LGTBQ+" />
  //     <Form.Check type="checkbox" label="Native American" />
  //     <Form.Check type="checkbox" label="Person with a Disability" />
  //     <Form.Check type="checkbox" label="African American" />
  //     <Form.Check type="checkbox" label="Asian American" />
  //     <Form.Check type="checkbox" label="Hispanic" />
  //   </View>
  // );

  return <UserProfile />;
};

const PostScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Container>
          <Text>
            <PostForm />
          </Text>
        </Container>
      </View>
    </ScrollView>
  );
};

const SearchScreen = ({ navigation }) => {
  return (
    <Search />
    // <SearchBar
    //   round
    //   searchIcon={{ size: 24 }}
    //   // onChangeText={(text) => this.SearchFilterFunction(text)}
    //   // onClear={(text) => this.SearchFilterFunction("")}
    //   placeholder="Type Here..."
    // />
  );
};

export default App;
