import React from 'react'
import { Container, Row, Col, Card, CardBody, CardImg, Button } from 'react-bootstrap'
import { Products } from '../../database'
import './AllBooks.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { Toast, ToastContainer } from 'react-bootstrap'


export default function AllBooks() {

    const [showToast, setshowToast] = useState(false)
    const navigate = useNavigate()
    const { dispatch } = useContext(CartContext)

    const handleAddToCart = (book) => {
        dispatch({ type: 'ADD_TO_CART', payload: book })
        setshowToast(true)
    }

    const allbooks = Products.categories.flatMap((category) =>
        category.books.map((book) => ({ ...book, category: category.name })))

    return (
        <Container className='mt-4'>
            <h2 className='page-title mb-4'> All Books </h2>
            <Row>
                {allbooks.map((book) => (
                    <Col xs={6} sm={6} md={4} lg={3} key={book.id} className="mb-4">
                        <Card className="custom-card h-100">
                            <div onClick={() => navigate(`/product/${book.id}`)} style={{ cursor: 'pointer' }}>
                                <div className="image-container">
                                    <Card.Img
                                        variant="top"
                                        src={book.coverImage}
                                        alt={book.title}
                                        className="book-image"
                                    />
                                </div>
                                <Card.Body>
                                    <Card.Title className="card-title">{book.title}</Card.Title>
                                    <Card.Text className="mb-1"><strong>Author:</strong> {book.author}</Card.Text>
                                    <Card.Text className="text-muted"><small>{book.category}</small></Card.Text>
                                    {/* <Button variant="warning" className="buy-btn"
                                    onClick={() => navigate(`/product/${book.id}`)}>
                                    Buy Now</Button> */}
                                    <span style={{textDecoration : 'line-through'}}>₹{book.price}</span>
                                    <sapn> ₹{book.discountPrice}</sapn>
                                </Card.Body>
                            </div>
                            <Card.Footer>
                                <Button style={{backgroundColor : 'rgb(206, 82, 38)', color : 'white'}} onClick={() => handleAddToCart(book)}>
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
        </Container>
    )
}
