// caseStudySlice.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

// Define the async thunk for fetching case study data
export const fetchCaseStudyData = createAsyncThunk(
  "caseStudy/fetchCaseStudyData",
  async (searchurl, { rejectWithValue }) => {
    const query = qs.stringify(
      {
        filters: {
          $or: [{ page_url: { $eq: searchurl } }],
        },
        populate: [
          "Banner",
          "Banner.image",
          "Case_Study",
          "Case_Study.image",
          "page_url",
          "Testimonial",
          "Testimonial.use",
          "Above_Footer",
          "Above_Footer.last",
        ],
      },
      { encodeValuesOnly: true }
    );

    const urltop = `${process.env.NEXT_PUBLIC_mainurl}/api/case-studies?${query}`;

    try {
      if (searchurl === "/case-study/[slug") {
        return null;
      }
      const response = await axios.get(urltop, {
        headers: { "Content-Type": "application/json" },
      });

      const data = response.data.data[0];
      if (data && data.attributes.page_url === searchurl) {
        return {
          id: data.id,
          ...data.attributes,
          api: "case-study",
        };
      }
      return rejectWithValue("error");
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
