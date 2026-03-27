import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { IoClose, IoEyeOutline } from "react-icons/io5";
import { DataContext } from "../App";
import { userData, userUpdate } from "../services";
import { toast } from "react-toastify";
import { FaRegEyeSlash } from "react-icons/fa";

function UserModal() {
  const {
    profilData,
    setProfilData,
    userModal,
    setUserModal,
    userName,
    setUserName,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    password,
    setPassword,
  } = useContext(DataContext);

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (profilData?.username) {
      setUserName(profilData?.username || "");
      setFirstName(profilData?.first_name || "");
      setLastName(profilData?.last_name || "");
      setPhoneNumber(profilData?.phone_number || "");
    }
  }, [profilData]);

  return (
    <div
      className={`w-full h-screen flex items-center justify-center fixed top-0 left-0 bg-black/50 z-50 transition-all duration-300 ease-in-out ${
        userModal ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={() => setUserModal(false)} // Modal tashqarisiga bosganda yopilish
    >
      <div
        className={`bg-white w-full max-w-137.5 p-8 rounded-xl shadow-2xl relative transform transition-all duration-300 ${
          userModal ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Yopish tugmasi */}
        <button
          onClick={() => {
            setUserModal(false);
          }}
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-black"
        >
          <IoClose size={24} />
        </button>

        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            userUpdate(
              userName,
              firstName,
              lastName,
              phoneNumber,
              password,
            ).then((data) => {
              userData().then((newData) => {
                setProfilData(newData);
              });
              setUserModal(false);
              toast.success("Ma'lumotlar yangilandi");
            });
          }}
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-1">My Profile</h2>
          <p className="text-gray-500 mb-8 text-sm">
            Shaxsiy ma'lumotlaringizni shu yerda yangilashingiz mumkin.
          </p>

          <div className="space-y-5">
            {/* UserName & FirstName */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Username
                </label>
                <input
                  onInput={(e) => {
                    setUserName(e.target.value);
                  }}
                  value={userName}
                  type="text"
                  placeholder=""
                  required
                  className="w-full border border-gray-200 bg-gray-50/50 px-4 py-2.5 rounded-lg focus:bg-white focus:border-[#ED3729] focus:ring-2 focus:ring-[#ED3729]/10 outline-none transition-all"
                />
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  First Name
                </label>
                <input
                  onInput={(e) => {
                    setFirstName(e.target.value);
                  }}
                  value={firstName}
                  type="text"
                  required
                  className="w-full border border-gray-200 bg-gray-50/50 px-4 py-2.5 rounded-lg focus:bg-white focus:border-[#ED3729] focus:ring-2 focus:ring-[#ED3729]/10 outline-none transition-all"
                />
              </div>
            </div>

            {/* LastName & Password */}
            <div className="flex flex-col md:flex-row gap-5">
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Last Name
                </label>
                <input
                  onInput={(e) => {
                    setLastName(e.target.value);
                  }}
                  value={lastName}
                  type="text"
                  placeholder=""
                  required
                  className="w-full border border-gray-200 bg-gray-50/50 px-4 py-2.5 rounded-lg focus:bg-white focus:border-[#ED3729] focus:ring-2 focus:ring-[#ED3729]/10 outline-none transition-all"
                />
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-semibold text-gray-700 ml-1">
                  Phone Number
                </label>
                <input
                  onInput={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  value={phoneNumber}
                  type="text"
                  placeholder="+998 883690201"
                  required
                  className="w-full border border-gray-200 bg-gray-50/50 px-4 py-2.5 rounded-lg focus:bg-white focus:border-[#ED3729] focus:ring-2 focus:ring-[#ED3729]/10 outline-none transition-all"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700 ml-1">
                Password
              </label>
              <div className="relative">
                <input
                  onInput={(e) => {
                    setPassword(e.target.value);
                  }}
                  value={password}
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  required
                  className="w-full border border-gray-200 bg-gray-50/50 px-4 py-2.5 rounded-lg focus:bg-white focus:border-[#ED3729] focus:ring-2 focus:ring-[#ED3729]/10 outline-none transition-all"
                />
                {showPassword ? (
                  <FaRegEyeSlash
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <IoEyeOutline
                    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: "#ED3729",
                py: 1.5,
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "600",
                borderRadius: "10px",
                boxShadow: "0 4px 14px 0 rgba(237, 55, 41, 0.39)",
                "&:hover": {
                  backgroundColor: "#d32f2f",
                  boxShadow: "0 6px 20px rgba(211, 47, 47, 0.23)",
                },
              }}
            >
              Saqlash va yangilash
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserModal;
