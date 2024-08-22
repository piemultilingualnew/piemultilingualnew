// apiContext.js
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useError } from "./error";
const IpContext = createContext();

export function IpProvider({ children }) {
  const { toggleError, toggleErrorTrue } = useError();
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    try {
      fetch("https://ip.nf/me.json")
        .then((res) => res.json())
        .then((response) => {
          setIpInfo(response.ip);
        })
        .catch((data, status) => {
          toggleError();
        });
      toggleErrorTrue();
    } catch (e) {
      toggleError();
    }
  }, []);
  return <IpContext.Provider value={ipInfo}>{children}</IpContext.Provider>;
}

export function useIpData() {
  return useContext(IpContext);
}
