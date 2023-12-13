import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";

export const registerFreelance = createAsyncThunk(
  "authFreelancer/register",
  async (newUser) => {
    try {
      await axios.post(`${API}/v1/freelancer/register/`, newUser);
    } catch (error) {
      throw error;
    }
  }
);

export const loginFreeLance = createAsyncThunk(
  "authFreelancer/loginFreeLance",
  async (userData) => {
    try {
      const result = await axios.post(`${API}/v1/freelancer/login/`, userData);
      localStorage.setItem("tokens", JSON.stringify(result.data));
      localStorage.setItem("email", userData.email);
      return userData.email;
    } catch (error) {
      throw error;
    }
  }
);

export const getCategories = createAsyncThunk(
  "authFreeLancer/getCategories",
  async () => {
    try {
      const result = await axios.get(`${API}/v1/category/`);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
);

export const logoutFreeLance = () => {
  localStorage.removeItem("tokens");
  localStorage.removeItem("email");
};

export const checkAuthFreeLance = createAsyncThunk(
  "authFreelancer/checkAuth",
  async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));

      const Authorization = `Bearer ${tokens.access}`;

      const config = {
        headers: {
          Authorization,
        },
      };

      const result = await axios.post(
        `${API}/v1/freelancer/refresh/`,
        {
          refresh: tokens.refresh,
        },
        config
      );

      localStorage.setItem(
        "tokens",
        JSON.stringify({
          access: result.data.access,
          refresh: tokens.refresh,
        })
      );
    } catch (error) {
      logoutFreeLance();
    }
  }
);
