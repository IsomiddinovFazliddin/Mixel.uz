import React, { useContext } from "react";
import { IoIosArrowForward, IoIosPhonePortrait } from "react-icons/io";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../App";

function CategoryModal() {
  const { categoryModal, setCategoryModal } = useContext(DataContext);
  return (
    <div>
      {categoryModal ? (
        <div
          className={`absolute left-0 top-40 w-full z-30 shadow-md overflow-hidden transition-all duration-500 ease-in-out 
          ${
            categoryModal
              ? "max-h-150 opacity-100 "
              : "max-h-0 opacity-0 "
          }`}
        >
          <div className="w-full bg-white border border-[#F2F2F2]">
            <div className="container mx-auto py-5 flex items-center justify-between gap-5">
              <div className="flex gap-5">
                <div className="">
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-70 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <MdOutlinePhoneAndroid className="text-[#202020] text-[20px]" />
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Phones, tablets
                      </h4>
                    </div>
                    <IoIosArrowForward className="text-[#202020] text-[20px]" />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-70 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <MdOutlinePhoneAndroid className="text-[#202020] text-[20px]" />
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Laptops
                      </h4>
                    </div>
                    <IoIosArrowForward className="text-[#202020] text-[20px]" />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-70 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <MdOutlinePhoneAndroid className="text-[#202020] text-[20px]" />
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Network equipment
                      </h4>
                    </div>
                    <IoIosArrowForward className="text-[#202020] text-[20px]" />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-70 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <MdOutlinePhoneAndroid className="text-[#202020] text-[20px]" />
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Video surveillance
                      </h4>
                    </div>
                    <IoIosArrowForward className="text-[#202020] text-[20px]" />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-70 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <MdOutlinePhoneAndroid className="text-[#202020] text-[20px]" />
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Computers
                      </h4>
                    </div>
                    <IoIosArrowForward className="text-[#202020] text-[20px]" />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-70 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <MdOutlinePhoneAndroid className="text-[#202020] text-[20px]" />
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Office equipment
                      </h4>
                    </div>
                    <IoIosArrowForward className="text-[#202020] text-[20px]" />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-70 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <MdOutlinePhoneAndroid className="text-[#202020] text-[20px]" />
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Accessories
                      </h4>
                    </div>
                    <IoIosArrowForward className="text-[#202020] text-[20px]" />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-70 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <MdOutlinePhoneAndroid className="text-[#202020] text-[20px]" />
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Household goods
                      </h4>
                    </div>
                    <IoIosArrowForward className="text-[#202020] text-[20px]" />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-70 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <MdOutlinePhoneAndroid className="text-[#202020] text-[20px]" />
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Peripherals
                      </h4>
                    </div>
                    <IoIosArrowForward className="text-[#202020] text-[20px]" />
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-70 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <MdOutlinePhoneAndroid className="text-[#202020] text-[20px]" />
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        IP Telephony
                      </h4>
                    </div>
                    <IoIosArrowForward className="text-[#202020] text-[20px]" />
                  </NavLink>
                </div>
                <div className="">
                  <h3 className="font-semibold text-[24px] text-[#202020] mb-4">
                    Network equipment
                  </h3>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-80 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Коммутаторы
                      </h4>
                    </div>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-80 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Коммутаторы
                      </h4>
                    </div>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-80 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Коммутаторы
                      </h4>
                    </div>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-80 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Коммутаторы
                      </h4>
                    </div>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-80 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Коммутаторы
                      </h4>
                    </div>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-80 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Коммутаторы
                      </h4>
                    </div>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-80 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Коммутаторы
                      </h4>
                    </div>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-80 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Коммутаторы
                      </h4>
                    </div>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-80 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Коммутаторы
                      </h4>
                    </div>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center justify-between w-80 py-2 px-4 rounded-md cursor-pointer transition-all duration-300 ease-in-out  mb-2 ${isActive ? "bg-[#F2F2F2]" : "hover:bg-[#F2F2F2]"}`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <h4 className="font-medium text-[16px] text-[#202020]">
                        Коммутаторы
                      </h4>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="w-120 h-110 bg-[#F7F7F7] rounded-md relative flex flex-col items-center justify-center">
                <div className="z-10">
                  <img className=" mb-10" src="/imgs/modalImg.png" alt="" />
                </div>
                <h4 className="z-10 font-medium text-[20px] text-white w-[60%] text-center">
                  TP-LINK TL-WR940N 450M (черный)
                </h4>
                <div className="w-full h-55 absolute bottom-0 left-0 bg-Primary rounded-b-md [clip-path:polygon(0_35%,100%_0,100%_100%,0%_100%)]"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default CategoryModal;
