import { createSlice } from "@reduxjs/toolkit";
import { fetchInner1Data } from "../actions/inner1Actions";

// Define an initial state
const initialState = {
  inner1Data: null,
  loadingInner1: false,
  errorInner1: false,
};


// Create a slice of the store
export const inner1Slice = createSlice({
  name: "inner1",
  initialState,
  reducers: {
    resetInner1: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInner1Data.pending, (state) => {
        state.loadingInner1 = true;
        state.errorInner1 = false;
      })
      .addCase(fetchInner1Data.fulfilled, (state, action) => {
        state.inner1Data = action.payload;
        state.loadingInner1 = false;
        state.errorInner1 = false;
      })
      .addCase(fetchInner1Data.rejected, (state, action) => {
        state.errorInner1 = true;
        state.loadingInner1 = false;
      });
  },
});

export const {inner1Data, loadingInner1, errorInner1, resetInner1 } = inner1Slice.actions;
