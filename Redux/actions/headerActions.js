import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import qs from "qs";

// Async thunk to fetch header data
export const fetchHeaderData = createAsyncThunk(
  'header/fetchHeaderData',
  async (_, { rejectWithValue }) => {
    try {
      const query = qs.stringify(
        {
          populate: ['topmenu', 'menu'],
        },
        {
          encodeValuesOnly: true,
        }
      );
      const urltop = process.env.NEXT_PUBLIC_mainurl + '/api/headers?' + query;

      const response = await axios.get(urltop, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response.data.data[0].attributes;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

