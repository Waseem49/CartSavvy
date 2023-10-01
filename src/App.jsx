import React, { Suspense, lazy } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./context/ProductContext";
import Skeloton from "./components/Skeloton";

const Navbar = lazy(() => import("./components/Navbar"));
const HomePage = lazy(() => import("./components/HomePage"));

function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Suspense fallback={<Skeloton />}>
          <ToastContainer />
          <HomePage />
        </Suspense>
      </ContextProvider>
    </>
  );
}
export default App;
