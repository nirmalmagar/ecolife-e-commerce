import React, { useState, useEffect, useRef } from 'react'
import logo from '../../assets/images/header/logo.jpg';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const [searchInput, setSearchInput] = useState(false);  //searchBtn statee
    const [menuIcon, setMenuIcon] = useState(true);     //responsive menu state

    const MenuRef = useRef();

    useEffect(() => {
        let handler = (e) => {
            if (!MenuRef.current.contains(e.target)) {
                setMenuIcon(true);
            }
        }
        document.addEventListener('mousedown', handler);

        return () => {
            document.removeEventListener('mousedown', handler);
        }
    })
    return (
        <>
            <div className='flex mx-5 mt-3 mb-2 justify-between font-robota font-medium text-sm text-gray-500'>
                <div className='lg:hidden pt-2'>
                    {/* <button onClick={() => setMenuIcon(!menuIcon)}>{menuIcon ? <MenuIcon /> : <CloseIcon />}</button> */}
                    <button onClick={() => setMenuIcon(!menuIcon)}><MenuIcon /></button>
                </div>
                <div className={`lg:ml-0 ml-[15%]`}>
                    <img src={logo} alt="" />
                </div>
                
                <div  className={`${menuIcon ? "-left-80" : "left-0 z-10"} duration-300  lg:static lg:uppercase absolute lg:ml-0 top-0`}>
                    <ul ref={MenuRef} className='lg:flex lg:flex-row w-80 lg:w-full h-screen fixed lg:h-full text-[16px] lg:static font-bold pt-2  bg-white flex-col '>
                       
                        <li className='lg:mr-12 pl-10 pb-2'><NavLink className='hover:text-textColor' to="/">Home</NavLink></li>
                       { menuIcon ? null : <li className=' bg-black lg:bg-black text-white  pl-10 py-2' onClick={()=>setMenuIcon(true)}><button className='lg:mr-12'
                         >Close</button> <ArrowBackIcon className='ml-48'/></li>}
                        <li className='lg:mr-12 pl-10 lg:pt-0 pt-2'><NavLink className='hover:text-textColor' to="/shop">Shop</NavLink></li>
                        <li className='lg:mr-12 lg:my-0 pl-10 my-2 lg:border-none py-2 lg:py-0 border-y-2'><NavLink className=' peer hover:text-textColor' to="/features">Features</NavLink>
                            {/* <ul className='absolute z-10  hidden peer-hover:block px-5 py-3 mt-4  shadow-xl shadow-gray-300 font-normal bg-white'>
                                <tr className=''>
                                <th className='pb-2 pr-20'>Catalog Product</th>
                                <th className='pb-2 pr-20'>Product Gallery</th>
                                <th className='pb-2 pr-20'>Filters</th>
                            </tr>
                            <tr>
                                <td>Product Type 1</td>
                                <td>Horizontal Slider</td>
                                <td>Filter Sidebar</td>
                            </tr>
                            <tr>
                                <td>Product Type 2</td>
                                <td>Vertical Slider</td>
                                <td>Filter Top</td>
                            </tr>
                            <tr>
                                <td>Product Type 3</td>
                                <td>Grid (1 column)</td>
                                <td>
                                    <th>Product Details</th>
                                </td>
                            </tr>
                            <tr>
                                <td>Product Type 4</td>
                                <td>Grid (2 column)</td>
                                <td>Vertical Tab</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Showcase Style</td>
                                <td>Horizontal Tab</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td>Full Width</td>
                                <td>Accordion</td>
                            </tr> 
                            </ul>*/}
                        </li>
                        <li className='lg:mr-12  pl-10'><NavLink className='hover:text-textColor' to="/contact-us">Contact us</NavLink></li>
                        <li className='lg:mr-12 pl-10 py-2 lg:my-0 my-2 lg:border-none lg:py-0 border-y-2'><NavLink className='hover:text-textColor' to="/about-us">About us</NavLink></li>
                    </ul>

                </div>
                <div className='mt-2 relative'>
                    <button>
                        <SearchIcon onClick={()=>setSearchInput(!searchInput)} className=' mr-6' />
                    </button>
                    {
                        searchInput && (<input type="text" className='absolute z-10 right-16 top-6 
                        border-yellow-800 border-2 py-2 pl-3 pr-16 rounded-full ' placeholder='Search...' id="" />)
                    }
                    <AddShoppingCartIcon />
                </div>
            </div>
        </>
    )
}

export default Nav