import React from 'react';
import { NavLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ScrollUpBtn from '../scrollUp/ScrollUpBtn';
const Footer = () => {
   
        const ScrollUp = ()=>{
            window.scrollTo({top:0, left:0, behavior:"smooth"});
            
    }
    return (
        <>
            <div className='max-w-screen-md lg:mx-auto md:mx-[5%] mx-[3%] text-gray-500 font-robota my-40'>
                <h1 className='text-center text-4xl font-bold text-black'>Ecolife</h1>
                <div className='flex justify-between flex-wrap list-none my-16 font-semibold'>
                    <NavLink to='/new-products' className='xm:mx-0 mx-5 '>NEW PRODUCTS</NavLink>
                    <NavLink to='/best-sells' className='mx-5'>BEST SELLS</NavLink>
                    <NavLink to='/my-account' className='xm:mx-0 mx-5 '>MY ACCOUNT</NavLink>
                    <NavLink to='/contact-us' className='mx-5' onClick={ScrollUp}>CONTACT US</NavLink>
                    <NavLink to='/about-us' className='xm:mx-0 mx-5 ' onClick={ScrollUp}>ABOUT US</NavLink>
                </div>
                <div className=' opacity-65 grid items-center text-gray-600  grid-cols-6 sm:grid-cols-12'>
                    <a className=' sm:col-start-4' href=''><FacebookIcon fontSize='medium' className='hover:text-textColor' /></a>
                    <a className=' sm:col-start-5' href=''><InstagramIcon fontSize='medium' className='hover:text-textColor' /></a>
                    <a className=' sm:col-start-6' href=''><TwitterIcon fontSize='medium' className='hover:text-textColor' /></a>
                    <a className=' sm:col-start-7' href=''><LinkedInIcon fontSize='medium' className='hover:text-textColor' /></a>
                    <a className=' sm:col-start-8' href=''><GitHubIcon fontSize='medium' className='hover:text-textColor' /></a>
                    <a className=' sm:col-start-9' href=''><PinterestIcon fontSize='medium' className='hover:text-textColor' /></a>
                </div>
                <div className='border-y-2  my-16 border-gray-500 xm:flex'>
                    <input className='outline-none xm:w-[90%] w-full h-16 pl-4' type="email" placeholder='Your email address' />
                    <button className='font-semibold'>SUBSCRIBE</button>
                </div>

            </div>
            <div className='text-center font-robota text-md bg-black text-white py-8' >
                <span>Copyright © Posthemes. All Rights Reserved.</span>
            </div>
        </>
    )
}

export default Footer