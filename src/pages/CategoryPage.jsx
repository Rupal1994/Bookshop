// /src/pages/CategoryBooksPage.jsx

import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { Products } from '../../database';
import './CategoryPage.css';
import { Link } from 'react-router-dom';


export default function CategoryPage() {
    const { categories } = Products;
    const [selectedCategory, setSelectedCategory] = useState(categories[0]); 

    return (
        <div style={{ paddingTop: '70px' }}>
            <Container fluid>
                <Row>
                    
                    <Col md={3} className="sidebar">
                        <h4 className="mb-3 mt-3">📂 Categories</h4>
                        <ListGroup>
                            {categories.map((cat) => (
                                <ListGroup.Item
                                    key={cat.id}
                                    active={selectedCategory.name === cat.name}
                                    onClick={() => setSelectedCategory(cat)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    {cat.name}
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>

        
                    <Col md={9} className='book-area'>
                        <h4 className="mb-4 mt-4 cat-heading">📚 {selectedCategory.name} Books</h4>
                        <Row>
                            {selectedCategory.books.map((book) => (
                                <Col md={3} sm={6} xs={6} key={book.id} className="mb-4 mt-4">
                                    <Link to={`/product/${book.id}`} className="card-link">
                                        <Card className="h-100 book-card">
                                            <div className="image-container mt-4">
                                                <Card.Img variant="top" src={book.coverImage.replace('./', '/')} />
                                                <div className="overlay">
                                                    <span>View Details</span>
                                                </div>
                                            </div>
                                            <Card.Body>
                                                <Card.Title>{book.title}</Card.Title>
                                                <Card.Text>Author: {book.author}</Card.Text>
                                                <Card.Text>Price: ₹{book.discountPrice}</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
