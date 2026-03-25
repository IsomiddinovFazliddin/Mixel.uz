import { Box, Button, Skeleton } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { RiScalesLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { DataContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../services/token";
import { TbLogout2 } from "react-icons/tb";

function Navbar() {
  const {
    categoryModal,
    setCategoryModal,
    categoryData,
    tokenTitle,
    likeData,
    setTokenTitle,
    setLikeData,
    cartData,
  } = useContext(DataContext);
  const [modal, setModal] = useState(false);

  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handlClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModal(false);
      }
    };

    if (modal) {
      document.addEventListener("mousedown", handlClick);
    }

    return () => {
      document.removeEventListener("mousedown", handlClick);
    };
  }, [modal]);
  return (
    <nav className="w-full bg-white shadow-sm">
      {/* 1. TOP NAVBAR (Desktop) */}
      <div className="w-full bg-Primary hidden md:block">
        <div className="container mx-auto flex justify-between items-center py-2 px-4 text-white text-[13px]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <IoLocationOutline size={18} />
              <h2>Tashkent</h2>
            </div>
            <ul className="hidden lg:flex items-center gap-5 text-white/90">
              {[
                "Our Stores",
                "B2B Sales",
                "Installment",
                "Payment",
                "Warranty",
              ].map((item) => (
                <li
                  key={item}
                  className="hover:text-white cursor-pointer transition-all"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:+998883690201" className="flex items-center gap-2">
              <IoCallOutline size={18} />
              <span>+998 88 369 02 01</span>
            </a>
            <select className="bg-transparent outline-none cursor-pointer">
              <option className="text-black" value="eng">
                Eng
              </option>
              <option className="text-black" value="uz">
                O'z
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between gap-4 md:gap-10">
          {/* Logo */}
          <Link to="/" className="w-24 sm:w-32 md:w-40 shrink-0">
            <img
              className="w-full object-contain"
              src="/imgs/logo.png"
              alt="Logo"
            />
          </Link>

          {/* Search Bar */}
          <form className="flex-1 flex items-center border border-Primary rounded-md overflow-hidden bg-white">
            <div className="hidden lg:flex items-center px-3 border-r border-gray-200 bg-gray-50">
              <select className="bg-transparent text-[13px] outline-none py-2 cursor-pointer">
                <option>All categories</option>
              </select>
            </div>
            <div className="flex-1 flex items-center relative">
              <input
                className="w-full px-3 py-1.5 sm:py-2 text-[14px] outline-none"
                type="text"
                placeholder="Search products..."
              />
              <HiOutlineMicrophone className="absolute right-3 text-gray-400 cursor-pointer hidden sm:block" />
            </div>
            <button className="bg-Primary px-4 py-2 text-white">
              <FiSearch size={20} />
            </button>
          </form>

          {/* DESKTOP ACTIONS (>= 768px bo'lganda ko'rinadi) */}
          <div className="hidden md:flex items-center gap-5">
            {getToken() || tokenTitle ? (
              <div className="relative" ref={modalRef}>
                <div
                  className=""
                  onClick={() => {
                    setModal(!modal);
                  }}
                >
                  <ActionIcon icon={<FiUser />} label="User" />
                </div>
                {modal ? (
                  <div className="modal absolute right-0 top-10 z-50 w-40 bg-gray-200 rounded-md p-2">
                    <Link
                      to={"/profil"}
                      className="flex items-center gap-3 font-medium text-black transition-all duration-300 ease-in-out hover:bg-gray-400 hover:text-white w-full px-2 py-1 rounded-md mb-2"
                      onClick={() => {
                        setModal(false);
                      }}
                    >
                      <FaUser /> Profile
                    </Link>
                    <button
                      onClick={() => {
                        removeToken();
                        setModal(false);
                        setLikeData([]);
                        setTokenTitle(null);
                        navigate("/");
                      }}
                      to={"/"}
                      className="flex items-center gap-3 font-medium text-white transition-all duration-300 ease-in-out bg-red-500 hover:bg-red-400 hover:text-white w-full px-2 py-1 rounded-md mb-2"
                    >
                      <TbLogout2 className="text-[18px]" /> Logout
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
            ) : (
              <ActionIcon icon={<FiUser />} label="Login" to="/signup" />
            )}
            <ActionIcon
              icon={<RiScalesLine />}
              label="Compare"
              to="/"
              count={12}
            />
            <ActionIcon
              icon={<FaRegHeart />}
              label="Favorites"
              to="/like"
              count={likeData.length}
            />
            <ActionIcon
              icon={<FiShoppingCart />}
              label="Basket"
              to="/cart"
              count={cartData.length}
            />
          </div>
        </div>

        {/* MOBILE ACTIONS (Faqat < 768px bo'lganda alohida qatorda chiqadi) */}
        <div className="flex md:hidden justify-around pt-4 border-t border-gray-50 mt-3">
          <ActionIcon icon={<FiUser />} label="Login" to="/signup" />
          <ActionIcon
            icon={<RiScalesLine />}
            label="Compare"
            to="/"
            count={12}
          />
          <ActionIcon
            icon={<FaRegHeart />}
            label="Favorites"
            to="/like"
            count={12}
          />
          <ActionIcon
            icon={<FiShoppingCart />}
            label="Basket"
            to="/cart"
            count={2}
          />
        </div>
      </div>

      {/* 3. CATEGORY BAR */}
      <div className="border-t border-gray-100 bg-white">
        <div className="container mx-auto flex items-center gap-10 py-2 px-4">
          <div className="w-full md:w-auto flex justify-center">
            <Button
              onClick={() => setCategoryModal(!categoryModal)}
              variant="contained"
              className="w-full md:w-auto"
              sx={{
                backgroundColor: "#ED3729",
                minWidth: "45px",
                height: "40px",
                borderRadius: "6px",
                "&:hover": { backgroundColor: "#d32f2f" },
              }}
            >
              <TfiMenuAlt size={20} />
              <span className="ml-2 font-semibold">Categories</span>
            </Button>
          </div>

          <ul className="flex-1 hidden md:flex flex-wrap items-center justify-between gap-4 overflow-x-auto whitespace-nowrap text-[14px] font-medium text-gray-700">
            {categoryData?.length > 0
              ? categoryData?.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className="hover:text-Primary cursor-pointer transition-colors"
                      onClick={() => {
                        navigate("/filter");
                      }}
                    >
                      {item?.name}
                    </li>
                  );
                })
              : [1, 1, 1, 1, 1, 1].map((item, i) => {
                  return (
                      <Skeleton key={i} variant="rounded" width={100} height={20} />
                  );
                })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Iconlar komponenti
function ActionIcon({ icon, label, to, count }) {
  return (
    <Link to={to} className="flex flex-col items-center group">
      <div className="relative">
        <span className="text-[22px] md:text-[20px] text-gray-700 group-hover:text-Primary transition-colors">
          {icon}
        </span>
        {count > 0 && (
          <span className="absolute -top-1.5 -right-2 bg-Primary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center border border-white">
            {count}
          </span>
        )}
      </div>
      <span className="text-[10px] md:text-[12px] font-medium text-gray-500 group-hover:text-Primary transition-colors">
        {label}
      </span>
    </Link>
  );
}

export default Navbar;
