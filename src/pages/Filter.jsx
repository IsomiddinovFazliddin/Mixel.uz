import React, { useContext, useEffect, useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Slider,
  Checkbox,
  Button,
  Drawer,
  IconButton,
  FormControlLabel,
} from "@mui/material";

import { CiGrid2H } from "react-icons/ci";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowForward, IoIosClose } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { TbCoins, TbFilterSearch, TbTrash } from "react-icons/tb";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import Product from "../components/Product";
import { DataContext } from "../App";
import FilterProduct from "../components/FilterProduct";

function Filter() {
  const { productData, categoryData } = useContext(DataContext);
  const [priceRange, setPriceRange] = useState([300000, 103300000]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [gridList, setGridList] = useState("grid");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryId = searchParams.get("category");

  const activeCategory = categoryData?.find((c) => c.id == categoryId);

  const filteredProducts = categoryId
    ? productData?.filter((item) => item?.category == categoryId)
    : productData;
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const formatPrice = (num) => num.toLocaleString("ru-RU");

  // SIDEBAR CONTENT
  const renderSidebarContent = () => (
    <div className="sidebar p-4 md:p-3 w-full bg-white ">
      {/* Mobile Close Header */}
      <div className="flex items-center justify-between md:hidden mb-4 border-b pb-2">
        <h2 className="font-bold text-lg text-[#202020]">Filters</h2>
        <IconButton onClick={toggleMobileMenu}>
          <IoIosClose size={32} />
        </IconButton>
      </div>

      {/* 0. Categories */}
      <Accordion defaultExpanded sx={{ border: "none", boxShadow: "none", "&:before": { display: "none" } }}>
        <AccordionSummary expandIcon={<IoIosArrowDown />}>
          <Typography sx={{ fontWeight: 600, fontSize: '15px' }}>Categories</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 1 }}>
          {categoryData?.map((cat) => (
            <div
              key={cat.id}
              onClick={() => navigate(`/filter?category=${cat.id}`)}
              className={`flex items-center justify-between px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
                categoryId == cat.id ? "bg-red-50 text-Primary" : "hover:bg-gray-50 text-[#202020]"
              }`}
            >
              <span className="text-sm">{cat.name}</span>
              <IoIosArrowForward className="text-gray-400 text-xs" />
            </div>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* 1. Price Filter */}
      <Accordion defaultExpanded sx={{ border: "none", boxShadow: "none", "&:before": { display: "none" } }}>
        <AccordionSummary expandIcon={<IoIosArrowDown />}>
          <Typography sx={{ fontWeight: 600, fontSize: '15px' }}>Price (sum)</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 1 }}>
          <div className="flex gap-2 mb-4">
            <div className="flex-1 p-2 border border-[#F2F2F2] rounded text-sm text-center bg-gray-50">
               {formatPrice(priceRange[0])}
            </div>
            <div className="flex-1 p-2 border border-[#F2F2F2] rounded text-sm text-center bg-gray-50">
               {formatPrice(priceRange[1])}
            </div>
          </div>
          <Slider
            value={priceRange}
            onChange={handleSliderChange}
            min={300000}
            max={110000000}
            step={100000}
            sx={{
              color: "#ED3729",
              "& .MuiSlider-thumb": { width: 18, height: 18, bgcolor: "#fff", border: "2px solid currentColor" },
            }}
          />
        </AccordionDetails>
      </Accordion>

      {/* 2. Availability */}
      <div className="py-2 px-1 mb-4">
        <h4 className="font-semibold text-[15px] text-[#202020] mb-3 px-2">Availability</h4>
        <div className="mx-2 flex items-center gap-3 py-2 px-3 border border-[#ED3729] rounded-lg bg-[#fff5f4]">
          <Checkbox
            size="small"
            sx={{ p: 0, color: "#E0E0E0", "&.Mui-checked": { color: "#ED3729" } }}
          />
          <h4 className="text-[13px] font-medium">Pick up today</h4>
        </div>
      </div>

      {/* 3. Brands */}
      <Accordion defaultExpanded sx={{ border: "none", boxShadow: "none", "&:before": { display: "none" } }}>
        <AccordionSummary expandIcon={<IoIosArrowDown />}>
          <Typography sx={{ fontWeight: 600, fontSize: '15px' }}>Brand</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 1 }}>
          {["LG", "Samsung", "Artel", "Huawei", "Xiaomi", "Vivo"].map((brand) => (
            <div key={brand} className="flex items-center justify-between">
              <FormControlLabel
                control={<Checkbox size="small" sx={{ color: "#E0E0E0", "&.Mui-checked": { color: "#ED3729" } }} />}
                label={<span className="text-sm">{brand}</span>}
              />
              <span className="text-xs text-gray-400">(30)</span>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>

      {/* 4. Battery Capacity */}
      <Accordion sx={{ border: "none", boxShadow: "none", "&:before": { display: "none" } }}>
        <AccordionSummary expandIcon={<IoIosArrowDown />}>
          <Typography sx={{ fontWeight: 600, fontSize: '15px' }}>Battery capacity</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 1 }}>
          {["1821 мА⋅ч", "3000 мА⋅ч", "4500 мА⋅ч", "5000 мА⋅ч"].map((cap) => (
            <FormControlLabel
              key={cap}
              className="w-full"
              control={<Checkbox size="small" sx={{ color: "#E0E0E0", "&.Mui-checked": { color: "#ED3729" } }} />}
              label={<span className="text-sm">{cap}</span>}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      {/* 5. Country */}
      <Accordion sx={{ border: "none", boxShadow: "none", "&:before": { display: "none" } }}>
        <AccordionSummary expandIcon={<IoIosArrowDown />}>
          <Typography sx={{ fontWeight: 600, fontSize: '15px' }}>Country of origin</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ px: 1 }}>
          {["Вьетнам", "Китай", "Узбекистан", "ОАЭ"].map((country) => (
            <FormControlLabel
              key={country}
              className="w-full"
              control={<Checkbox size="small" sx={{ color: "#E0E0E0", "&.Mui-checked": { color: "#ED3729" } }} />}
              label={<span className="text-sm">{country}</span>}
            />
          ))}
        </AccordionDetails>
      </Accordion>

      {/* Features List */}
      <div className="mt-4 px-1 pb-24 md:pb-5">
        {["Frontal kamera", "Protsessor", "Ekran o'lchami", "NFC", "5G"].map((item) => (
          <div key={item} className="flex items-center justify-between px-3 py-3 rounded-md hover:bg-gray-50 cursor-pointer border-b border-[#f9f9f9]">
            <h1 className="text-[14px] text-[#202020]">{item}</h1>
            <IoIosArrowForward className="text-gray-400" />
          </div>
        ))}
        
        {/* Mobile Apply Button */}
        <div className="md:hidden mt-6">
          <Button
            variant="contained"
            fullWidth
            onClick={toggleMobileMenu}
            sx={{ bgcolor: "#ED3729", py: 1.5, textTransform: "none", fontWeight: 700, borderRadius: '10px' }}
          >
            Show products
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <div className="container mx-auto px-4 md:px-2 lg:px-4 py-5">
        {/* Breadcrumbs */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap no-scrollbar text-[13px] md:text-[14px]">
            <Link to="/" className="text-[#909090] hover:text-[#ED3729]">Home</Link>
            <IoIosArrowForward className="text-[#909090] shrink-0" />
            <Link className="text-[#909090] hover:text-[#ED3729]">Phones</Link>
            <IoIosArrowForward className="text-[#909090] shrink-0" />
            <span className="text-[#202020] font-medium">Smartphones</span>
          </div>
          <h4 className="hidden lg:block text-[14px] text-[#909090]">Products 24 / 249</h4>
        </div>

        {/* Title and Controls */}
        <div className="flex flex-col gap-4 mb-6">
          <h1 className="font-bold text-[22px] md:text-[28px] text-[#202020]">
          {activeCategory ? activeCategory.name : "Smartphones in Tashkent"}
        </h1>

          <div className="flex items-center justify-between border-b border-t md:border-none py-3 md:py-0">
            <div className="flex items-center gap-2 md:gap-8">
              <button
                onClick={toggleMobileMenu}
                className="flex md:hidden items-center gap-2 px-4 py-2 bg-white border border-[#ddd] rounded-lg text-[14px] font-medium"
              >
                <TbFilterSearch size={20} /> Filters
              </button>

              <div className="flex items-center gap-4 md:gap-6">
                <button className="flex items-center gap-1.5 text-[14px] text-[#626364] hover:text-[#ED3729] transition-colors">
                  <TbCoins size={18} /> <span className="hidden sm:inline">By price</span>
                </button>
                <button className="flex items-center gap-1.5 text-[14px] text-[#626364] hover:text-[#ED3729] transition-colors">
                  <HiMiniBars3BottomLeft size={18} /> <span className="hidden sm:inline">Popularity</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 text-[#909090]">
              <IoGridOutline
                className={`text-[22px] cursor-pointer hover:text-[#ED3729] ${gridList === "grid" ? "text-[#ED3729]" : ""}`}
                onClick={() => setGridList("grid")}
              />
              <CiGrid2H
                className={`text-[24px] cursor-pointer hover:text-[#ED3729] ${gridList === "list" ? "text-[#ED3729]" : ""}`}
                onClick={() => setGridList("list")}
              />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-6 lg:gap-8">
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden md:block w-72 shrink-0 sticky top-5 self-start bg-white border border-[#F2F2F2] rounded-xl shadow-sm custom-scrollbar">
            {renderSidebarContent()}
          </aside>

          {/* MOBILE DRAWER */}
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={toggleMobileMenu}
            PaperProps={{ sx: { width: "85%", maxWidth: "340px" } }}
          >
            {renderSidebarContent()}
          </Drawer>

          {/* MAIN CONTENT Area */}
          <div className="flex-1 min-w-0">
            <div className={`grid gap-4 md:gap-5 ${
              gridList === "list" 
                ? "grid-cols-1" 
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            }`}>
              {filteredProducts?.map((item, i) => (
                gridList === "list" 
                  ? <FilterProduct key={i} item={item} /> 
                  : <Product key={i} item={item} />
              ))}
            </div>

            {/* Pagination/Show More */}
            <div className="flex justify-center mt-10 mb-12">
              <Button
                variant="outlined"
                sx={{
                  px: { xs: 4, md: 8 }, py: 1.5,
                  borderRadius: "10px", fontWeight: "600",
                  borderColor: "#ED3729", color: "#ED3729",
                  textTransform: "none",
                  "&:hover": { bgcolor: "#ED3729", color: "white", borderColor: "#ED3729" },
                }}
              >
                Show more
              </Button>
            </div>

            {/* Popular Categories */}
            <div className="py-8 border-t">
              <h2 className="font-bold text-[18px] md:text-[20px] text-[#202020] mb-5">Popular categories and models</h2>
              <div className="flex items-center gap-2 flex-wrap">
                {["Realme", "Gaming", "Optimal", "Samsung", "Apple", "Budget", "Flagship"].map((tag) => (
                  <button key={tag} className="text-[13px] md:text-[14px] text-[#444] py-2 px-4 md:px-5 border border-[#eee] bg-white rounded-full hover:border-[#ED3729] transition-all">
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* SEO Section */}
            <div className="py-8 border-t border-b mb-10">
              <h2 className="text-[18px] md:text-[20px] font-bold mb-4 text-[#202020]">Where to buy a reliable smartphone in Tashkent?</h2>
              <div
                className={`overflow-hidden transition-all duration-500 ${isExpanded ? "max-h-250" : "max-h-24"}`}
                style={{ maskImage: isExpanded ? "none" : "linear-gradient(to bottom, black 50%, transparent 100%)", WebkitMaskImage: isExpanded ? "none" : "linear-gradient(to bottom, black 50%, transparent 100%)" }}
              >
                <p className="text-[#626364] leading-relaxed text-[14px] md:text-[15px]">
                  Smartfonlar zamonaviy hayotning ajralmas qismiga aylandi. Toshkentda ishonchli va kafolatli telefonlarni qayerdan sotib olish mumkin? Bizning do'konimizda siz Apple, Samsung, Xiaomi va boshqa ko'plab brendlarning original mahsulotlarini topishingiz mumkin. Barcha mahsulotlar rasmiy kafolatga ega va muddatli to'lov asosida sotib olish imkoniyati mavjud. Smartfon tanlashda uning xotirasi, kamerasi va akkumulyator sig'imiga e'tibor berish muhimdir.
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex mx-auto items-center gap-2 mt-4 text-[#ED3729] font-semibold text-[14px]"
              >
                {isExpanded ? "Hide details" : "Read more"}
                <IoIosArrowDown className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;