import { createSlice } from "@reduxjs/toolkit";
import { fetchNavbarData } from "../actions/navbarActions";


export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    navbarData: null,
    loadingNavbar: false,
    errorNavbar: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavbarData.pending, (state) => {
        state.loadingNavbar = true;
        state.errorNavbar = null;
      })
      .addCase(fetchNavbarData.fulfilled, (state, action) => {
        state.navbarData = action.payload;
        state.loadingNavbar = false;
        state.errorNavbar = null;
      })
      .addCase(fetchNavbarData.rejected, (state, action) => {
        state.loadingNavbar = false;
        state.errorNavbar = action.payload;
      });
  },
});

export const { navbarData, loadingNavbar, errorNavbar } =  navbarSlice.actions;
