import React from "react";
import style from "./NavBar.module.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
const NavBar = (props) => {
  return (
    <div className={style.NavBar} data-testid="NavBar">
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Meme Generator</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">New</Nav.Link>
            <Nav.Link href="#edit">Edit/1</Nav.Link>
            <Nav.Link href="#pricing">Thumbnail</Nav.Link>
            <Nav.Link href="#thumbnail">ThumbnailPDF</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
