// /src/pages/CategoryBooksPage.jsx

import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { Products } from '../../database';
import './CategoryPage.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


export default function CategoryPage() {

    const { categoryName } = useParams()
    const { categories } = Products;
    // const [selectedCategory, setSelectedCategory] = useState(categories[0]); 
    const selectedCategory = Products.categories.find(
        cat => cat.name === categoryName
    ) || null;

    return (
        <div style={{ paddingTop: '70px' }}>
            <Container fluid>
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
                                <h4 className="mb-4 mt-4 cat-heading">📚 {selectedCategory.name} Books</h4>
                                <Row>
                                    {selectedCategory.books.map((book) => (
                                        <Col md={3} sm={6} xs={6} key={book.id} className="mb-4 mt-4">
                                            <Link to={`/product/${book.id}`} className="card-link">
                                                <Card className="h-100 book-card">
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
                                                </Card>
                                            </Link>
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
