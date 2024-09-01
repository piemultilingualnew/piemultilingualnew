import { createSlice } from "@reduxjs/toolkit";
import { fetchHomeData } from "../actions/homeActions";


// Define initial state
const initialState = {
  homeData: null,
  loadingHome: false,
  errorHome: false,
};

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    resetHome: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loadingHome = true;
        state.errorHome = false;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.homeData = action.payload;
        state.loadingHome = false;
      })
      .addCase(fetchHomeData.rejected, (state, action) => {
        state.errorHome = true;
        state.loadingHome = false;
      })
  },
});

export const { homeData, loadingHome, errorHome } = homeSlice.actions;
