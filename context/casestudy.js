// apiContext.js
"use client";

import { useRouter } from "next/router";
import qs from "qs";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const ApiContext = createContext();
import { useError } from "./error";

export function CaseStudyData({ children }) {
  const [apiCaseData, setApiData] = useState(null);
  const [apiCaseDetail, setApiCaseDetail] = useState(null);
  const [caseLoading, setCaseLoading] = useState(false);
  const { toggleError } = useError();
  const { asPath } = useRouter();
  let searchurl = asPath;
  searchurl = searchurl.substring(0, searchurl.length - 1);

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
        "Banner",
        "Banner.image",
        "Case_Study",
        "Case_Study.image",
        "page_url",
        "Testimonial",
        "Testimonial.use",
        "Above_Footer",
        "Above_Footer.last",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const querydetails = qs.stringify(
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
        // 'navbar',
        // 'navbar.innerlink',

        "Banner",
        "Banner.image",
        "content",
        "Advantage_Box",
        "Advantage_Box.cards",

        "Advantage_Box.cards.image",

        "results",
        "results.box",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const urltop = process.env.NEXT_PUBLIC_mainurl + "/api/case-studies?" + query;
  const urldetails =process.env.NEXT_PUBLIC_mainurl + "/api/cases?" + querydetails;

  useEffect(() => {
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
            response.data.data[0] != undefined &&
            response.data.data[0].attributes.page_url === searchurl
          ) {
            const myCustomAttributes = {
              id: response.data.data[0].id,
              api: "case-study",
            };
            const updateddata = {
              ...response.data.data[0].attributes,
              ...myCustomAttributes,
            };
            setApiData(updateddata);
          } else {
            fetchingdetails();
          }
        })
        .catch((error) => {
          toggleError();
        });
    };
    const fetchingdetails = async () => {
      setApiData(null);
      await axios
        .get(urldetails, {
          headers: {
            "Content-Type": "application/json",
          },
          data: {},
        })
        .then((response) => {
          if (
            response.data.data[0] != null &&
            response.data.data[0] != undefined &&
            response.data.data[0].attributes.page_url === searchurl
          ) {
            const myCustomAttributes = {
              id: response.data.data[0].id,
              api: "case",
            };
            const updateddata = {
              ...response.data.data[0].attributes,
              ...myCustomAttributes,
            };
            setApiCaseDetail(updateddata);
          } else if (response.data.data[0] === null) {
            setApiCaseDetail(null);
          }
        })
        .catch((error) => {
          toggleError();
        });
      setCaseLoading(false);
    };
    setCaseLoading(true);
    if (searchurl !== "/[slugg]/[slug2" && searchurl !== "/[slugg") {
      fetching();
    }
  }, [searchurl]);
  return (
    <ApiContext.Provider value={{ apiCaseData, apiCaseDetail, caseLoading }}>
      {children}
    </ApiContext.Provider>
  );
}

export function useCaseStudyData() {
  return useContext(ApiContext);
}
