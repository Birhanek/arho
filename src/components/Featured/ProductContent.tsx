import {  Typography } from '@mui/material'
import SettingsIcon from '@mui/icons-material/Settings';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import BrandingWatermarkIcon from '@mui/icons-material/BrandingWatermark';
const ProductContent = () => {
  return (
    <section className ='content'>
        <Typography variant='h3' color='whitesmoke' >Advantages of Araho</Typography>
        <ul className ='product__Content'>
                <li className ='content-block'>
                    <RocketLaunchIcon className='content-image'/>
                    <span>
                        <Typography variant='h5' color='whitesmoke'>All items in stock</Typography>
                        <p className='content-p'>Orders placed before 3 p.m. are shipped on the same day</p>
                    </span>
                </li>
                <li className ='content-block'>
                    <BrandingWatermarkIcon className='content-image'/>
                    <span>
                        <Typography variant='h5' color='whitesmoke'>Quality A-Brands</Typography>
                        <p className='content-p'>Latest range of products, extensively tested by our experts</p>
                    </span>
                </li>
                <li className ='content-block'>
                    <SettingsIcon className='content-image'/>
                    <span>
                        <Typography variant='h5' color='whitesmoke'>12 month warranty</Typography>
                        <p className='content-p'>Standard warranty on all refurbished items, repaired in-house</p>
                    </span>
                </li>
                <li className ='content-block'>
                    <CardGiftcardIcon className='content-image'/>
                    <span>
                        <Typography variant='h5' color='whitesmoke'>Money back guarantee</Typography>
                        <p className='content-p'>14 day trial period for every purchase</p>
                    </span>
                </li>
        </ul>
    </section>
  )
}

export default ProductContent