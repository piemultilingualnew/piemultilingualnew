// apiInnerSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchInner3Data } from "../actions/inner3Actions";

// Define the initial state
const initialState = {
  inner3Data: null,
  loadingInner3: false,
  errorInner3: null,
};

// Create the slice
export const inner3Slice = createSlice({
  name: "inner3",
  initialState,
  reducers: {
    resetInner3: () => initialState,
  },
  setErrorInner3: (state, action) => {
    state.errorInner3 = action.payload;
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInner3Data.pending, (state) => {
        state.loadingInner3 = true;
        state.errorInner3 = null;
      })
      .addCase(fetchInner3Data.fulfilled, (state, action) => {
        state.inner3Data = action.payload;
        state.loadingInner3 = false;
        state.errorInner3 = null;
      })
      .addCase(fetchInner3Data.rejected, (state, action) => {
        state.loadingInner3 = false;
        state.errorInner3 = action.payload;
      });
  },
});

export const { inner3Data, loadingInner3, errorInner3, resetInner3, setErrorInner3 } = inner3Slice.actions;
