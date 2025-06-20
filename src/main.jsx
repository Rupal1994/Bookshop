import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Router } from 'react-router-dom';
import { CartContext } from './context/CartContext.jsx'
import {CartProvider} from './context/CartProvider' 
import { SearchContext } from './context/SearchContext'
import {SearchProvider} from './context/SearchProvider'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { AuthProvider } from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
  <CartProvider>
  <SearchProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
  </SearchProvider>
  </CartProvider>
  </BrowserRouter>
  // </StrictMode>,
)
