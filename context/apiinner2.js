// Innertwocontext.js
"use client";

import { useRouter } from "next/router";
import qs from "qs";
import axios from "axios";
import { useError } from "./error";
import { createContext, useContext, useEffect, useState } from "react";

const Innertwocontext = createContext();

export function Apiinner2({ children }) {
  const [apiDatainnertwo, setApiData] = useState(null);
  const [apiDatatwo, setApiDatatwo] = useState(null);
  const [apiinner2loading, setApiinner2loading] = useState(true);
  const { toggleError, toggleErrorTrue } = useError();
  const { asPath } = useRouter();
  let searchurl = asPath;
  searchurl = searchurl.substring(0, searchurl.length - 1);
  let parts = searchurl.split("/");
  const partssec = parts[1] ? parts[1].split("?") : [""];
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
          {
            page_url: {
              $eq: searchurltwo,
            },
          },
        ],
      },
      populate: [
        // 'navbar',
        // 'navbar.innerlink',
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
              $eq: partssec[0],
            },
          },
        ],
      },
      populate: [
        // 'navbar',
        // 'navbar.innerlink',
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

  const urltop = decodeURIComponent(
    process.env.NEXT_PUBLIC_mainurl + "/api/inner2s?" + query
  );
  const urltop3 = decodeURIComponent(
    process.env.NEXT_PUBLIC_mainurl + "/api/inner3s?" + query
  );
  const urltopfour = decodeURIComponent(
    process.env.NEXT_PUBLIC_mainurl + "/api/learnings?" + querytwo
  );

  useEffect(() => {
    const fetching = async (url) => {
      await axios
        .get(url, {
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
                api:
                  url === urltop
                    ? "inner2"
                    : url === urltop3
                    ? "inner3"
                    : "learning",
              };
              const updateddata = {
                ...response.data.data[0].attributes,
                ...myCustomAttributes,
              };

              setApiData(updateddata);
            } else setApiData(null);
          } else {
            if (response.data.data.length === 0 && url != urltop3) {
              fetching(urltop3);
            } else {
              setApiData(null);
            }
          }
          toggleErrorTrue();
        })
        .catch((error) => {
          toggleError();
        });
    };

    const fetchingtwo = async (url) => {
      await axios
        .get(url, {
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
            const myCustomAttributes = {
              id: response.data.data[0].id,
              api:
                url === urltop
                  ? "inner2"
                  : url === urltop3
                  ? "inner3"
                  : "learning",
            };
            const updateddata = {
              ...response.data.data[0].attributes,
              ...myCustomAttributes,
            };
            setApiDatatwo(updateddata);
          } else {
            setApiDatatwo(null);
          }
          toggleErrorTrue();
        })
        .catch((error) => {
          toggleError();
        });
      setApiinner2loading(false);
    };
    setApiinner2loading(true);
    if (searchurl !== "/[slugg]/[slug2" && searchurl !== "/[slugg") {
      fetching(urltop);
      fetchingtwo(urltopfour);
    }
  }, [searchurl]);
  return (
    <Innertwocontext.Provider
      value={{ apiDatainnertwo, apiDatatwo, apiinner2loading }}
    >
      {children}
    </Innertwocontext.Provider>
  );
}

export function useInnertwoData() {
  return useContext(Innertwocontext);
}
