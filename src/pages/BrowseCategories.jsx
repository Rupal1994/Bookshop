import React from 'react'
import { Products } from '../../database'
import { useNavigate } from 'react-router-dom'
import './BrowseCategories.css'

export default function BrowseCategories() {

  const navigate = useNavigate()


  return (
    <div>
      {/* <section className='browse-categories'>
        <div className="browse-categories">
          <h2>Browse By Categories</h2>
          <div className="categories-wrapper">
            <div className="categories-grid">
              {Products.categories.map(category => (
                <div className="category-card" key={category.id}>
                  <img className="category-image" src={category.image} alt={category.title} />
                  <div className="category-content">
                    <h3 className="category-title">{category.name}</h3>
                    <button className="view-more-button">View More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section> */}
       <section className="browse-categories">
      <h2>Browse By Categories</h2>
      <div className="categories-grid">
        {Products.categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.name} className="category-image" />
            <div className="category-content">
              <h3 className="category-title">{category.name}</h3>
              <button className="view-more-button">View More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}
