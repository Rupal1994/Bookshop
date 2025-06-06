import React, { useState, useRef, useEffect } from 'react';
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Badge,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaTimes } from 'react-icons/fa';
import './navbar.css';

export default function NavbarBook() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const toggleSearch = () => {
    if (searchOpen && !searchQuery) {
      setSearchOpen(false);
    } else {
      setSearchOpen(true);
    }
  };

  const clearSearch = () => {
    setSearchQuery('');
    inputRef.current?.focus();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Searching:', searchQuery);
    // Handle your search logic
  };

  return (
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container className="px-3">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span className="logo-text">पुस्तक</span>
        </Navbar.Brand>

        {/* Toggle button for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Nav and icons */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          {/* Left side tabs */}
          <Nav className="nav-tabs-custom">
            <Nav.Link as={Link} to="/" className="nav-tab">Home</Nav.Link>

            <NavDropdown title="Shop" className="nav-tab" menuVariant="light">
              <NavDropdown.Item as={Link} to="/AllBooks">All Books</NavDropdown.Item>
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

          {/* Right side: search, login, cart */}
          <div className="d-flex align-items-center">
            {/* Search */}
            <Form onSubmit={handleSearchSubmit} className="d-flex align-items-center position-relative" style={{ minWidth: '40px' }}>
              <FormControl
                ref={inputRef}
                type="search"
                placeholder="Search..."
                size="sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`search-input ${searchOpen ? 'expanded' : ''}`}
                onBlur={() => {
                  if (!searchQuery) setSearchOpen(false);
                }}
              />
              {searchOpen && searchQuery && (
                <Button variant="link" size="sm" className="clear-btn" onClick={clearSearch}>
                  <FaTimes />
                </Button>
              )}
              <Button variant="link" size="sm" className="search-icon-btn" onClick={toggleSearch}>
                <FaSearch />
              </Button>
            </Form>

            {/* Login */}
            <Button variant="warning" size="sm" className="ms-3">
              Login
            </Button>

            {/* Cart */}
            <Button variant="outline-secondary" size="sm" className="ms-3 position-relative" as={Link} to="/cart">
              <FaShoppingCart />
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.65rem' }}>
                3 {/* Replace with dynamic count */}
              </Badge>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
