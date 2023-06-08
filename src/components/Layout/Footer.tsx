import React from 'react'
import logoIamage from './logo-mr-at-1.png'
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

const Footer = () => {

  return (
    <div className="">
      
      <>
        <Grid container bgcolor={lightBlue[50]}>
          <Grid item sm={12} xs={3} md={3}>
            <img src={logoIamage} alt='logo'></img>
            <p>Do you any question? call us</p>
            <h6>0686868545</h6>
          </Grid>
          <Grid item sm={12} xs={3} md={3}>
            <h5>Information</h5>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Information pages</a></li>
              <li><a href="#">customer Service</a></li>
              <li><a href="#">privacy statementt</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </Grid>
          <Grid item sm={12} xs={3} md={3}>
          <h5>Contact data</h5>
          <p>Tilbrug 300 , 5954 TB Zotermeer</p>
          <p>The Netherlands</p>
          <p>info@et-at.nl</p>
          <p><strong>VAT</strong>number NL4848433</p>
        <a href='#'><LinkedInIcon /></a><a href='#'><FacebookIcon /></a>
          </Grid>
          <Grid item sm={12} xs={3} md={3}>
          <h5>SignUp for Arho shopping</h5>
          <TextField id="standard-basic"  label="  Your email adress" variant="standard" sx={{backgroundColor:'white'}} />
          <p>sign up for our shopping site</p>
          <Button size="large"  sx={{backgroundColor:'blue',color:'white',padding:'5px 20px '}}>Subscribe</Button>
          </Grid>
          <Grid item md={12}>
           <p style={{textAlign:'center'}}>copy right @ 2023 protected.</p>
          </Grid>
        </Grid>
      </>
        </div>
  );
}

export default Footer;
