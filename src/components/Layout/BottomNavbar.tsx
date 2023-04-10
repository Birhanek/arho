import React from 'react'
import { Grid } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const BottomNavBar = () => {
  return (
  <Toolbar>
    <Grid container>
      <Grid item xs={2}>
      <div className="dropdown">
  <p className="dropbtn">SmartPhones <KeyboardArrowDownIcon sx={{padding:'0px',margin:'0px',fontSize:'16px'}}/></p>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
      </Grid>
      <Grid item xs={2}>
      <div className="dropdown">
  <p className="dropbtn">Tablets <KeyboardArrowDownIcon sx={{padding:'0px',margin:'0px',fontSize:'16px'}}/></p>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
      </Grid>
      <Grid item xs={2}>
      <div className="dropdown">
  <p className="dropbtn">Laptops & Accessaries <KeyboardArrowDownIcon sx={{padding:'0px',margin:'0px',fontSize:'16px'}}/></p>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
      </Grid>
      <Grid item xs={2}>
      <div className="dropdown">
  <p className="dropbtn">Computers <KeyboardArrowDownIcon sx={{padding:'0px',margin:'0px',fontSize:'16px'}}/></p>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
      </Grid>
      <Grid item xs={2}>
      <div className="dropdown">
  <p className="dropbtn">monitors <KeyboardArrowDownIcon sx={{padding:'0px',margin:'0px',fontSize:'16px'}}/></p>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
      </Grid>
      <Grid item xs={2}>
      <div className="dropdown">
  <p className="dropbtn">Networking Storage <KeyboardArrowDownIcon sx={{padding:'0px',margin:'0px',fontSize:'16px'}}/></p>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
  </div>
</div>
      </Grid>
      
    </Grid>
  </Toolbar>
  )
}

export default BottomNavBar