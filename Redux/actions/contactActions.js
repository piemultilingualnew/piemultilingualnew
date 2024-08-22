import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

// Define async thunks
export const fetchContactData = createAsyncThunk(
  "data/fetchContactData",
  async (_, { rejectWithValue }) => {
    const query = qs.stringify(
      {
        populate: [
          "Banner.image",
          "first",
          "Address_boxes",
          "Testimonials",
          "Testimonials.image",
        ],
      },
      {
        encodeValuesOnly: true,
      }
    );

    const url = `${process.env.NEXT_PUBLIC_mainurl}/api/contactuses?${query}`;
    console.log("contact url: ", url);
    
    try {
      const response = await axios.get(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("contact: ", response.data.data[0]);
      return response.data.data[0]
        ? {
            id: response.data.data[0].id,
            ...response.data.data[0].attributes,
            api: "contactus",
          }
          : rejectWithValue("No value found");
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
