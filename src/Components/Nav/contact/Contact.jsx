import React from 'react';
import { NavLink } from 'react-router-dom';
import bgImage from '../../../assets/images/nav/fur-bg-about.jpg';
import MapIcon from '@mui/icons-material/Map';
import AddIcCallRoundedIcon from '@mui/icons-material/AddIcCallRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
const Contact = () => {
  return (
    <div>
      <div className='h-36 w-screen bg-right bg-cover flex flex-col font-robota justify-center items-center' style={{ backgroundImage: `url(${bgImage})` }}>
        <strong className='text-2xl'>Contact Us</strong>
        <p className='text-[13px]  mt-1'> <NavLink to='/'>Home  /</NavLink>  <span className='text-red-900'>Contact us</span></p>
      </div>
      <div>
        <iframe className=' mx-auto my-10' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4802.35051999947!2d145.29477902664323!3d-37.77675281308888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad631407e8bd2cd%3A0x6ffaa86edc3a117e!2secolife%20products!5e0!3m2!1sen!2snp!4v1710571705735!5m2!1sen!2snp"
          width="1400" height="430" style={{ border: 0 }} loading="lazy" ></iframe>
      </div>
      <div className=' sm:ml-9 md:ml-24  lg:ml-12 mx-3'>
        <div className='grid grid-cols-1 sm:grid-cols-3 mx-auto gap-x-16 lg:gap-x-10 text-sm lg:text-[13px] font-robota'>
          <div>
            <h1 className='font-semibold text-xl lg:text-3xl my-5'>Store Information</h1>
            <ul>
              <li className='flex'><MapIcon fontSize='large' className='mr-3 mt-2' /> <p className='text-base my-auto'> Ecolife Responsive Prestashop<br /> Theme United States</p></li>
              <li className='my-4 flex'> <AddIcCallRoundedIcon fontSize='large' className='mr-3' /> <p className='text-base my-auto'>Call us: +800340078</p></li>
              <li className='flex'> <MailOutlineRoundedIcon fontSize='large' className='mr-3' /> <p className='text-base my-auto'>Email us: demo@posthemes.com</p></li>
            </ul>
          </div>
          <div className=' lg:col-span-2 my-5 '>
            <h1 className='font-semibold text-xl lg:text-3xl mb-5'>Contact Us</h1>

            <div className=' text-base gap grid grid-rows-1'>
              <div className='grid grid-rows-1 '>
                <div className='grid lg:grid-cols-4'>
                  <label>Subject</label>
                  <select className='bg-gray-100 w-96 h-10 pl-2'>
                    <option value="">Customer service</option>
                    <option value="">Webmaster</option>
                  </select>
                </div>
              </div>
              <div className='grid grid-rows-1 my-3'>
                <div className='grid lg:grid-cols-4 '>
                  <label>Email address</label>
                  <input className='bg-gray-100 w-96 h-10 pl-2' type="email" placeholder='your@email.com' />
                </div>
              </div>
              <div className='grid grid-rows-1'>
                <div className='grid lg:grid-cols-4'>
                  <label>Attachment</label>
                  <input className='bg-gray-100 py-1 w-96 h-10 pl-2' type="file" />
                </div>

              </div>
              <div className='grid grid-rows-1 my-3'>
                <div className='grid lg:grid-cols-4'>
                  <label>Message</label>
                  <textarea className='max-w-[30rem] md:max-w-96 min-h-24 pl-2 col-span-3 bg-gray-100' placeholder='How can we help you?'></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Contact;