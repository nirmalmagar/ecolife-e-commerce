import React, { useState } from 'react'
import CountUp from 'react-countup';
import AddIcon from '@mui/icons-material/Add';
import PercentIcon from '@mui/icons-material/Percent';
import ScrollTrigger from 'react-scroll-trigger';

const CountNumber = () => {

    const [counterState, setCounterState] = useState(false);
    return (
        <>
            <ScrollTrigger onEnter={() => setCounterState(true)} onExit={() => setCounterState(false)}>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mt-36 gap-x-20 bg-gray-100 text-center font-robota lg:px-32 md:px-20 px-16'>
                    <div className='py-8'>
                        {counterState &&
                            <CountUp
                                end={200}
                                start={0}
                                duration={3}
                                className='lg:text-4xl text-3xl font-bold'
                            />}
                        <AddIcon fontSize='large' className='font-extrabold -mt-3' />
                        <p className='text-xs lg:text-sm py-2 font-semibold text-gray-500'>MILLION CUSTOMERS</p>
                    </div>
                    <div className='py-8'>
                        {counterState &&
                            <CountUp
                                end={180}
                                start={0}
                                duration={3}
                                className='lg:text-4xl text-3xl font-bold'
                            />}
                        <AddIcon fontSize='large' className='font-extrabold -mt-3' />
                        <p className='text-xs lg:text-sm py-2 font-semibold text-gray-500'>TEAM MEMBERS</p>
                    </div>
                    <div className='py-8'>
                        <div className='flex justify-center'>
                            {counterState &&
                                <CountUp
                                    end={100}
                                    start={0}
                                    duration={3}
                                    className='lg:text-4xl text-3xl font-bold'
                                />}
                            <h1 fontSize='large' className='font-extrabold mt-1 ml-1 text-2xl lg:text-3xl'>hrs</h1>
                        </div>
                        <p className='text-xs lg:text-sm py-2 font-semibold text-gray-500'>SUPPORT AVAILABLE</p>
                    </div>
                    <div className='py-8'>
                        {counterState &&
                            <CountUp
                                end={99}
                                start={0}
                                duration={3}
                                className='lg:text-4xl text-3xl font-bold'
                            />}
                        <PercentIcon fontSize='large' className='font-extrabold -mt-3' />
                        <p className='text-xs lg:text-sm py-2 font-semibold text-gray-500'>POSITIVE REVIEWS</p>
                    </div>
                </div >
            </ScrollTrigger>

        </>
    )
}

export default CountNumber