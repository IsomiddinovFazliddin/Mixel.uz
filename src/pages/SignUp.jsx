import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { registerFunction } from "../services";
import { toast } from "react-toastify";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false); // Boshlang'ich qiymat berildi
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="py-6 md:py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden">
        
        {/* 1. Rasm qismi - Mobilda yashiriladi yoki tepaga chiqadi */}
        <div className="w-full md:w-[55%] lg:w-[60%] h-75 md:h-125 lg:h-150 bg-[#CBE4E8] rounded-r-md overflow-hidden ">
          <img 
            className="w-full h-full object-contain md:object-cover" 
            src="/imgs/loginImg.png" 
            alt="SignUp Illustration" 
          />
        </div>

        {/* 2. Form qismi */}
        <div className="w-full md:w-[45%] lg:w-[35%] px-4 sm:px-10 md:pl-0">
          <div className="max-w-100 mx-auto md:mx-0">
            <h2 className="font-Inter font-medium text-[28px] md:text-[36px] leading-tight text-MainColor mb-3 md:mb-5">
              Create an account
            </h2>
            <h4 className="font-Poppins font-normal text-[14px] md:text-[16px] text-MainColor mb-6 md:mb-8">
              Enter your details below
            </h4>

            <form
              className="grid gap-5 mb-5"
              onSubmit={(e) => {
                e.preventDefault();
                registerFunction(userName, email, password).then((data) => {
                  if (data?.id) {
                    toast.success("Ro'yxatdan o'tdingiz");
                    navigate("/login");
                  } else if (data?.username) {
                    toast.error("Bu foydalanuvchi mavjud");
                  }
                });
              }}
            >
              <input
                onChange={(e) => setUserName(e.target.value)}
                className="font-Poppins text-[16px] border-b border-[#808080] pb-2 outline-none focus:border-Primary transition-all"
                type="text"
                placeholder="UserName"
                value={userName}
                required
              />
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="font-Poppins text-[16px] border-b border-[#808080] pb-2 outline-none focus:border-Primary transition-all"
                type="email"
                placeholder="Email or Phone Number"
                value={email}
                required
              />
              <div className="relative">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full font-Poppins text-[16px] border-b border-[#808080] pb-2 outline-none focus:border-Primary transition-all"
                  placeholder="Password"
                  value={password}
                  required
                  type={showPassword ? "text" : "password"}
                />
                <div 
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaRegEyeSlash size={20} /> : <MdOutlineRemoveRedEye size={20} />}
                </div>
              </div>

              <Button
                type="submit"
                sx={{
                  backgroundColor: "#ED3729",
                  padding: "12px",
                  textTransform: "none",
                  fontSize: "16px",
                  borderRadius: "4px",
                  "&:hover": { backgroundColor: "#d32f2f" }
                }}
                variant="contained"
              >
                Create Account
              </Button>
            </form>

            <button className="flex items-center justify-center gap-3 w-full mb-6 border border-[#999999] rounded-md py-2.5 font-Poppins text-[16px] hover:bg-gray-50 transition-all">
              <FcGoogle size={22} />
              Sign up with Google
            </button>

            <div className="flex gap-2 justify-between items-center">
              <span className="font-Poppins text-[14px] md:text-[16px] text-gray-600">
                Already have account?
              </span>
              <Link
                to={"/login"}
                className="font-Poppins font-medium text-[14px] md:text-[16px] text-MainColor border-b border-MainColor hover:text-Primary transition-colors"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;