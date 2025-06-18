import React from 'react'
import { Container, Row, Col, Button, Image} from 'react-bootstrap'
import './CartPage.css'
import { useNavigate,Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { useContext } from 'react'
import './EmptyCart.css'

export default function CartPage() {

  const { cartItems, dispatch } = useContext(CartContext)
  const navigate = useNavigate()

  const removeFromCart = (id) => {
  dispatch({ type: 'REMOVE_FROM_CART', payload: id });
};

const updateQuantity = (id, newQty) => {
  if (newQty <= 0) {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  } else {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQty } });
  }
};

const getTotalAmount = () => {
  return cartItems.reduce((total, item) => {
    const qty = item.quantity || 1;
    return total + item.discountPrice * qty;
  }, 0);
};

const clearCart = () => {
  dispatch({ type: 'CLEAR_CART' });
};


  const handlePlaceOrder = () => {

  const totalAmount = getTotalAmount()

    navigate('/OrderComplete', {
      state: {
        orderedBooks: cartItems,
        totalAmount
      },
    })
    clearCart()

  }


  if (cartItems.length === 0) {
    return (
      <Container className='pt-5' style={{marginTop: '70px'}}>
        <img
          src="/images/empty-cart.avif" 
          alt="Empty Cart"
          className="empty-cart-img mb-4"
        />
        <h2 className="mb-3">Oops! Your Cart is Empty</h2>
        <p className="mb-4">Looks like you haven’t added anything yet.</p>
        <Button as={Link} to="/AllBooks" variant="warning" className='mb-3'>
          Browse Books
        </Button>
      </Container>
    )
  }


  return (
    <div style={{ paddingTop: '70px' }}>
      <Container className='pt-5'>
        <h2 className='mb-4'>Your Cart</h2>
        {cartItems.map((item) => (
          <Row key={item.id} className="mb-4 cart-item border-bottom pb-3">
            <Col md={3}>
              <Image
                src={item.coverImage.replace('./', '/')}
                alt={item.title}
                fluid
                className="rounded shadow"
              />
            </Col>
            <Col md={6}>
              <h5>{item.title}</h5>
              <p><strong>Author:</strong> {item.author}</p>
              <p><strong>Price:</strong> ₹{item.discountPrice}</p>
              <div className="d-flex align-items-center gap-2">
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >−</Button>
                <span>{item.quantity}</span>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >+</Button>
              </div>
            </Col>
            <Col md={3} className="d-flex flex-column justify-content-between align-items-end">
              <Button
                variant="outline-danger"
                onClick={() => removeFromCart(item.id)}
              >Remove</Button>
              <h6 className="mt-3">Subtotal: ₹{getTotalAmount()}</h6>
            </Col>
          </Row>
        ))}
        <div className="text-end mt-4">
          <h4>Total: ₹{getTotalAmount()}</h4>
          <Button className="mt-3 mb-3" onClick={handlePlaceOrder} style={{backgroundColor : '#8e5b21', color: 'white'}}>
            Place Order
          </Button>
        </div>
      </Container>
    </div>
  )
}
