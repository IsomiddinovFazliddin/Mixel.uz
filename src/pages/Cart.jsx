import React, { useContext, useState } from "react";
import {
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { DataContext } from "../App";

// Fokus bo'lganda outline rangini o'zgartiruvchi theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#ED3729",
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          // Oddiy holatdagi chegara rangi (ixtiyoriy)
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ED3729",
          },
          // Fokus bo'lgandagi outline rangi
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#ED3729",
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // Fokus bo'lganda label (yozuv) rangi
          "&.Mui-focused": {
            color: "#ED3729",
          },
        },
      },
    },
  },
});

const regions = [
  "Chilonzor",
  "Yunusobod",
  "Mirzo Ulug'bek",
  "Mirobod",
  "Yashnobod",
  "Sergeli",
];
const cities = ["Toshkent sh.", "Samarqand", "Buxoro", "Andijon", "Namangan"];

function Cart() {
  const { cartData } = useContext(DataContext);
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto py-6 px-4 lg:px-10">
          {/* 1. Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-8 text-sm md:text-base overflow-x-auto whitespace-nowrap">
            <Link
              to="/"
              className="text-[#626364] hover:text-[#ED3729] transition-colors"
            >
              Home
            </Link>
            <IoIosArrowForward className="text-gray-400 shrink-0" />
            <span className="text-gray-400">Make a purchase</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start gap-10 relative">
            {/* CHAP TOMON: Formaning barcha qadamlari */}
            <div className="flex-1 w-full space-y-12">
              <h2 className="text-3xl font-bold text-[#202020]">
                Make a purchase
              </h2>

              {/* QADAM 1: Your Order */}
              <section className="border-b pb-8 border-[#C4C4C4]">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                      1
                    </span>
                    <h4 className="text-xl font-bold text-[#202020]">
                      Your order
                    </h4>
                  </div>
                  <button className="text-sm font-medium border border-gray-300 px-5 py-2 rounded-lg hover:border-[#ED3729] hover:text-[#ED3729] transition-all">
                    Change
                  </button>
                </div>

                <div className="card grid gap-5 items-start h-[50vh] overflow-y-auto">
                  {cartData?.length > 0 ? (
                    cartData?.map((item, i) => {
                      return (
                        <div
                          key={i}
                          className="flex flex-col sm:flex-row items-center gap-5 p-5 bg-[#F9F9F9] rounded-2xl border border-gray-100"
                        >
                          <img
                            className="w-20 h-24 object-contain bg-white rounded-xl p-2 shadow-sm"
                            src={item?.main_image}
                            alt="Product"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg text-[#202020]">
                              {item?.product_name}
                            </h4>
                          </div>
                          <div className="flex items-center justify-between w-full sm:w-auto gap-12 border-t sm:border-t-0 pt-4 sm:pt-0">
                            <span className="text-gray-400 font-bold text-lg">
                              {item?.amount}x
                            </span>
                            <span className="font-bold text-xl text-[#202020] whitespace-nowrap">
                              {item?.product_price} cум
                            </span>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="w-full flex flex-col justify-center items-center">
                      <img
                        className="w-90"
                        src="https://assets-v2.lottiefiles.com/a/6102a4f8-1176-11ee-bcc5-236dd7d5f88b/aK8IKRE5a3.gif"
                        alt=""
                      />
                    </div>
                  )}
                </div>
              </section>

              {/* QADAM 2: Your Details */}
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </span>
                  <h4 className="text-xl font-bold text-[#202020]">
                    Your details
                  </h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <TextField
                    fullWidth
                    label="Phone number*"
                    placeholder="+998"
                    variant="outlined"
                  />
                  <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <TextField
                      fullWidth
                      label="First name*"
                      variant="outlined"
                      required
                    />
                    <TextField
                      fullWidth
                      label="Last name*"
                      variant="outlined"
                      required
                    />
                  </div>
                </div>
              </section>

              {/* QADAM 3: Payment Method */}
              <section className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </span>
                  <h4 className="text-xl font-bold text-[#202020]">
                    Select a payment method
                  </h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: "payme", label: "Payment via Payme" },
                    { id: "cards", label: "Online (UZCARD/HUMO)" },
                    { id: "cash", label: "Cash on delivery" },
                    { id: "installment", label: "Installment plan" },
                  ].map((method) => (
                    <label
                      key={method.id}
                      className="border-2 border-gray-100 rounded-2xl px-6 py-5 flex items-center gap-4 cursor-pointer hover:border-[#ED3729] has-[:checked]:border-[#ED3729] has-[:checked]:bg-red-50/30 transition-all group"
                    >
                      <input
                        type="radio"
                        name="payment"
                        id={method.id}
                        className="w-5 h-5 accent-[#ED3729]"
                      />
                      <span className="font-bold text-gray-700 group-has-[:checked]:text-[#ED3729]">
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>
              </section>

              {/* QADAM 4: Delivery Method */}
              <section className="space-y-8">
                <div className="flex items-center gap-4">
                  <span className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </span>
                  <h4 className="text-xl font-bold text-[#202020]">
                    Method of obtaining
                  </h4>
                </div>

                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-widest">
                      Your city
                    </p>
                    <div className="inline-flex items-center gap-3 border-2 border-[#ED3729] rounded-xl px-6 py-3 bg-red-50/50">
                      <div className="w-3 h-3 rounded-full bg-[#ED3729] ring-4 ring-red-100"></div>
                      <span className="font-bold text-[#ED3729]">Tashkent</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormControl fullWidth>
                      <InputLabel>Region / Oblast*</InputLabel>
                      <Select
                        value={city}
                        label="Region / Oblast*"
                        onChange={(e) => setCity(e.target.value)}
                      >
                        {cities.map((c) => (
                          <MenuItem key={c} value={c}>
                            {c}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel>District / City*</InputLabel>
                      <Select
                        value={region}
                        label="District / City*"
                        onChange={(e) => setRegion(e.target.value)}
                      >
                        {regions.map((r) => (
                          <MenuItem key={r} value={r}>
                            {r}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
                    <div className="sm:col-span-3">
                      <TextField
                        fullWidth
                        label="Detailed Address (Street, House)*"
                        variant="outlined"
                      />
                    </div>
                    <div className="sm:col-span-1">
                      <TextField fullWidth label="Floor" variant="outlined" />
                    </div>
                  </div>

                  <TextField
                    fullWidth
                    type="date"
                    label="Preferred delivery date"
                    InputLabelProps={{ shrink: true }}
                  />
                </div>
              </section>
            </div>

            {/* O'NG TOMON: Sticky Summary Blok */}
            <aside className="w-full lg:w-105 sticky top-6 self-start">
              <div className="border border-gray-200 rounded-4xl p-8 bg-[#FBFBFB] shadow-sm">
                <h2 className="text-2xl font-bold mb-8 text-[#202020]">
                  Order Summary
                </h2>

                <div className="space-y-5 mb-8">
                  <div className="flex justify-between text-[#626364] font-medium">
                    <span>Items ({cartData?.length || 0})</span>
                    <span className="text-[#202020]">
                      {cartData?.reduce((sum, item) => sum + (item?.product_price * item?.amount || 0), 0).toLocaleString()} сум
                    </span>
                  </div>
                  <div className="flex justify-between text-[#626364] font-medium">
                    <span>Delivery</span>
                    <span className="text-green-600 font-bold uppercase text-sm">
                      Free
                    </span>
                  </div>
                  <div className="h-px bg-gray-200 my-2"></div>
                  <div className="flex justify-between items-end pt-2">
                    <span className="font-bold text-gray-900">
                      Total amount:
                    </span>
                    <span className="text-2xl font-semibold text-[#ED3729] leading-none">
                      {cartData?.reduce((sum, item) => sum + (item?.product_price * item?.amount || 0), 0).toLocaleString()} сум
                    </span>
                  </div>
                </div>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#ED3729",
                    py: 2,
                    borderRadius: "16px",
                    fontSize: "18px",
                    fontWeight: "800",
                    textTransform: "none",
                    boxShadow: "0 12px 24px rgba(237, 55, 41, 0.25)",
                    "&:hover": {
                      backgroundColor: "#d32f2f",
                      boxShadow: "none",
                    },
                  }}
                >
                  Checkout now
                </Button>

                <p className="text-[11px] text-gray-400 mt-6 text-center leading-relaxed font-medium">
                  By clicking "Checkout now", I agree to the{" "}
                  <span className="text-[#2F80ED] cursor-pointer hover:underline">
                    User Agreement
                  </span>{" "}
                  and Privacy Policy.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Cart;
