import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { API } from './API'
const Cards = () => {
    return (
        <div>
            <div className='text-center mb-[3%]'>
                <h1 className='font-robota font-semibold text-lg mb-1'>FEATURED PRODUCTS</h1>
                <p className='font-kalam text-gray-500 mb-2'>The most prominent product in the store, which was bought with the highest number</p>
                <div className='flex ml-[37%]'>
                    <div className='h-[2px] w-[20%] bg-slate-600'></div>
                    <span className='text-gray-500 -mt-3'><StarIcon /></span>
                    <div className='h-[2px] w-[20%] bg-slate-600'></div>
                </div>
            </div>
            <div className='relative grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 cols-1 gap-5 mx-[7%] lg:mx-[10%]'>
                {
                    API.map((value, index) => {
                        return (
                            <div key={index} className=''>
                                <h1 className='cursor-pointer absolute ml-2 rounded-md my-2 border-2 font-robota font-bold text-xs px-2 py-1 bg-textColor text-white'>{value.tagName}</h1>
                                <img className='cursor-pointer rounded-md' src={value.image} alt="" />
                                <div className='text-center'>
                                    <h2 className='cursor-pointer font-jura font-semibold text-gray-500 text-[15px]'>{value.title}</h2>
                                    <span className='cursor-pointer text-sm font-semibold font-robota py-1'>{value.heading}</span>
                                    <p className='cursor-pointer text-sm py-1'>{value.rate}</p>
                                    <p className="cursor-pointer font-semibold text-sm">{value.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cards