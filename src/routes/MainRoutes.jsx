import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import RegisterSuccess from "../components/auth/RegisterSuccess";
import RegisterFreelancer from "../components/auth/RegisterFreelancer";
import LoginFreelancer from "../components/auth/LoginFreelancer";
import ProductList from "../components/product/ProductList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/register-freelancer" element={<RegisterFreelancer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-freelancer" element={<LoginFreelancer />} />
      <Route path="/register-success" element={<RegisterSuccess />} />
      <Route path="/posts" element={<ProductList />} />
    </Routes>
  );
};

export default MainRoutes;
