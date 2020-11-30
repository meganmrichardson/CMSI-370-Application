// Gather Application - Formatting of the Posts
// Authors:
// Srikar Dabbara, Nick Morgan, Megan Richardson, Josh Seaman

import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Container, Card, Row, Col, Button } from "react-bootstrap";

var mainColor = "#74c69d";
var textColor = "#081c15";

const styles = StyleSheet.create({
  profPic: {
    borderColor: mainColor,
    borderWidth: 2,
    height: 45,
    width: 45,
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
  authorName: {
    float: "left",
    fontFamily: "Avenir-Light",
    color: textColor,
    fontSize: 20,
    marginTop: 7,
    marginLeft: -30
  }
});

export default function PostDesign(props) {
  const { posts } = props;
  delete posts.currentUser;
  return (
    <Container
      style={{
        marginTop: 20,
        marginBottom: 20
      }}
    >
      {posts &&
        Object.keys(posts).map(post => (
          <Card
            borderColor="succes"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            <Card.Body>
              <Container>
                <Row>
                  <Col sm={1}>
                    <View>
                      <Image src={posts[post].profPic} style={styles.profPic} />
                    </View>
                  </Col>
                  <Col sm={8}>
                    <Text style={styles.authorName}>{posts[post].author}</Text>
                    <Text
                      style={{
                        float: "left",
                        fontFamily: "Avenir-Light",
                        fontSize: 14,
                        color: mainColor,
                        marginTop: 12
                      }}
                    >
                      &nbsp;&nbsp;{posts[post].date}
                    </Text>
                  </Col>
                  <Col>
                    <View>
                      <Image
                        src={posts[post].communityPic}
                        style={styles.communityPic}
                      />
                    </View>
                  </Col>
                </Row>
                <hr></hr>
                <Card.Title>{posts[post].title}</Card.Title>
                <Card.Text>{posts[post].body}</Card.Text>
              </Container>
            </Card.Body>
          </Card>
        ))}
    </Container>
  );
}

// { text: "LGBTQ+" },
// { text: "Native Americans" },
// { text: "People Living with Disabilities" },
// { text: "BIPOC" },
// { text: "Asian Pacific Islander" },
// { text: "¡Comunidad!" },
// { text: "Trans Pride!" },
// { text: "Neurodivergents Unite" },
