import { Button } from "@mui/material";
import React, { useContext } from "react";
import { FaHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { RiScales3Fill } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import { addToCart, addToLiked, deletCart, deletLiked } from "../services";
import { toast } from "react-toastify";

function FilterProduct({ item }) {
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
        const newData = likeData.filter((like) => like.product.id != item.id);
        setLikeData(newData);
        toast.info("Yoqtirilganlardan olib tashlandi");
      });
    } else {
      addToLiked(item.id).then((data) => {
        if (data) {
          setLikeData([...likeData, { id: data.id, product: item }]);
          toast.success("Yoqtirganlarga qo'shildi");
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

    // cartda bor-yo‘qligini tekshiramiz
    const cartItem = cartData?.find((data) => data.product === item.id);

    // AGAR BOR BO‘LSA → O‘CHIRAMIZ
    if (cartItem) {
      deletCart(cartItem.id).then(() => {
        setCartData((prev) => prev.filter((data) => data.product !== item.id));
        toast.info("Savatdan olib tashlandi");
      });

      // AGAR YO‘Q BO‘LSA → QO‘SHAMIZ
    } else {
      addToCart(item.id, 1).then((data) => {
        setCartData((prev) => [...prev, data]);
        toast.success("Savatga qo'shildi");
      });
    }
  };
  return (
    <Link
      to={`/productdetails/${item?.id}`}
      className="block p-4 md:px-10 md:py-5 border border-[#F2F2F2] rounded-md w-full hover:shadow-sm transition-shadow"
    >
      {/* Asosiy konteyner: Mobilda column, planshet/desktopda row */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 justify-between">
        {/* Rasm qismi */}
        <div className="w-full md:w-40 h-40 flex items-center justify-center shrink-0">
          <img
            className="h-full object-contain"
            src={item?.main_image}
            alt={item?.name}
          />
        </div>

        {/* Ma'lumotlar qismi */}
        <div className="flex-1 text-center md:text-left w-full">
          <h2 className="font-semibold text-lg md:text-[22px] text-[#202020] mb-2 md:mb-5 line-clamp-2">
            {item?.name}
          </h2>
          <div className="space-y-1">
            <h5 className="font-normal text-sm md:text-[16px] text-[#202020]">
              Brend: <span className="font-medium">Apple</span>
            </h5>
            <h5 className="font-normal text-sm md:text-[16px] text-[#202020]">
              Davlat: <span className="font-medium">{item?.country}</span>
            </h5>
            <h5 className="font-normal text-sm md:text-[16px] text-[#202020]">
              Turi: <span className="font-medium">{item?.category_name}</span>
            </h5>
          </div>
        </div>

        {/* Narx va tugmalar qismi */}
        <div className="w-full md:w-56 text-center border-t md:border-t-0 pt-4 md:pt-0">
          <h4 className="font-medium text-lg md:text-[18px] text-[#ED3729]">
            {item?.price} сум/мес
          </h4>
          <h5 className="font-normal text-xs md:text-[14px] text-[#909090] mb-3 md:mb-5">
            17 000 000 сум
          </h5>

          <Button
            variant="contained"
            onClick={handlCart}
            sx={{
              display: "flex",
              gap: "10px",
              backgroundColor: "#ED3729",
              width: "100%",
              py: { xs: "8px", md: "10px" },
              textTransform: "none",
              fontSize: { xs: "13px", md: "15px" },
            }}
          >
            <FiShoppingCart className="text-[20px] text-white" />
            Sotib olish
          </Button>

          {/* Sevimli va taqqoslash tugmalari */}
          <div className="flex items-center justify-center gap-8 mt-4 md:mt-5 md:pt-5 md:border-t border-[#F2F2F2]">
            <FaHeart
              className={`text-[19px]  cursor-pointer transition-colors ${isLiked && tokenTitle ? "text-Primary" : "text-[#BDBDBD]"}`}
              onClick={handlLiked}
            />
            <span className="text-[#F2F2F2] hidden md:inline">|</span>
            <RiScales3Fill
              className={`text-[21px] cursor-pointer transition-colors ${isCompare ? "text-Primary" : "text-[#BDBDBD] hover:text-blue-500"}`}
              onClick={handleCompare}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default FilterProduct;
