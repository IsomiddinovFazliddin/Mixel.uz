import React, { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { DataContext } from "../App";

function CategoryModal() {
  // setCategoryModal funksiyasini context'dan olamiz
  const { categoryModal, setCategoryModal } = useContext(DataContext);

  if (!categoryModal) return null;

  return (
    <>
      {/* 1. Overlay (Fon) - Modal tashqarisiga bosilganda yopish uchun */}
      <div 
        className="fixed inset-0 bg-black/20 z-30 transition-opacity duration-300"
        onClick={() => setCategoryModal(false)}
      />

      {/* 2. Modal oynasi */}
      <div
        className={`absolute left-0 top-48 md:top-40 w-full z-40 shadow-lg overflow-y-auto transition-all duration-500 ease-in-out bg-white
        ${categoryModal ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className="w-full border-b border-[#F2F2F2]">
          <div className="container mx-auto py-5 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-8">
              
              {/* Kategoriyalar ro'yxati */}
              <div className="space-y-1">
                {[
                  "Phones, tablets", "Laptops", "Network equipment", 
                  "Video surveillance", "Computers", "Office equipment", 
                  "Accessories", "Household goods", "Peripherals", "IP Telephony"
                ].map((cat) => (
                  <NavLink
                    key={cat}
                    // Link bosilganda ham modal yopilishi uchun:
                    onClick={() => setCategoryModal(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between w-full lg:w-70 py-2.5 px-4 rounded-md cursor-pointer transition-all duration-300 
                      ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2] text-[#202020]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <MdOutlinePhoneAndroid className="text-[20px]" />
                      <span className="font-medium text-[15px] md:text-[16px]">{cat}</span>
                    </div>
                    <IoIosArrowForward className="text-[18px] opacity-60" />
                  </NavLink>
                ))}
              </div>

              {/* Sub-menu va Banner qismlari o'zgarishsiz qoladi... */}
              <div className="hidden md:block">
                <h3 className="font-semibold text-xl md:text-[24px] text-[#202020] mb-4">
                  Network equipment
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {Array(8).fill("Коммутаторы").map((sub, idx) => (
                    <NavLink
                      key={idx}
                      onClick={() => setCategoryModal(false)}
                      className="block py-2 px-4 w-full lg:w-80 rounded-md hover:bg-[#F2F2F2] transition-all text-[#202020] text-[15px]"
                    >
                      {sub}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex w-full max-w-100 h-87.5 bg-[#F7F7F7] rounded-md relative flex-col items-center justify-center overflow-hidden">
                <div className="z-10 px-6 text-center">
                  <img className="mx-auto mb-6 max-w-50" src="/imgs/modalImg.png" alt="Router" />
                  <h4 className="font-medium text-[18px] text-white leading-tight">
                    TP-LINK TL-WR940N 450M (черный)
                  </h4>
                </div>
                <div 
                  className="w-full h-40 absolute bottom-0 left-0 bg-[#ED3729]" 
                  style={{ clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)" }}
                ></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoryModal;