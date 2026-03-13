import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function Login() {
  const [showPassword, setShowPassword] = useState();
  useEffect(() => {
    window.scrollTo({
      top: "0px",
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="py-10">
        <div className="container mx-auto flex items-center justify-between gap-10">
          <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-[60%] h-150 bg-[#CBE4E8] rounded-sm">
            <img className="w-full h-full" src="/imgs/loginImg.png" alt="" />
          </div>
          <div className="w-[40%] pl-10">
            <h2 className="font-Inter font-medium text-[36px] leading-7.5 tracking-[4%] text-MainColor mb-5">
              Log in to Exclusive
            </h2>
            <h4 className="font-Poppins font-normal text-[16px] leading-6  text-MainColor mb-5">
              Enter your details below
            </h4>
            <form action="" className="grid gap-5 mb-5">
              <input
                className="font-Poppins font-normal text-[16px] leading-6 text-MainColor border-b border-[#808080] pb-1 outline-none"
                type="email"
                placeholder="Email or Phone Number"
                required
              />
              <div className="relative">
                <input
                  className="w-full font-Poppins font-normal text-[16px] leading-6 text-MainColor border-b border-[#808080] pb-1 outline-none"
                  placeholder="Password"
                  required
                  type={showPassword ? "text" : "password"}
                />
                {showPassword ? (
                  <FaRegEyeSlash
                    className="absolute right-5 top-[50%] translate-y-[-50%] text-MainColor cursor-pointer"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <MdOutlineRemoveRedEye
                    className="absolute right-5 top-[50%] translate-y-[-50%] text-MainColor cursor-pointer"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>
              <div className="flex items-center justify-between gap-5">
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#ED3729",
                    padding: "10px 30px",
                  }}
                  variant="contained"
                >
                  Log In
                </Button>
                <span className="font-Poppins font-normal text-[16px] leading-6 text-[#DB4444] cursor-pointer">
                  Forget Password?
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
