import React from 'react';
import { Container, Card, Badge, Button } from 'react-bootstrap';
import { Products } from '../../database';
import './TopRatedBooks.css';
import { Navigate, useNavigate } from 'react-router-dom';

export default function TopRatedBooks() {

  const navigate = useNavigate()
  const topBooks = Products.categories.flatMap(category =>
    category.books.filter(book => book.rating >= 4.6)
  );

  return (
    <section className="top-rated-section">
      <Container fluid>
        <h2 className="section-title">🌟 Top Rated Books 🌟</h2>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {topBooks.map(book => (
              <div className="scroll-item" key={book.id}>
                <Card className="modern-book-card">
                  <div className="img-wrapper">
                    <Card.Img src={book.coverImage} alt={book.title} />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="book-title">{book.title}</Card.Title>
                    <Card.Text className="author-text">{book.author}</Card.Text>
                    <div className="rating-and-button">
                      <Badge bg="warning" text="dark" className="rating-badge">
                      ⭐ {book.rating}/5
                    </Badge>
                    <Button variant="outline-success" className="buy-now-btn" 
                    onClick={()=>navigate(`/product/${book.id}`)}>Buy Now</Button>
                    </div>
                    
                  </Card.Body>
                </Card>
              </div>
            ))}
            {/* Duplicate for smooth loop */}
            {/* {topBooks.map(book => (
              <div className="scroll-item" key={`${book.id}-duplicate`}>
                <Card className="modern-book-card">
                  <div className="img-wrapper">
                    <Card.Img src={book.coverImage} alt={book.title} />
                  </div>
                  <Card.Body className="text-center">
                    <Card.Title className="book-title">{book.title}</Card.Title>
                    <Card.Text className="author-text">{book.author}</Card.Text>
                    <Badge bg="warning" text="dark" className="rating-badge">
                      ⭐ {book.rating}/5
                    </Badge>
                  </Card.Body>
                </Card>
              </div>
            ))} */}
          </div>
        </div>
      </Container>
    </section>
  );
}
