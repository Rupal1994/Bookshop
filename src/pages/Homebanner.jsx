import React from 'react'
import './Homebanner.css'
import { useNavigate } from 'react-router-dom' 

export default function Home() {

  const navigate = useNavigate()
  
  return (
    <div>
      <section className="banner-section">
      <div className="banner-overlay">
        <div className="banner-content">
          <h1 className="banner-title">पुस्तक</h1>
          <h2 className="banner-subtitle">Rediscover the Joy of Reading</h2>
          <p className="banner-tagline">Traditional Indian Literature • Spirituality • Kids Stories • Modern Classics</p>
          {/* <a href="/shop" className="banner-btn">Explore Collection</a> */}
          <button className='banner-btn' onClick={()=>navigate('/Allbooks')}>Explore Collection</button>
        </div>
      </div>
    </section>
    </div>
  )
}
