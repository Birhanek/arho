import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductNotFound from '../pages/ProductNotFound'
import ProductDetail from '../components/ProductDetail'


const IndexRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/productDetail' element={<ProductDetail />} />
            
            <Route path='*' element = {<ProductNotFound/>}/>
        </Routes>
    </div>
        

  )
}

export default IndexRoute