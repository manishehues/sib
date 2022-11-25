import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import 'animate.css';
import './assets/css/custom.css';
import './assets/css/responsive.css';
import ScrollToTop from './component/ScrollToTop';
import AnimatedRoutes from './component/AnimatedRoutes';
import Header from './component/Header';
import Footer from './component/Footer';
import {useEffect } from "react";
import WOW from 'wowjs';



function App() { 
  useEffect(() => {
    new WOW.WOW().init();
});  

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
          <Header />                         
            <AnimatedRoutes />
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
