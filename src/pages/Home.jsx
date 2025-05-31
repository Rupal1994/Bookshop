import React from 'react'
import NavbarBook from '../components/NavbarBook'
import Homebanner from '../pages/Homebanner'
import TopRatedBooks from '../pages//TopRatedBooks'
import UserReview from '../pages/UserReview'
import BrowseCategories from './BrowseCategories'
import Footer from '../components/Footer'
import Header from '../components/Header'



export default function Home() {
   const handleSearch = (query) => {

    console.log("Searching for:", query);

  };

  const cartItemCount = 3; 

  return (
    <div>
      <NavbarBook />
      <div className="home-banner-wrapper">
        <Header onSearch={handleSearch} cartCount={cartItemCount} />
        <Homebanner />
      </div>
      {/* <Homebanner /> */}
      <TopRatedBooks />
      <UserReview />
      <BrowseCategories />
      <Footer />
    </div>
  )
}
