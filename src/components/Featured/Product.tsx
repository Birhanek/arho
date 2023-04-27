import React from 'react'
import { Paper, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareIcon from '@mui/icons-material/Compare';
import { Currencies, ProductProps } from '../../DataInterface/productInterface'

const Product = ({index, product} : ProductProps) => {
  return (
    <Paper className='product_shape' elevation={0}  key={index}  sx={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center', borderRadius:2,cursor:'pointer'}}>
        <img style={{width:'100%', height:'100%'}} src={product.images[0]} alt={product.title}/>
        <div className='favorite_shopping'>
            <div className='product-btn'>
              <button className='btnProduct btn__compare_fav'><FavoriteBorderIcon className='btnIcon'/></button>
              <button className='btnProduct btnCart'>Add to cart</button>
              <button className='btnProduct btn__compare_fav'><CompareIcon className='btnIcon'/></button>
            </div>
            <h6 className='stock'>✓ In stock</h6>
        </div>
        <Typography variant='body2'>{product.title}</Typography>
        <p>{Currencies.Euro} {product.price}</p>
    </Paper>
  )
}

export default Product