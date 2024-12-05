import React from 'react';
import Header from './Components/Header/Header';
import NavApp from './Components/Nav/NavApp/NavApp';
import PopUp from './Components/popUpBox/PopUp';
import Footer from './Components/footer/Footer';
import ScrollUpBtn from './Components/scrollUp/ScrollUpBtn';
import { ToastContainer } from 'react-toastify';

import 'boxicons';
const App = () => {
  return (
    <>
    <ToastContainer/>
    <PopUp/>
    <Header/>
    <NavApp />
    <Footer/>
    <ScrollUpBtn/>
    </>
  )
}

export default App