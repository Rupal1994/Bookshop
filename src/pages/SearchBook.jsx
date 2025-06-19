import React, { useContext } from 'react'
import { Products } from '../../database'
import { SearchContext } from '../context/SearchContext'

export default function SearchBook() {

  const { searchQuery } = useContext(SearchContext);
  const allBooks = Products.categories.flatMap(cat => cat.books);

  const filteredBooks = allBooks.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    book.translit?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (

   <div className="search-page container py-4">
      <div className="search-header p-3 mb-4 rounded">
        <h3 className="m-0">
          Search Results for: <span className="highlight">{searchQuery}</span>
        </h3>
      </div>

      {filteredBooks.length === 0 ? (
        <div className="no-results text-center mt-5">
          <h4>😔 No books found matching your search.</h4>
          <p>Try a different keyword or explore other categories.</p>
        </div>
      ) : (
        <div className="row">
          {filteredBooks.map((book, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div className="book-card card h-100 shadow-sm">
                <img
                  src={book.coverImage}
                  className="card-img-top"
                  alt={book.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text mb-1">by {book.author}</p>
                  <span className="badge bg-warning text-dark">
                    Rating: {book.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
