import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";
import { fetchLearningData } from "./learningActions";
import { fetchInner3Data } from "./inner3Actions";

// Define async thunk for fetching API data
export const fetchInner1Data = createAsyncThunk(
  "api/fetchApiData",
  async (searchurl, { rejectWithValue, dispatch }) => {
    const query = qs.stringify(
      {
        filters: {
          $or: [{ page_url: { $eq: searchurl } }],
        },
        populate: [
          "videosection",
          "herobox.headbox",
          "herobox.image",
          "herobox.logo.logo",
          "services.squarebox",
          "countries",
          "success_stories.image_big",
          "success_stories.image_big.image",
          "success_stories.image_small",
          "success_stories.image_small.image",
          "why_choose_us.bottom_box",
          "whyustwo.image",
          "whyustwo.cards",
          "why_choose_us.inner_box",
          "Testimonial.data",
          "Pricing",
          "connect_with",
          "points",
          "Quality_check",
          "Quality_check.content",
          "Staffing_calculator",
          "Staffing_calculator.content",
          "Staffing_calculator.Voice_support_options",
          "Staffing_calculator.Non_voice_support_options",
          "Why_choose_three",
          "Why_choose_three.content",
          "Why_choose_three.Why_us_three_cards",
        ],
      },
      {
        encodeValuesOnly: true,
      }
    );

    const urltop = `${process.env.NEXT_PUBLIC_url}${query}`;

    try {
      const response = await axios.get(urltop, {
        headers: {
          "Content-Type": "application/json",
        },
        data: {},
      });

      if (response.data.data[0]) {
        console.log(
          "response.data.data[0].attributes.page_url: ",
          response.data.data[0].attributes.page_url
        );
        console.log("search url: ", searchurl);
        if (response.data.data[0].attributes.page_url === searchurl) {
          return {
            ...response.data.data[0].attributes,
            id: response.data.data[0].id,
            api: "website",
          };
        }
      }
      else {
        dispatch(fetchInner3Data(searchurl));
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
