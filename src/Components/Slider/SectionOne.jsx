import React from 'react';
import bg from '../../assets/images/section/bg.jpg';
const SectionOne = () => {
    return (
        <>
            <div className='relative'>
                <div className='overflow-x-clip h-screen w-screen bg-cover bg-center bg-no-repeat' 
                style={{ backgroundImage: `url(${bg})` }}></div>
                <div className='absolute top-0 font-lato ml-[12%] lg:mt-[17%] mt-[23%]'>
                    <h6 className='tracking-[9px] font-semibold font-anta animate-fadeInUp'>BIG SELL 50% OFF</h6>
                    <h1 className='text-7xl font-extrabold my-2 animate-fadeInLeft'>Outset</h1>
                    <p className='text-gray-500 tracking-[1.5px] text-[15px] my-5 animate-fadeInRight'>update your home without ammazing assortment of decor</p>
                    <button className='animation-zoomIn bg-black text-white px-12 font-semibold text-sm py-4 rounded-full hover:bg-textColor duration-500'>SHOP NOW</button>
                </div>
            </div>
        </>
    )
}

export default SectionOne;