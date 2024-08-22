// caseStudySlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchCaseStudyData } from "../actions/caseStudyActions";

// Define initial state
const initialState = {
  caseData: null,
  loadingCase: false,
  errorCase: false,
};

// Create the slice
export const caseStudySlice = createSlice({
  name: "caseStudy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaseStudyData.pending, (state) => {
        state.loadingCase = true;
        state.errorCase = false;
      })
      .addCase(fetchCaseStudyData.fulfilled, (state, action) => {
        state.caseData = action.payload;
        state.loadingCase = false;
      })
      .addCase(fetchCaseStudyData.rejected, (state, action) => {
        state.loadingCase = false;
        state.errorCase = true;
      });
  },
});

export const { caseData, loadingCase, errorCase } = caseStudySlice.actions;
