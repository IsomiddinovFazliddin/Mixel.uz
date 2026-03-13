import React, { useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { RiScales3Fill, RiShoppingCart2Fill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { IoArrowBackOutline, IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import Product from "../components/Product";
import Marquee from "react-fast-marquee";
import { Button } from "@mui/material";
import Box from "../components/Box";
import { DataContext } from "../App";

function Home() {
  return (
    <div>
      <header className="py-3">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper flex"
        >
          <SwiperSlide>
            <div className="container mx-auto bg-[#FAFAFA] flex flex-col md:flex-row items-center justify-between gap-5">
              <div className="w-full md:w-[45%]">
                <img className="w-full" src="/imgs/heroImg.png" alt="" />
              </div>
              <div className="w-full md:w-[42%] text-center md:text-start">
                <h1 className="font-bold text-[26px] sm:text-[32px] md:text-[40px] text-[#D33636] uppercase">
                  Cashback
                </h1>
                <h3 className="font-medium text-[16px] sm:text-[18px] md:text-[24px] text-[#040404] uppercase mb-5 md:mb-10">
                  from every purchase
                </h3>
                <div className="flex gap-8 flex-col md:flex-row">
                  <h4 className="font-medium text-[15px] md:text-[18px] text-[#040404]">
                    Now shopping has become even <br /> more profitable (yoki
                    more rewarding).
                  </h4>
                  <img
                    className="w-25 rounded-md cursor-pointer hidden md:flex"
                    src="/imgs/cashback.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="container mx-auto bg-[#FAFAFA] flex flex-wrap items-center justify-between gap-5">
              <div className="w-[45%]">
                <img className="w-full" src="/imgs/heroImg.png" alt="" />
              </div>
              <div className="w-[42%]">
                <h1 className="font-bold text-[40px] text-[#D33636] uppercase">
                  Cashback
                </h1>
                <h3 className="font-medium text-[24px] text-[#040404] uppercase mb-10">
                  from every purchase
                </h3>
                <div className="flex gap-8">
                  <h4 className="font-medium text-[18px] text-[#040404]">
                    Now shopping has become even <br /> more profitable (yoki
                    more rewarding).
                  </h4>
                  <img
                    className="w-25 rounded-md cursor-pointer"
                    src="/imgs/cashback.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mx-auto bg-[#FAFAFA] flex flex-wrap items-center justify-between gap-5">
              <div className="w-[45%]">
                <img className="w-full" src="/imgs/heroImg.png" alt="" />
              </div>
              <div className="w-[42%]">
                <h1 className="font-bold text-[40px] text-[#D33636] uppercase">
                  Cashback
                </h1>
                <h3 className="font-medium text-[24px] text-[#040404] uppercase mb-10">
                  from every purchase
                </h3>
                <div className="flex gap-8">
                  <h4 className="font-medium text-[18px] text-[#040404]">
                    Now shopping has become even <br /> more profitable (yoki
                    more rewarding).
                  </h4>
                  <img
                    className="w-25 rounded-md cursor-pointer"
                    src="/imgs/cashback.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mx-auto bg-[#FAFAFA] flex flex-wrap items-center justify-between gap-5">
              <div className="w-[45%]">
                <img className="w-full" src="/imgs/heroImg.png" alt="" />
              </div>
              <div className="w-[42%]">
                <h1 className="font-bold text-[40px] text-[#D33636] uppercase">
                  Cashback
                </h1>
                <h3 className="font-medium text-[24px] text-[#040404] uppercase mb-10">
                  from every purchase
                </h3>
                <div className="flex gap-8">
                  <h4 className="font-medium text-[18px] text-[#040404]">
                    Now shopping has become even <br /> more profitable (yoki
                    more rewarding).
                  </h4>
                  <img
                    className="w-25 rounded-md cursor-pointer"
                    src="/imgs/cashback.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mx-auto bg-[#FAFAFA] flex flex-wrap items-center justify-between gap-5">
              <div className="w-[45%]">
                <img className="w-full" src="/imgs/heroImg.png" alt="" />
              </div>
              <div className="w-[42%]">
                <h1 className="font-bold text-[40px] text-[#D33636] uppercase">
                  Cashback
                </h1>
                <h3 className="font-medium text-[24px] text-[#040404] uppercase mb-10">
                  from every purchase
                </h3>
                <div className="flex gap-8">
                  <h4 className="font-medium text-[18px] text-[#040404]">
                    Now shopping has become even <br /> more profitable (yoki
                    more rewarding).
                  </h4>
                  <img
                    className="w-25 rounded-md cursor-pointer"
                    src="/imgs/cashback.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container mx-auto bg-[#FAFAFA] flex flex-wrap items-center justify-between gap-5">
              <div className="w-[45%]">
                <img className="w-full" src="/imgs/heroImg.png" alt="" />
              </div>
              <div className="w-[42%]">
                <h1 className="font-bold text-[40px] text-[#D33636] uppercase">
                  Cashback
                </h1>
                <h3 className="font-medium text-[24px] text-[#040404] uppercase mb-10">
                  from every purchase
                </h3>
                <div className="flex gap-8">
                  <h4 className="font-medium text-[18px] text-[#040404]">
                    Now shopping has become even <br /> more profitable (yoki
                    more rewarding).
                  </h4>
                  <img
                    className="w-25 rounded-md cursor-pointer"
                    src="/imgs/cashback.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </header>

      <main className="px-4 md:px-0">
        <section className="">
          <div className="container mx-auto py-8">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-[24px] text-[#202020]">
                Hot deals
              </h4>
              <button className="flex items-center gap-3 font-normal text-[16px] text-[#909090] cursor-pointer transition-all duration-300 hover:text-Primary">
                View all <HiOutlineArrowNarrowRight />
              </button>
            </div>
            <div className="card grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
              <Box />
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto pb-10">
            <h4 className="font-medium text-[24px] text-[#202020]">
              Popular categories
            </h4>
            <Marquee pauseOnHover={true} autoFill={true} speed={50}>
              <div className="flex items-center py-6">
                <div className="flex gap-5 border border-[#F2F2F2] rounded-sm mr-5">
                  <h4 className="p-5 pr-0 font-medium text-[20px] text-[#202020]">
                    Computers
                  </h4>
                  <div className="imgs">
                    <img
                      className="w-full h-[90%]"
                      src="/imgs/categoryImg.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-5 border border-[#F2F2F2] rounded-sm mr-5">
                  <h4 className="p-5 pr-0 font-medium text-[20px] text-[#202020]">
                    Computers
                  </h4>
                  <div className="imgs">
                    <img
                      className="w-full h-[90%]"
                      src="/imgs/categoryImg.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-5 border border-[#F2F2F2] rounded-sm mr-5">
                  <h4 className="p-5 pr-0 font-medium text-[20px] text-[#202020]">
                    Computers
                  </h4>
                  <div className="imgs">
                    <img
                      className="w-full h-[90%]"
                      src="/imgs/categoryImg.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="flex gap-5 border border-[#F2F2F2] rounded-sm mr-5">
                  <h4 className="p-5 pr-0 font-medium text-[20px] text-[#202020]">
                    Computers
                  </h4>
                  <div className="imgs">
                    <img
                      className="w-full h-[90%]"
                      src="/imgs/categoryImg.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </Marquee>
          </div>
        </section>
        <section className="bg-[#F7F7F7] py-5 mb-8">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <div className="container mx-auto py-8 flex items-center justify-between gap-5 px-5">
                <div className="w-[35%]">
                  <h2 className="font-medium text-[36px] text-[#202020] mb-5">
                    Apple iPhone X 64 GB
                  </h2>
                  <p className="font-normal text-[16px] leading-[160%] text-[#909090]">
                    The all-new 5.8-inch Super Retina display that fits
                    comfortably in your hand and looks stunning—that's iPhone X.
                  </p>
                </div>
                <div className="">
                  <img src="/imgs/img.png" alt="" />
                </div>
                <div className="">
                  <h3 className="font-bold text-[36px] text-Primary mb-2">
                    1,250,900 sum
                  </h3>
                  <span className="flex font-semibold text-[20px] text-[#909090] line-through mb-5">
                    2 220 900 Сум
                  </span>
                  <Button
                    variant="outlined"
                    className="hover:bg-Primary"
                    sx={{
                      width: "150px",
                      border: "1px solid #ED3729",
                      color: "#ED3729",
                      transition: "all 0.3s",

                      "&:hover": {
                        backgroundColor: "#ED3729",
                        color: "#fff",
                        border: "1px solid #ED3729",
                      },
                    }}
                  >
                    Show more
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container mx-auto py-8 flex items-center justify-between gap-5 px-5">
                <div className="w-[35%]">
                  <h2 className="font-medium text-[36px] text-[#202020] mb-5">
                    Apple iPhone X 64 GB
                  </h2>
                  <p className="font-normal text-[16px] leading-[160%] text-[#909090]">
                    The all-new 5.8-inch Super Retina display that fits
                    comfortably in your hand and looks stunning—that's iPhone X.
                  </p>
                </div>
                <div className="">
                  <img src="/imgs/img.png" alt="" />
                </div>
                <div className="">
                  <h3 className="font-bold text-[36px] text-Primary mb-2">
                    1,250,900 sum
                  </h3>
                  <span className="flex font-semibold text-[20px] text-[#909090] line-through mb-5">
                    2 220 900 Сум
                  </span>
                  <Button
                    variant="outlined"
                    className="hover:bg-Primary"
                    sx={{
                      width: "150px",
                      border: "1px solid #ED3729",
                      color: "#ED3729",
                      transition: "all 0.3s",

                      "&:hover": {
                        backgroundColor: "#ED3729",
                        color: "#fff",
                        border: "1px solid #ED3729",
                      },
                    }}
                  >
                    Show more
                  </Button>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="container mx-auto py-8 flex items-center justify-between gap-5 px-5">
                <div className="w-[35%]">
                  <h2 className="font-medium text-[36px] text-[#202020] mb-5">
                    Apple iPhone X 64 GB
                  </h2>
                  <p className="font-normal text-[16px] leading-[160%] text-[#909090]">
                    The all-new 5.8-inch Super Retina display that fits
                    comfortably in your hand and looks stunning—that's iPhone X.
                  </p>
                </div>
                <div className="">
                  <img src="/imgs/img.png" alt="" />
                </div>
                <div className="">
                  <h3 className="font-bold text-[36px] text-Primary mb-2">
                    1,250,900 sum
                  </h3>
                  <span className="flex font-semibold text-[20px] text-[#909090] line-through mb-5">
                    2 220 900 Сум
                  </span>
                  <Button
                    variant="outlined"
                    className="hover:bg-Primary"
                    sx={{
                      width: "150px",
                      border: "1px solid #ED3729",
                      color: "#ED3729",
                      transition: "all 0.3s",

                      "&:hover": {
                        backgroundColor: "#ED3729",
                        color: "#fff",
                        border: "1px solid #ED3729",
                      },
                    }}
                  >
                    Show more
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        <section>
          <div className="container mx-auto mb-8">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-[24px] text-[#202020]">
                Products are cheaper:
              </h4>
              <button className="flex items-center gap-3 font-normal text-[16px] text-[#909090] cursor-pointer transition-all duration-300 hover:text-Primary">
                View all <HiOutlineArrowNarrowRight />
              </button>
            </div>
            <div className="card grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto mb-8 ">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-[24px] text-[#202020]">
                We recommend
              </h4>
              <button className="flex items-center gap-3 font-normal text-[16px] text-[#909090] cursor-pointer transition-all duration-300 hover:text-Primary">
                View all <HiOutlineArrowNarrowRight />
              </button>
            </div>
            <div className="flex flex-col md:flex-row gap-5 py-5">
              <div className="w-80 bg-Primary flex flex-col text-center items-center justify-center border border-[#E0E0E0] mx-auto md:mx-0">
                <div className="bg-[#D93535] py-5">
                  <div className="bg-white px-5 py-7">
                    <span className="font-extrabold text-[48px] text-Primary">
                      %
                    </span>
                    <h4 className="font-bold text-[24px] uppercase text-Primary">
                      liquidation
                    </h4>
                  </div>
                  <div className="w-full pt-5">
                    <h2 className="font-bold text-[48px] text-white">
                      <span className="font-semibold text-[24px] ">to</span> 45%
                    </h2>
                  </div>
                </div>
              </div>
              <div className="card w-full grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mx-auto mb-8">
            <div className="flex items-center justify-between">
              <h4 className="font-medium text-[24px] text-[#202020]">Brands</h4>
              <div className="flex gap-3">
                <IoArrowBackOutline className="text-[#909090] text-[20px] cursor-pointer" />
                <IoArrowForward className="text-[#909090] text-[20px] cursor-pointer" />
              </div>
            </div>
            <Marquee pauseOnHover={true} autoFill={true} speed={50}>
              <div className="flex items-center py-6">
                <div className="w-60 flex justify-center p-5 border border-[#E0E0E0] rounded-sm mr-5 transition-all duration-500 ease-in-out hover:shadow-lg">
                  <img src="/imgs/brand.png" alt="" />
                </div>
              </div>
            </Marquee>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
