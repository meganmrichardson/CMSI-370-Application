// Gather Application - Search Explore
// Authors:
// Srikar Dabbara, Nick Morgan, Megan Richardson, Josh Seaman

import React from "react";
import Suggest from "./Suggest";
import { Text, View, StyleSheet, Image, Button } from "react-native";
import { Container } from "react-bootstrap";

var mainColor = "#74c69d";
var textColor = "#081c15";

const styles = StyleSheet.create({
  communitiesT: {
    color: textColor,
    padding: 1,
    fontSize: 18,
    fontFamily: "Avenir-Light"
  },
  communitiesSubT: {
    color: mainColor,
    padding: 2,
    paddingBottom: 5,
    fontSize: 15,
    fontFamily: "Avenir-Light"
  },
  nameHeader: {
    color: mainColor,
    padding: 1,
    fontSize: 35,
    fontFamily: "Avenir-Light"
  },
  communitiesDescrip: {
    color: textColor,
    padding: 5,
    fontSize: 14,
    fontFamily: "Avenir-Light"
  },
  communities: {
    height: "100%",
    flexGrow: 4,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 10
  },
  commTitle: {
    flexDirection: "column",
    justitfyContent: "center",
    alignItems: "center"
  },
  commPic: {
    borderColor: mainColor,
    borderWidth: 5,
    height: 200,
    padding: 10,
    width: 200,
    borderRadius: 180,
    margin: 10,
    overflow: "hidden"
  },
  CommHeader: {
    display: "flex",
    flexDirection: "vertical",
    justifyContent: "center",
    textAlign: "center"
  }
});

const Search = props => {
  const BarStyling = {
    width: "100%",
    border: "none",
    padding: "0.5rem",
    borderRadius: 10
  };

  return (
    <View style={{ paddingBottom: 100, backgroundColor: "#f2f2f2" }}>
      <Container style={{ zIndex: 1 }}>
        <View style={styles.CommHeader}>
          <Text style={styles.nameHeader}>Communities</Text>
          <Text style={styles.communitiesDescrip}>
            {" "}
            Explore different communities below, apply to join or learn more!
          </Text>
          <View
            style={{
              justifyContent: "center",
              flexDirection: "row",
              flex: 1,
              paddingTop: 20,
              paddingBottom: 20
            }}
          >
            <View style={{ flex: 1 }} />
            <View
              style={{
                flex: 2,
                textAlign: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <View style={{ flex: 5 }}>
                <Suggest />
              </View>
              <View style={{ flex: 1, paddingLeft: 5, paddingTop: 3 }}>
                <Button
                  color="#74c69d"
                  title="Search"
                  onPress={() => props.navigation.navigate({ name: "ToDo" })}
                />
              </View>
            </View>
            <View style={{ flex: 1 }} />
          </View>
        </View>
      </Container>
      <Container style={{ zIndex: 0 }}>
        <View>
          <View style={styles.communities}>
            <View style={styles.commTitle}>
              <Image
                style={styles.commPic}
                source={
                  "http://organiceyourlife.com/wp-content/uploads/2012/06/rainbow-flag.jpg"
                }
              />
              <Text style={styles.communitiesT}>LGBTQ+</Text>
              <Text
                style={styles.communitiesSubT}
                onPress={() => props.navigation.navigate({ name: "ToDo" })}
              >
                {" "}
                Apply | More Info{" "}
              </Text>
            </View>
            <View style={styles.commTitle}>
              <Image
                style={styles.commPic}
                source={
                  "https://i.ebayimg.com/images/g/5HoAAOSweRVe1nuY/s-l400.jpg"
                }
              />
              <Text style={styles.communitiesT}> BIPOC </Text>
              <Text
                style={styles.communitiesSubT}
                onPress={() => props.navigation.navigate({ name: "ToDo" })}
              >
                {" "}
                Apply | More Info{" "}
              </Text>
            </View>
            <View style={styles.commTitle}>
              <Image
                style={styles.commPic}
                source={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Disability_symbols.svg/1024px-Disability_symbols.svg.png"
                }
              />
              <Text style={styles.communitiesT}>
                {" "}
                Living with Disabilities{" "}
              </Text>
              <Text
                style={styles.communitiesSubT}
                onPress={() => props.navigation.navigate({ name: "ToDo" })}
              >
                {" "}
                Apply | More Info{" "}
              </Text>
            </View>
            <View style={styles.commTitle}>
              <Image
                style={styles.commPic}
                source={"https://hrexach.files.wordpress.com/2015/09/hh4.jpg"}
              />
              <Text style={styles.communitiesT}> ¡Comunidad! </Text>
              <Text
                style={styles.communitiesSubT}
                onPress={() => props.navigation.navigate({ name: "ToDo" })}
              >
                {" "}
                Apply | More Info{" "}
              </Text>
            </View>
            <View style={styles.commTitle}>
              <Image
                style={styles.commPic}
                source={
                  "https://cdn.dribbble.com/users/115520/screenshots/3456339/aapihlogo.jpg"
                }
              />
              <Text style={styles.communitiesT}> Asian Pacific Islander </Text>
              <Text
                style={styles.communitiesSubT}
                onPress={() => props.navigation.navigate({ name: "ToDo" })}
              >
                {" "}
                Apply | More Info{" "}
              </Text>
            </View>
            <View style={styles.commTitle}>
              <Image
                style={styles.commPic}
                source={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Transgender_Pride_flag.svg/1920px-Transgender_Pride_flag.svg.png"
                }
              />
              <Text style={styles.communitiesT}> Trans Pride!</Text>
              <Text
                style={styles.communitiesSubT}
                onPress={() => props.navigation.navigate({ name: "ToDo" })}
              >
                {" "}
                Apply | More Info{" "}
              </Text>
            </View>
            <View style={styles.commTitle}>
              <Image
                style={styles.commPic}
                source={
                  "https://cdn4.iconfinder.com/data/icons/american-indian-tribe/500/American_Indian_tribe_native_clan_7-512.png"
                }
              />
              <Text style={styles.communitiesT}> Native Americans</Text>
              <Text
                style={styles.communitiesSubT}
                onPress={() => props.navigation.navigate({ name: "ToDo" })}
              >
                {" "}
                Apply | More Info{" "}
              </Text>
            </View>
            <View style={styles.commTitle}>
              <Image
                style={styles.commPic}
                source={
                  "https://media.istockphoto.com/vectors/rainbow-infinity-sign-vector-id599908116?k=6&m=599908116&s=170667a&w=0&h=d6FhnyBO6flX5xLRPNJn0Zc64hFdLFUsjkKlWT_r9q8="
                }
              />
              <Text style={styles.communitiesT}> Neurodivergents Unite</Text>
              <Text
                style={styles.communitiesSubT}
                onPress={() => props.navigation.navigate({ name: "ToDo" })}
              >
                {" "}
                Apply | More Info{" "}
              </Text>
            </View>
          </View>
        </View>
      </Container>
    </View>
  );
};

export default Search;
