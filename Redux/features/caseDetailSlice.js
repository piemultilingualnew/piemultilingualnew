// caseStudySlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchCaseDetailsData } from "../actions/caseDetailActions";


// Define initial state
const initialState = {
  caseDetailData: null,
  loadingCaseDetail: false,
  errorCaseDetail: false,
};

// Create the slice
export const caseDetailSlice = createSlice({
  name: "caseStudy",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaseDetailsData.pending, (state) => {
        state.loadingCaseDetail = true;
        state.errorCaseDetail = false;
      })
      .addCase(fetchCaseDetailsData.fulfilled, (state, action) => {
        state.caseDetailData = action.payload;
        state.loadingCaseDetail = false;
      })
      .addCase(fetchCaseDetailsData.rejected, (state, action) => {
        state.loadingCaseDetail = false;
        state.errorCaseDetail = true;
      });
  },
});

export const { caseDetailData, loadingCaseDetail, errorCaseDetail } =
  caseDetailSlice.actions;
