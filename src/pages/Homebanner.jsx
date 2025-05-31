import React from 'react'
import './Homebanner.css'

export default function Home() {
  return (
    <div>
      <section className="banner-section">
      <div className="banner-overlay">
        <div className="banner-content">
          <h1 className="banner-title">पुस्तक</h1>
          <h2 className="banner-subtitle">Rediscover the Joy of Reading</h2>
          <p className="banner-tagline">Traditional Indian Literature • Spirituality • Kids Stories • Modern Classics</p>
          <a href="/shop" className="banner-btn">Explore Collection</a>
        </div>
      </div>
    </section>
    </div>
  )
}
