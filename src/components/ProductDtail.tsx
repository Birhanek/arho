import React,{useState} from 'react'
import ReactImageMagnify from 'react-image-magnify';
import  './muez.css'
import logoIamage from './image_10.jpg'
import image1 from './image_1.jpg'
import image2 from './image_2.jpg'
import image3 from './image_3.jpg'
import image4 from './image_4.jpg';

import { Grid } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red,lightBlue } from '@mui/material/colors';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


const ProductDtail = () => {
const [indexImage,setIndexImage] = useState(0)
    const imageList = [
    image4,image1,image2,image3
    ]
const indexHandler = (index:any)=>{
    setIndexImage(index)
}
    
  return (
    <div className='product_detail'>
        <Grid container>
            <Grid item xs={6} md={6}>
                <Grid container spacing={1} >
                    <Grid item xs={12}>
                        <h3>hello</h3>
                                
                                   <div  className='detail_image'>
                                    <a className='image_btn_previous'><ArrowBackIosIcon sx={{border:'none',padding:'0px'}} /></a>
                                {/* <img className='image_detail' src={imageList[indexImage]} alt='logo'></img> */}
                                <div className='image_magnifier'>
                                <ReactImageMagnify {...{
     smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: imageList[indexImage]
    },
    largeImage: {
        src: imageList[indexImage],
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
                       
                        {imageList.map((image,index) =>{
                            return <Grid item xs={2} md={2}>
                            <Box className='slideImages'>
                                <Box onClick={()=>indexHandler(index)}>
                                <img src={image} alt='logo'></img>
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

export default ProductDtail