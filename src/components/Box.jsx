import React from "react";
import { FaHeart } from "react-icons/fa";
import { RiScales3Fill, RiShoppingCart2Fill } from "react-icons/ri";

function Box() {
  return (
    <div className="box w-full max-w-80 mx-auto md:max-w-none rounded-sm border border-[#F2F2F2] transition-all duration-500 ease-in-out hover:shadow-lg relative cursor-pointer bg-white">
      {/* Rasm qismi */}
      <div className="flex items-center justify-center p-4 min-h-50">
        <img src="/imgs/productImg.png" alt="Product" className="object-contain max-h-45" />
      </div>

      <div className="p-4 md:p-5">
        {/* Narxlar */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:justify-between mb-3">
          <span className="font-normal text-[13px] md:text-[14px] text-gray-500 line-through">
            1 373 000 сум
          </span>
          <span className="hidden md:inline font-normal text-[#D1D1D1]">|</span>
          <span className="font-semibold text-[16px] md:text-[18px] text-[#ED3729]">
            1 304 000 сум
          </span>
        </div>

        {/* Sarlavha */}
        <h4 className="font-bold text-[14px] md:text-[16px] text-[#000000] mb-3 text-center line-clamp-2 h-10.5 md:h-12">
          TECNO Spark 6 Go phone KE5j 3/64GB Ice Jadeite
        </h4>

        {/* Taymer sarlavhasi */}
        <h5 className="font-normal text-[12px] md:text-[14px] text-[#000000] mb-3 text-center md:text-left">
          Offer ends in:
        </h5>

        {/* Taymer bloklari */}
        <div className="flex justify-between items-center bg-gray-50 p-2 rounded-sm">
          {[
            { label: "Day", val: "27" },
            { label: "Hrs", val: "27" },
            { label: "Min", val: "27" },
            { label: "Sec", val: "27" }
          ].map((item, idx, arr) => (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center flex-1">
                <span className="font-bold text-[14px] md:text-[15px] text-[#202020]">{item.val}</span>
                <span className="font-normal text-[11px] md:text-[12px] text-[#909090]">{item.label}</span>
              </div>
              {idx !== arr.length - 1 && <span className="text-[#D1D1D1]">|</span>}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Pastki menyu */}
      <div className="flex items-center justify-between py-4 px-6 md:px-10 border-t border-[#F2F2F2]">
        <RiShoppingCart2Fill className="text-[20px] md:text-[21px] text-[#ED3729] cursor-pointer hover:scale-110 transition-transform" />
        <span className="text-[#F2F2F2]">|</span>
        <FaHeart className="text-[18px] md:text-[19px] text-[#BDBDBD] cursor-pointer hover:text-[#ED3729] transition-colors" />
        <span className="text-[#F2F2F2]">|</span>
        <RiScales3Fill className="text-[20px] md:text-[21px] text-[#BDBDBD] cursor-pointer hover:text-[#ED3729] transition-colors" />
      </div>

      {/* Chegirma belgisi */}
      <span className="absolute top-2 left-2 md:top-3 md:right-3 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#ED3729] font-medium text-[12px] md:text-[14px] text-white flex items-center justify-center">
        -3%
      </span>
    </div>
  );
}

export default Box;