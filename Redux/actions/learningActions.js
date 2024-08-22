import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

export const fetchLearningData = createAsyncThunk(
  "learning/fetchData",
  async (searchurl, { rejectWithValue }) => {
    let parts = searchurl.split("/");
    const partssec = parts[1] ? parts[1].split("?") : [""];
    const querytwo = qs.stringify(
      {
        filters: {
          $or: [
            {
              page_url: {
                $eq: partssec[0],
              },
            },
          ],
        },
        populate: [
          "Banner",
          "Banner.image",
          "number_box",
          "service",
          "service.card",
          "Testimonial",
          "Testimonial.big_image",
          "Testimonial.big_image.image",
          "Testimonial.cards",
          "Testimonial.cards.image",
          "metaDescription",
          "Title",
        ],
      },
      {
        encodeValuesOnly: true,
      }
    );

    const url = decodeURIComponent(
      `${process.env.NEXT_PUBLIC_mainurl}/api/learnings?${querytwo}`
    );

    try {
      const response = await axios.get(url, {
        headers: { "Content-Type": "application/json" },
      });
      const data = response.data.data[0];
      if (data) {
        return {
          id: data.id,
          ...data.attributes,
          api: "learning",
        };
      }
      return rejectWithValue(error.response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
