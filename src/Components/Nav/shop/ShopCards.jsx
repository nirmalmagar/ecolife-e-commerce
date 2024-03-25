import React, { useState } from 'react';
import { API } from '../Home/Cards/API'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GridViewIcon from '@mui/icons-material/GridView';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const ShopCards = () => {
    const [mouseOver, setMouseOver] = useState(false);

    const [data, setData] = useState(9);
    const LoadMore = () => {
        setData(data + 3);
    }
    const slice = API.slice(0, data);

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
        <>
            <div className=''>
                <div className='flex justify-between mb-9 text-sm lg:text-md'>
                    <div className='flex'>
                        <GridViewIcon />
                        <FormatListBulletedIcon className='mx-4' />
                        <p className='ml-8 lg:block hidden'>There are 12 products.</p>
                    </div>
                    <div>
                        <label className='mr-2'>Short by:</label>
                        <select className='rounded-full md:w-80 w-40 py-1 px-2 bg-gray-100' name="" id="">
                            <option value="">Relevance</option>
                            <option value="">Best Sellers</option>
                            <option value="">Name, A to Z</option>
                            <option value="">Name, Z to A</option>
                            <option value="">Price, low to high</option>
                            <option value="">Price, high to low</option>
                        </select>
                    </div>
                </div>
                <div className='relative grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 cols-1 gap-5'>
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
                                    </div>

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
                            )
                        })
                    }
                </div>
            </div>
            <div className='border-black border-2 font-semibold rounded w-32 mt-12 mx-auto hover:border-textColor hover:text-white hover:bg-textColor duration-700 '>
                <button className='py-1.5 pl-7' onClick={LoadMore}>Load More</button>
            </div>
        </>
    )
}

export default ShopCards