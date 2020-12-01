// Gather Application - My Profile Page
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
import { Container } from "react-bootstrap";
import PostDesign from "./PostDesign";
import ToDo from "./ToDo";

// const Stack = createStackNavigator();

var mainColor = "#74c69d";
var textColor = "#081c15";

const styles = StyleSheet.create({
  profileHeader: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textAlign: "center"
  },
  settingsWrapper: {
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    padding: 5,
    flexDirection: "row",
    justifyContent: "center"
  },
  nameHeader: {
    color: mainColor,
    padding: 1,
    fontSize: 35,
    fontFamily: "Avenir-Light"
  },
  communitiesHeader: {
    color: textColor,
    padding: 1,
    fontSize: 18,
    fontFamily: "Avenir-Light"
  },
  profPic: {
    borderColor: mainColor,
    borderWidth: 5,
    height: 200,
    width: 200,
    borderRadius: 180,
    padding: 10,
    overflow: "hidden"
  },
  communityPic: {
    borderColor: mainColor,
    borderWidth: 2,
    height: 35,
    width: 35,
    margin: 5,
    borderRadius: 180,
    float: "right",
    overflow: "hidden"
  },
  bio: {
    color: textColor,
    padding: 10,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Avenir-Light"
  },
  communitiesIcons: {
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    height: "100%",
    padding: 5,
    flexDirection: "row",
    justifyContent: "center"
  }
});

export default function PersonalProfile(props) {
  console.log(props);
  const posts = [
    {
      author: props.name,
      title: "Post 2",
      profPic:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb__ser.png",
      communityPic:
        "https://i.ebayimg.com/images/g/5HoAAOSweRVe1nuY/s-l400.jpg",
      date: "09/02/2020",
      postImg: "",

      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      author: props.name,
      title: "Post 1",
      profPic:
        "https://www.tenforums.com/geek/gars/images/2/types/thumb__ser.png",
      communityPic:
        "https://i.ebayimg.com/images/g/5HoAAOSweRVe1nuY/s-l400.jpg",
      date: "3 days ago",
      postImg:
        "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif",
      body:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"
    }
  ];

  return (
    <Container>
      <View>
        <View style={styles.profileHeader}>
          <Image
            style={styles.profPic}
            source={
              "https://www.tenforums.com/geek/gars/images/2/types/thumb__ser.png"
            }
          />
          <Text style={styles.nameHeader}>{props.name}</Text>
          <Text style={styles.communitiesHeader}>Communities: 4</Text>
        </View>
        <View style={styles.communitiesIcons}>
          <Image
            style={styles.communityPic}
            source={
              "https://i.ebayimg.com/images/g/5HoAAOSweRVe1nuY/s-l400.jpg"
            }
          />
          <Image
            style={styles.communityPic}
            source={
              "https://whwest.org.au/wp-content/uploads/2018/12/rainbow_flag.png"
            }
          />
          <Image
            style={styles.communityPic}
            source={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Disability_symbols.svg/1024px-Disability_symbols.svg.png"
            }
          />
          <Image
            style={styles.communityPic}
            source={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/1920px-Transgender_Pride_flag.svg.png"
            }
          />
        </View>
        <View style={styles.settingsWrapper}>
          <View style={{ width: "170px" }}>
            <Button
              title="Manage Settings"
              color="#74c69d"
              onPress={() => props.navigation.navigate({ name: "ToDo" })}
            />
          </View>
        </View>

        <Text style={styles.bio}> So excited to show everyone gather!</Text>

        <PostDesign posts={posts} />
      </View>
    </Container>
  );
}
