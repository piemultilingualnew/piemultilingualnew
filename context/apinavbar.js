// Navbar.js
"use client";

import { useRouter } from "next/router";
import qs from "qs";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useError } from "./error";
const Navbar = createContext();

export function ApiNavbar({ children }) {
  const [apiData, setApiData] = useState(null);

  const { toggleError, toggleErrorTrue } = useError();
  const { asPath } = useRouter();
  const searchurl = asPath;
  let parts = searchurl.split("/");
  parts = parts[1];
  const part = parts + "s";
  const query = qs.stringify(
    {
      filters: {
        $or: [
          {
            parent: {
              $eq: parts,
            },
          },
          {
            parent: {
              $eq: part,
            },
          },
        ],
      },
      populate: ["navbar", "navbar.innerlink", "parent"],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const urltop = process.env.NEXT_PUBLIC_mainurl + "/api/navbars?" + query;

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
            setApiData(response.data.data[0].attributes);
          } else {
            setApiData(null);
          }
          toggleErrorTrue();
        })
        .catch((error) => {
          toggleError();
        });
    };
    if (asPath != "/[slugg]/[slug2]") fetching(urltop);
  }, [asPath]);
  return <Navbar.Provider value={apiData}>{children}</Navbar.Provider>;
}

export function useNavbardata() {
  return useContext(Navbar);
}
