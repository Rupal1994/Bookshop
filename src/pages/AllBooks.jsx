import React from 'react'
import { Container, Row, Col, Card, CardBody, CardImg , Button} from 'react-bootstrap'
import { Products } from '../../database'
import './AllBooks.css'
import { useNavigate } from 'react-router-dom'

export default function AllBooks() {

    const navigate = useNavigate()

    const allbooks = Products.categories.flatMap((category) =>
        category.books.map((book) => ({ ...book, category: category.name })))

    return (
        <Container className='mt-4'>
            <h2 className='page-title mb-4'> All Books </h2>
            <Row>
                {allbooks.map((book) => (
                    <Col xs={6} sm={6} md={4} lg={3} key={book.id} className="mb-4">
                        <Card className="custom-card h-100">
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
                                <Button variant="warning" className="buy-btn" 
                                onClick={()=>navigate(`/product/${book.id}`)}>
                                    Buy Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
