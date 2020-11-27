import React, { useState } from "react";
import {
  Form,
  Button,
  Card,
  Dropdown,
  DropdownButton,
  MenuItem
} from "react-bootstrap";

export default function PostForm(props) {
  const [checked, setChecked] = useState(true);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [community, setCommunity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("on Submit: ", title);
  }

  function handleSelect(first, second) {
    return (
      <View>
        <Text>{first}</Text>
        <Text>{second}</Text>
      </View>
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Check
        type="checkbox"
        label="Add Post"
        checked={checked}
        onChange={() => setChecked(prevState => !prevState)}
      />
      {checked && (
        <>
          <Form.Group>
            <Form.Control
              type="input"
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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Choose Community
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
                Asian American
              </Dropdown.Item>
              <Dropdown.Item as="button" eventKey="hispanic">
                Hispanic
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Text>{eventKey}</Text> */}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </>
      )}

      <hr></hr>
    </Form>
  );
}
