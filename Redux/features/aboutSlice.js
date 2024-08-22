// apiSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchAboutData } from "../actions/aboutActions";

// Define initial state
const initialState = {
  aboutData: null,
  loadingAbout: false,
  errorAbout: null,
};

// Create the slice
export const aboutSlice = createSlice({
  name: "aboutDataa",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAboutData.pending, (state) => {
        state.loadingAbout = true;
        state.errorAbout = null;
      })
      .addCase(fetchAboutData.fulfilled, (state, action) => {
        state.aboutData = action.payload;
        state.errorAbout = null;
        state.loadingAbout = false;
      })
      .addCase(fetchAboutData.rejected, (state, action) => {
        state.errorAbout = action.payload;
        state.loadingAbout = false;
      });
  },
});

export const { aboutData, loadingAbout, errorAbout } = aboutSlice.actions;
