import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { API } from "./API";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cards = () => {
  const [mouseOver, setMouseOver] = useState(false); //mouse hover display
  const [apiData, setApiData] = useState(8); // display api data

  const LoadMore = () => {
    setApiData(apiData + 4);
  };

  const slice = API.slice(0, apiData);

  const displayMouseOver = () => {
    setMouseOver(true);
  };
  const displayMouseOut = () => {
    setMouseOver(false);
  };
  const AddLike = () => {
    alert("AddLike");
  };
  const AddSearch = () => {
    alert("AddSearch");
  };
  const AddCompare = () => {
    alert("AddCompare");
  };
  const AddtoCart = () => {
    alert("AddtoCart");
  };
  return (
    <div>
      <div className="text-center mb-[3%]">
        <h1 className="font-robota font-semibold text-lg mb-1">
          FEATURED PRODUCTS
        </h1>
        <p className="font-kalam text-gray-500 mb-2">
          The most prominent product in the store, which was bought with the
          highest number
        </p>
        <div className="flex ml-[37%]">
          <div className="h-[2px] w-[20%] bg-slate-600"></div>
          <span className="text-gray-500 -mt-3">
            <StarIcon />
          </span>
          <div className="h-[2px] w-[20%] bg-slate-600"></div>
        </div>
      </div>
      <div className="relative grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 cols-1 gap-5 mx-[7%] lg:mx-[10%]">
        {slice.map((value, index) => {
          return (
            <div
              key={index}
              onMouseOver={displayMouseOver}
              onMouseOut={displayMouseOut}
              className="relative"
            >
              <h1 className="cursor-pointer absolute ml-2 rounded-md my-2 border-2 font-robota font-bold text-xs px-2 py-1 bg-textColor text-white">
                {value.tagName}
              </h1>
              <img
                className="cursor-pointer rounded-md"
                src={value.image}
                alt=""
              />
              <div className="text-center">
                <h2 className="cursor-pointer font-jura font-semibold text-gray-500 text-[15px]">
                  {value.title}
                </h2>
                <span className="cursor-pointer text-sm font-semibold font-robota py-1">
                  {value.heading}
                </span>
                <p className="cursor-pointer text-sm py-1">{value.rate}</p>
                <p className="cursor-pointer font-semibold text-sm">
                  {value.price}
                </p>

                {mouseOver ? (
                  <div className="absolute top-56 py-2 delay-200 left-[9%] drop-shadow-xl border-none bg-white border-2 flex rounded-full ">
                    <FavoriteBorderIcon
                      sx={{ fontSize: "25px" }}
                      onClick={AddLike}
                      className="hover:text-textColor text-gray-600 cursor-pointer mx-4"
                    />
                    <div className="w-[1px] h-6 bg-gray-400"></div>
                    <CompareArrowsIcon
                      sx={{ fontSize: "25px" }}
                      onClick={AddCompare}
                      className="hover:text-textColor text-gray-600 cursor-pointer mx-4"
                    />
                    <div className="w-[1px] h-6 bg-gray-400"></div>
                    <SearchIcon
                      sx={{ fontSize: "25px" }}
                      onClick={AddSearch}
                      className="hover:text-textColor text-gray-600 cursor-pointer mx-4"
                    />
                    <div className="w-[1px] h-6 bg-gray-400"></div>
                    <ShoppingCartIcon
                      sx={{ fontSize: "25px" }}
                      onClick={AddtoCart}
                      className="hover:text-textColor text-gray-600 cursor-pointer mx-4"
                    />
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-12">
        <button
          className="border-2 border-black hover:border-textColor hover:bg-textColor hover:text-white duration-700 rounded-md font-semibold px-4 py-1.5"
          onClick={LoadMore}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Cards;
