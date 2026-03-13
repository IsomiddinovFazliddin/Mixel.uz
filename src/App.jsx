import React, { createContext, useState } from "react";
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

export const DataContext = createContext();

function App() {
  const [categoryModal, setCategoryModal] = useState(false);

  return (
    <>
      <DataContext.Provider value={{ categoryModal, setCategoryModal }}>
        <BrowserRouter>
          <CategoryModal />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productdetails" element={<ProductDetails />} />
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
