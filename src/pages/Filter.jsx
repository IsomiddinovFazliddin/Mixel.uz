import React, { useState } from "react";
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
} from "@mui/material";

import { CiGrid2H } from "react-icons/ci";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { IoIosArrowDown, IoIosArrowForward, IoIosClose } from "react-icons/io";
import { IoGridOutline } from "react-icons/io5";
import { TbCoins, TbFilterSearch } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import Product from "../components/Product";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function Filter() {
  const [priceRange, setPriceRange] = useState([300000, 103300000]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSliderChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };

  const formatPrice = (num) => num.toLocaleString("ru-RU");

  // Sidebar tarkibini alohida funksiya qilib olamiz (Desktop va Mobile uchun bir xil)
  const renderSidebarContent = () => (
    <div className="sidebar p-4 md:p-1 w-full overflow-y-auto max-h-screen md:max-h-none">
      <div className="flex items-center justify-between md:hidden mb-4 border-b pb-2">
        <h2 className="font-bold text-lg text-[#202020]">Filters</h2>
        <IconButton onClick={toggleMobileMenu}>
          <IoIosClose size={32} />
        </IconButton>
      </div>

      <Accordion sx={{ border: "none", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontWeight: 500, color: "#202020" }}>
            Price (sum)
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography component={"div"}>
            <div className="flex">
              <button className="w-1/2 px-1 py-3 border border-[#F2F2F2] rounded-l-sm font-normal text-[14px] text-[#333333]">
                от {formatPrice(priceRange[0])}
              </button>

              <button className="w-1/2 px-1 py-3 border border-[#F2F2F2] rounded-r-sm font-normal text-[14px] text-[#333333]">
                до {formatPrice(priceRange[1])}
              </button>
            </div>

            <Slider
              value={priceRange}
              onChange={handleSliderChange}
              valueLabelDisplay="auto"
              min={300000}
              max={110000000}
              step={100000} // Har surilganda 100 mingga o'zgaradi
              sx={{
                color: "#FF4500", // Saytingizni Primary rangini bering

                "& .MuiSlider-thumb": {
                  backgroundColor: "#fff",

                  border: "2px solid currentColor",
                },
              }}
            />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <div className="py-2 px-1">
        <h4 className="font-semibold text-[15px] text-[#202020] mb-3 px-4">
          Availability
        </h4>
        <div className="mx-4 flex items-center gap-3 py-1 px-3 border border-[#ED3729] rounded-md bg-[#fff5f4]">
          <Checkbox
            {...label}
            size="small"
            sx={{
              p: 0,
              color: "#E0E0E0",
              "&.Mui-checked": { color: "#ED3729" },
            }}
          />
          <h4 className="text-[14px] font-medium">Pick up today</h4>
        </div>
      </div>

      <Accordion sx={{ border: "none", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontWeight: 500 }}>Brand</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography component={"div"}>
            <div className="flex items-center gap-2">
              <Checkbox
                {...label}
                sx={{
                  color: "#E0E0E0",

                  "&.Mui-checked": {
                    color: "#ED3729",
                  },
                }}
              />

              <h4 className="font-medium text-[14px] text-[#202020]">
                LG <span className="text-[#626364]">(30)</span>
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                {...label}
                sx={{
                  color: "#E0E0E0",

                  "&.Mui-checked": {
                    color: "#ED3729",
                  },
                }}
              />

              <h4 className="font-medium text-[14px] text-[#202020]">
                Samsung <span className="text-[#626364]">(30)</span>
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                {...label}
                sx={{
                  color: "#E0E0E0",

                  "&.Mui-checked": {
                    color: "#ED3729",
                  },
                }}
              />

              <h4 className="font-medium text-[14px] text-[#202020]">
                Artel <span className="text-[#626364]">(30)</span>
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                {...label}
                sx={{
                  color: "#E0E0E0",

                  "&.Mui-checked": {
                    color: "#ED3729",
                  },
                }}
              />

              <h4 className="font-medium text-[14px] text-[#202020]">
                Hiawei <span className="text-[#626364]">(30)</span>
              </h4>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ border: "none", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontWeight: 500 }}>Battery capacity</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography component={"div"}>
            <div className="flex items-center gap-2">
              <Checkbox
                {...label}
                sx={{
                  color: "#E0E0E0",

                  "&.Mui-checked": {
                    color: "#ED3729",
                  },
                }}
              />

              <h4 className="font-medium text-[14px] text-[#626364]">
                1821 мА⋅ч
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                {...label}
                sx={{
                  color: "#E0E0E0",

                  "&.Mui-checked": {
                    color: "#ED3729",
                  },
                }}
              />

              <h4 className="font-medium text-[14px] text-[#626364]">
                3000 мА⋅ч
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                {...label}
                sx={{
                  color: "#E0E0E0",

                  "&.Mui-checked": {
                    color: "#ED3729",
                  },
                }}
              />

              <h4 className="font-medium text-[14px] text-[#626364]">
                4500 мА⋅ч
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                {...label}
                sx={{
                  color: "#E0E0E0",

                  "&.Mui-checked": {
                    color: "#ED3729",
                  },
                }}
              />

              <h4 className="font-medium text-[14px] text-[#626364]">
                5000 мА⋅ч
              </h4>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion sx={{ border: "none", boxShadow: "none" }}>
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography sx={{ fontWeight: 500 }}>Country of origin</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography component={"div"}>
            <div className="flex items-center gap-2">
              <Checkbox
                {...label}
                sx={{
                  color: "#E0E0E0",

                  "&.Mui-checked": {
                    color: "#ED3729",
                  },
                }}
              />

              <h4 className="font-medium text-[14px] text-[#202020]">
                Вьетнам
              </h4>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                {...label}
                sx={{
                  color: "#E0E0E0",

                  "&.Mui-checked": {
                    color: "#ED3729",
                  },
                }}
              />

              <h4 className="font-medium text-[14px] text-[#202020]">Китай</h4>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                {...label}
                sx={{
                  color: "#E0E0E0",

                  "&.Mui-checked": {
                    color: "#ED3729",
                  },
                }}
              />

              <h4 className="font-medium text-[14px] text-[#202020]">Artel</h4>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox
                {...label}
                sx={{
                  color: "#E0E0E0",

                  "&.Mui-checked": {
                    color: "#ED3729",
                  },
                }}
              />

              <h4 className="font-medium text-[14px] text-[#202020]">Huawei</h4>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <div className="mt-4 px-1 pb-20 md:pb-5">
        {[1, 2, 3, 4, 5].map((item) => (
          <div
            key={item}
            className="flex items-center justify-between px-3 py-3 rounded-md cursor-pointer transition-all hover:bg-gray-50 border-b border-[#f9f9f9] md:border-none"
          >
            <h1 className="text-[14px] text-[#202020]">Frontal kamera</h1>
            <IoIosArrowForward className="text-gray-400" />
          </div>
        ))}
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "#ED3729",
            mt: 3,
            py: 1.2,
            textTransform: "none",
            fontSize: "16px",
            "&:hover": { backgroundColor: "#d32f2f" },
          }}
        >
          Show products
        </Button>
      </div>
    </div>
  );

  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <div className="container mx-auto px-4 md:px-0     py-5">
        {/* Breadcrumbs - Mobil uchun gorizontal skrol bilan */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap no-scrollbar pb-1 text-[14px]">
            <Link to="/" className="text-[#909090] hover:text-[#ED3729]">
              Home
            </Link>
            <IoIosArrowForward className="text-[#909090]" />
            <Link className="text-[#909090] hover:text-[#ED3729]">Phones</Link>
            <IoIosArrowForward className="text-[#909090]" />
            <span className="text-[#202020] font-medium">Smartphones</span>
          </div>
          <h4 className="hidden lg:block text-[14px] text-[#909090]">
            Products 24 / 249
          </h4>
        </div>

        {/* Sarlavha va Filterning mobil tugmasi */}
        <div className="flex flex-col gap-4 mb-6">
          <h1 className="font-bold text-[22px] md:text-[28px] text-[#202020]">
            Smartphones in Tashkent
          </h1>

          <div className="flex items-center justify-between border-b border-t md:border-none py-3 md:py-0">
            <div className="flex items-center gap-2 md:gap-8">
              {/* MOBIL FILTER TUGMASI */}
              <button
                onClick={toggleMobileMenu}
                className="flex md:hidden items-center gap-2 px-4 py-2 bg-white border border-[#ddd] rounded-lg text-[14px] font-medium active:scale-95 transition-all"
              >
                <TbFilterSearch size={20} /> Filters
              </button>

              <div className="flex items-center gap-4 md:gap-6">
                <button className="flex items-center gap-1.5 text-[14px] text-[#626364] hover:text-[#ED3729]">
                  <TbCoins size={18} />{" "}
                  <span className="hidden sm:inline">By price</span>
                </button>
                <button className="flex items-center gap-1.5 text-[14px] text-[#626364] hover:text-[#ED3729]">
                  <HiMiniBars3BottomLeft size={18} />{" "}
                  <span className="hidden sm:inline">Popularity</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2 md:gap-3 text-[#909090]">
              <IoGridOutline className="text-[22px] cursor-pointer hover:text-[#ED3729] text-[#ED3729]" />
              <CiGrid2H className="text-[22px] cursor-pointer hover:text-[#ED3729]" />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-8">
          {/* DESKTOP SIDEBAR */}
          <aside className="hidden md:block w-[280px] flex-shrink-0 sticky top-24 self-start bg-white border border-[#F2F2F2] rounded-xl shadow-sm">
            {renderSidebarContent()}
          </aside>

          {/* MOBILE DRAWER */}
          <Drawer
            anchor="left"
            open={mobileOpen}
            onClose={toggleMobileMenu}
            PaperProps={{ sx: { width: "85%", maxWidth: "360px" } }}
          >
            {renderSidebarContent()}
          </Drawer>

          {/* MAIN CONTENT Area */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 md:gap-5">
              {[...Array(6)].map((_, i) => (
                <Product key={i} />
              ))}
            </div>

            {/* Show More Button */}
            <div className="flex justify-center mt-10 mb-12">
              <Button
                variant="outlined"
                sx={{
                  px: 6,
                  py: 1.5,
                  borderRadius: "10px",
                  fontWeight: "600",
                  borderColor: "#ED3729",
                  color: "#ED3729",
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "#ED3729",
                    color: "white",
                    borderColor: "#ED3729",
                  },
                }}
              >
                Show more
              </Button>
            </div>

            {/* Popular Categories - Chips layout */}
            <div className="py-8 border-t">
              <h2 className="font-bold text-[20px] text-[#202020] mb-5">
                Popular categories and models
              </h2>
              <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                {[
                  "Realme",
                  "Gaming",
                  "Optimal",
                  "Samsung",
                  "Apple",
                  "Budget",
                  "Flagship",
                ].map((tag) => (
                  <button
                    key={tag}
                    className="text-[14px] text-[#444] py-2 px-5 border border-[#eee] bg-white rounded-full hover:bg-gray-50 transition-all"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* SEO Text Section with Gradient effect */}
            <div className="py-8 border-t border-b mb-10">
              <h2 className="text-[20px] font-bold mb-4 text-[#202020]">
                Where to buy a reliable smartphone in Tashkent?
              </h2>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? "max-h-[1000px]" : "max-h-[100px]"}`}
                style={{
                  WebkitMaskImage: isExpanded
                    ? "none"
                    : "linear-gradient(to bottom, black 20%, transparent 100%)",
                }}
              >
                <p className="text-[#626364] leading-relaxed text-[15px]">
                  Smartfonlar zamonaviy hayotning ajralmas qismiga aylandi.
                  Toshkentda ishonchli va kafolatli telefonlarni qayerdan sotib
                  olish mumkin? Bizning do'konimizda siz Apple, Samsung, Xiaomi
                  va boshqa ko'plab brendlarning original mahsulotlarini
                  topishingiz mumkin. Barcha mahsulotlar rasmiy kafolatga ega va
                  muddatli to'lov asosida sotib olish imkoniyati mavjud.
                  Smartfon tanlashda uning xotirasi, kamerasi va akkumulyator
                  sig'imiga e'tibor berish muhimdir.
                </p>
              </div>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 mt-4 text-[#ED3729] font-semibold text-[15px]"
              >
                {isExpanded ? "Hide details" : "Read more"}
                <IoIosArrowDown
                  className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
