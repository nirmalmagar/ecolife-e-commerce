import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';

const ChooseUs = () => {
  return (
    <>
    <div className='bg-gray-100 py-20 font-robota'>
      <div className='md:w-[92%] w-[80%] mx-auto   '>
        <h1 className='text-3xl font-bold pb-5'>Why Choose Us</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
          <div className='bg-white pl-7 pr-2 py-8'>
            <LocalShippingIcon sx={{ fontSize: "60px" }} className='w-40 h-40' />
            <h1 className='py-2 text-xl font-semibold'>Free Shipping</h1>
            <p className='text-gray-700'>Our products are free in delivery after shopping on $99</p>
          </div>
          <div className='bg-white pl-7 pr-2 py-8'>
            <CardGiftcardIcon sx={{ fontSize: "50px" }} className='w-40 h-40' />
            <h1 className='py-2 text-xl font-semibold'>Weekly Gifts Members</h1>
            <p className='text-gray-700'>We are your one-stop shop for nationwide online store.</p>
          </div>
          <div className='bg-white pl-7 pr-2 py-8'>
            <AttachMoneyIcon sx={{ fontSize: "50px" }} className='w-40 h-40' />
            <h1 className='py-2 text-xl font-semibold'>Money Back Guarantee</h1>
            <p className='text-gray-700'>Start saving straight away with discount offer on items.</p>
          </div>
          <div className='bg-white pl-7 pr-2 py-8'>
            <SportsSoccerIcon sx={{ fontSize: "50px" }} className='w-40 h-40' />
            <h1 className='py-2 text-xl font-semibold'>Online Support 24/7</h1>
            <p className='text-gray-700'>We work for all customer to make satisfied shoppers value.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default ChooseUs;