import React, { useState } from 'react';
import SectionOne from '../../../Slider/SectionOne';
import SectionTwo from '../../../Slider/SectionTwo';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const Slider = () => {
  const [slider, setSlider] = useState(true); //slider button


  // const SliderButton = () => {
  //   if (slider === true)
  //     setSlider(false);
  //   else {
  //     setSlider(true);
  //   }
  // }   OR,

   const SliderButton = () => {
   return setSlider(!slider);
  }


  setTimeout(SliderButton, 10000);
  return (<>
    <div>
      <button onClick={SliderButton} className='absolute top-[60%] duration-500 ml-2 z-10 hover:bg-white
        rounded-full pl-2 py-1'><ArrowBackIosIcon className='text-slate-500' /></button>
      {slider ? <SectionOne /> : <SectionTwo />}
    </div>
    <div className='float-right mr-10'>
      <button onClick={SliderButton} className='absolute top-[60%] z-10 duration-500 hover:bg-white 
       rounded-full pl-2 py-1'><ArrowForwardIosIcon className='text-slate-500' /></button >
    </div >
  </>
  )
}

export default Slider