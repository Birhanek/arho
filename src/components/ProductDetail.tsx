import React,{useState} from 'react'
import ReactImageMagnify from 'react-image-magnify'
import  './muez.css'
import image1 from './image_1.jpg'
import image2 from './image_2.jpg'
import image3 from './image_3.jpg'
import image4 from './image_4.jpg';

import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box';


import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useLocation } from 'react-router-dom'
import IProduct from '../DataInterface/productInterface'


const ProductDetail = () => {
    const {state} = useLocation()
    const product:IProduct = state.product
    console.log(product.brand)
    
const [indexImage,setIndexImage] = useState<number>(0)
    const imageList = [
    image4,image1,image2,image3
    ]
const indexHandler = (index:number)=>{
    setIndexImage(index)
}
    
  return (
    <div className='product_detail'>
        <Grid container>
            <Grid item xs={6} md={6}>
                <Grid container spacing={1} >
                    <Grid item xs={12}>
                        <Typography variant='h3'>{product.title}</Typography>
                        <div className='detail_image'>
                                <a className='image_btn_previous'><ArrowBackIosIcon sx={{border:'none',padding:'0px'}} /></a>
                                <div className='image_magnifier'>
                                <ReactImageMagnify {...{smallImage: {
                                                                alt: product.title,
                                                                isFluidWidth: true,
                                                                src: product.images[indexImage],
                                                                width:100,
                                                                height:100
                                                            },
                                                        largeImage: {
                                                                src: product.images[indexImage],
                                                                width: 1280,
                                                                height: 720
                                                            }
                                                        }} />
                                </div>
                                    <a className='image_btn_next'><ArrowForwardIosIcon sx={{border:'none',padding:'0px'}} /></a>
                              </div>
                             
                    </Grid>

                    <Grid item xs={12}>
                        <Grid container>
                       
                        {product.images.map((image,index) =>{
                            return <Grid item xs={2} md={2}>
                            <Box className='slideImages'>
                                <Box onClick={()=>indexHandler(index)}>
                                <img style={{width:'30%',height:'30%'}} src={image} alt='logo'></img>
                                </Box>
                            
                            </Box>
                            </Grid>
                        })}
                       </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={6} md={6}>
                <h1>Details</h1>
            </Grid>
            
        </Grid>
    </div>
  )
}
export default ProductDetail
