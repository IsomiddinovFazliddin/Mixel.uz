import React from "react";
import { FaHeart } from "react-icons/fa";
import { RiScales3Fill, RiShoppingCart2Fill } from "react-icons/ri";

function Product() {
  return (
    <div className="product product w-full max-w-80 mx-auto md:max-w-none rounded-sm border border-[#F2F2F2] transition-all duration-500 ease-in-out hover:shadow-lg relative cursor-pointer bg-white">
      {/* Rasm qismi */}
      <div className="imgs flex items-center justify-center p-3 md:p-5 h-40 md:h-50">
        <img
          src="/imgs/productImg.png"
          alt="Product"
          className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Ma'lumot qismi */}
      <div className="p-3 md:p-5 text-center flex-1 flex flex-col justify-center">
        <h4 className="font-semibold text-[15px] md:text-[18px] text-[#ED3729]">
          18,000 soum/mo
        </h4>
        <h5 className="font-normal text-[12px] md:text-[14px] text-[#909090] mb-2 md:mb-4 line-through">
          99,000 sum
        </h5>
        <h2 className="font-bold text-[13px] md:text-[16px] leading-[140%] text-[#000000] line-clamp-2 h-9 md:h-11.25">
          Panasonic RP-HJE125E-R Headphones
        </h2>
      </div>

      {/* Action panel */}
      <div className="flex items-center justify-between py-3 md:py-4 px-4 md:px-8 border-t border-[#F2F2F2] bg-gray-50/50">
        <div className="flex-1 flex justify-center">
          <RiShoppingCart2Fill className="text-[19px] md:text-[21px] text-[#BDBDBD] hover:text-[#ED3729] transition-all" />
        </div>
        <span className="text-[#E0E0E0]">|</span>
        <div className="flex-1 flex justify-center">
          <FaHeart className="text-[17px] md:text-[19px] text-[#BDBDBD] hover:text-[#ED3729] transition-all" />
        </div>
        <span className="text-[#E0E0E0]">|</span>
        <div className="flex-1 flex justify-center">
          <RiScales3Fill className="text-[19px] md:text-[21px] text-[#BDBDBD] hover:text-[#ED3729] transition-all" />
        </div>
      </div>
    </div>
  );
}

export default Product;