import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { RiScales3Fill, RiShoppingCart2Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, addToLiked, deletLiked } from "../services";
import { DataContext } from "../App";
import { toast } from "react-toastify";

function Product({ item }) {
  const { tokenTitle, likeData, setLikeData, cartData, setCartData, compareData, setCompareData } =
    useContext(DataContext);

  const navigate = useNavigate();

  const isLiked = likeData?.some((like) => like.product.id == item.id);
  const isCart = cartData?.some((cart) => cart.product == item.id);
  const isCompare = compareData?.some((c) => c.id === item.id);

  const handleCompare = (e) => {
    e.preventDefault();
    if (isCompare) {
      setCompareData((prev) => prev.filter((c) => c.id !== item.id));
      toast.info("Taqqoslashdan olib tashlandi");
    } else {
      if (compareData.length >= 4) {
        toast.warning("Maksimal 4 ta mahsulot taqqoslanadi");
        return;
      }
      setCompareData((prev) => [...prev, item]);
      toast.success("Taqqoslashga qo'shildi");
    }
  };

  const handlLiked = (e) => {
    e.preventDefault();
    if (!tokenTitle) {
      toast.error("Avval ro'yxatdan o'ting");
      navigate("/signup");
      return;
    }
    const likedItem = likeData.find((like) => like.product.id == item.id);
    if (likedItem) {
      deletLiked(likedItem.id).then(() => {
        setLikeData(likeData.filter((like) => like.product.id != item.id));
      });
    } else {
      addToLiked(item.id).then((data) => {
        if (data) {
          setLikeData([...likeData, { id: data.id, product: item }]);
        }
      });
    }
  };

  const handlCart = (e) => {
    e.preventDefault();
    if (!tokenTitle) {
      toast.error("Avval ro'yxatdan o'ting");
      navigate("/signup");
      return;
    }
    if (isCart) {
      return;
    }
    addToCart(item.id, 1).then((data) => {
      setCartData((prev) => [...prev, data]);
    });
  };

  return (
    <Link
      to={`/productdetails/${item.id}`}
      className="product product w-full max-w-80 mx-auto md:max-w-none rounded-sm border border-[#F2F2F2] transition-all duration-500 ease-in-out hover:shadow-lg relative cursor-pointer bg-white"
    >
      <div className="imgs flex items-center justify-center p-3 md:p-5 h-40 md:h-50">
        <img
          src={item?.images?.[0].image}
          alt="Product"
          className="object-contain max-h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-3 md:p-5 text-center flex-1 flex flex-col justify-center">
        <h4 className="font-semibold text-[15px] md:text-[18px] text-[#ED3729]">
          {item?.price}
        </h4>
        <h5 className="font-normal text-[12px] md:text-[14px] text-[#909090] mb-2 md:mb-4 line-through"></h5>
        <h2 className="font-bold text-[13px] md:text-[16px] leading-[140%] text-[#000000] line-clamp-2 h-9 md:h-11.25">
          {item?.details}
        </h2>
      </div>

      <div className="flex items-center justify-between py-3 md:py-4 px-4 md:px-8 border-t border-[#F2F2F2] bg-gray-50/50">
        <div className="flex-1 flex justify-center" onClick={handlCart}>
          <RiShoppingCart2Fill
            className={`text-[19px] md:text-[21px] transition-all duration-500 ease-in-out ${isCart && tokenTitle ? "text-Primary" : "text-[#BDBDBD]"}`}
          />
        </div>
        <span className="text-[#E0E0E0]">|</span>
        <div className="flex-1 flex justify-center" onClick={handlLiked}>
          <FaHeart
            className={`text-[17px] md:text-[19px] transition-all duration-300 ease-in-out ${isLiked && tokenTitle ? "text-Primary" : "text-[#BDBDBD]"}`}
          />
        </div>
        <span className="text-[#E0E0E0]">|</span>
        <div className="flex-1 flex justify-center">
          <RiScales3Fill
            className={`text-[19px] md:text-[21px] transition-all duration-300 ease-in-out ${isCompare ? "text-Primary" : "text-[#BDBDBD]"}`}
            onClick={handleCompare}
          />
        </div>
      </div>
    </Link>
  );
}

export default Product;
