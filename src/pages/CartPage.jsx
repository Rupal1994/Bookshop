import React from 'react'
import { Container,Row,Col,Button,Image } from 'react-bootstrap'
import {useCart} from '../context/useCart'
import './CartPage.css' 
import {useNavigate} from 'react-router-dom'

export default function CartPage() {

    const { cartItems, removeFromCart, updateQuantity, getTotalAmount } = useCart()
    const navigate = useNavigate()

    const handlePlaceOrder = () =>{
      
      const totalAmount = getTotalAmount()

      navigate('/OrderComplete',{
        state:{
          orderedBooks : cartItems,
          totalAmount
        },
      })
      
    }


    if(cartItems.length===0){
        return(
            <Container className='pt-5'>
                <h3>Your Cart is Empty</h3>
                <p>Add Some Books To See Them Here!</p>
            </Container>
        )
    }

    
  return (
    <div style={{paddingTop:'70px'}}>
    <Container className='pt-5'>
        <h2 className='mb-4'>Your Cart</h2>
        {cartItems.map((item)=>(
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
          <Button variant="success" className="mt-3" onClick={handlePlaceOrder}>
            Place Order
          </Button>
        </div>
    </Container>
    </div>
  )
}
