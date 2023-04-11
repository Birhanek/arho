import { Container, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { getAllProduct } from '../../DataInterface/productApi'
import Loading from '../SideFeatures/Loading'
import Product from './Product'

const FeaturedProduct = () => {
    const  { products, isLoading, isError , message } = useAppSelector(state => state.productR)

    const dispatch = useAppDispatch()
     
    console.log(products)
    const productElement =  products.products.map((product, index) =>{

        return <Product index={index} product={product}/>
    })

    useEffect(()=>{
        dispatch( getAllProduct() )
    },[dispatch])

  return (
    <Paper >
        <Typography variant='h1' component='h1' textAlign='center' padding='2rem'>
            Featured Products
        </Typography>
        {
        isLoading ? 
        <Loading/> : 
        isError ? 
        <Typography variant='body1' >{message?.toLocaleUpperCase()}</Typography>:
        <Container className='feature-container' sx={{display:'grid',gridTemplateColumns:'repeat(4,minMax(0,1fr))',gap:2}}>
            {
               products && productElement
            }
        </Container>
        
        }
    </Paper>
  )
}

export default FeaturedProduct