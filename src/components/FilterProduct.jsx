import { Button } from "@mui/material";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiScales3Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function FilterProduct({ item }) {
  return (
    <Link
      to={`/productdetails/${item?.id}`}
      className="block p-4 md:px-10 md:py-5 border border-[#F2F2F2] rounded-md w-full hover:shadow-sm transition-shadow"
    >
      {/* Asosiy konteyner: Mobilda column, planshet/desktopda row */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between">
        {/* Rasm qismi */}
        <div className="w-full md:w-40 h-40 flex items-center justify-center shrink-0">
          <img
            className="h-full object-contain"
            src={item?.main_image}
            alt={item?.name}
          />
        </div>

        {/* Ma'lumotlar qismi */}
        <div className="flex-1 text-center md:text-left w-full">
          <h2 className="font-semibold text-lg md:text-[22px] text-[#202020] mb-2 md:mb-5 line-clamp-2">
            {item?.name}
          </h2>
          <div className="space-y-1">
            <h5 className="font-normal text-sm md:text-[16px] text-[#202020]">
              Brend: <span className="font-medium">Apple</span>
            </h5>
            <h5 className="font-normal text-sm md:text-[16px] text-[#202020]">
              Davlat: <span className="font-medium">{item?.country}</span>
            </h5>
            <h5 className="font-normal text-sm md:text-[16px] text-[#202020]">
              Turi: <span className="font-medium">{item?.category_name}</span>
            </h5>
          </div>
        </div>

        {/* Narx va tugmalar qismi */}
        <div className="w-full md:w-56 text-center border-t md:border-t-0 pt-4 md:pt-0">
          <h4 className="font-medium text-lg md:text-[18px] text-[#ED3729]">
            {item?.price} сум/мес
          </h4>
          <h5 className="font-normal text-xs md:text-[14px] text-[#909090] mb-3 md:mb-5">
            17 000 000 сум
          </h5>

          <Button
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              // savatchaga qo'shish logikasi
            }}
            sx={{
              display: "flex",
              gap: "10px",
              backgroundColor: "#ED3729",
              width: "100%",
              py: { xs: "8px", md: "10px" },
              textTransform: "none",
              fontSize: { xs: "13px", md: "15px" },
            }}
          >
            <FiShoppingCart className="text-[20px] text-white" />
            Sotib olish
          </Button>

          {/* Sevimli va taqqoslash tugmalari */}
          <div className="flex items-center justify-center gap-8 mt-4 md:mt-5 md:pt-5 md:border-t border-[#F2F2F2]">
            <FaHeart
              className="text-[19px] text-[#BDBDBD] cursor-pointer transition-colors"
              onClick={(e) => e.preventDefault()}
            />
            <span className="text-[#F2F2F2] hidden md:inline">|</span>
            <RiScales3Fill
              className="text-[21px] text-[#BDBDBD] hover:text-blue-500 cursor-pointer transition-colors"
              onClick={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FilterProduct;
