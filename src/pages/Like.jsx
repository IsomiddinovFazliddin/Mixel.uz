import React, { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Product from "../components/Product";
import { DataContext } from "../App";
import { Skeleton } from "@mui/material";

function Like() {
  const { likeData } = useContext(DataContext);

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
          {likeData?.length > 0
            ? likeData?.map((item, i) => {
                return <Product key={i} item={item.product} />;
              })
            : [1, 1, 1, 1].map((item, i) => {
                return <Skeleton key={i} variant="rounded" width={300} height={250} />;
              })}
        </div>
      </div>
    </div>
  );
}

export default Like;
