import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavbarBook() {
  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container>
        <Row className="w-100 align-items-center">
          {/* Logo */}
          <Col xs={6} md={4} lg={3}>
            <Navbar.Brand as={Link} to="/">
              <span className="logo-text">पुस्तक</span>
            </Navbar.Brand>
          </Col>

          {/* Toggle Button (on small screens) */}
          <Col xs={6} className="text-end d-lg-none">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </Col>

          {/* Nav Links */}
          <Col xs={12} lg={9}>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-lg-auto nav-tabs-custom justify-content-lg-end">
                <NavDropdown title="Home" className="nav-tab" menuVariant="light">
                  <NavDropdown.Item as={Link} to="/">Main Home</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/intro">Introduction</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Shop" className="nav-tab" menuVariant="light">
                  <NavDropdown.Item as={Link} to="/shop/books">All Books</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/shop/categories">Categories</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/shop/discounts">Discount Offers</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Pages" className="nav-tab" menuVariant="light">
                  <NavDropdown.Item as={Link} to="/about">About Us</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/team">Our Team</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Blog" className="nav-tab" menuVariant="light">
                  <NavDropdown.Item as={Link} to="/blog">All Posts</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/blog/author">By Author</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/blog/category">By Category</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Contact" className="nav-tab" menuVariant="light">
                  <NavDropdown.Item as={Link} to="/contact">Contact Form</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/map">Location Map</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/feedback">Feedback</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}
