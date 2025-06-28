import React from 'react'
import { Container, Row, Col, Card, CardBody, CardImg, Button,Form } from 'react-bootstrap'
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

    const [selectedCategories, setSelectedCategories] = useState([]);
    const [maxPrice, setMaxPrice] = useState(1000);
    const [minRating, setMinRating] = useState(0);



    const handleAddToCart = (book) => {
        dispatch({ type: 'ADD_TO_CART', payload: book })
        setshowToast(true)
    }

    const allbooks = Products.categories.flatMap((category) =>
        category.books.map((book) => ({ ...book, category: category.name })))

    //Search
    const filteredBooks = allbooks.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.translit.toLowerCase().includes(searchQuery.toLowerCase()))

    let booksToDisplay = searchQuery.trim() === '' ? allbooks : filteredBooks

    //Category Filter
    if (selectedCategories.length > 0) {
        booksToDisplay = booksToDisplay.filter(book =>
            selectedCategories.includes(book.category)
        );
    }
    //Price Filter
    booksToDisplay = booksToDisplay.filter(book => book.discountPrice <= maxPrice);

    //Rating Filter
    if (minRating > 0) {
        booksToDisplay = booksToDisplay.filter(book => book.rating >= minRating);
    }
    return (
        <Container className='mt-4'>

            <h2 className='page-title mb-4'> All Books </h2>
            <Row>
                <Col md={3}>
                    <div className="p-3 rounded shadow-sm" style={{ backgroundColor: '#fff3e6' }}>
                        <h5 className="mb-3">Filter Books</h5>

                        {/* Category Filter */}
                        <div className="mb-3">
                            <strong>Categories:</strong>
                            {[...new Set(allbooks.map(book => book.category))].map(category => (
                                <Form.Check
                                    key={category}
                                    type="checkbox"
                                    label={category}
                                    value={category}
                                    checked={selectedCategories.includes(category)}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setSelectedCategories(prev =>
                                            prev.includes(value)
                                                ? prev.filter(c => c !== value)
                                                : [...prev, value]
                                        );
                                    }}
                                />
                            ))}
                        </div>

                        {/* Price Filter */}
                        <div className="mb-3">
                            <strong>Max Price: ₹{maxPrice}</strong>
                            <Form.Range
                                min={100}
                                max={500}
                                step={50}
                                value={maxPrice}
                                onChange={(e) => setMaxPrice(Number(e.target.value))}
                            />
                        </div>

                        {/* Rating Filter */}
                        <div className="mb-3">
                            <strong>Minimum Rating:</strong>
                            <Form.Select value={minRating} onChange={(e) => setMinRating(Number(e.target.value))}>
                                <option value={0}>All Ratings</option>
                                <option value={5}>5★</option>
                                <option value={4}>4★ & up</option>
                                <option value={3}>3★ & up</option>
                            </Form.Select>
                        </div>

                        <Button
                            variant="outline-danger"
                            size="sm"
                            onClick={() => {
                                setSelectedCategories([]);
                                setMaxPrice(1000);
                                setMinRating(0);
                            }}
                        >
                            Reset Filters
                        </Button>
                    </div>

                </Col>
                <Col md={9}>

                    {searchQuery.trim() !== '' && (
                        <div className="mb-3 p-2" style={{ backgroundColor: '#f5bb89', borderLeft: '6px solid #532d0b' }}>
                            <h5 className="m-0">Showing results for: <strong>{searchQuery}</strong></h5>
                        </div>
                    )}
                    <Row>
                        {booksToDisplay.length === 0 ? (
                            <div className="text-center my-5">
                                <h4>😔 No books found matching your search.</h4>
                                <p>Try searching with a different title or keyword.</p>
                            </div>
                        ):(
                        booksToDisplay.map((book) => (
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
                        ))
                        )}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
