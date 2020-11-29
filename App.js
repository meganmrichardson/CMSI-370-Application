// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { ScrollView, Text, Image, View, Button } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
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
            options={{ title: "gather", headerLeft: "" }}
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
          <Stack.Screen
            name="Todo"
            component={TodoScreen}
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
            secureTextEntry={true}
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
          justifyContent: "center",
          paddingTop: 10,
          paddingLeft: 10,
          paddingRight: 10
        }}
      >
        <View style={{ flex: 1, paddingRight: 10 }}>
          <Button
            color={mainColor}
            title="My Profile"
            onPress={() =>
              navigation.navigate("Profile", { name: route.params.user })
            }
          />
        </View>
        <View style={{ flex: 1, paddingRight: 10 }}>
          <Button
            color={mainColor}
            title="Create Post"
            onPress={() => navigation.navigate("Create")}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            color={mainColor}
            title="Discover"
            onPress={() => navigation.navigate("Search")}
          />
        </View>
      </View>
      <PostDesign />
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <PersonalProfile />;
};

const PostScreen = ({ navigation }) => {
  return (
    <Container>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text
          style={{
            color: mainColor,
            padding: 1,
            fontSize: 35,
            fontFamily: "Avenir-Light"
            // textAlign: "center"
          }}
        >
          New Post
        </Text>
      </View>
      <Text>
        <PostForm />
      </Text>
      <View style={{ padding: 15 }}>
        <Button
          color="#74c69d"
          title="Submit"
          onPress={() => navigation.navigate("Todo")}
        />
      </View>
    </Container>
  );
};

const SearchScreen = ({ navigation }) => {
  return <Search />;
};

const TodoScreen = ({ navigation }) => {
  return <Text>Not Implemented yet!</Text>;
};

export default App;
