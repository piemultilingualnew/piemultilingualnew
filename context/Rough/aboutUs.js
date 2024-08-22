// Innertwocontext.js
"use client";

import { useRouter } from "next/router";
import qs from "qs";
import axios from "axios";
import { useError } from "./error";
import { createContext, useContext, useEffect, useState } from "react";

const Innertwocontext = createContext();

export function Apiinner2({ children }) {
  const [apiDatatwo, setApiDatatwo] = useState(null);
  const { toggleError, toggleErrorTrue } = useError();
  const { asPath } = useRouter();
  let searchurl = asPath;
  searchurl = searchurl.substring(0, searchurl.length - 1);
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

  const urltopfour = decodeURIComponent(
    process.env.NEXT_PUBLIC_mainurl + "/api/learnings?" + querytwo
  );

  useEffect(() => {
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
    };

    if (searchurl !== "/[slugg]/[slug2" && searchurl !== "/[slugg") {
      fetchingtwo(urltopfour);
    }
  }, [searchurl]);
  return (
    <Innertwocontext.Provider value={{ apiDatatwo }}>
      {children}
    </Innertwocontext.Provider>
  );
}

export function useInnertwoData() {
  return useContext(Innertwocontext);
}
