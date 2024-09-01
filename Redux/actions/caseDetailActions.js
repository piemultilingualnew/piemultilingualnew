import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

// Define the async thunk for fetching case details data
export const fetchCaseDetailsData = createAsyncThunk(
  "caseStudy/fetchCaseDetailsData",
  async (searchurl, { rejectWithValue }) => {
    const querydetails = qs.stringify(
      {
        filters: {
          $or: [{ page_url: { $eq: searchurl } }],
        },
        populate: [
          "Banner",
          "Banner.image",
          "content",
          "Advantage_Box",
          "Advantage_Box.cards",
          "Advantage_Box.cards.image",
          "results",
          "results.box",
        ],
      },
      { encodeValuesOnly: true }
    );

    const urldetails = `${process.env.NEXT_PUBLIC_mainurl}/api/cases?${querydetails}`;

    try {
      if (searchurl === "/case-study/[slug") {
        return null;
      }
      const response = await axios.get(urldetails, {
        headers: { "Content-Type": "application/json" },
      });

      const data = response.data.data[0];
      if (data && data.attributes.page_url === searchurl) {
        return {
          id: data.id,
          ...data.attributes,
          api: "case",
        };
      }
      return rejectWithValue("error");
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
