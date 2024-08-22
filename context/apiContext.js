"use client";

import { useRouter } from "next/router";
import qs from "qs";
import axios from "axios";
import { useError } from "./error";
import { createContext, useContext, useEffect, useState } from "react";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const { toggleError, toggleErrorTrue } = useError();
  const [apiData, setApiData] = useState(null);
  const [apiData2, setApiData2] = useState(null);
  const [apiContextLoading, setApiContextLoading] = useState(true);
  const { asPath } = useRouter();
  let searchurl = asPath;
  const indexOfQuestionMark = searchurl.indexOf("?");
  if (indexOfQuestionMark != -1)
    searchurl = searchurl.substring(0, indexOfQuestionMark - 1);
  else {
    searchurl = searchurl.substring(0, searchurl.length - 1);
  }
  let parts = searchurl.split("/");
  parts = parts[1] ? parts[1].replace(/-/g, " ") : "";
  const searchurltwo = searchurl + "/";
  
  const query = qs.stringify(
    {
      filters: {
        $or: [
          {
            page_url: {
              $eq: searchurl,
            },
          },
        ],
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
  const querytwo = qs.stringify(
    {
      filters: {
        $or: [
          {
            page_url: {
              $eq: searchurl,
            },
          },
          {
            page_url: {
              $eq: searchurltwo,
            },
          },
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
        // 'AboutUs.logo.logo'
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const urltop = process.env.NEXT_PUBLIC_url + query;
  const urltop2 = process.env.NEXT_PUBLIC_mainurl + "/api/inner3s?" + querytwo;
  useEffect(() => {
    const fetching2 = async () => {
      await axios
        .get(urltop2, {
          headers: {
            "Content-Type": "application/json",
          },
          data: {},
        })
        .then((response) => {
          if (
            response.data.data[0] != null &&
            response.data.data[0] != undefined
          ) {
            if (
              response.data.data[0].attributes.page_url === searchurl ||
              response.data.data[0].attributes.page_url === searchurltwo
            ) {
              const myCustomAttributes = {
                id: response.data.data[0].id,
                api: "inner3",
              };
              const updateddata = {
                ...response.data.data[0].attributes,
                ...myCustomAttributes,
              };
              setApiData2(updateddata);
              setApiData(null);
            } else {
              setApiData2(null);
            }
          }
          toggleErrorTrue();
        })
        .catch((error) => {
          console.log(error);
          toggleError();
        });
    };
    const fetching = async () => {
      await axios
        .get(urltop, {
          headers: {
            "Content-Type": "application/json",
          },
          data: {},
        })
        .then((response) => {
          if (
            response.data.data[0] != null &&
            response.data.data[0] != undefined
          ) {
            if (response.data.data[0].attributes.page_url === searchurl) {
              const myCustomAttributes = {
                id: response.data.data[0].id,
                api: "website",
              };
              const updateddata = {
                ...response.data.data[0].attributes,
                ...myCustomAttributes,
              };
              setApiData(updateddata);
              setApiData2(null);
            } else {
              setApiData(null);
              fetching2();
            }
          } else {
            setApiData(null);
            setApiData2(null);
            fetching2();
          }
          toggleErrorTrue();
        })
        .catch((error) => {
          toggleError();
        });
    };
    if (searchurl !== "/[slugg]/[slug2" && searchurl !== "/[slugg") {
      fetching();
    }
  }, [searchurl]);
  return (
    <ApiContext.Provider value={{ apiData, apiData2, apiContextLoading }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useApiData() {
  return useContext(ApiContext);
}
