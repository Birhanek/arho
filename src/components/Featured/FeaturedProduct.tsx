import { Container, Paper, Typography } from '@mui/material'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hook'
import { getAllProduct } from '../../DataInterface/productApi'
import Loading from '../SideFeatures/Loading'
import Product from './Product'
import { grey } from '@mui/material/colors'

const FeaturedProduct = () => {
    const  { products, isLoading, isError , message } = useAppSelector(state => state.productR)

    const [manipulator,setManipulator] = useState<number>(0)
    const [dataPerPage] = useState<number>(10)

    const indexOfLastData = manipulator * dataPerPage + dataPerPage
    const indexOfFirstData = manipulator * dataPerPage
    const dispatch = useAppDispatch()
     
    console.log(products)
    const productElement =  products.products.slice(indexOfFirstData,indexOfLastData).map((product, index) =>{

        return <Product index={index} product={product}/>
    })

    const totalPage = products.limit / dataPerPage;

    const prevPage = () =>{
        if(manipulator !== 0){
            setManipulator(manipulator-1)
        }
    }
    const nextPage = () => {
        if(manipulator !== totalPage-1){
            setManipulator(manipulator + 1)
        }
    }

    useEffect(()=>{
        dispatch( getAllProduct() )
    },[dispatch])

  return (
    <Paper className='feature-container'>
        <Typography variant='h1' component='h1' textAlign='center' padding='2rem'>
            Featured Products
        </Typography>
        {
        isLoading ? 
        <Loading/> : 
        isError ? 
        <Typography variant='body1' >{message?.toLocaleUpperCase()}</Typography>:
        <Container  sx={{display:'grid',gridTemplateColumns:'repeat(4,minMax(0,1fr))',gap:2}}>
            {
               products && productElement
            }
            
        </Container>
        
        }
        <div className='pagination'>
            <ArrowCircleLeftIcon   onClick = {prevPage}/>
            <ArrowCircleRightIcon  onClick = {nextPage}/>
        </div>
    </Paper>
  )
}

export default FeaturedProduct