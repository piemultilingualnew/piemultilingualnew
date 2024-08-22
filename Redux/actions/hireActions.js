import axios from "axios";
import qs from "qs";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Create the async thunk for fetching hire data
export const fetchHireData = createAsyncThunk(
  "hire/fetchHireData",
  async (searchurltwo, { rejectWithValue }) => {
    const query = qs.stringify(
      {
        filters: {
          $or: [{ page_url: { $eq: searchurltwo } }],
        },
        populate: [
          "Banner",
          "Banner.image",
          "Benefits",
          "Benefits.cards",
          "Advantage_Box",
          "Advantage_Box.cards",
          "Advantage_Box.cards.image",
          "Hire_green_box",
          "Hire_green_box.cards",
        ],
      },
      { encodeValuesOnly: true }
    );

    const url = `${process.env.NEXT_PUBLIC_mainurl}/api/hire-pages?${query}`;

    try {
      const response = await axios.get(url, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.data.data.length > 0) {
        const hireData = response.data.data[0].attributes;
        return hireData;
      } else {
        return rejectWithValue("No data found!");
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
