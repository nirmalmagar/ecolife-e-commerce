import React from 'react'
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import PersonIcon from '@mui/icons-material/Person';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const Header = () => {
    return (
        <>

            <div className='text-[14px] font-medium font-kalam border-x-2 border-b-2 text-gray-400 lg:static hidden lg:flex  justify-between mx-2 leading-10'>
                <div className='pl-4 '>
                    <h4 className='text-black hover:text-textColor'><PhoneForwardedIcon className='text-gray-400 max-w-[20px] mr-2 hover:text-textColor' /><span className='text-gray-400 hover:text-stone-500'>Call us:</span> +01 (123) 888999</h4 >
                </div>
                <div className=''>
                    <ol className='float-right flex'>
                        <li className='mr-4 border-x-2 px-4 hover:text-textColor'><PersonIcon className='max-w-[15px]' /> Sign in </li>
                        <li className='mr-4 border-r-2 pr-4 hover:text-textColor'><MultipleStopIcon className='max-w-[15px] mr-2' />Compare(0) </li>
                        <li className='mr-4 border-r-2 pr-4 hover:text-textColor'><FavoriteBorderOutlinedIcon className='max-w-[15px] mr-2' />Wishlist(0) </li>
                        <li className='mr-4 border-r-2 pr-4 hover:text-textColor'><select name="" id="">
                            <option value="€ EUR">€ EUR</option>
                            <option value="$ USD">$ USD</option>
                        </select></li>
                        <li  className='mr-4 hover:text-textColor'><select name="" id="">
                            <option className='hover:text-textColor' value="America border-none "> 🏳️‍🌈America</option>
                            <option className='hover:text-textColor' value="Francais">🏳️‍⚧️ Francais</option>
                        </select></li>
                    </ol>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}

export default Header;