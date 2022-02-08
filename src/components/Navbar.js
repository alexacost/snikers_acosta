import React from 'react';
import {NavDropdown,Nav,Container, Navbar as BTNavbar } from 'react-bootstrap'
import CartWidget from './CartWidget';

function Navbar() {
  return <BTNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <BTNavbar.Brand href="#home">Snikers</BTNavbar.Brand>
  <BTNavbar.Toggle aria-controls="responsive-navbar-nav" />
  <BTNavbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets"><CartWidget /></Nav.Link>
    </Nav>
  </BTNavbar.Collapse>
  </Container>
</BTNavbar>;
}

export default Navbar;
