// Header.js
"use client";
import qs from "qs";
import axios from "axios";
import { useError } from "./error";
import { createContext, useContext, useEffect, useState } from "react";

const Header = createContext();

export function Headerprovider({ children }) {
  const [apiData, setApiData] = useState(null);
  const query = qs.stringify(
    {
      populate: ["topmenu", "menu"],
    },
    {
      encodeValuesOnly: true,
    }
  );
  const { toggleError, toggleErrorTrue } = useError();
  const urltop = process.env.NEXT_PUBLIC_mainurl + "/api/headers?" + query;
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
          setApiData(response.data.data[0].attributes);
          toggleErrorTrue();
        })
        .catch((error) => {
          toggleError();
        });
    };
    fetching();
  }, [urltop]);
  return <Header.Provider value={apiData}>{children}</Header.Provider>;
}

export function ApiHeader() {
  return useContext(Header);
}
