import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './UserReview.css'
import { Products } from '../../database'

export default function UserReview() {

  const allReviews = Products.categories.flatMap(category =>
    category.books.flatMap(book =>
      book.reviews.map(review => (
        {
          ...review,
          bookTitle: book.title,
          coverImage: book.coverImage
        }
      ))
    )
  )

  return (
    <section className='user-review-section'>
      <div className='user-review'>
        <h2 className='review-heading'>What Our Users Says</h2>
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoplay
          interval={4000}
          className='review-carousel'>

          {allReviews.map(review => (
            <div className='review-card' key={review.reviewId}>
              <img src={review.coverImage} alt={review.bookTitle} />
              <div className='review-content'>
                <h3>{review.bookTitle}</h3>
                <p><strong>{review.user}</strong></p>
                <p className='review-comment'>{review.comment}</p>
                <p className='review-rating'>{review.rating}/5</p>
                <p className='review-date'>{review.date}</p>
              </div>

            </div>
          ))}
    
    </Carousel>
      </div>
    </section >
  )
}
