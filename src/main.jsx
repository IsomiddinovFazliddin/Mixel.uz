import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <ToastContainer autoClose={3000} pauseOnHover={false}/>
    <Toaster position="top-right" />
  </StrictMode>,
);
