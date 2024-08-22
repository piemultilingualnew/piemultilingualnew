import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchBlogData = createAsyncThunk(
  "blog/fetchBlogData",
  async (_, { rejectWithValue }) => {
    try {
      const queryblog = qs.stringify(
        { populate: "*" },
        { encodeValuesOnly: true }
      );
      const urlblog = decodeURIComponent(
        process.env.NEXT_PUBLIC_mainurl + "/api/blogs?" + queryblog
      );
      const response = await axios.get(urlblog, {
        headers: { "Content-Type": "application/json" },
      });

      return response.data.data || null;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Async thunk to fetch blog detail data
export const fetchBlogDetail = createAsyncThunk(
  "blog/fetchBlogDetail",
  async (searchurl, { rejectWithValue }) => {
    // console.log("blog search url: ", searchurl);
    let parts = searchurl.split("/");
    const searchurltwo = parts[2];
    console.log("blog url: ", searchurltwo);
    try {
      const queryblogdetail = qs.stringify(
        {
          filters: {
            $or: [
              { page_url: { $eq: searchurl } },
              { page_url: { $eq: searchurltwo } },
            ],
          },
          populate: [
            "page_url",
            "content",
            "title",
            "button",
            "image",
            "author",
            "author.image",
          ],
        },
        { encodeValuesOnly: true }
      );

      const urlblogdetail = decodeURIComponent(
        process.env.NEXT_PUBLIC_mainurl + "/api/blogs?" + queryblogdetail
      );
      const response = await axios.get(urlblogdetail, {
        headers: { "Content-Type": "application/json" },
      });

      const data =
        response.data.data[0]?.attributes.page_url === searchurl ||
        response.data.data[0]?.attributes.page_url === searchurltwo
          ? response.data.data[0]?.attributes
          : null;

          console.log("blog detail: ", data);
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
