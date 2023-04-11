import { Paper, Typography } from '@mui/material'
import React from 'react'
import { Currencies, ProductProps } from '../../DataInterface/productInterface'

const Product = ({index, product} : ProductProps) => {
  return (
    <Paper className=''  key={index}  sx={{display:'flex', flexDirection:'column',justifyContent:'center',alignItems:'center', borderRadius:2,cursor:'pointer'}}>
        <img style={{width:'100%',height:'50%',padding:'1rem'}} src={product.images[0]} alt={product.title}/>
        <div>

        </div>
        <Typography>{product.title}</Typography>
        <p>{Currencies.Euro} {product.price}</p>
    </Paper>
  )
}

export default Product