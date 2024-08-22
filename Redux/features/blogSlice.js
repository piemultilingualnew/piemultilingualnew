import { createSlice } from "@reduxjs/toolkit";
import { fetchBlogData, fetchBlogDetail } from "../actions/blogActions";


export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogData: null,
    blogDetail: null,
    loadingBlog: false,
    errorBlog: false,
    loadingBlogDetail: false,
    errorBlogDetail: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogData.pending, (state) => {
        state.loadingBlog = true;
        state.errorBlog = false;
      })
      .addCase(fetchBlogData.fulfilled, (state, action) => {
        state.blogData = action.payload;
        state.loadingBlog = false;
        state.errorBlog = false;
      })
      .addCase(fetchBlogData.rejected, (state, action) => {
        state.loadingBlog = false;
        state.errorBlog = true;
      })
      .addCase(fetchBlogDetail.pending, (state) => {
        state.loadingBlogDetail = true;
        state.errorBlogDetail = false;
      })
      .addCase(fetchBlogDetail.fulfilled, (state, action) => {
        state.blogDetail = action.payload;
        state.loadingBlogDetail = false;
        state.errorBlogDetail = false;
      })
      .addCase(fetchBlogDetail.rejected, (state, action) => {
        state.loadingBlogDetail = false;
        state.errorBlogDetail = true;
      });
  },
});

export const { blogData, blogDetail, loadingBlog, loadingBlogDetail, errorBlog, errorBlogDetail } =  blogSlice.actions;
