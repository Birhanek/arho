import React from 'react'
import { Grid } from '@mui/material'

import Toolbar from '@mui/material/Toolbar';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


const BottomNavBar = () => {
  return (
  <Toolbar sx={{backgroundColor:'#2C3333',display:{
    xs:'none',
    sm: 'none',
    md:'flex',
    lg:'flex'
  },
  }}>
    <Grid container >
      <Grid item xs={2} sx={{backgroundColor:'#2C3333'}}>
        <div className="dropdown">
          <p className='dropdown-header'>SmartPhones <KeyboardArrowDownIcon sx={{padding:'0px',margin:'0px',fontSize:'16px',placeItems:'center'}}/></p>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </Grid>

      <Grid item xs={2} sx={{backgroundColor:'#2C3333'}}>
        <div className="dropdown">
          <p className='dropdown-header'>Tablets <KeyboardArrowDownIcon sx={{padding:'0px',margin:'0px',fontSize:'16px'}}/></p>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </Grid>

      <Grid item xs={2} sx={{backgroundColor:'#2C3333'}}>
        <div className="dropdown">
          <p className='dropdown-header'>Laptops &  <KeyboardArrowDownIcon sx={{padding:'0px',margin:'0px',fontSize:'16px'}}/></p>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </Grid>

      <Grid item xs={2} sx={{backgroundColor:'#2C3333'}}>
        <div className="dropdown">
          <p className='dropdown-header'>Computers <KeyboardArrowDownIcon sx={{padding:'0px',margin:'0px',fontSize:'16px'}}/></p>
          <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
          </div>
        </div>
      </Grid>

      <Grid item xs={2} sx={{backgroundColor:'#2C3333'}}>
        <div className="dropdown">
          <p className='dropdown-header'>Monitors <KeyboardArrowDownIcon sx={{padding:'0px',margin:'0px',fontSize:'16px'}}/></p>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </Grid>

      <Grid item xs={2} sx={{backgroundColor:'#2C3333'}}>
        <div className="dropdown">
          <p className='dropdown-header'>Networking Storage <KeyboardArrowDownIcon sx={{padding:'0px',margin:'0px',fontSize:'16px', backgroundColor:'white',color:'green'}}/></p>
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