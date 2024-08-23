import { createSlice } from "@reduxjs/toolkit";
import { fetchHireData } from "../actions/hireActions";

const initialState = {
  hireData: null,
  loadingHire: false,
  errorHire: false,
};

export const hireSlice = createSlice({
  name: "hire",
  initialState,
  reducers: {
    resetHire: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHireData.pending, (state) => {
        state.loadingHire = true;
        state.errorHire = false;
      })
      .addCase(fetchHireData.fulfilled, (state, action) => {
        state.hireData = action.payload;
        state.loadingHire = false;
        state.errorHire = false;
      })
      .addCase(fetchHireData.rejected, (state) => {
        state.loadingHire = false;
        state.errorHire = true;
      });
  },
});

export const { hireData, loadingHire, errorHire, resetHire } = hireSlice.actions;
