import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isError: false,
  blogLoading: true,
};

export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setIsError(state, action) {
      state.isError = action.payload;
    },
    setBlogLoading(state, action) {
      state.blogLoading = action.payload;
    },
    toggleError(state) {
      state.isError = !state.isError;
    },
    toggleBlogLoadingTrue(state) {
      state.blogLoading = true;
    },
    toggleBlogLoadingFalse(state) {
      state.blogLoading = false;
    },
  },
});

export const {
  setIsError,
  setBlogLoading,
  toggleError,
  toggleBlogLoadingTrue,
  toggleBlogLoadingFalse,
} = errorSlice.actions;

export const selectIsError = (state) => state.error.isError;
export const selectBlogLoading = (state) => state.error.blogLoading;

