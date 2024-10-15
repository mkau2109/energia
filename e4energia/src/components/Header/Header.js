import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink for smooth scrolling
import './Header.css';

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src="/images/logo.png" 
              alt="Mithra Cowork Logo"
              className="logo"
            />{' '}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <NavDropdown title="Home" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Image</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Countries</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Reg Form</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Speaker Photo</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Advertisemet</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/#about">Event</Nav.Link>
              <Nav.Link as={Link} to="/#career">Membership</Nav.Link>
              <Nav.Link as={Link} to="/#career">Agent</Nav.Link>
              <Nav.Link as={Link} to="/#career">E-Club</Nav.Link>
              <Nav.Link as={Link} to="/#career">Francies</Nav.Link>
              <Nav.Link as={Link} to="/#career">Dealership</Nav.Link>
              <Nav.Link as={Link} to="/#career">Investor</Nav.Link>
              <Nav.Link as={Link} to="/#career">Launch a Product</Nav.Link>
              <Nav.Link as={Link} to="/#career">Tourism</Nav.Link>
              <Nav.Link as={Link} to="/#career">About</Nav.Link>
              <Nav.Link as={Link} to="/#contact">Contact Us</Nav.Link> {/* Updated to hash link */}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
