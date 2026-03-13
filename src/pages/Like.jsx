import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Product from "../components/Product";

function Like() {
  return (
    <div>
      <div className="container py-5 mx-auto">
        <div className="flex items-center justify-between">
          <div className="px-5 md:px-0  flex items-center gap-3">
            <Link
              to={"/"}
              className="font-normal text-[#626364] text-[16px] cursor-pointer transition-all duration-300 ease-in-out hover:text-Primary"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-[#626364]" />
            <Link className="font-normal text-[#626364] text-[16px] cursor-pointer transition-all duration-300 ease-in-out hover:text-Primary">
              Phones, tablets
            </Link>
          </div>
        </div>
        <h4 className="px-5 md:px-0 font-medium text-[20px] text-[#202020] py-5">
          Favorites
        </h4>
        <div className="grid px-5 md:px-0 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-13">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Like;
