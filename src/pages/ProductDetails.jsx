import { Button } from "@mui/material";
import React from "react";
import { FaBalanceScale, FaHeart } from "react-icons/fa";
import { FiHelpCircle, FiRefreshCcw } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { IoInformationCircleOutline, IoWalletOutline } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RxDividerVertical } from "react-icons/rx";
import { SlEarphonesAlt } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";
import Box from "../components/Box";
function ProductDetails() {
  return (
    <div>
      <div className="container mx-auto py-5">
        <div className="flex items-center gap-3">
          <Link
            to={"/"}
            className="font-normal text-[#626364] text-[16px] cursor-pointer transition-all duration-300 ease-in-out hover:text-Primary"
          >
            Home
          </Link>
          <IoIosArrowForward className="text-[#626364]" />
          <Link className="font-normal text-[#626364] text-[16px] cursor-pointer transition-all duration-300 ease-in-out hover:text-Primary">
            Laptops
          </Link>
          <IoIosArrowForward className="text-[#626364]" />
          <Link className="font-normal text-[#626364] text-[16px] cursor-pointer transition-all duration-300 ease-in-out hover:text-Primary">
            Apple
          </Link>
        </div>

        <div className="flex gap-5 justify-between py-5 items-start">
          <div className="imgs grid gap-3">
            <div className="w-80 h-80 border border-[#F2F2F2] rounded-md flex items-center justify-center">
              <img className="w-[90%]" src="/imgs/productImg.png" alt="" />
            </div>
            <div className="w-80 flex gap-2 justify-between">
              <div className="w-18.5 h-18.5 border border-[#F2F2F2] rounded-md cursor-pointer flex items-center justify-center">
                <img className="w-[95%]" src="/imgs/productImg.png" alt="" />
              </div>
              <div className="w-18.5 h-18.5 border border-[#F2F2F2] rounded-md cursor-pointer"></div>
              <div className="w-18.5 h-18.5 border border-[#F2F2F2] rounded-md cursor-pointer"></div>
              <div className="w-18.5 h-18.5 border border-[#F2F2F2] rounded-md cursor-pointer"></div>
            </div>
          </div>

          <div className="flex-1">
            <h1 className="font-bold text-[26px] text-[#202020] mb-5">
              MacBook Pro 13 MXK32ZP/A Space Gray
            </h1>
            <div className="w-[85%]">
              <div className="flex items-center gap-5 justify-between mb-5">
                <div className="flex gap-1 items-center">
                  <span className="font-medium text-[20px] text-[#202020]">
                    16 559 000 cум
                  </span>
                  <IoInformationCircleOutline className="text-[#909090] text-[20px]" />
                </div>
                <div className="flex items-center gap-5">
                  <RiShoppingCart2Fill className="text-[#BDBDBD] text-[20px] cursor-pointer transition-all duration-300 ease-in-out" />
                  <RxDividerVertical className="text-[#BDBDBD] text-[20px]" />
                  <FaHeart className="text-[#BDBDBD] text-[19px] cursor-pointer transition-all duration-300 ease-in-out" />
                  <RxDividerVertical className="text-[#BDBDBD] text-[20px]" />
                  <FaBalanceScale className="text-[#BDBDBD] text-[21px] cursor-pointer transition-all duration-300 ease-in-out" />
                </div>
              </div>
              <div className="flex mb-5 gap-2">
                <FiHelpCircle className="text-[#909090] text-[16px]" />
                <h4 className="font-normal text-[14px] text-[#909090]">
                  {" "}
                  VIP скидки для VIP клиентов
                </h4>
              </div>
              <div className="flex w-full gap-5 mb-10">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#ED3729",
                    display: "flex",
                    gap: "10px",
                    width: "150px",
                    padding: "8px 20px",
                  }}
                >
                  Buy now
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#202020",
                    display: "flex",
                    gap: "10px",
                    padding: "8px 20px",
                  }}
                >
                  Buy in installments now
                </Button>
              </div>
              <div className="py-5 flex justify-between border-t border-b border-[#F2F2F2] mb-5">
                <h5 className="font-normal text-[14px] text-[#909090]">
                  Title for the contract
                </h5>
                <p className="w-[55%] font-normal text-[14px] text-[#202020]">
                  MacBook Pro 13 MXK32ZP/A Space Gray Full HD 1920x1080 IPS /
                  Core™ i7-1165G7 / 8GB RAM / 256GB SSD
                </p>
              </div>
              <div className="">
                <h3 className="font-medium text-[24px] text-[#3E3E3E] mb-2">
                  Technical parameters
                </h3>
                <div className="flex items-center justify-between p-3 transition-all duration-300 ease-in-out hover:bg-[#F2F2F2] cursor-pointer rounded-sm border-t border-b border-[#F2F2F2]">
                  <h5>Название</h5>
                  <h4>MacBook Pro 13 MXK32ZP/A Space Gray</h4>
                </div>
                <div className="flex items-center justify-between p-3 transition-all duration-300 ease-in-out hover:bg-[#F2F2F2] cursor-pointer rounded-sm border-t border-b border-[#F2F2F2]">
                  <h5>Состояние</h5>
                  <h4>Новый</h4>
                </div>
                <div className="flex items-center justify-between p-3 transition-all duration-300 ease-in-out hover:bg-[#F2F2F2] cursor-pointer rounded-sm border-t border-b border-[#F2F2F2]">
                  <h5>Технические параметры</h5>
                  <h4>MacBook Pro 13 MXK32ZP/A Space Gray</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 w-95">
            <div className="flex gap-5 p-5 bg-[#F7F7F7] rounded-md">
              <FiRefreshCcw className="text-[24px] text-[#909090]" />
              <div className="">
                <h4 className="font-bold text-[16px] text-[#000000] mb-2">
                  30 days for exchange and return.
                </h4>
                <p className="font-normal text-[14px] leading-[160%] text-[#909090] mb-2">
                  Если купите товар сегодня, до 06 мая можете вернуть или
                  обменять.
                </p>
                <span className="font-normal text-[14px] leading-[160%] text-[#2F80ED] mb-2 cursor-pointer">
                  Подробнее о программе.
                </span>
              </div>
            </div>

            <div className="flex gap-5 p-5 bg-[#F7F7F7] rounded-md">
              <SlEarphonesAlt className="text-[24px] text-[#909090]" />
              <div className="">
                <h4 className="font-bold text-[16px] text-[#000000] mb-2">
                  Any questions?
                </h4>
                <div className="pl-3">
                  <h5 className="flex items-center gap-3 font-normal text-[14px] text-[#909090] mb-2">
                    Telephone:
                    <span className="text-[#2F80ED] cursor-pointer">
                      +998 99 990 45 27
                    </span>
                  </h5>
                  <h5 className="flex items-center gap-3 font-normal text-[14px] text-[#909090] mb-2">
                    Telegram:
                    <span className="text-[#2F80ED] cursor-pointer">
                      @mixel_uz
                    </span>
                  </h5>
                  <h5 className="flex items-center gap-3 font-normal text-[14px] text-[#909090]">
                    Email mail:
                    <span className="text-[#2F80ED] cursor-pointer">
                      mixel@emali.uz
                    </span>
                  </h5>
                </div>
              </div>
            </div>

            <div className="p-5 bg-[#F7F7F7] rounded-md">
              <div className="flex gap-5 mb-5">
                <TbTruckDelivery className="text-[24px] text-[#909090]" />
                <h4 className="font-bold text-[16px] text-[#000000] mb-2 flex items-center gap-2">
                  Delivery:{" "}
                  <span className="font-normal text-[14px]">For free</span>
                </h4>
              </div>
              <div className="flex gap-5 ">
                <IoWalletOutline className="text-[24px] text-[#909090]" />
                <div className="">
                  <h4 className="font-bold text-[16px] text-[#000000] mb-2">
                    Payment method:
                  </h4>
                  <ul className="list-disc pl-3">
                    <li className="font-normal text-[14px] text-[#909090] mb-2">
                      Cash (Upon Delivery)
                    </li>
                    <li className="font-normal text-[14px] text-[#909090] mb-2">
                      Payme / Click
                    </li>
                    <li className="font-normal text-[14px] text-[#909090]">
                      Transfer with VAT
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex flex-wrap items-center gap-5 justify-between py-5">
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>
  );
}

export default ProductDetails;
