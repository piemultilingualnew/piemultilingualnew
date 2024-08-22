import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchNavbarData = createAsyncThunk(
  "navbar/fetchNavbarData",
  async (asPath, { rejectWithValue }) => {
    try {
      let parts = asPath.split("/");
      parts = parts[1];
      const part = parts + "s";
      const query = qs.stringify(
        {
          filters: {
            $or: [
              {
                parent: {
                  $eq: parts,
                },
              },
              {
                parent: {
                  $eq: part,
                },
              },
            ],
          },
          populate: ["navbar", "navbar.innerlink", "parent"],
        },
        {
          encodeValuesOnly: true,
        }
      );
      const urltop = process.env.NEXT_PUBLIC_mainurl + "/api/navbars?" + query;
      const response = await axios.get(urltop, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data.data[0]?.attributes || null;
      return data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
