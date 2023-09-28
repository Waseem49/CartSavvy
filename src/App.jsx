import React, { Suspense, lazy } from "react";
import "./App.css";
import { ContextProvider } from "./context/ProductContext";

const Navbar = lazy(() => import("./components/Navbar"));
const HomePage = lazy(() => import("./components/HomePage"));

function App() {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Suspense fallback={<h1>Loading...</h1>}>
          <HomePage />
        </Suspense>
      </ContextProvider>
    </>
  );
}

export default App;
