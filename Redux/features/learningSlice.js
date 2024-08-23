import { createSlice } from "@reduxjs/toolkit";
import { fetchLearningData } from "../actions/learningActions";

// Define initial state
const initialState = {
  learningData: null,
  loadingLearning: false,
  errorLearning: false,
};

export const learningSlice = createSlice({
  name: "learning data",
  initialState,
  reducers: {
    resetLearning: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLearningData.pending, (state) => {
        state.loadingLearning = true;
        state.errorLearning = false;
      })
      .addCase(fetchLearningData.fulfilled, (state, action) => {
        state.learningData = action.payload;
        state.loadingLearning = false;
      })
      .addCase(fetchLearningData.rejected, (state, action) => {
        state.errorLearning = true;
        state.loadingLearning = false;
      });
  },
});

export const { learningData, loadingLearning, errorLearning, resetLearning } = learningSlice.actions;
