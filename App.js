// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
} from "react-native";
import logo from "./assets/logo.png";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Container, Row, Col } from "react-bootstrap";
import PostList from "./PostList";
import PostForm from "./PostForm";
import { SearchBar } from "react-native-elements";
import { TextInput } from "react-native-gesture-handler";
import "./App.css";

const Stack = createStackNavigator();

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

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontFamily: "Trebuchet MS",
  },
  otherStyle: {
    position: "absolute",
    justifyContent: "center",
    background: "green",
  },
});

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("Default User");
  return (
    <View>
      <TextInput
        style={{ height: 40, padding: 20 }}
        borderColor="gray"
        placeholder="Username"
        onChangeText={(username) => setUsername(username)}
      />
      <TextInput
        style={{ height: 40, padding: 20 }}
        borderColor="gray"
        placeholder="Password"
      />
      <Button
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
        title="My Profile"
        onPress={() =>
          navigation.navigate("Profile", { name: route.params.user })
        }
      />
      <Button
        title="Create Post"
        onPress={() => navigation.navigate("Create")}
      />
      <Button title="Search" onPress={() => navigation.navigate("Search")} />
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

const PostScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <Text>
                <PostForm />
              </Text>
            </Col>
          </Row>
        </Container>
      </View>
    </ScrollView>
  );
};

const SearchScreen = ({ navigation }) => {
  return (
    <SearchBar
      round
      searchIcon={{ size: 24 }}
      // onChangeText={(text) => this.SearchFilterFunction(text)}
      // onClear={(text) => this.SearchFilterFunction("")}
      placeholder="Type Here..."
    />
  );
};

export default App;
