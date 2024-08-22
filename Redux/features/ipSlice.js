import { createSlice } from "@reduxjs/toolkit";
import { fetchIpData } from "../actions/ipActions";

export const ipSlice = createSlice({
  name: "ip",
  initialState: {
    ipInfo: null,
    statusIp: "idle",
    errorIp: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIpData.pending, (state) => {
        state.statusIp = "loading";
      })
      .addCase(fetchIpData.fulfilled, (state, action) => {
        state.statusIp = "succeeded";
        state.ipInfo = action.payload;
      })
      .addCase(fetchIpData.rejected, (state, action) => {
        state.statusIp = "failed";
        state.errorIp = action.payload;
      });
  },
});

export const { ipInfo, statusIp, errorIp } = ipSlice.actions;
