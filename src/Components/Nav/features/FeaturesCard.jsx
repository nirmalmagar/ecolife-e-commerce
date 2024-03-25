import React, { useState } from 'react';
import { API } from '../Home/Cards/API'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Cards = () => {
    const [mouseOver, setMouseOver] = useState(false);  //mouse hover display
    const [apiData,setApiData] = useState(10);   // display api data

    const LoadMore =()=>{
    setApiData(apiData + 5);
    }

    const slice = API.slice(0,apiData);

    const displayMouseOver = () => {
        setMouseOver(true);
    }
    const displayMouseOut = () => {
        setMouseOver(false);
    }
    const AddLike = () => {
        alert("AddLike");
    }
    const AddSearch = () => {
        alert("AddSearch");
    }
    const AddCompare = () => {
        alert("AddCompare");
    }
    const AddtoCart = () => {
        alert("AddtoCart");
    }
    return (
        <div className='mx-[7%] lg:mx-[10%]'>
            <div className=' my-10'>
                <h1 className='text-xl font-semibold'>You Might Also Like</h1>
            </div>
            <div className='relative grid lg:grid-cols-5 xm:grid-cols-2 md:grid-cols-4 sm:grid-cols-3 cols-1 gap-5'>
                {
                    slice.map((value, index) => {
                        return (
                            <div key={index} onMouseOver={displayMouseOver} onMouseOut={displayMouseOut} className='relative'>
                                <h1 className='cursor-pointer absolute ml-2 rounded-md my-2 border-2 font-robota font-bold text-xs px-2 py-1 bg-textColor text-white'>{value.tagName}</h1>
                                <img className='cursor-pointer rounded-md' src={value.image} alt="" />
                                <div className='text-center'>
                                    <h2 className='cursor-pointer font-jura font-semibold text-gray-500 text-[15px]'>{value.title}</h2>
                                    <span className='cursor-pointer text-sm font-semibold font-robota py-1'>{value.heading}</span>
                                    <p className='cursor-pointer text-sm py-1'>{value.rate}</p>
                                    <p className="cursor-pointer font-semibold text-sm">{value.price}</p>
                                

                                {mouseOver ? (<div className="absolute top-56 py-2 delay-200 left-[9%] drop-shadow-xl border-none bg-white border-2 flex rounded-full ">
                                    <FavoriteBorderIcon sx={{ fontSize: "25px" }} onClick={AddLike} className='hover:text-textColor text-gray-600 cursor-pointer mx-4' />
                                    <div className='w-[1px] h-6 bg-gray-400'></div>
                                    <CompareArrowsIcon sx={{ fontSize: "25px" }} onClick={AddCompare} className='hover:text-textColor text-gray-600 cursor-pointer mx-4' />
                                    <div className='w-[1px] h-6 bg-gray-400'></div>
                                    <SearchIcon sx={{ fontSize: "25px" }} onClick={AddSearch} className='hover:text-textColor text-gray-600 cursor-pointer mx-4' />
                                    <div className='w-[1px] h-6 bg-gray-400'></div>
                                    <ShoppingCartIcon sx={{ fontSize: "25px" }} onClick={AddtoCart} className='hover:text-textColor text-gray-600 cursor-pointer mx-4' />
                                </div>) : null}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-center mt-12">
            <button className="border-2 border-black hover:border-textColor hover:bg-textColor hover:text-white duration-700 rounded-md font-semibold px-4 py-1.5" onClick={LoadMore}>Load More</button>
        </div>
        </div>
    )
}

export default Cards