import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import qs from "qs";

// Define async thunks
export const fetchAboutData = createAsyncThunk(
  "api/fetchApiData2",
  async (searchurl, { rejectWithValue }) => {
    // Ensure searchurl is correctly formatted
    const formattedUrl = searchurl;
    const searchurlWithSlash = `${formattedUrl}/`;

    // Build the query with both URL variations
    const query = qs.stringify(
      {
        filters: {
          $or: [
            { page_url: { $eq: formattedUrl } },
            { page_url: { $eq: searchurlWithSlash } },
          ],
        },
        populate: [
          "navbar",
          "navbar.innerlink",
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
          "Testimonial",
          "Testimonial.data",
          "All_Service_Card",
          "Career",
          "Results",
          "Results.box",
          "language_card",
          "language_card.image",
          "Industries_We_Serve",
          "Industries_We_Serve.image",
          "cv_form",
          "about_us",
          "AboutUs",
          "AboutUs.image",
          "AboutUs.logo",
          "enquiry_form",
          "pdf",
          "Description",
          "Title",
          "Keywords",
          "Above_Footer",
          "Above_Footer.last",
          "FAQCards",
          "Hire_green_box",
          "Hire_green_box.cards",
          "HireForm",
          "LanguageIconBox",
          "Steps",
          "Pricing_cards",
        ],
      },
      { encodeValuesOnly: true }
    );

    // Construct the full URL
    const url = `${process.env.NEXT_PUBLIC_mainurl}/api/inner3s?${query}`;

    try {
      // Make the request
      const response = await axios.get(url, {
        headers: { "Content-Type": "application/json" },
      });

      // Check the response data
      const data = response.data.data[0];
      if (
        data &&
        (data.attributes.page_url === formattedUrl ||
          data.attributes.page_url === searchurlWithSlash)
      ) {
        return {
          id: data.id,
          ...data.attributes,
          api: "inner3",
        };
      }
      return null;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
