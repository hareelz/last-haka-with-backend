import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";
import { getConfig } from "../../helpers/functions";

export const getFreelancer = createAsyncThunk(
  "freelancer/getFreelancer",
  async () => {
    try {
      const result = await axios.get(
        `${API}/v1/freelancer/` + window.location.search
      );
      console.log(result.data.results);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
);
getFreelancer();
// export const createFreelancer = createAsyncThunk(
//   "products/createFreelancer",
//   async (newProduct) => {
//     try {
//       await axios.post(`${API}/v1/freelancer/`, newProduct, getConfig());
//     } catch (error) {
//       throw error;
//     }
//   }
// );

// export const deleteFreelancer = createAsyncThunk(
//   "products/deleteFreelancer",
//   async (id, thunkAPI) => {
//     try {
//       await axios.delete(`${API}/v1/freelancer/${id}/`, getConfig());
//       thunkAPI.dispatch(getFreelancer());
//     } catch (error) {
//       throw error;
//     }
//   }
// );

export const getOneFreelancer = createAsyncThunk(
  "products/getOneFreelancer",
  async (id) => {
    try {
      const result = await axios.get(
        `${API}/v1/freelancer/${id}/`,
        getConfig()
      );

      return result.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateFreelancer = createAsyncThunk(
  "products/updateFreelancer",
  async (editedProduct) => {
    try {
      await axios.patch(
        `${API}/v1/freelancer/${editedProduct.get("id")}/`,
        editedProduct,
        getConfig()
      );
    } catch (error) {
      throw error;
    }
  }
);
