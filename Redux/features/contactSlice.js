import { createSlice } from "@reduxjs/toolkit";
import { fetchContactData } from "../actions/contactActions";

// Define initial state
const initialState = {
  contactData: null,
  loadingContact: false,
  errorContact: false,
};

export const contactSlice = createSlice({
  name: "contactData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactData.pending, (state) => {
        state.loadingContact = true;
        state.errorContact = false;
      })
      .addCase(fetchContactData.fulfilled, (state, action) => {
        state.contactData = action.payload;
        state.loadingContact = false;
      })
      .addCase(fetchContactData.rejected, (state, action) => {
        state.errorContact = true;
        state.loadingContact = false;
      })
  },
});

export const { contactData, loadingContact, errorContact } = contactSlice.actions;
