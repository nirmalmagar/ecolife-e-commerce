import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/header/logo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircleIcon from "@mui/icons-material/Circle";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const [searchInput, setSearchInput] = useState(false); //searchBtn statee
  const [menuIcon, setMenuIcon] = useState(true); //responsive menu state

  //Mouse down
  const MenuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!MenuRef.current.contains(e.target)) {
        setMenuIcon(true);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div>
        <div className="flex mx-5 mt-4 justify-between font-robota font-medium text-sm text-gray-500">
          <div className="lg:hidden">
            {/* <button onClick={() => setMenuIcon(!menuIcon)}>{menuIcon ? <MenuIcon /> : <CloseIcon />}</button> */}
            <button onClick={() => setMenuIcon(!menuIcon)}>
              <MenuIcon />
            </button>
          </div>
          <div className={`lg:ml-0 ml-[15%]`}>
            <img src={logo} alt="" />
          </div>

          <div
            className={`${
              menuIcon ? "-left-80" : "left-0 z-10"
            } duration-300  lg:static lg:uppercase absolute lg:ml-0 top-0`}
          >
            <ul
              ref={MenuRef}
              className="lg:flex lg:flex-row w-80 lg:w-full h-screen fixed lg:h-full text-[16px] lg:static font-bold pt-2  bg-white flex-col "
            >
              <li className="xl:mr-12 mr-8 pl-10 pb-2">
                <NavLink className=" hover:text-textColor" to="/">
                  Home
                </NavLink>
              </li>
              {menuIcon ? null : (
                <li
                  className=" bg-black lg:bg-black text-white  pl-10 py-2"
                  onClick={() => setMenuIcon(true)}
                >
                  <button className="lg:mr-12">Close</button>{" "}
                  <ArrowBackIcon className="ml-48" />
                </li>
              )}
              <li className="xl:mr-12 mr-8 pl-10 lg:pt-0 pt-2">
                <NavLink className="btn  hover:text-textColor" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li className="xl:mr-12 mr-8 lg:my-0 pl-10 my-2 lg:border-none py-2 lg:py-0 border-y-2">
                <NavLink
                  className="btn  peer hover:text-textColor"
                  to="/features"
                >
                  Features
                </NavLink>
              </li>
              <li className="xl:mr-12 mr-8  pl-10">
                <NavLink className="btn  hover:text-textColor" to="/contact-us">
                  Contact us
                </NavLink>
              </li>
              <li className="xl:mr-12 mr-8 pl-10 py-2 lg:my-0 my-2 lg:border-none lg:py-0 border-y-2">
                <NavLink className="btn  hover:text-textColor" to="/about-us">
                  About us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="mt-2 relative">
            <button>
              <SearchIcon
                onClick={() => setSearchInput(!searchInput)}
                className=" mr-6"
              />
            </button>
            {searchInput && (
              <input
                type="text"
                className="absolute z-10 right-16 top-6 
                        border-yellow-800 border-2 py-2 pl-3 pr-16 rounded-full "
                placeholder="Search..."
                id=""
              />
            )}
            <ShoppingCartIcon />
            <div className="relative left-16 bottom-8">
              <code className="absolute top-[2px] text-white font-semibold left-[8px]">
                0
              </code>
              <CircleIcon className="text-red-500 " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
