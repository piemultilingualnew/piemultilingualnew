// innerSlice.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

// Define async thunk
export const fetchInner2Data = createAsyncThunk(
  "api/fetchInner2Data",
  async (searchurl, { rejectWithValue }) => {
    const searchurlWithSlash = searchurl + "/";

    const query = qs.stringify(
      {
        filters: {
          $or: [
            { page_url: { $eq: searchurl } },
            { page_url: { $eq: searchurlWithSlash } },
          ],
        },
        populate: [
          "Banner",
          "Banner.image",
          "Benefits",
          "Benefits.cards",
          "Development",
          "Development.cards",
          "Case_Study",
          "Case_Study.cards",
          "Case_Study.cards.image",
          "Pricing",
          "Service_Box_Red",
          "Advantage_Box",
          "Advantage_Box.cards",
          "Advantage_Box.cards.image",
          "Above_Footer",
          "Above_Footer.last",
          "language_card",
          "language_card.image",
          "Industries_We_Serve",
          "Industries_We_Serve.image",
          "AboutUs",
          "AboutUs.image",
          "AboutUs.logo",
          "enquiry_form",
          "pdf",
          "Description",
          "Title",
          "Keywords",
          "FAQCards",
          "Hire_green_box",
          "Hire_green_box.cards",
          "HireForm",
          "LanguageIconBox",
          "Steps",
          "Career",
          "Pricing_cards",
        ],
      },
      { encodeValuesOnly: true }
    );

    const url = `${process.env.NEXT_PUBLIC_mainurl}/api/inner2s?${query}`;

    try {
      const response = await axios.get(url, {
        headers: { "Content-Type": "application/json" },
      });
      const data = response.data.data[0];
      if (
        data &&
        (data.attributes.page_url === searchurl ||
          data.attributes.page_url === searchurlWithSlash)
      ) {
        return {
          id: data.id,
          ...data.attributes,
          api: "inner2",
        };
      }
      return rejectWithValue("No data found");
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
