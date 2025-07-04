import React, { useState, useRef, useEffect, useContext } from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, Button, FormControl, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaTimes, FaShoppingCart } from 'react-icons/fa';
import './navbar.css';
import { CartContext } from '../context/CartContext';
import { SearchContext } from '../context/SearchContext'
import { Products } from '../../database';
import { AuthContext } from '../context/AuthContext'

export default function NavbarBook() {

  const { currentUser, logout } = useContext(AuthContext)
  const firstName = currentUser?.name?.split(' ')[0] || '';
  const { searchQuery, setSearchQuery } = useContext(SearchContext)
  const [searchOpen, setSearchOpen] = useState(false);
  const inputRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate()

  const { cartItems } = useContext(CartContext);
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalItem = cartItems.length;

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
    if (searchQuery.trim !== '')
      navigate('/Allbooks')
  };

  return (
    <Navbar className="custom-navbar top-0" expand="lg" fixed="top" expanded={expanded} onToggle={() => setExpanded(prev => !prev)} collapseOnSelect>
      <Container className="d-flex align-items-center justify-content-between">

        <Navbar.Brand as={Link} to="/" onClick={() => setExpanded(false)}>
          <span className="brand-logo">पुस्तक</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>

        <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="nav-links text-left">
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
                <Button variant="link" className="clear-btn" onClick={clearSearch}
                >
                </Button>
              )}
              <Button variant="link" size="md" className="search-icon-btn" onClick={toggleSearch}
                style={{ color: '#a0522d', border: 'none' }}>
                <FaSearch />
              </Button>
            </Form>

            {currentUser ? (
              <>
                <Nav.Link as={Link} to="/profile">Hello, {firstName}</Nav.Link>
                <Button variant="outline-light" onClick={logout}>Logout</Button>
              </>
            ) : (
              <Button size="md" className="login-btn"
                style={{ backgroundColor: '#a0522d', color: 'white', border: 'none' }}
                as={Link}
                to="/Login">
                Login
              </Button>
            )}

            <Button size="md" as={Link} to="/CartPage"
              style={{ backgroundColor: '#a0522d', border: 'none' }}
              className="position-relative cart-btn">

              <FaShoppingCart />
              {totalCount > 0 && (
                <Badge bg="danger" pill className="position-absolute top-0 start-50 translate-middle-y cart-badge">
                  {totalItem}
                </Badge>
              )}
            </Button> 
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
