import React from 'react'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import {Routes,Route} from "react-router-dom"
import Product from './components/Product'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:id' element={<ProductDetail/>}/>
      <Route path='/products' element={<Product/>}/>
    </Routes>
  )
}

export default App
