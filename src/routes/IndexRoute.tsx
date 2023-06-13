import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductNotFound from '../pages/ProductNotFound'
import ProductDetail from '../components/ProductDetail'
import WishList from '../pages/WishList'


const IndexRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/productDetail' element={<ProductDetail />} />
            <Route path='/wishList' element={ <WishList/>}/>
            <Route path='*' element = {<ProductNotFound/>}/>
        </Routes>
    </div>
        

  )
}

export default IndexRoute