import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa"; // Corrected import
import logo from "../assets/logo.png";
import { NavLink  } from 'react-router-dom'; // Ensure you're using LinkContainer correctly

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
          {/* LinkContainer for ProShop brand logo */}
          <NavLink   to="/"> 
            <Navbar.Brand>
              <img src={logo} alt="ProShop Logo" /> {/* Add alt text for better accessibility */}
              ProShop
            </Navbar.Brand>
          </NavLink  >

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              {/* Cart and Sign In links */}
              <NavLink  to="/cart"> 
                <Nav.Link>
                  <FaShoppingCart /> Cart {/* Add icon */}
                </Nav.Link>
              </NavLink >
              <NavLink  to="/login">
                <Nav.Link>
                  <FaUser /> Sign In {/* Add icon */}
                </Nav.Link>
              </NavLink >
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
