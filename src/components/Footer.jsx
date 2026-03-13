import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiTelegram2Fill } from "react-icons/ri";

function Footer() {
  return (
    <footer className="bg-[#202020] py-10 px-4 md:px-0">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* Logo va Kontakt qismi */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img className="mb-6 md:mb-10 w-32 md:w-auto" src="/imgs/footerLogo.png" alt="Logo" />
          <p className="font-normal text-[14px] text-white mb-6 md:mb-10 leading-relaxed">
            Call Center Hours Monday - <br /> Saturday: 9:00 AM - 6:00 PM
          </p>
          <div className="mb-6 md:mb-10">
            <span className="block font-normal text-[14px] text-white">
              Call center:
            </span>
            <span className="block font-semibold text-[16px] md:text-[14px] text-white">
              + 998 (71) 205-93-93
            </span>
          </div>
          
          {/* Ijtimoiy tarmoqlar */}
          <div className="flex items-center gap-3">
            {[
              { Icon: RiTelegram2Fill, link: "#" },
              { Icon: FaInstagram, link: "#" },
              { Icon: FaFacebookF, link: "#" },
              { Icon: FaYoutube, link: "#" },
            ].map(({ Icon, link }, index) => (
              <button
                key={index}
                className="w-9 h-9 md:w-7 md:h-7 rounded-full flex items-center justify-center border border-[#8F8E94] cursor-pointer transition-all duration-300 ease-in-out group hover:bg-[#ED3729] hover:border-[#ED3729]"
              >
                <Icon className="text-[#8F8E94] group-hover:text-white text-lg md:text-base" />
              </button>
            ))}
          </div>
        </div>

        {/* Linklar qismi (Grid ishlatish tavsiya etiladi) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          
          {/* Categories */}
          <div className="text-center sm:text-left">
            <h4 className="font-medium text-[18px] md:text-[20px] text-white mb-4 md:mb-5">
              Categories
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">Laptops</li>
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">Gaming Chairs</li>
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">Phones</li>
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">All-in-One PCs</li>
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">Memory Modules</li>
            </ul>
          </div>

          {/* General */}
          <div className="text-center sm:text-left">
            <h4 className="font-medium text-[18px] md:text-[20px] text-white mb-4 md:mb-5">General</h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">News</li>
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">About Us</li>
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">Our Stores</li>
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">Contacts</li>
            </ul>
          </div>

          {/* For Buyers */}
          <div className="text-center sm:text-left">
            <h4 className="font-medium text-[18px] md:text-[20px] text-white mb-4 md:mb-5">
              For Buyers
            </h4>
            <ul className="space-y-2 md:space-y-3">
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">Installment Purchases</li>
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">Delivery and Payment</li>
              <li className="font-normal text-[14px] md:text-[16px] text-[#909090] hover:text-white cursor-pointer transition-colors">Returns/Exchanges</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Mualliflik huquqi (Qo'shimcha tavsiya) */}
      <div className="container mx-auto mt-10 pt-5 border-t border-gray-700 text-center text-[#909090] text-sm">
        &copy; 2026 MIXEL.UZ. Barcha huquqlar himoyalangan.
      </div>
    </footer>
  );
}

export default Footer;