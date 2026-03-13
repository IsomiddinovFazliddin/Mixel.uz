import { Button } from "@mui/material";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiScales3Fill, RiShoppingCart2Fill } from "react-icons/ri";

function FilterProduct() {
  return (
    <div className="px-10 py-5 border border-[#F2F2F2] rounded-md w-full">
      <div className="flex items-center gap-6 justify-between">
        <div className="imgs w-40 h-40 flex items-center justify-center">
          <img
            className="w-full object-cover"
            src="/imgs/productImg.png"
            alt=""
          />
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-[22px] text-[#202020] mb-5">
            I Mac i9 11 protsesor 8Gb SSD 256Gb
          </h2>
          <h5 className="font-normal text-[16px] text-[#202020]">
            Brend:{" "}
            <span className="font-medium text-[17px] text-[#202020]">
              Apple
            </span>
          </h5>
          <h5 className="font-normal text-[16px] text-[#202020]">
            Ishlab chiqaruvchi davlat:{" "}
            <span className="font-medium text-[17px] text-[#202020]">AQSH</span>
          </h5>
          <h5 className="font-normal text-[16px] text-[#202020]">
            Turi:{" "}
            <span className="font-medium text-[17px] text-[#202020]">
              An‘anaviy
            </span>
          </h5>
        </div>
        <div className="w-56 text-center">
          <h4 className="font-medium text-[18px] text-Primary">
            15 000 000 сум/мес
          </h4>
          <h5 className="font-normal text-[14px] text-[#909090] mb-5">
            17 000 000 сум
          </h5>
          <Button
            variant="contained"
            type="submit"
            sx={{
              display: "flex",
              gap: "10px",
              backgroundColor: "#ED3729",
              width: "100%",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
          >
            <FiShoppingCart className="text-[21px] text-white cursor-pointer" />{" "}
            Add to cart
          </Button>
          <div className="flex items-center justify-evenly py-5 px-10 border-t border-[#F2F2F2]">
            <FaHeart className="text-[19px]  text-[#BDBDBD] cursor-pointer" />
            <span className="text-[#F2F2F2]">|</span>
            <RiScales3Fill className="text-[21px] text-[#BDBDBD] cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;
