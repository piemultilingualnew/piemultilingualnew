// Sharedcontext.js
"use client";

import { useRouter } from "next/router";
import qs from "qs";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useError } from "./error";
const Sharedcontext = createContext();

export function Shared({ children }) {
  const { toggleError, toggleErrorTrue } = useError();
  const [contactData, setContactData] = useState(null);
  const [footerData, setFooterData] = useState(null);
  const { asPath } = useRouter();
  const searchurl = asPath;
  let parts = searchurl.split("/");

  parts = parts[1].replace(/-/g, " ");

  const query = qs.stringify(
    {
      populate: [
        "Banner.image",
        "first",
        "Address_boxes",
        "Testimonials",
        "Testimonials.image",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const queryfooter = qs.stringify(
    {
      populate: ["footer", "footer.bottom_links"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const urltop = decodeURIComponent(
    process.env.NEXT_PUBLIC_mainurl + "/api/contactuses?" + query
  );
  const urlfooter = decodeURIComponent(
    process.env.NEXT_PUBLIC_mainurl + "/api/footers?" + queryfooter
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
            const myCustomAttributes = {
              id: response.data.data[0].id,
              api: "contactus",
            };
            const updateddata = {
              ...response.data.data[0].attributes,
              ...myCustomAttributes,
            };
            setContactData(updateddata);
          } else {
            setContactData(null);
          }
          toggleErrorTrue();
        })
        .catch((error) => {
          toggleError();
        });
    };
    const fetchingfooter = async (url) => {
      await axios
        .get(url)
        .then((response) => {
          if (
            response.data.data[0] != null &&
            response.data.data[0] != undefined
          ) {
            setFooterData(response.data.data[0].attributes);
          }
          toggleErrorTrue();
        })
        .catch((error) => {
          toggleError();
        });
    };

    fetchingfooter(urlfooter);
    fetching(urltop);
  }, [searchurl]);
  return (
    <Sharedcontext.Provider value={{ footerData, contactData }}>
      {children}
    </Sharedcontext.Provider>
  );
}

export function useSharedData() {
  return useContext(Sharedcontext);
}
