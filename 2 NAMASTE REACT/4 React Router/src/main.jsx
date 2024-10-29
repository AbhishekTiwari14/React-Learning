import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Product from './components/Product.jsx'
import Contact from './components/Contact.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout />} errorElement = {<ErrorPage />}>
      <Route path = "" element = {<Home />} />
      <Route path = "about" element = {<About />} /> {/* /about  */}
      <Route path = "contact-us" element = {<Contact />} />
      <Route path = "product/" element = {<Product />}>
        <Route path = ":productId" element = {<Home />} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= {router} />   
  </React.StrictMode>,
)
