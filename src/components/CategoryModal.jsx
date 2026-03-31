import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../App";
import { Skeleton } from "@mui/material";
import {
  ChevronRight, X, Smartphone, Laptop, Tv, Headphones,
  UtensilsCrossed, Wifi, Watch, Camera, Gamepad2, Armchair,
  Monitor, Printer, Tag,
} from "lucide-react";
import { getProducts } from "../services";

const ICONS = [
  Smartphone, Laptop, Tv, Headphones, UtensilsCrossed,
  Wifi, Watch, Camera, Gamepad2, Armchair, Monitor, Printer, Tag,
];

function CategoryModal({ isOpen, onClose }) {
  const { categoryData } = useContext(DataContext);
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navBottom, setNavBottom] = useState(0);
  const [subProducts, setSubProducts] = useState([]);
  const [subLoading, setSubLoading] = useState(false);

  useEffect(() => {
    const measure = () => {
      const nav = document.querySelector("nav");
      if (nav) setNavBottom(nav.getBoundingClientRect().bottom);
    };
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure);
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, [isOpen]);

  useEffect(() => {
    if (categoryData?.length > 0 && !activeCategory) {
      setActiveCategory(categoryData[0]);
    }
  }, [categoryData]);

  // Tanlangan kategoriya o'zgarganda API dan mahsulotlarni olish
  useEffect(() => {
    if (!activeCategory) return;
    setSubLoading(true);
    getProducts({ category: activeCategory.id }).then((data) => {
      setSubProducts(data.results || []);
      setSubLoading(false);
    });
  }, [activeCategory?.id]);

  if (!isOpen) return null;

  const close = () => { onClose(); setMobileOpen(false); };

  const bannerProduct = subProducts.find((p) => p?.images?.[0]?.image);

  return (
    <>
      {/* Backdrop — faqat navbar pastidan boshlanadi */}
      <div
        className="fixed left-0 right-0 bottom-0 bg-black/40 z-[998]"
        style={{ top: navBottom }}
        onClick={close}
      />

      {/* Mega Menu */}
      <div
        className="fixed left-0 right-0 z-[999] bg-white shadow-2xl rounded-b-2xl overflow-hidden border-t-2 border-Primary"
        style={{ top: navBottom, animation: "megaMenuIn 0.22s cubic-bezier(0.16,1,0.3,1)" }}
      >
        <style>{`
          @keyframes megaMenuIn {
            from { opacity: 0; transform: translateY(-12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* Mobile header */}
        <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <span className="font-semibold text-sm">
            {mobileOpen ? activeCategory?.name : "All categories"}
          </span>
          {mobileOpen
            ? <button onClick={() => setMobileOpen(false)} className="text-xs font-bold text-Primary">← Back</button>
            : <button onClick={close}><X size={18} className="text-gray-400" /></button>
          }
        </div>

        <div className="flex max-h-[68vh]">

          {/* ── LEFT SIDEBAR ── */}
          <div className={`w-full md:w-60 shrink-0 bg-gray-50 border-r border-gray-100 overflow-y-auto ${mobileOpen ? "hidden" : "block"} md:block`}>
            <p className="hidden md:block px-5 pt-4 pb-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              All categories
            </p>
            {categoryData?.length > 0
              ? categoryData.map((item, i) => {
                  const Icon = ICONS[i % ICONS.length];
                  const isActive = activeCategory?.id === item.id;
                  return (
                    <div
                      key={item.id}
                      onMouseEnter={() => setActiveCategory(item)}
                      onClick={() => {
                        if (window.innerWidth < 768) { setActiveCategory(item); setMobileOpen(true); }
                        else { navigate(`/filter?category=${item.id}`); close(); }
                      }}
                      className={`flex items-center justify-between px-3 py-2.5 mx-2 my-0.5 rounded-xl cursor-pointer transition-all duration-150 group ${
                        isActive ? "bg-white shadow-sm" : "hover:bg-white hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isActive
                            ? "bg-red-50 text-Primary"
                            : "bg-white text-gray-400 group-hover:bg-red-50 group-hover:text-Primary"
                        }`}>
                          <Icon size={16} strokeWidth={1.8} />
                        </div>
                        <span className={`text-[13px] font-medium transition-colors ${
                          isActive ? "text-Primary" : "text-gray-700 group-hover:text-Primary"
                        }`}>
                          {item.name}
                        </span>
                      </div>
                      <ChevronRight
                        size={14}
                        className={`shrink-0 transition-all ${
                          isActive ? "text-Primary opacity-100" : "text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-Primary"
                        }`}
                      />
                    </div>
                  );
                })
              : Array(7).fill(0).map((_, i) => (
                  <div key={i} className="px-3 py-2 mx-2">
                    <Skeleton variant="rounded" height={44} />
                  </div>
                ))}
          </div>

          {/* ── MIDDLE: Sub-categories ── */}
          <div className={`flex-1 overflow-y-auto px-8 py-6 ${mobileOpen ? "block" : "hidden"} md:block`}>
            {activeCategory ? (
              <>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-bold text-[20px] text-gray-900">
                    {activeCategory.name}
                  </h3>
                  <button
                    onClick={() => { navigate(`/filter?category=${activeCategory.id}`); close(); }}
                    className="flex items-center gap-1 text-[12px] font-semibold text-Primary hover:underline"
                  >
                    View all <ChevronRight size={13} />
                  </button>
                </div>

                <div className="columns-1 sm:columns-2 gap-x-6">
                  {subLoading
                    ? Array(8).fill(0).map((_, i) => (
                        <div key={i} className="py-2 px-3 mb-0.5">
                          <Skeleton variant="text" width="75%" height={22} />
                        </div>
                      ))
                    : subProducts.length > 0
                    ? subProducts.slice(0, 14).map((p) => (
                        <div
                          key={p.id}
                          onClick={() => { navigate(`/productdetails/${p.id}`); close(); }}
                          className="flex items-center gap-2 py-2 px-3 mb-0.5 rounded-lg cursor-pointer hover:bg-red-50 group transition-colors break-inside-avoid"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-Primary shrink-0 transition-colors" />
                          <span className="text-sm text-gray-600 group-hover:text-Primary line-clamp-1 transition-colors">
                            {p.name || p.details}
                          </span>
                        </div>
                      ))
                    : <p className="text-sm text-gray-400 px-3">No products found</p>
                  }
                </div>
              </>
            ) : null}
          </div>

          {/* ── RIGHT BANNER ── */}
          <div className="hidden lg:flex w-64 shrink-0 flex-col border-l border-gray-100">
            {/* Image area */}
            <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-orange-50 via-red-50 to-rose-100 relative overflow-hidden p-5">
              {(bannerProduct?.images?.[0]?.image || activeCategory?.image) ? (
                <img
                  src={bannerProduct?.images?.[0]?.image || activeCategory?.image}
                  alt={bannerProduct?.name || activeCategory?.name}
                  className="max-h-40 max-w-full object-contain drop-shadow-xl relative z-10 transition-all duration-300"
                />
              ) : (
                <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                  <div className="w-20 h-20 rounded-2xl bg-white/60 flex items-center justify-center shadow-md">
                    <Smartphone size={40} className="text-Primary" strokeWidth={1.5} />
                  </div>
                </div>
              )}
              {/* Red diagonal */}
              <div
                className="absolute bottom-0 right-0 w-full h-2/5 bg-gradient-to-r from-Primary to-red-700"
                style={{ clipPath: "polygon(100% 25%, 100% 100%, 0 100%)" }}
              />
            </div>

            {/* CTA block */}
            <div className="bg-Primary px-5 py-5">
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">
                Special offer
              </p>
              <h4 className="font-bold text-[15px] text-white leading-snug mb-1 line-clamp-2">
                {bannerProduct?.name || activeCategory?.name}
              </h4>
              {bannerProduct?.price && (
                <p className="text-white/70 text-[12px] mb-3">
                  from {Number(bannerProduct.price).toLocaleString()} sum
                </p>
              )}
              <button
                onClick={() => { navigate(`/filter?category=${activeCategory?.id}`); close(); }}
                className="w-full py-2 bg-white text-Primary text-[12px] font-bold rounded-xl hover:bg-red-50 transition-colors"
              >
                Shop now →
              </button>
            </div>
          </div>

        </div>

        {/* Close — desktop */}
        <button
          onClick={close}
          className="hidden md:flex absolute top-3 right-3 w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 items-center justify-center text-gray-400 transition-colors"
        >
          <X size={15} />
        </button>
      </div>
    </>
  );
}

export default CategoryModal;
