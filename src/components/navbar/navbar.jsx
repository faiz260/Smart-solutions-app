import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

function navbar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" fixed="top" variant="light">
      <Link to="/home">
        <Navbar.Brand>
          <Navbar.Brand>
            <img
              src="/smart-solutions.png"
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="Smart solutions logo"
            />
          </Navbar.Brand>
          <Navbar.Brand>Smart Solutions</Navbar.Brand>
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Link to="">
            <Nav.Link>Our Services</Nav.Link>
          </Link>
          <Link to="">
            <Nav.Link>More deets</Nav.Link>
          </Link>
          <Link to="">
            <Nav.Link>Contact Us</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default navbar;
