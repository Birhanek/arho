import React from 'react';
import { BrowserRouter} from 'react-router-dom'
import './App.css';
import IndexRoute from './routes/IndexRoute';
import Navbar from './components/Layout/Navbar';
import { Paper } from '@mui/material';
import Footer from './components/Layout/Footer';


const App = () => {


  return (
    <Paper elevation={0} sx={{paddingX:1,mt:1}}>
      <BrowserRouter>
        <Navbar/>
        <IndexRoute/>
        <Footer/>
      </BrowserRouter>
    </Paper>
  );
}

export default App;
