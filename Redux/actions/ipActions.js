import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch IP data
export const fetchIpData = createAsyncThunk(
  "ip/fetchIpData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("https://ip.nf/me.json");
      const data = await response.json();
      return data.ip;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
