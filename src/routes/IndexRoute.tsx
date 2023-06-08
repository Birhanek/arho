import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductNotFound from '../pages/ProductNotFound'
import ProductDtail from '../components/ProductDtail'


const IndexRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/productdetail' element={<ProductDtail />} />
            
            <Route path='*' element = {<ProductNotFound/>}/>
        </Routes>
    </div>
        

  )
}

export default IndexRoute