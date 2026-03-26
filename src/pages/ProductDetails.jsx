import { Button, Skeleton } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { FaBalanceScale, FaHeart } from "react-icons/fa";
import { FiHelpCircle, FiRefreshCcw } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { IoInformationCircleOutline, IoWalletOutline } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { RxDividerVertical } from "react-icons/rx";
import { SlEarphonesAlt } from "react-icons/sl";
import { TbTruckDelivery } from "react-icons/tb";
import { Link, useParams, useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import Product from "../components/Product";
import { productDetail, addToCart, addToLiked, deletCart, deletLiked } from "../services";
import { toast } from "react-toastify";

function ProductDetails() {
  const { 
    productData, 
    likeData, setLikeData, 
    cartData, setCartData, 
    tokenTitle 
  } = useContext(DataContext);
  
  const [product, setProduct] = useState(null);
  const [mainImg, setMainImg] = useState("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const isLiked = likeData?.some((like) => like.product.id == id);
  const isCart = cartData?.some((cart) => cart.product == id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setLoading(true);
    setMainImg(""); 
  }, [id]);

  useEffect(() => {
    let isMounted = true;
    productDetail(id).then((data) => {
      if (isMounted) {
        setProduct(data);
        if (data?.images?.length > 0) {
          setMainImg(data.images[0].image);
        }
        setLoading(false);
      }
    }).catch(() => setLoading(false));
    return () => { isMounted = false; };
  }, [id]);

  const handleLiked = () => {
    if (!tokenTitle) {
      toast.error("Avval ro'yxatdan o'ting");
      navigate("/signup");
      return;
    }
    const likedItem = likeData.find((like) => like.product.id == id);
    if (likedItem) {
      deletLiked(likedItem.id).then(() => {
        setLikeData(likeData.filter((like) => like.product.id != id));
        toast.info("Yoqtirilganlardan olib tashlandi");
      });
    } else {
      addToLiked(id).then((data) => {
        if (data) {
          setLikeData([...likeData, { id: data.id, product: { id: parseInt(id) } }]);
          toast.success("Yoqtirganlarga qo'shildi");
        }
      });
    }
  };

  const handleCart = () => {
    if (!tokenTitle) {
      toast.error("Avval ro'yxatdan o'ting");
      navigate("/signup");
      return;
    }
    const cartItem = cartData?.find((data) => data.product == id);
    if (cartItem) {
      deletCart(cartItem.id).then(() => {
        setCartData((prev) => prev.filter((data) => data.product != id));
        toast.info("Savatdan olib tashlandi");
      });
    } else {
      addToCart(id, 1).then((data) => {
        setCartData((prev) => [...prev, data]);
        toast.success("Savatga qo'shildi");
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 md:py-8">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6 text-[#626364] text-sm">
          <Link to="/" className="hover:text-red-500">Home</Link>
          <IoIosArrowForward />
          <Link to="/filter" className="hover:text-red-500">Laptops</Link>
          <IoIosArrowForward />
          <span className="text-red-500 font-medium">{id}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* CHAP TOMON: RASMLAR GALEREYASI */}
          <div className="w-full lg:w-97.5 shrink-0">
            <div className="w-full aspect-square border border-[#F2F2F2] rounded-xl flex items-center justify-center bg-white p-4 mb-4">
              {loading ? <Skeleton variant="rectangular" width="100%" height="100%" /> : (
                <img className="max-w-full max-h-full object-contain" src={mainImg} alt={product?.name} />
              )}
            </div>
            <div className="flex justify-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {product?.images?.map((item, i) => (
                <div 
                  key={i}
                  onClick={() => setMainImg(item.image)}
                  className={`w-20 h-20 border-2 rounded-lg cursor-pointer p-1 flex items-center justify-center shrink-0 ${mainImg === item.image ? 'border-red-500' : 'border-[#F2F2F2]'}`}
                >
                  <img className="max-w-full max-h-full object-contain" src={item.image} alt="" />
                </div>
              ))}
            </div>
          </div>

          {/* O'RTA: MAHSULOT MA'LUMOTLARI */}
          <div className="flex-1 w-full">
            <h1 className="text-3xl font-bold text-[#202020] mb-4">
              {loading ? <Skeleton width="80%" /> : product?.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-3xl font-bold text-[#202020]">
                {loading ? <Skeleton width={150} /> : `${product?.price?.toLocaleString()} сум`}
              </span>
              <IoInformationCircleOutline className="text-gray-400 text-xl" />
              <div className="flex items-center gap-4 ml-auto">
                <RiShoppingCart2Fill onClick={handleCart} className={`text-2xl cursor-pointer ${isCart ? "text-red-500" : "text-gray-300"}`} />
                <RxDividerVertical className="text-gray-300 text-2xl" />
                <FaHeart onClick={handleLiked} className={`text-xl cursor-pointer ${isLiked ? "text-red-500" : "text-gray-300"}`} />
                <RxDividerVertical className="text-gray-300 text-2xl" />
                <FaBalanceScale className="text-gray-300 text-2xl cursor-pointer" />
              </div>
            </div>

            <p className="text-sm text-gray-400 flex items-center gap-1 mb-8">
              <FiHelpCircle /> VIP скидки для VIP клиентов
            </p>

            <div className="flex gap-4 mb-10">
              <Button onClick={handleCart} variant="contained" sx={{ bgcolor: "#ED3729", flex: 1, py: 1.5, fontWeight: 'bold', '&:hover': { bgcolor: '#d32f2f' } }}>
                {isCart ? "In Cart" : "Buy now"}
              </Button>
              <Button variant="contained" sx={{ bgcolor: "#202020", flex: 1, py: 1.5, fontWeight: 'bold', '&:hover': { bgcolor: '#000' } }}>
                In installments
              </Button>
            </div>

            <div className="border-l-4 border-red-500 bg-gray-50 p-4 mb-10">
              <h5 className="text-xs font-bold text-gray-400 uppercase mb-2">Contract Info</h5>
              <p className="text-sm text-gray-700 leading-relaxed">{product?.description}</p>
            </div>

            <h3 className="text-xl font-bold mb-4">Technical parameters</h3>
            <div className="border rounded-xl">
              <div className="flex justify-between p-4 border-b">
                <span className="text-gray-400">Model</span>
                <span className="font-semibold">{product?.brand || "N/A"}</span>
              </div>
              <div className="flex justify-between p-4">
                <span className="text-gray-400">Status</span>
                <span className="font-semibold">New (Original)</span>
              </div>
            </div>
          </div>

          {/* O'NG TOMON: SIDEBAR INFO (Skrinshotingizdagidek) */}
          <div className="w-full lg:w-80 space-y-4">
            <div className="p-5 border border-gray-100 rounded-2xl bg-white shadow-sm">
              <div className="flex items-start gap-3 mb-4">
                <FiRefreshCcw className="text-red-500 text-xl mt-1" />
                <div>
                  <h4 className="font-bold text-sm">30 days for return.</h4>
                  <p className="text-xs text-gray-400 mt-1">If you buy today, you can return until May 6.</p>
                  <Link to="#" className="text-blue-500 text-xs mt-2 block">Read more</Link>
                </div>
              </div>
              <hr className="my-4 border-gray-50" />
              <div className="flex items-start gap-3">
                <SlEarphonesAlt className="text-red-500 text-xl mt-1" />
                <div>
                  <h4 className="font-bold text-sm">Support 24/7</h4>
                  <p className="text-xs text-gray-400 mt-1">Phone: +998 99 990 45 27</p>
                  <p className="text-xs text-gray-400">Telegram: @mixel_uz</p>
                </div>
              </div>
            </div>

            <div className="p-5 border border-gray-100 rounded-2xl bg-white shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <TbTruckDelivery className="text-red-500 text-2xl" />
                <div>
                   <h4 className="font-bold text-sm">Delivery</h4>
                   <p className="text-green-500 text-xs font-bold">Free Shipping</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <IoWalletOutline className="text-red-500 text-2xl" />
                <div>
                   <h4 className="font-bold text-sm">Payment:</h4>
                   <ul className="text-xs text-gray-400 list-disc list-inside">
                     <li>Cash on delivery</li>
                     <li>Payme / Click</li>
                     <li>Bank transfer</li>
                   </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* OXSHASH MAHSULOTLAR */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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