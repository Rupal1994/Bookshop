
import './App.css'
import { Routes, Route, BrowserRouter, Router } from 'react-router-dom'
import Home from './pages/Home'
import AllBooks from './pages/AllBooks'
import Layout from './components/Layout'
import ProductDetail from './pages/ProductDetail'
import CartPage from './pages/CartPage'
import CategoryPage from './pages/CategoryPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/AllBooks' element={<AllBooks />} />
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/CategoryPage' element={<CategoryPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
