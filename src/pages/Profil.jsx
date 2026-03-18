import { Button, Checkbox, Switch } from "@mui/material";
import React from "react";
import { CgFileDocument } from "react-icons/cg";
import { CiGrid2H } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { FiCreditCard, FiTruck, FiUser } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";

const label = { inputProps: { "aria-label": "Switch demo" } };

function Profil() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-5">
        {/* Breadcrumbs & View Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2 text-sm md:text-base">
            <Link to="/" className="text-[#626364] hover:text-Primary transition-colors">Home</Link>
            <IoIosArrowForward className="text-[#626364]" />
            <span className="text-Primary font-medium">Personal account</span>
          </div>
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <NavLink to="/profil" className={({ isActive }) => `text-xl ${isActive ? "text-Primary" : "text-[#909090]"}`}>
              <IoGridOutline />
            </NavLink>
            <NavLink to="/list" className="text-xl text-[#909090]">
              <CiGrid2H />
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Mobilda gorizontal scroll bo'ladi */}
          <div className="w-full lg:w-72 lg:border-r border-[#F2F2F2] lg:pr-6">
            <div className="flex items-center gap-3 mb-6 bg-gray-50 p-3 rounded-lg lg:bg-transparent lg:p-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white border border-gray-200 lg:bg-[#F7F7F7]">
                <FiUser className="text-[#909090] text-xl" />
              </div>
              <div>
                <h4 className="font-semibold text-sm text-[#202020]">Fazliddin Isomiddinov</h4>
                <p className="text-xs text-gray-500">+998883690201</p>
              </div>
            </div>
            
            <nav className="flex flex-wrap lg:flex-col gap-2 pb-2 lg:pb-0 ">
              {[
                { icon: <LuShoppingCart />, label: "My installments" },
                { icon: <CgFileDocument />, label: "Payment history" },
                { icon: <FaRegClock />, label: "Online orders" },
                { icon: <TbLogout2 />, label: "Exit", color: "text-red-500" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gray-100 transition-all min-w-40 lg:min-w-full border lg:border-none">
                  <span className="text-xl text-[#909090]">{item.icon}</span>
                  <span className="text-sm whitespace-nowrap">{item.label}</span>
                </div>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Personal Data Card */}
            <div className="border border-[#F2F2F2] rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-[#F2F2F2] bg-gray-50/50">
                <div className="flex items-center gap-3">
                  <FiUser className="text-xl text-[#909090]" />
                  <h4 className="font-semibold text-sm">Personal data</h4>
                </div>
                <Button size="small" variant="outlined" sx={{ color: "#ED3729", borderColor: "#ED3729", textTransform: 'none' }}>Change</Button>
              </div>
              <div className="p-4 space-y-2">
                <p className="font-medium text-sm text-[#202020]">Fazliddin Isomiddinov</p>
                <p className="text-sm text-gray-600">Telephone: +998883690201</p>
              </div>
            </div>

            {/* Promotions Card */}
            <div className="border border-[#F2F2F2] rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-[#F2F2F2] bg-gray-50/50">
                <FiUser className="text-xl text-[#909090]" />
                <h4 className="font-semibold text-sm">Notifications</h4>
              </div>
              <div className="p-4">
                <p className="font-medium text-sm mb-3">Receive promotion info</p>
                <div className="flex items-center gap-2">
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
                  <span className="text-sm">By SMS</span>
                </div>
              </div>
            </div>

            {/* My Card */}
            <div className="border border-[#F2F2F2] rounded-xl overflow-hidden">
              <div className="flex items-center gap-3 p-4 border-b border-[#F2F2F2] bg-gray-50/50">
                <FiCreditCard className="text-xl text-[#909090]" />
                <h4 className="font-semibold text-sm">My card</h4>
              </div>
              <div className="p-8 text-center text-gray-400 text-sm italic">No cards added yet.</div>
            </div>

            {/* Delivery Address Card */}
            <div className="border border-[#F2F2F2] rounded-xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-[#F2F2F2] bg-gray-50/50">
                <div className="flex items-center gap-3">
                  <FiTruck className="text-xl text-[#909090]" />
                  <h4 className="font-semibold text-sm">Delivery address</h4>
                </div>
                <Button size="small" variant="outlined" sx={{ color: "#ED3729", borderColor: "#ED3729", textTransform: 'none' }}>Add</Button>
              </div>
              <div className="p-4">
                <form className="space-y-4">
                  <input className="w-full border border-gray-200 rounded-lg p-2.5 text-sm outline-none focus:border-Primary" placeholder="Street" required />
                  <div className="flex gap-4">
                    <input className="w-1/2 border border-gray-200 rounded-lg p-2.5 text-sm outline-none" placeholder="House" required />
                    <input className="w-1/2 border border-gray-200 rounded-lg p-2.5 text-sm outline-none" placeholder="Apartment" required />
                  </div>
                  <div className="flex items-center">
                    <Checkbox size="small" sx={{ color: "#E0E0E0", "&.Mui-checked": { color: "#ED3729" } }} />
                    <span className="text-sm">Default address</span>
                  </div>
                  <div className="flex gap-3">
                    <Button variant="contained" fullWidth sx={{ backgroundColor: "#ED3729", textTransform: 'none' }}>Save</Button>
                    <Button variant="outlined" fullWidth sx={{ color: "#ED3729", borderColor: "#ED3729", textTransform: 'none' }}>Cancel</Button>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profil;