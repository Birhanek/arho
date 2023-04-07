
import React from 'react'
import { AppBar, Box, IconButton, Toolbar } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Images } from '../../DataInterface/productInterface'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <Box sx={{flexGrow:1}}>
      <AppBar position='sticky'>
        <Toolbar>
          <IconButton size='large' edge='start' aria-label='open-drawer' sx={{display:{
            xs:'block',sm:'none',md:'none',lg:'none'
          }}}>
            <MenuIcon/>
          </IconButton>
          <Link to='/'><img style={{width:100,height:100,margin:4}} src={Images.logo.src} alt={Images.logo.alt}/></Link>
          
        </Toolbar>
      </AppBar>
      <PlayArrowIcon sx={{backgroundColor:'yellow'}}/>
    </Box>
  )
}

export default Navbar