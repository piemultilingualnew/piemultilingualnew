import { createSlice } from "@reduxjs/toolkit";
import { fetchFooterData } from "../actions/footerActions";

// Define initial state
const initialState = {
  footerData: null,
  loading: false,
  error: null,
};

export const footerSlice = createSlice({
  name: "footerData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooterData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFooterData.fulfilled, (state, action) => {
        state.footerData = action.payload;
        state.loading = false;
      })
      .addCase(fetchFooterData.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const { footerData, loading, error } = footerSlice.actions;
