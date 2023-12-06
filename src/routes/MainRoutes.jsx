import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../components/auth/Register";
import Login from "../components/auth/Login";
import RegisterSuccess from "../components/auth/RegisterSuccess";
import AddProduct from "../components/product/AddProduct";
import ProductList from "../components/product/ProductList";
import EditProduct from "../components/product/EditProduct";
import Info from "../components/info/Info";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Info />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register-success" element={<RegisterSuccess />} />

      <Route path="/add" element={<AddProduct />} />
      <Route path="/posts" element={<ProductList />} />
      <Route path="/edit/:id" element={<EditProduct />} />

      <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
    </Routes>
  );
};

export default MainRoutes;
