import React, { useState, useRef, useEffect, useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button, FormControl, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaTimes, FaShoppingCart } from 'react-icons/fa';
import './navbar.css';
import { CartContext } from '../context/CartContext';
import {SearchContext} from '../context/SearchContext'
import { Products } from '../../database';

export default function NavbarBook() {

  const {searchQuery,setSearchQuery} = useContext(SearchContext)
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate()

  const { cartItems } = useContext(CartContext);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  const toggleSearch = () => {
    if (searchOpen && !searchQuery) setSearchOpen(false);
    else setSearchOpen(true);
  };

  const clearSearch = () => {
    setSearchQuery('');
    inputRef.current?.focus();
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // console.log('Searching:', searchQuery);
    if(searchQuery.trim !== '')
      navigate('/Allbooks')
  };

  return (
    <Navbar className="custom-navbar" expand="lg" fixed="top" expanded={expanded} onToggle={() => setExpanded(prev => !prev)} collapseOnSelect>
      <Container className="d-flex align-items-center justify-content-between">

        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <span className="brand-logo">पुस्तक</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <div className='d-flex justify-content-center'>

            <Nav className="nav-links">
              <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Home</Nav.Link>

              <NavDropdown title="Shop" className="nav-tab" menuVariant="light">
                <NavDropdown.Item as={Link} to="/AllBooks" onClick={() => setExpanded(false)}>All Books</NavDropdown.Item>
                <NavDropdown.Divider />
                {Products.categories.map(cat => (
                  <NavDropdown.Item key={cat.id} as={Link} to={`/CategoryPage/${cat.name}`} onClick={() => setExpanded(false)}>
                    {cat.name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>

              <Nav.Link as={Link} to="/AboutUs" onClick={() => setExpanded(false)}>About</Nav.Link>
              <Nav.Link as={Link} to="/Blog" onClick={() => setExpanded(false)}>Blog</Nav.Link>
              <Nav.Link as={Link} to="/ContactUs" onClick={() => setExpanded(false)}>Contact</Nav.Link>
            </Nav>
          </div>

          <div className="d-flex align-items-center ms-auto gap-3 navbar-actions">
            <Form onSubmit={handleSearchSubmit} className="d-flex align-items-center position-relative search-form">
              <FormControl
                ref={inputRef}
                type="search"
                placeholder="Search books..."
                size="sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`search-input ${searchOpen ? 'expanded' : ''}`}
                onBlur={() => !searchQuery && setSearchOpen(false)}
              />
              {searchOpen && searchQuery && (
                <Button variant="link" size="md" className="clear-btn" onClick={clearSearch}
                >
                  <FaTimes />
                </Button>
              )}
              <Button variant="link" size="md" className="search-icon-btn" onClick={toggleSearch}
                style={{ color: '#a0522d', border: 'none' }}>
                <FaSearch />
              </Button>
            </Form>

            <Button size="md" className="login-btn" style={{ backgroundColor: '#a0522d', color: 'white', border: 'none' }}>Login</Button>

            <Button size="md" as={Link} to="/CartPage"
              style={{ backgroundColor: '#a0522d', border: 'none' }}
              className="position-relative cart-btn">

              <FaShoppingCart />
              {totalCount > 0 && (
                <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle-y cart-badge">
                  {totalCount}
                </Badge>
              )}
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
