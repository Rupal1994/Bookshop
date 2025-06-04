import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';
import { Products } from '../../database';
import './UserReview.css';


const chunkReviews = (reviews, chunkSize = 2) => {
  const chunks = [];
  for (let i = 0; i < reviews.length; i += chunkSize) {
    chunks.push(reviews.slice(i, i + chunkSize));
  }
  return chunks;
};

export default function UserReview() {
  const allReviews = Products.categories.flatMap(category =>
    category.books.flatMap(book =>
      (book.reviews || []).map(review => ({
        ...review,
        coverImage: book.coverImage, 
      }))
    )
  );


  const groupedReviews = chunkReviews(allReviews, 2);
  return (
    <section className="user-review-section">
      <Container>
        <div className="user-review">
          <h2 className="review-heading">What Our Users Say</h2>
          <Row className="justify-content-center">
            <Col md={12}>
              <Carousel
                interval={3000}
                pause="hover"
                controls={true}
                indicators={false}
              >
                {groupedReviews.map((group, idx) => (
                  <Carousel.Item key={idx}>
                    <Row className="justify-content-center">
                      {group.map((review) => (
                        <Col md={6} key={review.reviewId} className="d-flex justify-content-center mb-4">
                          <div className="review-card">
                            <img
                              src={review.coverImage}
                              alt={review.bookTitle}
                              className="review-image-frame"
                            />
                            <div className="review-content">
                              <FaQuoteLeft className="quote-icon" />
                              <h3>{review.bookTitle}</h3>
                              <p><strong>{review.user}</strong></p>
                              <p className="review-comment">"{review.comment}"</p>
                              <p className="review-rating">⭐ {review.rating}/5</p>
                              <p className="review-date">{review.date}</p>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}
