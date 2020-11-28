import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Button
} from "react-native";
import { Container } from "react-bootstrap";
// import "./App.css";

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
  communitiesIcons: {
    alignItems: "center",
    alignContent: "center",
    height: "100%",
    padding: 5,
    flexDirection: "row",
    justifyContent: "center"
  },
  moreCommunities: {
    height: 40,
    width: 40,
    margin: 5,
    borderRadius: 180,
    float: "right",
    overflow: "hidden"
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
  }
});

export default function UserProfile() {
  return (
    <Container>
      <View>
        <View style={styles.profileHeader}>
          <Image
            style={styles.profPic}
            source={"https://i.imgur.com/oywNGQ3.jpg"}
          />
          <Text style={styles.nameHeader}>Josh Seaman</Text>
          <Text style={styles.communitiesHeader}> Communities: 4 </Text>
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
          <Image
            style={styles.moreCommunities}
            source={
              "https://img.icons8.com/color/50/000000/connection-status-off--v1.png"
            }
          />
        </View>

        <Text style={styles.bio}> So excited to show everyone gather!</Text>
      </View>
    </Container>
  );
}