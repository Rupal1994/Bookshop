import React, { useState } from 'react'
import { Container, Col, Row, Button, Image } from 'react-bootstrap'
import { Products } from '../../database'
import { useParams } from 'react-router-dom'
import './ProductDetail.css'
import { useNavigate } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa';
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'


export default function ProductDetail() {

    
    const { cartItems, dispatch } = useContext(CartContext);
    const navigate = useNavigate()

    const { id } = useParams()
    const productId = parseInt(id)

    const allBooks = Products.categories.flatMap(cat =>
        cat.books.map(book => ({ ...book, category: cat.name }))
    );

    const selectedProduct = allBooks.find(book => book.id === productId);

    if (!selectedProduct) {
        return (
            <Container className="mt-5">
                <h3> Product Not Found</h3>
                <p>No book found with ID: {id}</p>
            </Container>
        );
    }
    return (
        <div style={{ paddingTop: '70px' }}>
            <Container className='product-detail-container'>
                <Row>
                    <Col md={5} className="image-col">
                        <Image
                            src={selectedProduct.coverImage.replace('./', '/')}
                            alt={selectedProduct.title}
                            fluid
                            className="product-image shadow"
                        />
                    </Col>
                    <Col md={7} className="info-col">
                        <h2 className="product-title">{selectedProduct.title}</h2>
                        <p className="author"><strong>Author:</strong> {selectedProduct.author}</p>
                        <p className="category"><strong>Category:</strong> {selectedProduct.category}</p>
                        <p className="rating"><strong>Rating:</strong> {selectedProduct.rating} ⭐</p>
                        <p className="description">{selectedProduct.description}</p>
                        <div className="price-wrapper">
                            <span className="original-price">₹{selectedProduct.price}</span>
                            <span className="discounted-price">₹{selectedProduct.discountPrice}</span>
                        </div>

                        <div className="button-group">
                            <Button size="lg" className="btn-bn" 
                                    onClick={()=>{
                                        dispatch({ type: 'ADD_TO_CART', payload: selectedProduct });
                                        navigate('/CartPage')
                                    }}>
                                Add to Cart
                            </Button>
                            <Button
                                variant="danger"
                                size="lg"
                                className="back-btn"
                                onClick={() => navigate('/AllBooks')}
                            >
                                ← Back to All Books
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
