import React from 'react';
import Header from './Components/Header/Header';
import NavApp from './Components/Nav/NavApp/NavApp';
import PopUp from './Components/popUpBox/PopUp';
import Footer from './Components/footer/Footer';
import ScrollUpBtn from './Components/scrollUp/ScrollUpBtn';
import 'boxicons';
const App = () => {
  return (
    <>
    <PopUp/>
    <Header/>
    <NavApp />
    <Footer/>
    <ScrollUpBtn/>
    </>
  )
}

export default App