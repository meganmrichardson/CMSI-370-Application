// Gather Application - Main file / Home Page
// Authors:
// Srikar Dabbara, Nick Morgan, Megan Richardson, Josh Seaman

import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Button
} from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Form, Container, Row, Col } from "react-bootstrap";
import UserProfile from "./UserProfile";
import PersonalProfile from "./PersonalProfile";
import PostForm from "./PostForm";
import PostDesign from "./PostDesign";
import Search from "./Search";
import ToDo from "./ToDo";
import "bootstrap/dist/css/bootstrap.min.css";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { TextInput } from "react-native-gesture-handler";

const Stack = createStackNavigator();
var mainColor = "#74c69d";
// var secondaryColor = "#52a184";
// var textColor = "#081c15";

function App() {
  const ogPosts = [
    {
      author: "Johnny Appleseed",
      title: "Post 2",
      profPic:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb__ser.png",
      communityPic:
        "https://i.ebayimg.com/images/g/5HoAAOSweRVe1nuY/s-l400.jpg",
      date: "3 days ago",
      postImg: "",

      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      author: "Jane Doe",
      title: "Post 1",
      profPic:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb__ser.png",
      communityPic:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Disability_symbols.svg/1024px-Disability_symbols.svg.png",
      date: "11/01/2020",
      postImg:
        "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    }
  ];
  const [posts, setPosts] = useState(ogPosts);

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
            initialParams={posts}
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
            name="ToDo"
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
    <View style={styles.loginBackground}>
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
            style={styles.loginCredentialsFields}
            borderColor="gray"
            placeholder="Username"
            onChangeText={username => setUsername(username)}
          />
          <TextInput
            style={styles.loginCredentialsFields}
            borderColor="gray"
            placeholder="Password"
            secureTextEntry={true}
          />
          <Button
            color={mainColor}
            title="Login"
            onPress={() =>
              navigation.navigate("Home", { currentUser: username })
            }
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
      <View style={styles.homeScreenStyle}>
        <View style={{ flex: 1, paddingRight: 10 }}>
          <Button
            color={mainColor}
            title="My Profile"
            onPress={() =>
              navigation.navigate("Profile", { name: route.params.currentUser })
            }
          />
        </View>
        <View style={{ flex: 1, paddingRight: 10 }}>
          <Button
            color={mainColor}
            title="Create Post"
            onPress={() =>
              navigation.navigate("Create", { params: route.params })
            }
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
      <PostDesign posts={route.params} />
    </View>
  );
};

const ProfileScreen = ({ navigation, route }) => {
  return <PersonalProfile navigation={navigation} />;
};

const PostScreen = ({ navigation, route }) => {
  const handleSubmit = () => {
    route.params["2"] = {
      author: "Jane Doe",
      title: "Post 3",
      profPic: "https://i.imgur.com/oywNGQ3.jpg",
      communityPic:
        "https://whwest.org.au/wp-content/uploads/2018/12/rainbow_flag.png",
      date: "now",
      postImg: "",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    };

    navigation.navigate("Home");
  };

  return (
    <Container>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text style={styles.mainText}>New Post</Text>
      </View>
      <Text>
        <PostForm />
      </Text>
      <View style={{ padding: 15 }}>
        <Button color="#74c69d" title="Submit" onPress={handleSubmit} />
      </View>
    </Container>
  );
};

const SearchScreen = ({ navigation, route }) => {
  return <Search navigation={navigation} />;
};

const TodoScreen = ({ navigation }) => {
  return <ToDo />;
};

var mainColor = "#74c69d";
var textColor = "#081c15";
const styles = StyleSheet.create({
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
  },
  loginBackground: {
    justifyContent: "center",
    flexDirection: "column",
    flex: 1,
    backgroundImage: "linear-gradient(80deg, #ffffff, #d7f5e6, #ffffff)"
  },
  loginCredentialsFields: {
    height: 60,
    padding: 20,
    marginBottom: 10,
    backgroundColor: "white"
  },
  homeScreenStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default App;
