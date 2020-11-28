// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, Image, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Form, Container, Row, Col } from "react-bootstrap";
import UserProfile from "./UserProfile";
import PersonalProfile from "./PersonalProfile";
import PostForm from "./PostForm";
import PostDesign from "./PostDesign";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";
import { TextInput } from "react-native-gesture-handler";

const Stack = createStackNavigator();
var mainColor = "#74c69d";
// var secondaryColor = "#52a184";
// var textColor = "#081c15";

function App() {
  return (
    <NavigationContainer>
      {
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ title: "gather" }}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "gather" }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ title: "gather" }}
          />
          <Stack.Screen
            name="Create"
            component={PostScreen}
            options={{ title: "gather" }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{ title: "gather" }}
          />
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
}

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("Default User");
  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "column",
        flex: 1,
        backgroundImage: "linear-gradient(80deg, #ffffff, #d7f5e6, #ffffff)"
      }}
    >
      <View style={{ flex: 1 }} />
      <View style={{ justifyContent: "center", flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 1 }} />
        <View style={{ flex: 1, textAlign: "center" }}>
          <Text
            style={{
              marginBottom: 15,
              fontSize: 30,
              color: "#52a184"
            }}
            justifyContent="center"
          >
            Welcome to gather!
          </Text>
          <TextInput
            style={{
              height: 60,
              padding: 20,
              marginBottom: 10,
              backgroundColor: "white"
            }}
            borderColor="gray"
            placeholder="Username"
            onChangeText={username => setUsername(username)}
          />
          <TextInput
            style={{
              height: 60,
              padding: 20,
              marginBottom: 10,
              backgroundColor: "white"
            }}
            borderColor="gray"
            placeholder="Password"
          />
          <Button
            color={mainColor}
            title="Login"
            onPress={() => navigation.navigate("Home", { user: username })}
          />
        </View>
        <View style={{ flex: 1 }} />
      </View>
      <View style={{ flex: 1 }} />
    </View>
  );
};

const HomeScreen = ({ navigation, route }) => {
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <View style={{ flex: 1, padding: 5 }}>
          <Button
            color={mainColor}
            title="My Profile"
            onPress={() =>
              navigation.navigate("Profile", { name: route.params.user })
            }
          />
        </View>
        <View style={{ flex: 1, padding: 5 }}>
          <Button
            color={mainColor}
            title="Create Post"
            onPress={() => navigation.navigate("Create")}
          />
        </View>
        <View style={{ flex: 1, padding: 5 }}>
          <Button
            color={mainColor}
            title="Search"
            onPress={() => navigation.navigate("Search")}
          />
        </View>
      </View>
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

  return <PersonalProfile />;
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
  return <Search />;
};

export default App;
