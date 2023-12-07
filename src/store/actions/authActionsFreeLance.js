import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getConfig } from "../../helpers/functions";

export const registerFreelance = createAsyncThunk(
  "authFreelancer/registerFreeLance",
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
      localStorage.setItem("tokensFree", JSON.stringify(result.data));
      localStorage.setItem("emailFree", userData.email);
      console.log(result);
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
      const result = await axios.get(`${API}/v1/category/`, getConfig());
      return result.data;
    } catch (error) {
      throw error;
    }
  }
);
console.log(getCategories());

export const logoutFreeLance = () => {
  localStorage.removeItem("tokensFree");
  localStorage.removeItem("emailFree");
};

export const checkAuthFreeLance = createAsyncThunk(
  "authFreelancer/checkAuth",
  async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokensFree"));

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
        "tokensFree",
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
