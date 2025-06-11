import React from 'react'
import { Products } from '../../database'
import { useNavigate } from 'react-router-dom'
import './BrowseCategories.css'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
export default function BrowseCategories() {

  const navigate = useNavigate()


  return (
    // <div>
    //    <section className="browse-categories">
    //   <h2>Browse By Categories</h2>
    //   <div className="categories-grid">
    //     {Products.categories.map((category, index) => (
    //       <div className="category-card" key={index}>
    //         <img src={category.image} alt={category.name} className="category-image" />
    //         <div className="category-content">
    //           <h3 className="category-title">{category.name}</h3>
    //           <button className="view-more-button">View More</button>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
    // </div>
    <section className='browse-categories py-4'>
      <Container>
        <h2 className='text-center mb-4'>Browse By Categories</h2>
        <Row className='justify-content-center'>
          {Products.categories.map((category, index) => (
            <Col key={index} xs={12} sm={6} md={3} lg={2} className='mb-4'>
              <Card className="h-100 text-center">
                <Card.Img
                  variant="top"
                  src={category.image}
                  alt={category.name}
                  className="category-image"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <Card.Body>
                  <Card.Title className="category-title">{category.name}</Card.Title>
                  <Button className="view-more-button mt-2" onClick={()=>navigate('/CategoryPage')}>View More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}
{/* <section className="browse-categories py-4">
  <Container>
    <h2 className="text-center mb-4">Browse By Categories</h2>
    <Row>
      {Products.categories.map((category, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3} className="mb-4">
          <Card className="h-100 text-center">
            <Card.Img
              variant="top"
              src={category.image}
              alt={category.name}
              className="category-image"
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <Card.Body>
              <Card.Title className="category-title">{category.name}</Card.Title>
              <Button className="view-more-button mt-2">View More</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section> */}