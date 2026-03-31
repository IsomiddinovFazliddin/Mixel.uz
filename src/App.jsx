import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Filter from "./pages/Filter";
import Like from "./pages/Like";
import Cart from "./pages/Cart";
import Compare from "./pages/Compare";
import {
  addToLiked,
  getBrands,
  getCartData,
  getCategory,
  getGallery,
  getProducts,
  likeItems,
  userData,
} from "./services";
import UserModal from "./components/UserModal";

export const DataContext = createContext();

function App() {
  const [categoryModal, setCategoryModal] = useState(false);
  const [userModal, setUserModal] = useState(false);
  const [tokenTitle, setTokenTitle] = useState(
    localStorage.getItem("accesToken")
      ? localStorage.getItem("accesToken")
      : null,
  );
  const [categoryData, setCategoryData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [brand, setBrand] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [likeData, setLikeData] = useState([]);
  const [cartData, setCartData] = useState([]);
  const [compareData, setCompareData] = useState(() => {
    try {
      const saved = localStorage.getItem("compareData");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [profilData, setProfilData] = useState([]);

  useEffect(() => {
    localStorage.setItem("compareData", JSON.stringify(compareData));
  }, [compareData]);

  useEffect(() => {
    getCategory().then((data) => setCategoryData(data.results));
    getProducts().then((data) => setProductData(data.results));
    getBrands().then((data) => setBrand(data.results));
    getGallery().then((data) => setGallery(data.results));

    if (tokenTitle) {
      likeItems().then((data) => setLikeData(data.results));
      getCartData().then((data) => {
        setCartData(data.results || data);
      });
    }

    userData().then((data) => {
      setProfilData(data);
    });
  }, [tokenTitle]);

  return (
    <>
      <DataContext.Provider
        value={{
          categoryModal,
          setCategoryModal,
          categoryData,
          productData,
          tokenTitle,
          brand,
          gallery,
          likeData,
          setLikeData,
          setTokenTitle,
          cartData,
          setCartData,
          compareData,
          setCompareData,
          userModal,
          setUserModal,
          userName,
          setUserName,
          firstName,
          setFirstName,
          lastName,
          setLastName,
          phoneNumber,
          setPhoneNumber,
          password,
          setPassword,
          profilData,
          setProfilData
        }}
      >
        <BrowserRouter>
          <UserModal />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/filter" element={<Filter />} />
            <Route path="/like" element={<Like />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
