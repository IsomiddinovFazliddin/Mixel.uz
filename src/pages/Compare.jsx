import { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoTrashOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { addToCart } from "../services";
import { toast } from "react-toastify";

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
    if (cartData?.some((c) => c.product === item.id)) {
      toast.info("Mahsulot allaqachon savatda");
      return;
    }
    addToCart(item.id, 1).then((data) => {
      setCartData((prev) => [...prev, data]);
      toast.success("Savatga qo'shildi");
    });
  };

  // compareData ichidagi properties dan barcha unique row larni yig'ish
  // Har bir property: { title, value: [{type, value}] }
  // Jadval satrlari: title + har bir type alohida qator
  const buildRows = () => {
    const rows = []; // [{label, key}]
    const seen = new Set();

    compareData.forEach((item) => {
      (item.properties || []).forEach((prop) => {
        const title = prop.title;
        if (Array.isArray(prop.value)) {
          prop.value.forEach((v) => {
            const key = `${title}__${v.type}`;
            if (!seen.has(key)) {
              seen.add(key);
              rows.push({ label: v.type, propTitle: title, propType: v.type });
            }
          });
        }
      });
    });
    return rows;
  };

  const getCellValue = (item, propTitle, propType) => {
    const prop = (item.properties || []).find((p) => p.title === propTitle);
    if (!prop || !Array.isArray(prop.value)) return "—";
    const v = prop.value.find((v) => v.type === propType);
    return v?.value || "—";
  };

  const rows = buildRows();

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-6 text-sm text-[#626364]">
          <Link to="/" className="hover:text-Primary transition-colors">Home</Link>
          <IoIosArrowForward />
          <span className="text-[#202020] font-medium">Compare</span>
        </div>

        <h1 className="font-bold text-[24px] text-[#202020] mb-6">Compare products</h1>

        {compareData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <img
              src="https://assets-v2.lottiefiles.com/a/6102a4f8-1176-11ee-bcc5-236dd7d5f88b/aK8IKRE5a3.gif"
              alt="empty"
              className="w-60 mb-4"
            />
            <p className="text-[#909090] text-lg">No products to compare yet.</p>
            <Link to="/filter" className="mt-4 px-6 py-2 bg-Primary text-white rounded-lg hover:bg-red-700 transition-colors">
              Browse products
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="border-separate border-spacing-x-3">
              <thead>
                <tr>
                  <td className="w-36 p-3 font-semibold text-[#909090] text-xs uppercase tracking-wide">Product</td>
                  {compareData.map((item) => (
                    <td key={item.id} className="p-3 border border-[#F2F2F2] bg-white text-center w-64 min-w-52">
                      <div className="relative">
                        <button
                          onClick={() => removeFromCompare(item.id)}
                          className="absolute -top-1 -right-1 p-1 rounded-full hover:bg-red-50 text-gray-400 hover:text-Primary transition-colors"
                        >
                          <IoTrashOutline size={18} />
                        </button>
                        <Link to={`/productdetails/${item.id}`}>
                          <img
                            src={item?.main_image || item?.images?.[0]?.image}
                            alt={item?.name}
                            className="w-28 h-28 object-contain mx-auto mb-3"
                          />
                          <h4 className="font-semibold text-[13px] text-[#202020] line-clamp-2 mb-2">
                            {item?.name}
                          </h4>
                        </Link>
                        <p className="font-bold text-[15px] text-Primary mb-3">
                          {Number(item?.price).toLocaleString()} сум
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
                          {cartData?.some((c) => c.product === item.id) ? "In cart" : "Add to cart"}
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Price */}
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold text-sm text-[#202020] border border-[#F2F2F2]">Price</td>
                  {compareData.map((item) => (
                    <td key={item.id} className="p-3 text-center text-sm border border-[#F2F2F2] font-medium text-Primary">
                      {Number(item?.price).toLocaleString()} сум
                    </td>
                  ))}
                </tr>
                {/* Category */}
                <tr>
                  <td className="p-3 font-semibold text-sm text-[#202020] border border-[#F2F2F2]">Category</td>
                  {compareData.map((item) => (
                    <td key={item.id} className="p-3 text-center text-sm border border-[#F2F2F2] text-[#626364]">
                      {item?.category_name || "—"}
                    </td>
                  ))}
                </tr>
                {/* Country */}
                <tr className="bg-gray-50">
                  <td className="p-3 font-semibold text-sm text-[#202020] border border-[#F2F2F2]">Country</td>
                  {compareData.map((item) => (
                    <td key={item.id} className="p-3 text-center text-sm border border-[#F2F2F2] text-[#626364]">
                      {item?.country || "—"}
                    </td>
                  ))}
                </tr>
                {/* Dynamic property rows */}
                {rows.map((row, i) => (
                  <tr key={`${row.propTitle}-${row.propType}`} className={i % 2 === 0 ? "" : "bg-gray-50"}>
                    <td className="p-3 font-semibold text-sm text-[#202020] border border-[#F2F2F2]">
                      {row.label}
                    </td>
                    {compareData.map((item) => (
                      <td key={item.id} className="p-3 text-center text-sm border border-[#F2F2F2] text-[#626364]">
                        {getCellValue(item, row.propTitle, row.propType)}
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
