import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

// Define async thunk
export const fetchHomeData = createAsyncThunk(
  "data/fetchHomeData",
  async (_, { rejectWithValue }) => {
    const query = qs.stringify(
      {
        populate: "*",
      },
      {
        encodeValuesOnly: true,
      }
    );

    const url = `${process.env.NEXT_PUBLIC_mainurl}/api/homes?${query}`;
    console.log("home url: ", url);

    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
          // Add more headers if needed
        },
      });

      const data = response.data.data[0];
      if (!data) {
        return rejectWithValue("No value found");
      }

      return {
        id: data.id,
        ...data.attributes,
        api: "home",
      };
    } catch (error) {
      console.log("error: ", error);
      const message = error.response?.data || "An unexpected error occurred";
      return rejectWithValue(message);
    }
  }
);
