import { Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaBalanceScale, FaHeart } from "react-icons/fa";
import { FiHelpCircle, FiRefreshCcw } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { IoInformationCircleOutline, IoWalletOutline } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RxDividerVertical } from "react-icons/rx";
import { SlEarphonesAlt } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../App";
import Product from "../components/Product";
import { productDetail } from "../services";

function ProductDetails() {
  const { productData } = useContext(DataContext);
  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  useEffect(() => {
    productDetail(id).then((data) => {
      setProduct(data);
      setMainImg(data?.images?.[0]?.image);
    });
  }, [id]);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 md:py-8">
        
        {/* 1. Breadcrumbs - Mobilda scroll bo'ladi agar sig'masa */}
        <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap pb-4 scrollbar-hide text-[#626364] text-sm md:text-base">
          <Link to="/" className="hover:text-Primary transition-colors">Home</Link>
          <IoIosArrowForward className="shrink-0" />
          <Link to="/laptops" className="hover:text-Primary transition-colors">Laptops</Link>
          <IoIosArrowForward className="shrink-0" />
          <span className="text-Primary font-medium">{product?.brand || "Apple"}</span>
        </div>

        {/* 2. Asosiy Blok: Mobilda 1 ustun, Desktopda 3 qismli Flex */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          
          {/* --- RASMLAR BO'LIMI --- */}
          <div className="w-full md:w-100 shrink-0 mx-auto">
            {/* Asosiy rasm */}
            <div className="w-full aspect-square border border-[#F2F2F2] rounded-xl flex items-center justify-center bg-white p-4">
              <img 
                className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300" 
                src={mainImg} 
                alt={product?.name} 
              />
            </div>
            {/* Kichik rasmlar (Thumbnails) */}
            <div className="flex justify-center gap-3 mt-4 overflow-x-auto pb-2">
              {product?.images?.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setMainImg(item.image)}
                  className={`w-16 h-16 md:w-20 md:h-20 shrink-0 border-2 rounded-lg flex items-center justify-center p-1 transition-all
                    ${mainImg === item.image ? 'border-Primary' : 'border-[#F2F2F2] hover:border-gray-300'}`}
                >
                  <img className="max-w-full max-h-full object-contain" src={item.image} alt="" />
                </button>
              ))}
            </div>
          </div>

          {/* --- MARKAZIY MA'LUMOTLAR BO'LIMI --- */}
          <div className="flex-1 w-full">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#202020] mb-4">
              {product?.name}
            </h1>
            
            {/* Narx va Actionlar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 border-b border-[#F2F2F2]">
              <div className="flex items-center gap-2">
                <span className="text-2xl md:text-3xl font-bold text-[#202020]">
                  {product?.price?.toLocaleString()} сум
                </span>
                <IoInformationCircleOutline className="text-[#909090] text-xl cursor-help" />
              </div>
              <div className="flex items-center gap-4 bg-[#F9F9F9] p-2 rounded-lg sm:bg-transparent">
                <RiShoppingCart2Fill className="text-[#BDBDBD] text-2xl cursor-pointer hover:text-Primary transition-colors" />
                <RxDividerVertical className="text-[#BDBDBD] text-2xl" />
                <FaHeart className="text-[#BDBDBD] text-xl cursor-pointer hover:text-red-500 transition-colors" />
                <RxDividerVertical className="text-[#BDBDBD] text-2xl" />
                <FaBalanceScale className="text-[#BDBDBD] text-2xl cursor-pointer hover:text-blue-500 transition-colors" />
              </div>
            </div>

            {/* VIP Status */}
            <div className="flex items-center gap-2 my-6 text-[#909090]">
              <FiHelpCircle className="shrink-0" />
              <p className="text-sm">VIP скидки для VIP клиентов</p>
            </div>

            {/* Tugmalar - Mobilda to'liq kenglik */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <Button
                variant="contained"
                sx={{ bgcolor: "#ED3729", py: 1.5, textTransform: 'none', fontSize: '16px', fontWeight: 'bold', '&:hover': { bgcolor: '#d32f2f' } }}
              >
                Buy now
              </Button>
              <Button
                variant="contained"
                sx={{ bgcolor: "#202020", py: 1.5, textTransform: 'none', fontSize: '16px', fontWeight: 'bold', '&:hover': { bgcolor: '#000' } }}
              >
                In installments
              </Button>
            </div>

            {/* Shartnoma ma'lumoti */}
            <div className="p-4 bg-gray-50 rounded-lg mb-8 border-l-4 border-Primary">
              <h5 className="text-xs uppercase tracking-wider text-[#909090] mb-1 font-bold">Contract Info</h5>
              <p className="text-sm md:text-base text-[#202020] leading-relaxed">
                {product?.description || "MacBook Pro 13 MXK32ZP/A Space Gray Full HD 1920x1080 IPS / Core™ i7-1165G7 / 8GB RAM / 256GB SSD"}
              </p>
            </div>

            {/* Texnik parametrlar - Toza jadval ko'rinishida */}
            <div className="mb-10">
              <h3 className="text-xl font-bold text-[#3E3E3E] mb-4">Technical parameters</h3>
              <div className="border rounded-xl overflow-hidden">
                {[
                  { label: "Model", value: product?.name?.split(' ')[0] || "Apple" },
                  { label: "Status", value: "New (Original)" },
                  { label: "Warranty", value: "1 Year" },
                ].map((row, idx) => (
                  <div key={idx} className={`flex justify-between p-4 text-sm md:text-base ${idx !== 2 ? 'border-b' : ''} hover:bg-gray-50 transition-colors`}>
                    <span className="text-[#909090] font-medium">{row.label}</span>
                    <span className="text-[#202020] font-semibold text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- O'NG TARAFI: SERVISLAR (SIDEBAR) --- */}
          <div className="w-full lg:w-80 space-y-4 shrink-0">
            {/* Return Card */}
            <div className="flex gap-4 p-5 bg-[#F7F7F7] rounded-xl border border-[#eeeeee]">
              <FiRefreshCcw className="text-2xl text-Primary shrink-0" />
              <div>
                <h4 className="font-bold text-[16px] mb-1 leading-snug">30 days for return.</h4>
                <p className="text-xs text-[#909090] mb-2 leading-relaxed">If you buy today, you can return until May 6.</p>
                <button className="text-xs text-[#2F80ED] font-semibold hover:underline">Read more</button>
              </div>
            </div>

            {/* Contact Card */}
            <div className="flex gap-4 p-5 bg-[#F7F7F7] rounded-xl border border-[#eeeeee]">
              <SlEarphonesAlt className="text-2xl text-Primary shrink-0" />
              <div className="space-y-2">
                <h4 className="font-bold text-[16px]">Support 24/7</h4>
                <div className="text-xs space-y-1">
                  <p className="text-[#909090]">Phone: <span className="text-[#202020] font-bold">+998 99 990 45 27</span></p>
                  <p className="text-[#909090]">Telegram: <span className="text-[#2F80ED] font-bold">@mixel_uz</span></p>
                </div>
              </div>
            </div>

            {/* Delivery & Payment Card */}
            <div className="p-5 bg-[#F7F7F7] rounded-xl border border-[#eeeeee] space-y-6">
              <div className="flex gap-4">
                <TbTruckDelivery className="text-2xl text-Primary shrink-0" />
                <div>
                  <h4 className="font-bold text-[16px]">Delivery</h4>
                  <p className="text-sm text-green-600 font-bold">Free Shipping</p>
                </div>
              </div>
              <div className="flex gap-4 border-t pt-4">
                <IoWalletOutline className="text-2xl text-Primary shrink-0" />
                <div className="w-full">
                  <h4 className="font-bold text-[16px] mb-2">Payment:</h4>
                  <ul className="text-xs text-[#909090] space-y-2">
                    <li className="flex items-center gap-2">• Cash on delivery</li>
                    <li className="flex items-center gap-2">• Payme / Click</li>
                    <li className="flex items-center gap-2">• Bank transfer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Pastki qism: O'xshash mahsulotlar */}
        <div className="mt-16 md:mt-24">
          <div className="flex items-center justify-between mb-8 border-b pb-4">
            <h2 className="text-2xl font-bold text-[#202020]">Similar Products</h2>
            <Link to="" className="text-Primary font-semibold hover:underline">View all</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {productData?.slice(0, 4).map((item, i) => (
              <Product key={i} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;