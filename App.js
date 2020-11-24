// import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Image, View, Button } from "react-native";
import logo from "./assets/logo.png";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Container, Row, Col } from "react-bootstrap";
import PostList from "./PostList";

const Stack = createStackNavigator();

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode/com/posts")
      .then(response => response.json())
      .then(json => setPosts(json));
  }, []);

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
          <Stack.Screen name="Posts" component={PostScreen} />
        </Stack.Navigator>
      }
    </NavigationContainer>

    // Post List
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Button
        title="My Profile"
        onPress={() => navigation.navigate("Profile", { name: "USER NAME" })}
      />
      <Button title="Posts" onPress={() => navigation.navigate("Posts")} />
    </Container>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
const PostScreen = ({ navigation }) => {
  return (
    <Container>
      <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
        <Col xs lg="12">
          <h1 style={{ textAlign: "center" }}>gather f33d</h1>
        </Col>
      </Row>
      <Row className="justify-content-md-center" style={{ marginTop: 60 }}>
        <Col xs lg="12">
          <PostList />
        </Col>
      </Row>
    </Container>
  );
};
// const loginScreen = ({ navigation }) => {
//   return <Container></Container>;
// };

export default App;
