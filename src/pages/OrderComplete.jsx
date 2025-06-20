
import React from 'react'
import { Container, Row, Col, Button, Card, Table } from 'react-bootstrap'
import { FaCheckCircle } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import './OrderComplete.css'
export default function OrderComplete() {
    const { state } = useLocation()
    const navigate = useNavigate()
    if (!state) {
        navigate('/');
        return null;
    }
    const { orderedBooks, totalAmount } = state
    const orderId = Math.floor(100000 + Math.random() * 900000);
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);

    return (
        <div style={{paddingTop:'70px'}}>
            <Container className="order-complete-page text-center py-5">
                <FaCheckCircle className="success-icon mb-4" />

                <h2 className="mb-3">Thank you for your order!</h2>
                <p className="lead">Your order has been placed successfully. You will receive a confirmation email shortly.</p>

                <Card className="order-summary mt-4 p-4 text-start">
                    <h5 className="mb-3"> Order Summary</h5>
                    <p><strong>Order ID:</strong> #{orderId}</p>
                    <p><strong>Estimated Delivery:</strong> {deliveryDate.toDateString()}</p>

                    <Table striped bordered responsive className="mt-3">
                        <thead>
                            <tr>
                                <th>Book</th>
                                <th>Quantity</th>
                                <th>Price (₹)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderedBooks.map((book, idx) => (
                                <tr key={idx}>
                                    <td>{book.title}</td>
                                    <td>{book.quantity}</td>
                                    <td>₹{book.discountPrice * book.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <h5 className="mt-4 text-end">Total: ₹{totalAmount}</h5>
                </Card>
                <div className="mt-4">
                    <Button variant="outline-primary" onClick={() => navigate('/')}>Continue Shopping</Button>
                </div>
            </Container>
        </div>
    )
}
