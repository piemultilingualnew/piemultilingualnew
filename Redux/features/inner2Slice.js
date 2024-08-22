// innerSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchInner2Data } from "../actions/inner2Actions";


// Define initial state
const initialState = {
  inner2Data: null,
  loadingInner2: false,
  errorInner2: false,
};


// Create slice
export const inner2Slice = createSlice({
  name: "inner",
  initialState,
  reducers: {
    // Define any additional reducers here if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInner2Data.pending, (state) => {
        state.loadingInner2 = true;
        state.errorInner2 = false;
      })
      .addCase(fetchInner2Data.fulfilled, (state, action) => {
        state.inner2Data = action.payload;
        state.loadingInner2 = false;
        state.errorInner2 = false;
      })
      .addCase(fetchInner2Data.rejected, (state, action) => {
        state.loadingInner2 = false;
        state.errorInner2 = true;
      });
  },
});

export const { innner2Data, loadingInner2, errorInner2 } = inner2Slice.actions;
