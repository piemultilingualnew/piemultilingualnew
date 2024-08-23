// apiInnerSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchInner3Data } from "../actions/inner3Actions";

// Define the initial state
const initialState = {
  inner3Data: null,
  loadingInner3: false,
  errorInner3: false,
};

// Create the slice
export const inner3Slice = createSlice({
  name: "inner3",
  initialState,
  reducers: {
    resetInner3: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInner3Data.pending, (state) => {
        state.loadingInner3 = true;
        state.errorInner3 = false;
      })
      .addCase(fetchInner3Data.fulfilled, (state, action) => {
        state.inner3Data = action.payload;
        state.loadingInner3 = false;
        state.errorInner3 = false;
      })
      .addCase(fetchInner3Data.rejected, (state, action) => {
        state.loadingInner3 = false;
        state.errorInner3 = true;
      });
  },
});

export const { inner3Data, loadingInner3, errorInner3, resetInner3 } = inner3Slice.actions;
