import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { Products } from '../../database';
import './FlashSale.css';
import { Link } from 'react-router-dom';

export default function FlashSale() {
  const [flashBooks, setFlashBooks] = useState([]);
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Filter books with isFlashSale === true from all categories
    const booksOnSale = Products.categories.flatMap(category =>
      category.books.filter(book => book.isFlashSale)
    );
    setFlashBooks(booksOnSale);
  }, []);

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999);
      const diff = endOfDay - now;

      if (diff > 0) {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ hours, minutes, seconds });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    
    <section className="flash-sale-section py-5">
      <Container>
       <h2 className="flash-sale-title text-center mb-4">🔥 Today Only! Limited Time Flash Sale</h2>
        <div className="countdown text-center mb-4">
          Ends in: {String(timeLeft.hours).padStart(2, '0')}:
          {String(timeLeft.minutes).padStart(2, '0')}:
          {String(timeLeft.seconds).padStart(2, '0')}
        </div>
        <Row>
    
          <Col md={9}>
            <Row>
              {flashBooks.map(book => (
                <Col key={book.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Link to={`product/${book.id}`} className="card-link">
                    <Card className="flash-sale-card">
                      {/* <Badge bg="danger" className="flash-sale-badge">🔥 Today Only!</Badge> */}
                      
                        
                        <Card.Img variant="top" src={book.coverImage.replace('./', '/')} className="rounded-top" />
                        
                    
                      <Card.Body>
                        <Card.Title className="fs-6">{book.title}</Card.Title>
                        <Card.Text className="mb-1"><strong>Author:</strong> {book.author}</Card.Text>
                        <Card.Text className="price">
                          <span className="text-danger fw-bold">₹{book.discountPrice}</span>{' '}
                          <span className="text-muted text-decoration-line-through">₹{book.price}</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>


          <Col md={3} className="d-none d-md-block">

            {/* <div className="h-100 w-100 flash-sale-promo-image"></div> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
