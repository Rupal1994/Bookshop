import React from 'react';
import './TopRatedBooks.css';

const TopRatedBooks = () => {
  const topRatedBooks = [
    {
      id: 1,
      title: "रामायण कथा",
      author: "गोस्वामी तुलसीदास",
      rating: 4.8,
      coverImage: "/images/ramayan-katha.webp"
    },
    {
      id: 2,
      title: "भगवद गीता सार",
      author: "स्वामी चिन्मयानंद",
      rating: 4.9,
      coverImage: "/images/bhagvad-geeta.jpg"
    },
    {
      id: 3,
      title: "भारत का प्राचीन इतिहास",
      author: "आर. एस. शर्मा",
      rating: 4.5,
      coverImage: "/images/bharat-itihas.webp"
    }
  ];

  return (
    <section className="top-rated-books-section">
      <h2 className="section-title">🌟 Top Rated Books</h2>
      <div className="card-container">
        {topRatedBooks.map(book => (
          <div key={book.id} className="book-card">
            <img src={book.coverImage} alt={book.title} className="book-image" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">{book.author}</p>
              <p className="book-rating">⭐ {book.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopRatedBooks;
