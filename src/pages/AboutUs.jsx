import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-us-page">

      {/* Hero Section */}
      <div className="about-hero text-white text-center d-flex flex-column justify-content-center align-items-center">
        <h1 className="display-4 about-title">About Pustak</h1>
        <p className="lead fw-semibold">Bringing Stories to Life, One Book at a Time</p>
      </div>

      {/* Our Story Section */}
      <Container className="py-5">
        <Row className="align-items-center">
          <Col md={6}>
            <img src="/images/about-hero.jpg" alt="Our Story" className="img-fluid rounded shadow" />
          </Col>
          <Col md={6}>
            <h2 className="section-heading text-center">Our Story</h2>
            <p className="text-muted justify-conten-center">
              Pustak is more than just a bookstore — it's a tribute to the timeless tradition of storytelling.
              Whether you're seeking the wisdom of the Ramayana, the valor of Indian kings, or bedtime tales for your children, we bring carefully curated books in Gujarati, Hindi, and English.
            </p>
            <p className="text-muted">
              We aim to make our rich literary culture accessible to all generations — in homes, schools, and beyond.
            </p> 
          </Col>
        </Row>
      </Container>

      {/* Features Section */}
      <Container className="pb-5">
        <h2 className="text-center section-heading mb-4">Why Choose Us</h2>
        <Row className="g-4">
          <Col md={4}>
            <Card className="feature-card text-center shadow-sm h-100">
              <Card.Body>
                <h5 className="fw-bold mb-3">📚 Gujarati & Hindi Titles</h5>
                <p>Enjoy rare and modern books in your native languages.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card text-center shadow-sm h-100">
              <Card.Body>
                <h5 className="fw-bold mb-3">🚚 Fast Delivery</h5>
                <p>We ensure your favorite books reach your doorstep quickly.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="feature-card text-center shadow-sm h-100">
              <Card.Body>
                <h5 className="fw-bold mb-3">❤️ Trusted by Families</h5>
                <p>Perfect for parents, teachers & kids — we grow with your stories.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
