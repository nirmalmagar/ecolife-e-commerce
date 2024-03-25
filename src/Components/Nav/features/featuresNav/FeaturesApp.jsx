import React from 'react';
import { Routes,Route } from 'react-router-dom';
import FeaturesLink from './FeaturesLink';
import Description from './Description';
import ProductDetails from './ProductDetails';
import ExtraTab from './ExtraTab';
import Review from './Review';


const FeaturesApp = () => {
  return (<>
    <FeaturesLink/>
    <Routes>
        <Route path='/description' element={<Description/>} />
        <Route path='/product-details' element={<ProductDetails/>} />
        <Route path='/extra-tab' element={<ExtraTab/>} />
        <Route path='/review' element={<Review/>} />
    </Routes>
    </>
  )
}

export default FeaturesApp