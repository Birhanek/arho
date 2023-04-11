
import React, { useState } from 'react'
import { AppBar, Box, Toolbar, Badge } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Currencies, Images, LanguageFlags, Languages } from '../../DataInterface/productInterface'
import { Link } from 'react-router-dom'
import Search from '../search/Search';
import BottomNavBar from './BottomNavbar';
const Navbar = () => {
  const [languageSelector,setLanguageSelector] = useState<string>(Languages.English)

  const [countryFlagSelector, setCountryFlagSelector] = useState <string>(LanguageFlags.flag.UnitedKingdom)

  const [currency,setCurrency] = useState<string>(Currencies.Euro)

  const [open, setOpen] = useState<boolean>(false)
  

  const handleLanguages = (event:React.ChangeEvent<HTMLSelectElement>) =>{
    if(event.target.value === Languages.English){
      setCountryFlagSelector(LanguageFlags.flag.UnitedKingdom)
      setLanguageSelector(event.target.value)
    }
    else{
      setCountryFlagSelector(LanguageFlags.flag.NetherLands)
      setLanguageSelector(event.target.value)
    }
    
  }

  const handleCollapse = () =>{
    setOpen(!open)
  }

  return (
    <Box sx={{flexGrow:1,width:'100%',position:"sticky",top:0,left:0,zIndex:5}} >
      <AppBar position='sticky'  elevation={2}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
          <Box onClick ={handleCollapse} sx={{display:{
            xs:`block`,
            sm: 'block',
            md:'none',
            lg:`none`
          },cursor:'pointer'}}>
              <MenuIcon sx={{color:'black'}}/>
          </Box>

          <Link to='/'><img style={{width:100,height:100,padding:4,marginRight:4,borderRadius:'50%'}} src={Images.logo.src} alt={Images.logo.alt}/></Link>

          <Search/>
        <div className='preferences'>
          
          <div className="dropdown">
          <p className='dropdown-header_preferences' ><img src={countryFlagSelector} alt={languageSelector}/></p>
          <div className="dropdown-content">
            <select value={languageSelector} onChange={event =>handleLanguages(event)}>
                <option value = {Languages.English}>{Languages.English}</option>
                <option value = {Languages.NetherLands}>{Languages.NetherLands}</option>
            </select>
          </div>
          </div>

          <Badge sx={{display:{xs:'none',sm:'none',md:'block',lg:'block'}}} badgeContent = {1} color="error"> <Link to='/whishList'> <FavoriteBorderIcon/> </Link></Badge>
          <Badge badgeContent = {1} color="error"> <Link to='/shoppingCart'> <ShoppingCartIcon/> </Link></Badge>
          
         
          <div className="dropdown">
          <p className='dropdown-header_preferences' >{currency}</p>
          <div className="dropdown-content">
            <select value={currency} onChange={event =>setCurrency(event.target.value)}>
                <option value = {Currencies.Euro}>{Currencies.Euro}</option>
                <option value = {Currencies.Dollar}>{Currencies.Dollar}</option>
                <option value = {Currencies.Pound}>{Currencies.Pound}</option>
            </select>
          </div>
          </div>
          
        </div>
         

        
        </Toolbar>
        
       <BottomNavBar/>
        
      </AppBar>
    </Box>
  )
}

export default Navbar