import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { loginFunction } from "../services";
import { toast } from "react-toastify";
import { setToken } from "../services/token";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";

function Login() {
  const { setTokenTitle } = useContext(DataContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginFunction(userName, password).then((info) => {
      if (info?.access) {
        toast.success("Tizimga kirdingiz");
        setToken(info?.access);
        setUserName("");
        setPassword("");
        setTokenTitle(info?.access);
        navigate("/");
      } else if (info?.detail) {
        toast.error("Bunday foydalanuvchi mavjud emas");
      }
    });
  };

  return (
    <div className="py-6 md:py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 overflow-hidden">
        {/* 1. Rasm qismi - barcha ekranlarda moslashuvchan */}
        <div className="w-full md:w-[55%] lg:w-[60%] h-75 md:h-125 lg:h-150 bg-[#CBE4E8] rounded-r-md overflow-hidden ">
          <img
            className="w-full h-full object-contain md:object-cover"
            src="/imgs/loginImg.png"
            alt="SignUp Illustration"
          />
        </div>

        {/* 2. Login Form qismi */}
        <div className="w-full md:w-[45%] lg:w-[35%] px-4 sm:px-10 md:pl-5">
          <div className="max-w-100 mx-auto md:mx-0">
            <h2 className="font-Inter font-medium text-[28px] md:text-[36px] leading-tight text-MainColor mb-3">
              Log in to Exclusive
            </h2>
            <p className="font-Poppins font-normal text-[16px] text-MainColor mb-8">
              Enter your details below
            </p>

            <form className="grid gap-6" onSubmit={handleSubmit}>
              <input
                onChange={(e) => setUserName(e.target.value)}
                value={userName}
                className="font-Poppins text-[16px] border-b border-[#808080] pb-2 outline-none focus:border-Primary transition-all"
                type="text"
                placeholder="Username"
                required
              />

              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full font-Poppins text-[16px] border-b border-[#808080] pb-2 outline-none focus:border-Primary transition-all"
                  placeholder="Password"
                  required
                  type={showPassword ? "text" : "password"}
                />
                <div
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <FaRegEyeSlash size={20} />
                  ) : (
                    <MdOutlineRemoveRedEye size={20} />
                  )}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#ED3729",
                    padding: "10px 40px",
                    width: { xs: "100%", sm: "auto" },
                    textTransform: "none",
                    fontSize: "16px",
                    "&:hover": { backgroundColor: "#d32f2f" },
                  }}
                  variant="contained"
                >
                  Log In
                </Button>

                <span className="font-Poppins text-[16px] text-[#DB4444] cursor-pointer hover:underline">
                  Forget Password?
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
