import React, { useEffect, useState } from 'react';
import PopupImg from '../../assets/images/popup/fur-popup.jpg';
import CloseIcon from '@mui/icons-material/Close';

const PopUp = () => {
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPopup(true);
    }, 1000)
  }, []);
  return (

    <div className={popup ? "hidden lg:contents" : 'hidden'}>
      <div className=' fixed top-0 z-10 bg-black w-full h-full opacity-60'></div>
      <div className=' fixed top-[17%] left-[24%] z-10' >
        <div className=' relative ml-[70%] mb-2'>
          <button onClick={() => setPopup(false)} className="border-2 rounded-[48%] px-3 pb-1 pt-1 text-white border-white">
           X
          </button></div>
        <div className='grid grid-cols-2 max-w-[85%]'>
          <div className='bg-white '>
            <div className=' mx-12 my-16'>
              <h1 className='font-bold text-2xl font-robota text-center'>Sign Up For Send Newsletter?</h1>
              <p className='font-robota font-normal text-sm text-center my-2 text-gray-500'>Subscribe to our newsletters
                now and stay up-to-date with new collections, the latest lookbooks and <br />
                exclusive offers.</p>
              <input type="text" className='w-full pl-3 text-md bg-slate-300 h-12 my-3' placeholder='Enter your email' /><br />
              <button className='w-full bg-black text-white h-12 mb-4 font-robota font-semibold tracking-wider'>Subscribe</button><br />
              <div className='flex justify-center'>
                <input className='mr-1' type="checkbox" />
                <p className='font-robota text-sm'>Do not show again</p>
              </div>
            </div>
          </div>
          <div className='flex flex-'>
            <img src={PopupImg} alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default PopUp;