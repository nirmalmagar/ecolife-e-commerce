import React from 'react';
import { NavLink } from 'react-router-dom';
import advertising from '../../../assets/images/nav/advertising-s1.jpg';
import ShopCards from './ShopCards';
import bgImage from '../../../assets/images/nav/fur-bg-about.jpg';
const Shop = () => {
    return (
        <>
            <div className='font-robota md:text-md text-[89%]'>
                <div className='h-36 w-screen bg-right bg-cover flex flex-col font-robota justify-center items-center' style={{ backgroundImage: `url(${bgImage})` }}>
                    <strong className='text-2xl'>Shop</strong>
                    <p className='text-[13px]  mt-1'> <NavLink to='/'>Home  /</NavLink>  <span className='text-red-900'>shop</span></p>
                </div>
                <div className='flex 2xl:mx-40 mx-5 xl:mx-[5%] mt-28'>
                    <div className='w-2/5 sm:block hidden'>
                        <h1 className='font-bold text-2xl pb-5 '>Filter By</h1>
                        <h2 className='font-bold text-xl mb-2'>Categories</h2>
                        <hr className='w-40' />
                       <div className='my-5'>
                        <input id='curtains' type="checkbox" className='mr-2' />
                        <label for="curtains">Curtains & Accessories <code>(12)</code></label><br />
                        <input id='furniture' type="checkbox" className='mr-2'/>
                        <label for="furniture"> Furniture <code>(12)</code></label><br />
                        <input id='interior' type="checkbox" className='mr-2'/>
                        <label for="interior">Interior Details <code>(12)</code></label><br />
                        <input id='lighting' type="checkbox" className='mr-2'/>
                        <label for="lighting">Lighting <code>(12)</code></label>
                        </div>

                        <h1 className='text-xl font-bold my-2'>Price</h1>
                        <hr className='w-32'/>
                        <p className='my-2'>$30.00 - $100.00</p>

                        <h1 className='text-xl font-bold mt-5 mb-2'>Brand</h1>
                        <hr className='w-32'/>

                        <input id='furniture-1' type="checkbox" className='mr-2 mt-3'/>
                        <label for="furniture-1">Furniture 1<code>(1)</code></label><br />
                        <input id='furniture-2' type="checkbox" className='mr-2'/>
                        <label for="furniture-2">Furniture 2<code>(3)</code></label><br />
                        <input id='furniture-3' type="checkbox" className='mr-2'/>
                        <label for="furniture-3">Furniture 3<code>(5)</code></label><br />
                        <input id='furniture-4' type="checkbox" className='mr-2'/>
                        <label for="furniture-4">Furniture 4<code>(3)</code></label><br />
                        <input id='furniture-5' type="checkbox" className='mr-2'/>
                        <label for="furniture-5">Furniture 5<code>(2)</code></label><br />
                        <input id='furniture-6' type="checkbox" className='mr-2'/>
                        <label for="furniture-6">Furniture 6<code>(1)</code></label><br />
                        <input id='furniture-7' type="checkbox" className='mr-2'/>
                        <label for="furniture-7">Furniture 7<code>(3)</code></label>

                        <h1 className='text-xl font-bold mt-5 mb-2' >Size</h1>
                        <hr className='w-32'/>
                        <div className='w-60' />
                        <input id='small' type="checkbox" className='mr-2 mt-4'/>
                        <label for="small" className='text-lg'>S</label><br />
                        <input id='medium' type="checkbox" className='mr-2'/>
                        <label for="medium" className='text-lg'>M</label><br />
                        <input id='large' type="checkbox" className='mr-2'/>
                        <label for="large" className='text-lg'>L</label><br />
                        <input id='x-large' type="checkbox" className='mr-2'/>
                        <label for="x-large" className='text-lg'>XL</label><br />
                        <input id='xx-large' type="checkbox" className='mr-2'/>
                        <label for="xx-large" className='text-lg'>XXL</label><br />

                        <h1 className='text-xl font-bold mt-5 mb-2' >Tags</h1>
                        <div className='grid sm:grid-cols-1 lg:grid-cols-2 grid-cols-1 mr-16  mt-3'>
                            <button className='border-[1px] m-1 py-2 px-2'>Hot Sale</button>
                            <button className='border-[1px] m-1 py-2 px-2'>Shopping</button>
                            <button className='border-[1px] m-1 py-2 px-2'>New Arrivals</button>
                            <button className='border-[1px] m-1 py-2 px-2'>Best Sales</button>
                        </div>
                        <div className='mr-5'>
                        <img className='mr-4' src={advertising} alt="advertising image" />
                        </div>
                    </div>
                    <div>
                        <ShopCards />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop;