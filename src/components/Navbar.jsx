import { Box, Button, Skeleton } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { HiOutlineMicrophone } from "react-icons/hi";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";
import { RiScalesLine } from "react-icons/ri";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbLogout2 } from "react-icons/tb";
import { DataContext } from "../App";
import { Link, useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../services/token";
import CategoryModal from "./CategoryModal";

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
    setCartData,
    productData,
    compareData,
  } = useContext(DataContext);

  const [modal, setModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);

  const modalRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handlClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setModal(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchFocus(false);
      }
    };
    document.addEventListener("mousedown", handlClick);
    return () => document.removeEventListener("mousedown", handlClick);
  }, []);

  const filterProduct = productData?.filter((item) =>
    item?.details?.toLowerCase().includes(searchInput.toLowerCase())
  ).slice(0, 8);

  return (
    <nav className="w-full bg-white shadow-sm relative z-[1000]">
      {/* TOP NAVBAR */}
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

      {/* MAIN NAVBAR */}
      <div className="container mx-auto py-3 px-4">
        <div className="flex items-center justify-between gap-4 md:gap-10">
          {/* LOGO */}
          <Link to="/" className="w-24 sm:w-32 md:w-40 shrink-0">
            <img
              className="w-full object-contain"
              src="/imgs/logo.png"
              alt="Logo"
            />
          </Link>

          {/* SEARCH */}
          <div className="flex-1 relative" ref={searchRef}>
            <form
              className="flex items-center border border-Primary rounded-md overflow-hidden bg-white"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex-1 flex items-center relative">
                <input
                  value={searchInput}
                  onInput={(e) => setSearchInput(e.target.value)}
                  onFocus={() => setSearchFocus(true)}
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

            {/* SEARCH DROPDOWN */}
            {searchFocus && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#F2F2F2] rounded-xl shadow-xl z-50 max-h-[420px] overflow-y-auto">
                {searchInput.length === 0 ? (
                  <div className="p-4 text-sm text-[#909090] text-center">
                    Mahsulot nomini kiriting...
                  </div>
                ) : filterProduct?.length === 0 ? (
                  <div className="p-4 text-sm text-[#909090] text-center">
                    Hech narsa topilmadi
                  </div>
                ) : (
                  filterProduct?.map((item) => (
                    <Link
                      key={item.id}
                      to={`/productdetails/${item.id}`}
                      onClick={() => {
                        setSearchFocus(false);
                        setSearchInput("");
                      }}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors border-b border-[#F9F9F9] last:border-0"
                    >
                      <img
                        src={item?.images?.[0]?.image}
                        alt={item?.details}
                        className="w-10 h-10 object-contain shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-[#202020] font-medium line-clamp-1">
                          {item?.details}
                        </p>
                        <p className="text-sm text-Primary font-semibold">
                          {item?.price?.toLocaleString()} сум
                        </p>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>

          {/* DESKTOP ACTIONS */}
          <div className="hidden md:flex items-center gap-5">
            {getToken() || tokenTitle ? (
              <div className="relative" ref={modalRef}>
                <div onClick={() => setModal(!modal)}>
                  <ActionIcon icon={<FiUser />} label="User" />
                </div>

                {modal && (
                  <div className="modal absolute right-0 top-10 z-50 w-40 bg-gray-200 rounded-md p-2">
                    <Link
                      to={"/profil"}
                      className="flex items-center gap-3 font-medium text-black hover:bg-gray-400 hover:text-white w-full px-2 py-1 rounded-md mb-2"
                      onClick={() => setModal(false)}
                    >
                      <FaUser /> Profile
                    </Link>

                    <button
                      onClick={() => {
                        removeToken();
                        setModal(false);
                        setLikeData([]);
                        setCartData([]);
                        setTokenTitle(null);
                        navigate("/");
                      }}
                      className="flex items-center gap-3 font-medium text-white bg-red-500 hover:bg-red-400 w-full px-2 py-1 rounded-md"
                    >
                      <TbLogout2 className="text-[18px]" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <ActionIcon icon={<FiUser />} label="Login" to="/signup" />
            )}

            <ActionIcon
              icon={<RiScalesLine />}
              label="Compare"
              to="/compare"
              count={compareData?.length}
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

        {/* MOBILE ACTIONS */}
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

      {/* CATEGORY BAR */}
      <div className="border-t border-gray-100 bg-white">
        <div className="container mx-auto flex items-center gap-10 py-2 px-4">
          <Button
            onClick={() => setCategoryModal(!categoryModal)}
            variant="contained"
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

          <ul className="flex-1 hidden md:flex flex-wrap items-center justify-between gap-4 text-[14px] font-medium text-gray-700">
            {categoryData?.length > 0
              ? categoryData.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => navigate(`/filter?category=${item.id}`)}
                    className="hover:text-Primary cursor-pointer"
                  >
                    {item?.name}
                  </li>
                ))
              : [1, 1, 1, 1, 1, 1].map((_, i) => (
                  <Skeleton key={i} variant="rounded" width={100} height={20} />
                ))}
          </ul>
        </div>
      </div>

      {/* CATEGORY MEGA MENU */}
      <CategoryModal
        isOpen={categoryModal}
        onClose={() => setCategoryModal(false)}
      />
    </nav>
  );
}

/* ACTION ICON */
function ActionIcon({ icon, label, to, count }) {
  return (
    <Link to={to} className="flex flex-col items-center group">
      <div className="relative">
        <span className="text-[22px] text-gray-700 group-hover:text-Primary">
          {icon}
        </span>

        {count > 0 && (
          <span className="absolute -top-1.5 -right-2 bg-Primary text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center">
            {count}
          </span>
        )}
      </div>

      <span className="text-[10px] font-medium text-gray-500 group-hover:text-Primary">
        {label}
      </span>
    </Link>
  );
}

export default Navbar;
