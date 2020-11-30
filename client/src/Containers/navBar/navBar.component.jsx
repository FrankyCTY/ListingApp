import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import useRouter from "../../hooks/useRouter.hooks";

const NavBarContainer = () => {

  const router = useRouter();

  return <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Listing App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link onClick={() => router.push("/")}>Main</Nav.Link>
      <Nav.Link onClick={() => router.push("/shop")}>Listing</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
}

export default NavBarContainer;