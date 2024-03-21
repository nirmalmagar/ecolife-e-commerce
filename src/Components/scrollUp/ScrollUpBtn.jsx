import React, { useEffect, useState } from 'react';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';

const ScrollUpBtn = () => {
  const [scrollBtnShow, setScrollBtnShow] = useState(false);
  const ScrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  const ListenToScroll = () => {
    let height = 100;
    const heightValue = document.body.scrollTop || document.documentElement.scrollTop;
    // console.log("height of a b=bo",heightValue);
    if (height > heightValue) {
      setScrollBtnShow(false);
    }
    else {
      setScrollBtnShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", ListenToScroll);
  }, []);
  return (
    <>
      {scrollBtnShow ?
        <div className='fixed top-[90%] lg:left-[96%] md:left-[94%] sm:left-[90%] left-[86%]'>
          {/* <svg class="animate-bounce w-6 h-6 ..."></svg> */}
          <button className='border-2 absolute rounded-full animate-bounce w-10 h-10 bg-black
        hover:bg-textColor text-white' onClick={ScrollUp}><ArrowUpwardSharpIcon className='text-center' />
          </button>
        </div> : null}
    </>


  )
}

export default ScrollUpBtn