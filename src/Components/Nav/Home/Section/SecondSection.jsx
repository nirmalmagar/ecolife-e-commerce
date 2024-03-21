import React from 'react'
import decorA from '../../../../assets/images/section/decorA.jpg'
const SecondSection = () => {
  return (
    <>
      {/* overflow-x-clip h-screen w-screen bg-cover bg-center bg-no-repeat */}
      <div className='overflow-x-clip h-screen w-screen bg-button bg-no-repeat lg:mx-20 lg:mt-16 mx-10 mt-8' style={{ backgroundImage: `url(${decorA})` }}>
        <div className='px-40 pt-16 pb-40 flex place-content-end'>
          <div className='lg:pr-[3%] text-right'>
            <p className='tracking-[8px] font-semibold text-gray-500 font-anta text-xl'>About Us</p>
            <h1 className='text-6xl tracking-widest font-bold font-robota'>FURNITURE <br />OF ART.</h1>
            <p className='mt-3 font-kalam font-normal text-gray-500'>Typi non habent claritatem insitam, est usus legentis in
              iis<br /> qui facit eorum claritatem. Investigationes demonstraverunt <br /> lectores legere me lius quod ii
              legunt saepius.</p>
            <button className='animation-zoomIn bg-black text-white px-12 mt-7 duration-500 underline font-semibold text-sm py-4 rounded-full hover:bg-textColor'>Read More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SecondSection;