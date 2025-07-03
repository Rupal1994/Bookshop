// /src/pages/CategoryBooksPage.jsx

import React, { useContext, useState } from 'react';
import { Container, Row, Col, ListGroup, Card, Button,Toast, ToastContainer } from 'react-bootstrap';
import { Products } from '../../database';
import './CategoryPage.css';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';


export default function CategoryPage() {

    const { categoryName } = useParams()
    const { categories } = Products;
    const [showToast, setshowToast] = useState(false)
    const navigate = useNavigate()
    const { dispatch } = useContext(CartContext)

    const handleAddToCart = (book) => {
        dispatch({ type: 'ADD_TO_CART', payload: book })
        setshowToast(true)
    }

    const selectedCategory = Products.categories.find(
        cat => cat.name === categoryName
    ) || null;

    return (
        <div style={{ paddingTop: '70px' }}>
            <Container>
                <Row>
                    <Col md={3} className="sidebar">
                        <h4 className="mb-3 mt-3">📂 Categories</h4>
                        <ListGroup>
                            {categories.map((cat) => {
                                const c = cat.name;
                                return (
                                    <ListGroup.Item
                                        key={cat.id}
                                        active={categoryName === c}
                                        action
                                        as={Link}
                                        to={`/CategoryPage/${c}`}
                                    >
                                        {cat.name}
                                    </ListGroup.Item>
                                );
                            })}
                        </ListGroup>
                    </Col>


                    <Col md={9} className='book-area'>
                        {selectedCategory ? (
                            <>
                                {/* <h4 className="mb-4 mt-4 cat-heading">📚 {selectedCategory.name} Books</h4> */}
                                <Row>
                                    {selectedCategory.books.map((book) => (
                                        <Col md={4} sm={6} xs={6} key={book.id} className="mb-4 mt-4">
                                
                                                <Card className="h-100 book-card">
                                                    <div onClick={() => navigate(`/product/${book.id}`)} style={{ cursor: 'pointer' }}>
                                                        <div className="image-container mt-4">
                                                            <Card.Img
                                                                variant="top"
                                                                src={book.coverImage.replace('./', '/')}
                                                            />
                                                            <div className="overlay">
                                                                <span>View Details</span>
                                                            </div>
                                                        </div>
                                                        <Card.Body>
                                                            <Card.Title>{book.title}</Card.Title>
                                                            <Card.Text>Author: {book.author}</Card.Text>
                                                            <Card.Text>Price: ₹{book.discountPrice}</Card.Text>
                                                        </Card.Body>
                                                    </div>
                                                    <Card.Footer>
                                                        <Button style={{ backgroundColor: 'rgb(206, 82, 38)', color: 'white' }} onClick={() => handleAddToCart(book)}>
                                                            Add to Cart
                                                        </Button>
                                                    </Card.Footer>
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
                                            
                                        </Col>
                                    ))}
                                </Row>
                            </>
                        ) : (
                            <h4 className="mt-4">Category not found.</h4>
                        )}

                    </Col>
                </Row>
            </Container>
        </div>
    );
}
