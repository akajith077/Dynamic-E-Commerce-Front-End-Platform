import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import { Button as ButtonM } from "@mui/material";


function NavBar() {
  const navigate = useNavigate();

  return (
    // Add the custom class and Bootstrap props for styling and behavior
    <Navbar
      expand="lg"
      variant="dark"
      sticky="top"
      className="industrial-navbar"
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Dot Index
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>

          {/* Right-aligned items: Search bar and Cart */}
          <div className="d-flex align-items-center">
            <Form className="d-flex me-3">
              <Form.Control
                type="search"
                placeholder="Search products..."
                className="me-2 search-input" // Custom class for styling
                aria-label="Search"
              />
              <Button variant="warning">Search</Button>
            </Form>

            {/* Cart icon now links directly to the cart page */}
            <ButtonM
              variant="contained"
              color="warning"
              onClick={() => navigate("/CartPage")}
              className="cart-button" // Custom class for hover effect
              sx={{ borderRadius: '50%', minWidth: '48px', height: '48px' }} // MUI specific styling for a circular button
            >
              <MdShoppingCart size={24} />
            </ButtonM>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;