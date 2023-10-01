import React, { Suspense, lazy } from "react";
import "./App.css";
import { toast, ToastContainer } from "react-toastify";
import { ContextProvider } from "./context/ProductContext";

const Navbar = lazy(() => import("./components/Navbar"));
const HomePage = lazy(() => import("./components/HomePage"));

function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <ToastContainer />
          <HomePage />
        </Suspense>
      </ContextProvider>
    </>
  );
}

export default App;
