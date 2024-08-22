import { createSlice } from "@reduxjs/toolkit";
import { fetchHeaderData } from "../actions/headerActions";

export const headerSlice = createSlice({
  name: "header",
  initialState: {
    headerData: null,
    statusHeader: "idle",
    errorHeader: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeaderData.pending, (state) => {
        state.statusHeader = "loading";
      })
      .addCase(fetchHeaderData.fulfilled, (state, action) => {
        state.statusHeader = "succeeded";
        state.headerData = action.payload;
      })
      .addCase(fetchHeaderData.rejected, (state, action) => {
        state.statusHeader = "failed";
        state.errorHeader = action.payload;
      });
  },
});

export const { headerData, statusHeader, errorHeader } = headerSlice.actions;
