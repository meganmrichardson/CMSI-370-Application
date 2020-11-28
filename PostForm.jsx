import React, { useState, useRef } from "react";
import {
  Container,
  Form,
  Button,
  Card,
  Dropdown,
  DropdownButton,
  MenuItem,
  Overlay
} from "react-bootstrap";
import { Alert } from "react-native";

var mainColor = "#74c69d";
var secondaryColor = "#52a184";

export default function PostForm(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [community, setCommunity] = useState("Choose Community");

  const handleCommunity = e => {
    setCommunity(e);
  };

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            placeholder="Title"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as="textarea"
            placeholder="Post Body"
            rows={10}
            value={body}
            onChange={event => setBody(event.target.value)}
          />
        </Form.Group>

        <form action="upload.php" method="post" enctype="multipart/form-data">
          Select Image: &nbsp;
          <input type="file" name="fileToUpload" id="fileToUpload" />
        </form>

        <Dropdown
          style={{ marginTop: 10 }}
          // color={secondaryColor}
          onSelect={handleCommunity}
        >
          <Dropdown.Toggle
            variant="success"
            id="dropdown-basic"
            style={{
              backgroundColor: "white",
              outline: "black",
              color: "black"
            }}
          >
            {community}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as="button" eventKey="LGBTQ+">
              LGBTQ+
            </Dropdown.Item>
            <Dropdown.Item as="button" eventKey="Native American">
              Native American
            </Dropdown.Item>
            <Dropdown.Item as="button" eventKey="Person with a Disability">
              Person with a Disability
            </Dropdown.Item>
            <Dropdown.Item as="button" eventKey="African American">
              African American
            </Dropdown.Item>
            <Dropdown.Item as="button" eventKey="Asian Pacific Islander">
              Asian Pacific Islander
            </Dropdown.Item>
            <Dropdown.Item as="button" eventKey="Latino/a/x Chicano/a/x">
              Latino/a/x Chicano/a/x
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button
          // variant="primary"
          // backgroundColor={mainColor}
          type="submit"
          style={{ marginTop: 10, backgroundColor: "#74c69d" }}
        >
          Submit
        </Button>
      </>
      <hr></hr>
    </Form>
  );
}
