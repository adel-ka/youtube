import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";

const NaveBare = () => {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary" id="nav">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="https://altereo.fr/wp-content/uploads/2016/10/youtube-logo-png-transparent-image-5.png"
              alt="logo"
              id="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" id="form">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                id="me-2"
                aria-label="Search"
              />
              <button id="btn">
                <CiSearch id="iconlook" />
              </button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NaveBare;
