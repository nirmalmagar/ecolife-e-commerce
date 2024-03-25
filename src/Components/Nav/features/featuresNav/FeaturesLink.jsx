import React from 'react';
import { NavLink } from 'react-router-dom';

const FeaturesLink = () => {
  return (
    <div>
      <NavLink to='/description'>DESCRIPTION</NavLink>
      <NavLink to='/product-details'>PRODUCT DETAILS</NavLink>
      <NavLink to='/extra-tab'>EXTRA TAB</NavLink>
      <NavLink to='/review'>REVIEW</NavLink>
    </div>
  )
}

export default FeaturesLink