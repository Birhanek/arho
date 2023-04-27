import React from 'react';
import './App.css';
import BottomNavbar from './components/Layout/BottomNavbar';
import Test from './components/Test';
import Footer from './components/Layout/Footer';
import ProductDtail from './components/ProductDtail';
const App = () => {


  return (
    <div className="Appp">
      <BottomNavbar />
      <ProductDtail />
      <Footer />
    
    </div>
  );
}

export default App;
