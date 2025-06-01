import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import './Header.css';

export default function Header({ onSearch, cartCount }) {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <div className="header-extras py-3">
      <Container>
        <Row className="align-items-center">

          {/* Search bar */}
          <Col xs={12} md={6} className="mb-3 mb-md-0 d-flex justify-content-start">
            <Form onSubmit={handleSubmit} className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search books..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="me-2"
              />
              <Button type="submit" variant="primary">Search</Button>
            </Form>
          </Col>

          {/* Buttons & Cart */}
          <Col xs={12} md={6} className="d-flex justify-content-md-end justify-content-start align-items-center gap-3">
            <Button variant="outline-primary" className="px-3">Login</Button>
            <Button variant="outline-secondary" className="px-3">Register</Button>

            <div className="cart-icon position-relative">
              <FaShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="cart-count position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
}
