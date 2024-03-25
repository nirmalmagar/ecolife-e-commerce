import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutImg from '../../../assets/images/nav/img_about.jpg';
import bgImage from '../../../assets/images/nav/fur-bg-about.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PinterestIcon from '@mui/icons-material/Pinterest';
import ChooseUs from './ChooseUs';

const About = () => {
  return (<>
    <div className='font-robota'>
      <div className='h-36 w-screen bg-right bg-cover flex flex-col justify-center items-center' style={{ backgroundImage: `url(${bgImage})` }}>
        <strong className='text-2xl'>About Us</strong>
        <p className='text-[13px]  mt-1 '> <NavLink to='/'> Home </NavLink>  <span className='text-red-900'>/ About us</span></p>
      </div>

      <div className='grid md:grid-cols-2 grid-rows-1 xl:my-[6%] xl:mx-[10%] my-[6%] mx-[4%]'>
        <div className=' mr-10 mb-10'>
          <img className='min-h-[20rem] pt-5 ' src={aboutImg} alt="" />
        </div>
        <div>
          <h1 className=' text-3xl lg:text-4xl font-bold pb-3'>About Our Online Store</h1>
          <h4 className='font-kalam font-semibold text-gray-400 py-4 text-[16px]'>Our mission is to provide the best & safest products we can get and also products
            which are in harmony with nature. Nature has been enriched with amazing things.</h4>
          <p className='py-4 font-anta opacity-70 text-sm'>A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring
            which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine.</p>
          <p className='py-4 font-anta opacity-70 text-sm'>I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of
            drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now.</p>
          <div className='w-full h-[.5px] bg-slate-300'></div>
          <div className=' my-5 opacity-65 grid grid-cols-12'>
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <GitHubIcon />
            <PinterestIcon />
          </div>
        </div>
      </div>
    </div>
    <ChooseUs />
  </>
  )
}

export default About