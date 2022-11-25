import React from 'react'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Resources from '../pages/Resources';
import News from '../pages/News';
import Member from '../pages/Member';
import {Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <>
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/resources" element={<Resources />} />
                <Route path="/become-a-member" element={<Member />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes
