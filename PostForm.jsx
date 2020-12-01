// Gather Application - Forms for Creating a Post
// Authors:
// Srikar Dabbara, Nick Morgan, Megan Richardson, Josh Seaman
// !!Work Breakdown!!
// Main Copy: Josh Seamen
// Overall Styling: Srikar Dabbara
// Implementation: Nick Morgan
// Drop Down Menu: Megan Richardson

import React, { useState } from "react";
import { Container, Form, Dropdown } from "react-bootstrap";

export default function PostForm(props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [community, setCommunity] = useState("Choose Community");

  const handleCommunity = e => {
    // e.preventDefault();
    setCommunity(e);
  };

  return (
    <Container>
      <Form>
        <>
          <Form.Group
            style={{ marginTop: 15 }}
            controlId="exampleForm.ControlInput1"
          >
            <Form.Control
              type="title"
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
          <Form.Group>
            <form
              action="upload.php"
              method="post"
              enctype="multipart/form-data"
            >
              Select Image: &nbsp;
              <input type="file" name="fileToUpload" id="fileToUpload" />
            </form>
          </Form.Group>
        </>
      </Form>
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
          <Dropdown.Item as="button" eventKey="BIPOC">
            BIPOC
          </Dropdown.Item>
          <Dropdown.Item as="button" eventKey="People Living with Disabilities">
            People Living with Disabilities
          </Dropdown.Item>
          <Dropdown.Item as="button" eventKey="¡Comunidad!">
            ¡Comunidad!
          </Dropdown.Item>
          <Dropdown.Item as="button" eventKey="Asian Pacific Islander">
            Asian Pacific Islander
          </Dropdown.Item>
          <Dropdown.Item as="button" eventKey="Trans Pride!">
            Trans Pride!
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>

    // <Button>
    //   // variant="primary"
    //   // backgroundColor={mainColor}
    //   type="submit"
    //   style={{ marginTop: 10, backgroundColor: "#74c69d" }}
    // >
    //   Submit
    // </Button>

    // {/* <hr></hr> */}
  );
}
