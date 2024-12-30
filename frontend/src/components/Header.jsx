import React from "react";
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa"; // Corrected import
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom"; // Ensure you're using LinkContainer correctly

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          <NavLink to="/">
            <Navbar.Brand>
              <img src={logo} alt="ProShop Logo" />{" "}
              ProShop
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/cart">
                <FaShoppingCart /> Cart
              </Nav.Link>

              <Nav.Link as={Link} to="/login">
                <FaUser /> Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
