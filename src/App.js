import React from "react";
import NavScrollExample from "./components/Navbar";
import MainRoutes from "./routes/MainRoutes";
import Footer from "./components/Footer";
import "./components/adaptive/Adaptive.css";
import ProductCard from "./components/product/ProductCard";
import "../src/components/auth/Auth.css";

const App = () => {
  return (
    <div>
      <NavScrollExample />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;
