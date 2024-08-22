import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchFooterData = createAsyncThunk(
  "data/fetchFooterData",
  async (_, { rejectWithValue }) => {
    const query = qs.stringify(
      {
        populate: ["footer", "footer.bottom_links"],
      },
      {
        encodeValuesOnly: true,
      }
    );

    const url = `${process.env.NEXT_PUBLIC_mainurl}/api/footers?${query}`;

    try {
      const response = await axios.get(url);
      return response.data.data[0] ? response.data.data[0].attributes : null;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
