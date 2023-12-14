import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../../helpers/consts";

export const getFreelancers = createAsyncThunk(
  "freelancers/getFreelancer",
  async () => {
    try {
      const result = await axios.get(`${API}/api/v1/freelancer`);
      // console.log(result.data);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
);

export const getOneFreelancer = createAsyncThunk(
  "freelancers/getOneFreelancer",
  async (id) => {
    try {
      const result = await axios.get(`${API}/api/v1/freelancer/${id}`);
      return result.data;
    } catch (error) {
      throw error;
    }
  }
);
