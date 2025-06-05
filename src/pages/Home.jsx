import React from 'react'
import NavbarBook from '../components/NavbarBook'
import Homebanner from '../pages/Homebanner'
import TopRatedBooks from '../pages//TopRatedBooks'
import UserReview from '../pages/UserReview'
import BrowseCategories from './BrowseCategories'
import Footer from '../components/Footer'
import Header from '../components/Header'



export default function Home() {
  

  return (
    <div>
      {/* <NavbarBook /> */}
      <Homebanner />
      <TopRatedBooks />
      <UserReview />
      <BrowseCategories />
      {/* <Footer /> */}
    </div>
  )
}
