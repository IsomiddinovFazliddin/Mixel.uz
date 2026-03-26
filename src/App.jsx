import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import CategoryModal from "./components/CategoryModal";
import ProductDetails from "./pages/ProductDetails";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Profil from "./pages/Profil";
import Filter from "./pages/Filter";
import Like from "./pages/Like";
import Cart from "./pages/Cart";
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

  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

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
    } else {
      setLikeData([]);
      setCartData([]);
    }

    userData().then((data) => {
      console.log(data);
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
        }}
      >
        <BrowserRouter>
          <UserModal />
          <CategoryModal />
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
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataContext.Provider>
    </>
  );
}

export default App;
