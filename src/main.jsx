import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Navbar from './landing_page/Navbar.jsx'
import Footer from './landing_page/Footer.jsx'

import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/about/AboutPage.jsx'
import SupportPage from './landing_page/support/SupportPage.jsx'
import Signup from './landing_page/signup/Signup.jsx'
import PricingPage from './landing_page/pricing/PricingPage.jsx'
import ProductPage from './landing_page/products/ProductPage.jsx'
import NotFound from './landing_page/NotFound.jsx'

import { BrowserRouter, Routes, Route} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/about' element={<AboutPage />} />
    <Route path='/support' element={<SupportPage />} />
    <Route path='/signup' element={<Signup />} />
    <Route path='/pricing' element={<PricingPage />} />
    <Route path='/product' element={<ProductPage />} />
    <Route path='*' element={<NotFound />} />
  </Routes>
  <Footer/>
  </BrowserRouter>
)
