import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Container } from "react-bootstrap";

var mainColor = "#74c69d";
var textColor = "#081c15";

const styles = StyleSheet.create({
  container1: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textAlign: "center"
  },
  socials: {
    height: 30,
    width: 30
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
  profPicMini: {
    borderColor: mainColor,
    borderWidth: 2,
    height: 60,
    width: 60,
    margin: 10,
    borderRadius: 180,
    float: "left",
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
  postImage: {
    // height: 35,
    // width: 35,
    margin: 5,

    overflow: "hidden"
  }
});

export default function PostDesign(props) {
  return (
    <View>
      <Container
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 10,
          borderColor: mainColor,
          alignSelf: "center",
          width: "70%",
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 20,
          marginRight: 20
        }}
      >
        <table style={{ width: "100%" }}>
          <tr>
            <tc>
              <Image
                style={styles.profPicMini}
                source={"https://i.imgur.com/oywNGQ3.jpg"}
              />
            </tc>
            <tc>
              <p
                style={{
                  float: "left",
                  fontFamily: "Avenir-Light",
                  color: textColor,
                  fontSize: 20,
                  marginTop: 2
                }}
              >
                Josh Seaman
              </p>
            </tc>
            <tc style={{ VerticalAlign: "top", textAlign: "left" }}>
              <p
                style={{
                  float: "left",
                  fontFamily: "Avenir-Light",
                  fontSize: 14,
                  color: mainColor,
                  marginTop: 9
                }}
              >
                &nbsp;&nbsp;3 days ago
              </p>
            </tc>
            <tc>
              <Image
                style={styles.communityPic}
                source={
                  "https://whwest.org.au/wp-content/uploads/2018/12/rainbow_flag.png"
                }
              />
            </tc>
          </tr>
          <tr>
            <tc>
              <p
                style={{
                  float: "left",
                  paddingLeft: 80,
                  paddingRight: 80,
                  marginTop: -25,
                  fontFamily: "Avenir-Light",
                  color: textColor,
                  fontSize: 16
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </tc>
          </tr>
        </table>
      </Container>
      <Container
        id="post2"
        style={{
          borderWidth: 1,
          borderStyle: "solid",
          borderRadius: 10,
          borderColor: mainColor,
          alignSelf: "center",
          width: "70%",
          marginTop: 10,
          marginBottom: 10,
          marginLeft: 20,
          marginRight: 20
        }}
      >
        <table style={{ width: "100%" }}>
          <tr>
            <tc>
              <Image
                style={styles.profPicMini}
                source={"https://i.imgur.com/oywNGQ3.jpg"}
              />
            </tc>
            <tc>
              <p
                style={{
                  float: "left",
                  fontFamily: "Avenir-Light",
                  color: textColor,
                  fontSize: 20,
                  marginTop: 2
                }}
              >
                Josh Seaman
              </p>
            </tc>
            <tc style={{ VerticalAlign: "top", textAlign: "left" }}>
              <p
                style={{
                  float: "left",
                  fontFamily: "Avenir-Light",
                  fontSize: 14,
                  color: mainColor,
                  marginTop: 9
                }}
              >
                &nbsp;&nbsp;11/01/2020
              </p>
            </tc>
            <tc>
              <Image
                style={styles.communityPic}
                source={
                  "https://i.ebayimg.com/images/g/5HoAAOSweRVe1nuY/s-l400.jpg"
                }
              />
            </tc>
          </tr>
          <tr>
            <tc>
              <img
                src={
                  "http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif"
                }
                style={{
                  width: "90%",
                  float: "left",
                  paddingLeft: 80,
                  paddingRight: 80,
                  marginTop: -25
                }}
              />
              <p
                style={{
                  float: "left",
                  paddingLeft: 80,
                  paddingRight: 80,
                  // marginTop: -25,
                  fontFamily: "Avenir-Light",
                  color: textColor,
                  fontSize: 16
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </tc>
          </tr>
        </table>
      </Container>
    </View>
  );
}
