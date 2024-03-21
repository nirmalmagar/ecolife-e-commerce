import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Nav from '../Nav';
import Home from '../Home/Home';
import About from '../AboutUs/About';
import Contact from '../contact/Contact';
const NavApp = () => {
  return (
    <>
    <Nav/>
    <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/about-us' element={<About/>}/>

    </Routes>
    </>
  )
}

export default NavApp