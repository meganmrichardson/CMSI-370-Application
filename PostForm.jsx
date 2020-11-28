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

export default function PostForm(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [community, setCommunity] = useState("Choose Community");

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCommunity(event) {
    setCommunity(event);
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

        <Dropdown style={{ marginTop: 10 }}>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {community}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as="button" eventKey="lgtbq">
              LGBTQ+
            </Dropdown.Item>
            <Dropdown.Item as="button" eventKey="nativea">
              Native American
            </Dropdown.Item>
            <Dropdown.Item as="button" eventKey="disabled">
              Person with a Disability
            </Dropdown.Item>
            <Dropdown.Item as="button" eventKey="africana">
              African American
            </Dropdown.Item>
            <Dropdown.Item as="button" eventKey="asiana">
              Asian Pacific Islander
            </Dropdown.Item>
            <Dropdown.Item as="button" eventKey="hispanic">
              Latino/a/x Chicano/a/x
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Button variant="primary" type="submit" style={{ marginTop: 10 }}>
          Submit
        </Button>
      </>
      <hr></hr>
    </Form>
  );
}
