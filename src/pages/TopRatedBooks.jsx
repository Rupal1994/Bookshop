import React, { useContext, useState } from 'react';
import { Container, Card, Badge, Button } from 'react-bootstrap';
import { Products } from '../../database';
import './TopRatedBooks.css';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { Toast, ToastContainer } from 'react-bootstrap'

export default function TopRatedBooks() {

  const navigate = useNavigate()
  const { dispatch } = useContext(CartContext)
  const [showToast, setshowToast] = useState(false)

  const topBooks = Products.categories.flatMap(category =>
    category.books.filter(book => book.rating >= 4.6)
  );

  const handleAddToCart = (book) => {
    dispatch({ type: 'ADD_TO_CART', payload: book })
    setshowToast(true)
  }

  return (
    <section className="top-rated-section">
      <Container fluid>
        <h2 className="section-title">🌟 Top Rated Books 🌟</h2>
        <div className="marquee-wrapper">
          <div className="marquee-content">
            {topBooks.map(book => (
              <div className="scroll-item" key={book.id}>

                <Card className="modern-book-card">
                  <div onClick={() => navigate(`/product/${book.id}`)} style={{ cursor: 'pointer' }}>
                    <div className="img-wrapper">
                      <Card.Img src={book.coverImage} alt={book.title} />
                    </div>
                  </div>

                  <Card.Body className="text-center">
                    <div onClick={() => navigate(`/product/${book.id}`)} style={{ cursor: 'pointer' }}>
                      <Card.Title className="book-title">{book.title}</Card.Title>
                      <Card.Text className="author-text">{book.author}</Card.Text>
                      <div className="rating-and-button">
                        {/* <Badge bg="warning" text="dark" className="rating-badge">
                          ⭐ {book.rating}/5
                        </Badge> */}
                        <Card.Text>₹{book.price}</Card.Text>
                      </div>
                    </div>
                    <Button className="buy-now-btn"
                    onClick={() => handleAddToCart(book)}>Add to Cart</Button>
                  </Card.Body>
                </Card>
                <ToastContainer position='bottom-center' className='p-3'>
                  <Toast
                    onClose={() => setshowToast(false)}
                    show={showToast}
                    delay={2000}
                    autohide
                    bg='warning'>
                    <Toast.Header>
                      <strong className='me-auto'>Cart</strong>
                    </Toast.Header>
                    <Toast.Body className='text-white'>
                      Book added to cart
                    </Toast.Body>
                  </Toast>
                </ToastContainer>
              </div>

            ))}

          </div>
        </div>
      </Container>
    </section>
  );
}
