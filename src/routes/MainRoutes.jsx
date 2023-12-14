import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/AddProduct";
import EditProduct from "../components/EditProduct";
import Login from "../components/Login";
import ProductList from "../components/ProductList";
import Register from "../components/Register";
import RegisterSuccess from "../components/RegisterSuccess";
import FreeLancerCard from "../components/FreeLancerCard";
import FreeLancerList from "../components/FreeLancerList";
import FreelancerDetail from "../components/FreelancerDetail";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Info />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register-freelancer" element={<RegisterFreelancer />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-freelancer" element={<LoginFreelancer />} />
      <Route path="/register-success" element={<RegisterSuccess />} />

      <Route path="/add" element={<AddProduct />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/edit/:id" element={<EditProduct />} />
      <Route path="/detail/:id" element={<FreelancerDetail />} />
      <Route path="/freelancer-card" element={<FreeLancerCard />} />
      <Route path="/freelancer-list" element={<FreeLancerList />} />
      <Route path="/posts" element={<ProductList />} />

      <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
    </Routes>
  );
};

export default MainRoutes;
