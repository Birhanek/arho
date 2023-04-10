
import React, { useState } from 'react'
import { AppBar, Box, IconButton, Toolbar, Select, FormControl, MenuItem, Badge } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Images, LanguageFlags, Languages } from '../../DataInterface/productInterface'
import { Link } from 'react-router-dom'
import Search from '../search/Search';
const Navbar = () => {
  const [languageSelector,setLanguageSelector] = useState<string>(Languages.English)
  const [currency,setCurrency] = useState<string>(Languages.English)
  console.log(languageSelector)

  return (
    <Box sx={{flexGrow:1}} >
      <AppBar position='sticky' elevation={2}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
          <Box sx={{display:{
            xs:'block',
            sm: 'block',
            md:'none',
            lg:'none'
          }}}>
              <MenuIcon sx={{color:'black'}}/>
          </Box>

          <Link to='/'><img style={{width:100,height:100,padding:4,marginRight:4,borderRadius:'50%'}} src={Images.logo.src} alt={Images.logo.alt}/></Link>

          <Search/>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>

        <Select id='language-selection-id'
                value={languageSelector}
                onChange={(event) => setLanguageSelector(event.target.value)}
                sx={{height:40, display:{
                        xs:'none',
                        sm: 'none',
                        md: 'block',
                        lg: 'block'
                      }}}>
                  <MenuItem value={Languages.English}>{LanguageFlags.flag.UnitedKingdom}</MenuItem>
                  <MenuItem value={Languages.NetherLands}>{LanguageFlags.flag.NetherLands}</MenuItem>
          </Select>

          <Badge sx={{display:{xs:'none',sm:'none',md:'block',lg:'block'}}} badgeContent = {1} color="error"> <Link to='/whishList'> <FavoriteBorderIcon/> </Link></Badge>
          <Badge badgeContent = {1} color="error"> <Link to='/shoppingCart'> <ShoppingCartIcon/> </Link></Badge>
          
         
          <Select id='currencies-selection-id'
                  value={currency}
                  onChange={(event) => setCurrency(event.target.value)}
                  sx={{height:40,display:{
                        xs:'none',
                        sm: 'none',
                        md: 'block',
                        lg: 'block'
                      }}} >
                  <MenuItem value={Languages.English}>{LanguageFlags.flag.UnitedKingdom} what</MenuItem>
                  <MenuItem value={Languages.NetherLands}>{LanguageFlags.flag.NetherLands}</MenuItem>
          </Select>
          
        </div>
         

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar