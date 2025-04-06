import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Layout from './components/Layout'
import Products from './components/Products'
import Orders from './components/Orders'
import Sellers from './components/Sellers'
import Messages from './components/Messages'
import AddProduct from './components/AddProduct'
import Delete from './components/Delete'
import Update from './components/Update'
import ProductList from './components/ProductList'

function Admin() {
  return (
   <>
   <Router>
      <Layout />
      <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/ProductList' element={<ProductList />} />
            <Route path='/Products' element={<Products />} />
            <Route path='/Orders' element={<Orders />} />
            <Route path='/Sellers' element={<Sellers />} />
            <Route path='Messages' element={<Messages />} />
            <Route path='/AddProduct' element={<AddProduct />} />
            <Route path='/Update' element={<Update />} />
            <Route path='/Delete' element={<Delete />} />        
      </Routes>
   </Router>
   </>
  )
}

export default Admin