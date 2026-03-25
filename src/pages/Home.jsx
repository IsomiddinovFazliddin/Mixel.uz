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
import { Button, Skeleton } from "@mui/material";
import Box from "../components/Box";
import { DataContext } from "../App";
import { useNavigate } from "react-router-dom";

function Home() {
  const { categoryData, productData, brand, gallery } = useContext(DataContext);

  const navigate = useNavigate();

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
          {gallery?.length > 0 ? (
            gallery?.map((item, i) => {
              return (
                <SwiperSlide>
                  <div className="container mx-auto bg-[#FAFAFA] flex flex-col md:flex-row items-center justify-between gap-5">
                    <div className="w-full h-90">
                      <img
                        className="w-full h-full object-cover"
                        src={item?.image}
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })
          ) : (
            <Skeleton
              variant="rectangular"
              width={1200}
              height={350}
              className="mx-auto"
            />
          )}
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
              {productData?.length > 0
                ? productData?.map((item, i) => {
                    return <Product key={i} item={item} />;
                  })
                : [1, 1, 1, 1].map((item, i) => {
                    return (
                      <Skeleton variant="rounded" width={300} height={250} />
                    );
                  })}
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
                {categoryData?.length > 0
                  ? categoryData?.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="flex gap-5 border border-[#F2F2F2] rounded-sm mr-5 cursor-pointer"
                          onClick={() => {
                            navigate("/filter");
                          }}
                        >
                          <h4 className="p-5 pr-0 font-medium text-[20px] text-[#202020]">
                            Computers
                          </h4>
                          <div className="imgs w-38 h-34 object-cover">
                            <img
                              className="w-full h-[90%]"
                              src={item?.image}
                              alt=""
                            />
                          </div>
                        </div>
                      );
                    })
                  : [1, 1, 1, 1, 1].map((item, i) => {
                      return (
                        <Skeleton
                          key={i}
                          variant="rounded"
                          width={250}
                          height={60}
                        />
                      );
                    })}
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
              {productData?.length > 0
                ? productData?.map((item, i) => {
                    return <Product key={i} item={item} />;
                  })
                : [1, 1, 1, 1].map((item, i) => {
                    return (
                      <Skeleton variant="rounded" width={300} height={250} />
                    );
                  })}
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
                {productData?.length > 0
                  ? productData?.map((item, i) => {
                      return <Product key={i} item={item} />;
                    })
                  : [1, 1, 1, 1].map((item, i) => {
                    return (
                      <Skeleton variant="rounded" width={300} height={250} />
                    );
                  })}
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
            <Marquee pauseOnHover={false} autoFill={true} speed={70}>
              <div className="flex items-center py-6 gap-10">
                {brand?.length > 0
                  ? brand?.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="w-60 flex justify-center p-5 border border-[#E0E0E0] rounded-sm mr-5 transition-all duration-500 ease-in-out hover:shadow-lg"
                        >
                          <img className="w-full " src={item?.image} alt="" />
                        </div>
                      );
                    })
                  : [1, 1, 1, 1, 1].map((item, i) => {
                      return (
                        <Skeleton variant="rounded" width={250} height={60} />
                      );
                    })}
              </div>
            </Marquee>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
