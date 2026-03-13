import { Button, Checkbox, Switch } from "@mui/material";
import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { CiGrid2H } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { FiCreditCard, FiGrid, FiTruck, FiUser } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Profil() {
  return (
    <div>
      <div className="container mx-auto py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to={"/"}
              className="font-normal text-[#626364] text-[16px] cursor-pointer transition-all duration-300 ease-in-out hover:text-Primary"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-[#626364]" />
            <Link className="font-normal text-[#626364] text-[16px] cursor-pointer transition-all duration-300 ease-in-out hover:text-Primary">
              Personal account
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <NavLink
              to={"/profil"}
              className={({ isActive }) =>
                ` text-[20px] transition-all duration-300 ease-in-out cursor-pointer hover:text-Primary ${isActive ? "text-Primary" : "text-[#909090]"}`
              }
            >
              <IoGridOutline />
            </NavLink>
            <NavLink
            to={""}
              className={({ isActive }) =>
                ` text-[20px] transition-all duration-300 ease-in-out cursor-pointer hover:text-Primary ${isActive ? "text-[#909090]" : "text-[#909090]"}`
              }
            >
              <CiGrid2H />
            </NavLink>
          </div>
        </div>

        <div className=" flex items-start gap-5 justify-between py-5">
          <div className="w-75 border-r border-[#F2F2F2] py-5">
            <div className="flex items-center gap-3 mb-5">
              <button className="w-11 h-11 rounded-full flex items-center justify-center bg-[#F7F7F7]">
                <FiUser className="text-[#909090] text-[21px]" />
              </button>
              <div className="">
                <h4 className="font-normal text-[14px] text-[#202020] mb-1">
                  Fazliddin Isomiddinov
                </h4>
                <h4 className="font-normal text-[14px] text-[#202020]">
                  +998883690201
                </h4>
              </div>
            </div>
            <hr className="border border-[#F2F2F2] mb-5" />
            <div className="flex items-center gap-3 mb-4 p-1 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200">
              <button className="w-11 h-11 rounded-full flex items-center justify-center bg-[#F7F7F7]">
                <LuShoppingCart className="text-[#909090] text-[20px]" />
              </button>
              <h4 className="font-normal text-[14px] text-[#202020]">
                My installments
              </h4>
            </div>
            <div className="flex items-center gap-3 mb-4 p-1 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200">
              <button className="w-11 h-11 rounded-full flex items-center justify-center bg-[#F7F7F7]">
                <CgFileDocument className="text-[#909090] text-[21px]" />
              </button>
              <h4 className="font-normal text-[14px] text-[#202020]">
                Payment history
              </h4>
            </div>
            <div className="flex items-center gap-3 mb-4 p-1 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200">
              <button className="w-11 h-11 rounded-full flex items-center justify-center bg-[#F7F7F7]">
                <FaRegClock className="text-[#909090] text-[21px]" />
              </button>
              <h4 className="font-normal text-[14px] text-[#202020]">
                Online orders
              </h4>
            </div>
            <div className="flex items-center gap-3 mb-4 p-1 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200">
              <button className="w-11 h-11 rounded-full flex items-center justify-center bg-[#F7F7F7]">
                <TbLogout2 className="text-[#909090] text-[21px]" />
              </button>
              <h4 className="font-normal text-[14px] text-[#202020]">Exit</h4>
            </div>
          </div>

          <div className="flex-1 flex justify-between gap-5">
            <div className="w-1/2  rounded-sm">
              <div className="mb-5 border border-[#F2F2F2]">
                <div className="flex items-center justify-between gap-5 p-3 mb-3 border-b border-[#F2F2F2]">
                  <div className="flex items-center gap-3">
                    <button className="w-11 h-11 rounded-full flex items-center justify-center bg-[#F7F7F7] border border-[#E0E0E0]">
                      <FiUser className="text-[#909090] text-[21px]" />
                    </button>
                    <h4 className="font-semibold text-[14px] text-[#202020]">
                      Personal data
                    </h4>
                  </div>
                  <Button
                    variant="outlined"
                    sx={{
                      border: "1px solid #ED3729",
                      color: "#ED3729",
                      transition: "all 0.3s ease-in-out",
                      ":hover": {
                        backgroundColor: "#ED3729",
                        color: "white",
                      },
                    }}
                  >
                    Will change
                  </Button>
                </div>
                <div className="p-3 min-h-[20vh]">
                  <h4 className="font-medium text-[14px] text-[#202020] mb-1">
                    Fazliddin Isomiddinov
                  </h4>
                  <h4 className="font-normal text-[14px] text-[#202020]">
                    Telephone: +998883690201
                  </h4>
                </div>
              </div>
              <div className=" border border-[#F2F2F2]">
                <div className="flex items-center justify-between gap-5 p-3 mb-3 border-b border-[#F2F2F2]">
                  <div className="flex items-center gap-3">
                    <button className="w-11 h-11 rounded-full flex items-center justify-center bg-[#F7F7F7] border border-[#E0E0E0]">
                      <FiCreditCard className="text-[#909090] text-[20px]" />
                    </button>
                    <h4 className="font-semibold text-[14px] text-[#202020]">
                      My card
                    </h4>
                  </div>
                </div>
                <div className="p-3 min-h-[38.75vh]">
                  <h4 className="font-medium text-[14px] text-[#202020] mb-1">
                    Absent
                  </h4>
                </div>
              </div>
            </div>

            <div className="w-1/2  rounded-sm">
              <div className="mb-5 border border-[#F2F2F2]">
                <div className="flex items-center justify-between gap-5 p-3 mb-3 border-b border-[#F2F2F2]">
                  <div className="flex items-center gap-3">
                    <button className="w-11 h-11 rounded-full flex items-center justify-center bg-[#F7F7F7] border border-[#E0E0E0]">
                      <FiUser className="text-[#909090] text-[21px]" />
                    </button>
                    <h4 className="font-semibold text-[14px] text-[#202020]">
                      Personal data
                    </h4>
                  </div>
                </div>
                <div className="p-3 min-h-[20vh]">
                  <h4 className="font-semibold text-[14px] text-[#202020] mb-1">
                    Receive information about promotions and discounts
                  </h4>
                  <div className="flex items-center gap-3">
                    <Switch
                      {...label}
                      defaultChecked
                      size="small"
                      sx={{
                        "& .MuiSwitch-switchBase.Mui-checked": {
                          color: "#ED3729", // Tugmachaning (thumb) rangi
                        },
                        "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track":
                          {
                            backgroundColor: "#ED3729", // Orqa fondagi chiziq rangi
                          },
                      }}
                    />
                    <h4 className="font-normal text-[14px] text-[#202020]">
                      By SMS
                    </h4>
                  </div>
                </div>
              </div>
              <div className=" border border-[#F2F2F2]">
                <div className="flex items-center justify-between gap-5 p-3 mb-3 border-b border-[#F2F2F2]">
                  <div className="flex items-center gap-3">
                    <button className="w-11 h-11 rounded-full flex items-center justify-center bg-[#F7F7F7] border border-[#E0E0E0]">
                      <FiTruck className="text-[#909090] text-[20px]" />
                    </button>
                    <h4 className="font-semibold text-[14px] text-[#202020]">
                      Delivery address
                    </h4>
                  </div>
                  <Button
                    variant="outlined"
                    sx={{
                      width: "100px",
                      border: "1px solid #ED3729",
                      color: "#ED3729",
                      transition: "all 0.3s ease-in-out",
                      ":hover": {
                        backgroundColor: "#ED3729",
                        color: "white",
                      },
                    }}
                  >
                    Add
                  </Button>
                </div>
                <div className="p-3">
                  <form action="">
                    <input
                      className="font-normal text-[14px] text-[#909090] outline-none border border-[#E0E0E0] rounded-sm py-2.5 px-4 w-full mb-5"
                      type="text"
                      placeholder="Ko'cha"
                      required
                    />
                    <div className="flex gap-5 justify-between mb-5">
                      <input
                        className="font-normal text-[14px] text-[#909090] outline-none border border-[#E0E0E0] rounded-sm py-2.5 px-4 w-1/2 "
                        type="text"
                        placeholder="Uy"
                        required
                      />
                      <input
                        className="font-normal text-[14px] text-[#909090] outline-none border border-[#E0E0E0] rounded-sm py-2.5 px-4 w-1/2"
                        type="text"
                        placeholder="Kvartira"
                        required
                      />
                    </div>
                    <div className="flex items-center gap-1 mb-5">
                      <Checkbox
                        {...label}
                        sx={{
                          color: "#E0E0E0",
                          "&.Mui-checked": {
                            color: "#ED3729",
                          },
                        }}
                      />
                      <h4 className="font-normal text-[14px] text-[#202020]">
                        Default address
                      </h4>
                    </div>
                    <div className="flex gap-5">
                      <Button
                        variant="contained"
                        type="submit"
                        sx={{
                          backgroundColor: "#ED3729",
                          width: "110px",
                        }}
                      >
                        Save
                      </Button>
                      <Button
                        type="button"
                        variant="outlined"
                        sx={{
                          width: "100px",
                          fontWeight: "600",
                          border: "1px solid #ED3729",
                          color: "#ED3729",
                          transition: "all 0.3s ease-in-out",
                          ":hover": {
                            backgroundColor: "#ED3729",
                            color: "white",
                          },
                        }}
                      >
                        Cencel
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;
