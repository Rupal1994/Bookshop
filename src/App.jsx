
import './App.css'
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom'
import Home from './pages/Home'
import AllBooks from './pages/AllBooks'
import Layout from './components/Layout'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import CategoryPage from './pages/CategoryPage'
import OrderComplete from './pages/OrderComplete'
import ScrollToTop from './components/ScrollToTop'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Blog from './pages/Blog'
import SingleBlog from './pages/SingleBlog'
import SearchBook from './pages/SearchBook'

function App() {

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/AllBooks' element={<AllBooks />} />
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path='/CartPage' element={<CartPage/>}/>
          <Route path='/CategoryPage/:categoryName' element={<CategoryPage/>}/>
          <Route path='/OrderComplete' element={<OrderComplete/>}/>
          <Route path='/AboutUs' element={<AboutUs/>}/>
          <Route path='/ContactUs' element={<ContactUs/>}/>
          <Route path='/Blog' element={<Blog/>}/>
          <Route path='/blog/:id' element={<SingleBlog/>}/> 
          <Route path='/SearchBook' element={<SearchBook/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
