import React, { Suspense, lazy } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./context/ProductContext";
import Skeloton from "./components/Skeloton";
import { Route, Routes } from "react-router-dom";

const Navbar = lazy(() => import("./components/Navbar"));
const HomePage = lazy(() => import("./components/HomePage"));
const Cart = lazy(() => import("./components/Cart"));

function App() {
  return (
    <ContextProvider>
      <Navbar />
      <Suspense fallback={<Skeloton />}>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Suspense>
    </ContextProvider>
  );
}
export default App;
