import React, { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { DataContext } from "../App";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { addToCart, deletCart } from "../services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Compare() {
  const { compareData, setCompareData, cartData, setCartData, tokenTitle } =
    useContext(DataContext);
  const navigate = useNavigate();

  const removeFromCompare = (id) => {
    setCompareData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCart = (e, item) => {
    e.preventDefault();
    if (!tokenTitle) {
      toast.error("Avval ro'yxatdan o'ting");
      navigate("/signup");
      return;
    }
    const cartItem = cartData?.find((c) => c.product === item.id);
    if (cartItem) {
      deletCart(cartItem.id).then(() => {
        setCartData((prev) => prev.filter((c) => c.product !== item.id));
        toast.info("Savatdan olib tashlandi");
      });
    } else {
      addToCart(item.id, 1).then((data) => {
        setCartData((prev) => [...prev, data]);
        toast.success("Savatga qo'shildi");
      });
    }
  };

  // Collect all unique spec keys from all products
  const specKeys = [
    ...new Set(
      compareData.flatMap((item) =>
        Object.keys(item.specifications || {})
      )
    ),
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-sm text-[#626364]">
          <Link to="/" className="hover:text-Primary transition-colors">
            Home
          </Link>
          <IoIosArrowForward />
          <span className="text-[#202020] font-medium">Compare</span>
        </div>

        <h1 className="font-bold text-[24px] text-[#202020] mb-6">
          Compare products
        </h1>

        {compareData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <img
              src="https://assets-v2.lottiefiles.com/a/6102a4f8-1176-11ee-bcc5-236dd7d5f88b/aK8IKRE5a3.gif"
              alt="empty"
              className="w-60 mb-4"
            />
            <p className="text-[#909090] text-lg">No products to compare yet.</p>
            <Link
              to="/filter"
              className="mt-4 px-6 py-2 bg-Primary text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="border-separate border-spacing-x-3">
              <thead>
                <tr>
                  <td className="w-32 p-3 font-semibold text-[#909090] text-sm uppercase tracking-wide">
                    Product
                  </td>
                  {compareData.map((item) => (
                    <td
                      key={item.id}
                      className="p-3 border border-[#F2F2F2] bg-white text-center min-w-52 max-w-64 w-64"
                    >
                      <div className="relative">
                        <button
                          onClick={() => removeFromCompare(item.id)}
                          className="absolute -top-1 -right-1 p-1 rounded-full hover:bg-red-50 text-gray-400 hover:text-Primary transition-colors"
                        >
                          <IoTrashOutline size={18} />
                        </button>
                        <Link to={`/productdetails/${item.id}`}>
                          <img
                            src={item?.images?.[0]?.image}
                            alt={item?.details}
                            className="w-28 h-28 object-contain mx-auto mb-3"
                          />
                          <h4 className="font-semibold text-[14px] text-[#202020] line-clamp-2 mb-2">
                            {item?.details}
                          </h4>
                        </Link>
                        <p className="font-bold text-[16px] text-Primary mb-3">
                          {item?.price?.toLocaleString()} сум
                        </p>
                        <button
                          onClick={(e) => handleCart(e, item)}
                          className={`flex items-center justify-center gap-2 w-full py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                            cartData?.some((c) => c.product === item.id)
                              ? "bg-red-50 text-Primary border border-Primary"
                              : "bg-Primary text-white hover:bg-red-700"
                          }`}
                        >
                          <RiShoppingCart2Fill />
                          {cartData?.some((c) => c.product === item.id)
                            ? "In cart"
                            : "Add to cart"}
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Price row */}
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold text-sm text-[#202020] border border-[#F2F2F2] w-32">
                    Price
                  </td>
                  {compareData.map((item) => (
                    <td
                      key={item.id}
                      className="p-3 text-center text-sm border border-[#F2F2F2] font-medium text-Primary"
                    >
                      {item?.price?.toLocaleString()} сум
                    </td>
                  ))}
                </tr>
                {/* Brand row */}
                <tr>
                  <td className="p-3 font-semibold text-sm text-[#202020] border border-[#F2F2F2] w-32">
                    Brand
                  </td>
                  {compareData.map((item) => (
                    <td
                      key={item.id}
                      className="p-3 text-center text-sm border border-[#F2F2F2] text-[#626364]"
                    >
                      {item?.brand || "—"}
                    </td>
                  ))}
                </tr>
                {/* Dynamic spec rows */}
                {specKeys.map((key) => (
                  <tr key={key} className="even:bg-gray-50">
                    <td className="p-3 font-semibold text-sm text-[#202020] border border-[#F2F2F2] capitalize w-32">
                      {key}
                    </td>
                    {compareData.map((item) => (
                      <td
                        key={item.id}
                        className="p-3 text-center text-sm border border-[#F2F2F2] text-[#626364]"
                      >
                        {item.specifications?.[key] || "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Compare;
