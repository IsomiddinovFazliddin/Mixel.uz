import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // navigate uchun kerak
import { DataContext } from "../App";
import { Skeleton } from "@mui/material";

function CategoryModal() {
  const { categoryModal, setCategoryModal, categoryData } = useContext(DataContext);
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] = useState(null);

  if (!categoryModal) return null;

  // Agar activeCategory hali tanlanmagan bo'lsa va ma'lumot bo'lsa, birinchisini o'rnatamiz
  if (categoryData?.length > 0 && !activeCategory) {
    setActiveCategory(categoryData[0]);
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/20 z-30 transition-opacity duration-300"
        onClick={() => setCategoryModal(false)}
      />

      <div
        className={`absolute left-0 top-48 md:top-40 w-full z-40 shadow-lg overflow-y-auto transition-all duration-500 ease-in-out bg-white
        ${categoryModal ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        <div className="w-full border-b border-[#F2F2F2]">
          <div className="container mx-auto py-5 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:justify-between gap-8">
              
              <div className="space-y-1 min-w-62.5">
                {categoryData?.length > 0
                  ? categoryData.map((item, i) => (
                      <li
                        key={item.id || i}
                        className={`hover:text-Primary cursor-pointer transition-colors list-none py-1 px-2 rounded ${
                          activeCategory?.id === item.id ? "text-Primary bg-gray-100" : ""
                        }`}
                        // Sichqoncha ustiga kelganda
                        onMouseEnter={() => setActiveCategory(item)}
                        onClick={() => {
                          navigate(`/filter?category=${item.id}`);
                          setCategoryModal(false);
                        }}
                      >
                        {item?.name}
                      </li>
                    ))
                  : [1, 2, 3, 4, 5, 6].map((_, i) => (
                      <Skeleton key={i} variant="text" width={150} height={30} />
                    ))}
              </div>

              {/* --- SUB-MENU (O'RTA TARAF) --- */}
              <div className="flex-1 px-4 hidden md:block border-l border-gray-100">
                <h3 className="font-semibold text-xl md:text-[24px] text-[#202020] mb-4">
                  {activeCategory ? activeCategory.name : "Kategoriyani tanlang"}
                </h3>
                <div className="grid grid-cols-1 gap-1">
                  {/* Bu yerda activeCategory ichidagi subkategoriyalarni chiqarish kerak */}
                  {/* Hozircha namunaviy massiv: */}
                  {["Mahsulot 1", "Mahsulot 2", "Mahsulot 3"].map((sub, idx) => (
                    <NavLink
                      key={idx}
                      to="#"
                      onClick={() => setCategoryModal(false)}
                      className="block py-2 px-4 w-full lg:w-80 rounded-md hover:bg-[#F2F2F2] transition-all text-[#202020] text-[15px]"
                    >
                      {activeCategory?.name} - {sub}
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* --- BANNER (O'NG TARAF) --- */}
              <div className="hidden lg:flex w-full max-w-[300px] h-80 bg-[#F7F7F7] rounded-md relative flex-col items-center justify-center overflow-hidden">
                <div className="z-10 px-6 text-center">
                  <img
                    className="mx-auto mb-6 max-h-32 object-contain"
                    // Agar API dan rasm kelsa shuni qo'yamiz
                    src={activeCategory?.image || "/imgs/modalImg.png"}
                    alt={activeCategory?.name}
                  />
                  <h4 className="font-medium text-[18px] text-white leading-tight relative z-20">
                    {activeCategory?.name} uchun maxsus taklif
                  </h4>
                </div>
                <div
                  className="w-full h-40 absolute bottom-0 left-0 bg-[#ED3729]"
                  style={{
                    clipPath: "polygon(0 40%, 100% 0, 100% 100%, 0% 100%)",
                  }}
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