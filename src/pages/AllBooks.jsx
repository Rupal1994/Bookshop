import React from 'react'
import { Container, Row, Col, Card, CardBody, CardImg, Button } from 'react-bootstrap'
import { Products } from '../../database'
import './AllBooks.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import { SearchContext } from '../context/SearchContext'
import { Toast, ToastContainer } from 'react-bootstrap'


export default function AllBooks() {

    const { searchQuery } = useContext(SearchContext)
    const [showToast, setshowToast] = useState(false)
    const navigate = useNavigate()
    const { dispatch } = useContext(CartContext)

    const handleAddToCart = (book) => {
        dispatch({ type: 'ADD_TO_CART', payload: book })
        setshowToast(true)
    }

    const allbooks = Products.categories.flatMap((category) =>
        category.books.map((book) => ({ ...book, category: category.name })))

    const filteredBooks = allbooks.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.translit.toLowerCase().includes(searchQuery.toLowerCase()))

    const booksToDisplay = searchQuery.trim() === '' ? allbooks : filteredBooks

    return (
        <Container className='mt-4'>

            <h2 className='page-title mb-4'> All Books </h2>

            {searchQuery.trim() !== '' && (
                <div className="mb-3 p-2" style={{ backgroundColor: '#f5bb89', borderLeft: '6px solid #532d0b' }}>
                    <h5 className="m-0">Showing results for: <strong>{searchQuery}</strong></h5>
                </div>
            )}

            {booksToDisplay.length === 0 && (
                <div className="text-center my-5">
                    <h4>😔 No books found matching your search.</h4>
                    <p>Try searching with a different title or keyword.</p>
                </div>
            )}

            <Row>
                {booksToDisplay.map((book) => (
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
                                    <span style={{ textDecoration: 'line-through' }}>₹{book.price}</span>
                                    <sapn> ₹{book.discountPrice}</sapn>
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
        </Container>
    )
}
