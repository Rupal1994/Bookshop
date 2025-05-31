

import React from 'react'
import { Products } from "../../db";
import './featuredbooks.css' 

export default function FeaturedBooks() {

   const featuredBooks = Products.categories
    .flatMap((category) => category.books)
    .filter((book) => book.rating >= 4.7);

  return (
    <div>
      <section className="featured-book-section">
      <h2 className="featured-title">🌟 Featured Books 🌟</h2>
      <div className="featured-grid">
        {featuredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.coverImage} alt={book.title} className="featured-image" />
            <div className="featured-details">
              <h3>{book.title}</h3>
              <p className="author">लेखक: {book.author}</p>
              <p className="price">₹{book.discountPrice} <span className="original">₹{book.price}</span></p>
              <p className="rating">⭐ {book.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}
