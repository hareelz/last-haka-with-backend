import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";

export const register = createAsyncThunk("auth/register", async (newUser) => {
  try {
    await axios.post(`${API}/v1/customer/register/`, newUser);
  } catch (error) {
    throw error;
  }
});

export const login = createAsyncThunk("auth/login", async (userData) => {
  try {
    const result = await axios.post(`${API}/v1/customer/login/`, userData);
    localStorage.setItem("tokens", JSON.stringify(result.data));
    localStorage.setItem("email", userData.email);
    console.log(result);
    return userData.email;
  } catch (error) {
    throw error;
  }
});

export const logout = () => {
  localStorage.removeItem("tokens");
  localStorage.removeItem("email");
};

export const checkAuth = createAsyncThunk("auth/checkAuth", async () => {
  try {
    const tokens = JSON.parse(localStorage.getItem("tokens"));

    const Authorization = `Bearer ${tokens.access}`;

    const config = {
      headers: {
        Authorization,
      },
    };

    const result = await axios.post(
      `${API}/v1/customer/refresh/`,
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
    logout();
  }
});
