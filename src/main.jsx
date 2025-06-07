import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Router } from 'react-router-dom';
import { CartContext } from './context/CartContext.jsx'
import {CartProvider} from './context/CartProvider' 

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
  </BrowserRouter>
  // </StrictMode>,
)
