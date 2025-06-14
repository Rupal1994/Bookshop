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
import { useContext } from 'react';
import { CartContext } from '../context/CartContext'
import {Products} from '../../database';

export default function NavbarBook() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);
  const [expanded, setExpanded] = useState(false)

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
  };

  const { cartItems } = useContext(CartContext)
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar className="custom-navbar" fixed="top"
      expanded={expanded}
      expand='lg'
      onToggle={() => setExpanded(prev => !prev)}>
      <Container className="px-3">

        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={() => setExpanded(false)}>
          <span className="logo-text">पुस्तक</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />


        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">

          <Nav className="nav-tabs-custom mx-auto">
            <Nav.Link as={Link} to="/" className="nav-tab" onClick={() => setExpanded(false)}>Home</Nav.Link>

            {/* <NavDropdown title="Shop" className="nav-tab" menuVariant="light">
              <NavDropdown.Item as={Link} to="/AllBooks" onClick={() => setExpanded(false)}>All Books</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CategoryPage" onClick={() => setExpanded(false)}>Categories</NavDropdown.Item>
            </NavDropdown> */}

            <NavDropdown title="Shop" className="nav-tab" menuVariant="light">
              <NavDropdown.Item as={Link} to="/AllBooks" onClick={() => setExpanded(false)}>
                All Books
              </NavDropdown.Item>

              <NavDropdown.Divider />

              {Products.categories.map((cat) => (
                <NavDropdown.Item
                  key={cat.id}
                  as={Link}
                  to={`/CategoryPage/${cat.name}`}
                  onClick={() => setExpanded(false)}
                >
                  {cat.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>


            <Nav.Link as={Link} to="/AboutUs" className="nav-tab" onClick={() => setExpanded(false)}>About Us</Nav.Link>

            <Nav.Link as={Link} to="/Blog" className="nav-tab" onClick={() => setExpanded(false)}>Blogs</Nav.Link>

            <Nav.Link as={Link} to="/ContactUs" className="nav-tab" onClick={() => setExpanded(false)}>Contact</Nav.Link>

          </Nav>


          <div className="d-flex align-items-center ms-auto gap-3">

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
              <Button variant="link" size="md" className="search-icon-btn" onClick={toggleSearch}>
                <FaSearch />
              </Button>
            </Form>


            <Button variant="warning" size="md" className="ms-3">
              Login
            </Button>


            <Button variant="outline-secondary" size="md" className="ms-3 position-relative" as={Link} to="/CartPage">
              <FaShoppingCart />
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle-y" style={{ fontSize: '1rem' }}>
                {totalCount > 0 && <span className="badge">{totalCount}</span>}
              </Badge>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
