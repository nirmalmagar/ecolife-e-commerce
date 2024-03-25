import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Nav from '../Nav';
import Home from '../Home/Home';
import Shop from '../shop/Shop';
import Features from '../features/Features';
import Contact from '../contact/Contact';
import About from '../AboutUs/About';

const NavApp = () => {
  return (
    <>
    <Nav/>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/about-us' element={<About/>}/>
        <Route path='/features' element={<Features/>}/>

    </Routes>
    </>
  )
}

export default NavApp