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
import { useCart } from '../context/useCart';
export default function NavbarBook() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);
  const [expanded,setExpanded] = useState(false)

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

  const { cartItems } = useCart();

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Navbar className="custom-navbar" fixed="top"
            expanded={expanded}
            expand='lg'
            onToggle={()=>setExpanded(prev=>!prev)}>
      <Container className="px-3">
    
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" onClick={() => setExpanded(false)}>
          <span className="logo-text">पुस्तक</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

    
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
    
          <Nav className="nav-tabs-custom">
            <Nav.Link as={Link} to="/" className="nav-tab" onClick={() => setExpanded(false)}>Home</Nav.Link>

            <NavDropdown title="Shop" className="nav-tab" menuVariant="light">
              <NavDropdown.Item as={Link} to="/AllBooks" onClick={() => setExpanded(false)}>All Books</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/CategoryPage" onClick={() => setExpanded(false)}>Categories</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/AboutUs" className="nav-tab" onClick={() => setExpanded(false)}>About Us</Nav.Link>

            {/* <NavDropdown title="Pages" className="nav-tab" menuVariant="light">
              <NavDropdown.Item as={Link} to="/AboutUs">About Us</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/faq">FAQ</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/team">Our Team</NavDropdown.Item>
            </NavDropdown> */}

            <NavDropdown title="Blog" className="nav-tab" menuVariant="light">
              <NavDropdown.Item as={Link} to="/blog" onClick={() => setExpanded(false)}>All Posts</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog/author" onClick={() => setExpanded(false)}>By Author</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/blog/category" onClick={() => setExpanded(false)}>By Category</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/ContactUs" className="nav-tab" onClick={() => setExpanded(false)}>Contact</Nav.Link>

            {/* <NavDropdown title="Contact" className="nav-tab" menuVariant="light">
              <NavDropdown.Item as={Link} to="/ContactUs">Contact Form</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/map">Location Map</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/feedback">Feedback</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>

      
          <div className="d-flex align-items-center">
            
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

            
            <Button variant="warning" size="sm" className="ms-3">
              Login
            </Button>

        
            <Button variant="outline-secondary" size="sm" className="ms-3 position-relative" as={Link} to="/cart">
              <FaShoppingCart />
              <Badge bg="danger" pill className="position-absolute top-0 start-100 translate-middle" style={{ fontSize: '0.65rem' }}>
                {totalCount > 0 && <span className="badge">{totalCount}</span>}
              </Badge>
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
