// Blogcontext.js
"use client";

import { useRouter } from "next/router";
import qs from "qs";
import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useError } from "./error";
const Blogcontext = createContext();

export function BlogData({ children }) {
  const [blogData, setApiData] = useState(null);
  const [blogDetail, setApiDetail] = useState(null);
  const { asPath } = useRouter();
  const searchurl = asPath;
  let parts = searchurl.split("/");
  const searchurltwo = parts[2];
  const {
    toggleError,
    toggleErrorTrue,
    toggleBlogLoadingTrue,
    toggleBlogLoadingFalse,
  } = useError();
  const queryblog = qs.stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );

  const queryblogdetail = qs.stringify(
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
        "page_url",
        "content",
        "title",
        "button",
        "image",
        "author",
        "author.image",
      ],
    },
    {
      encodeValuesOnly: true,
    }
  );

  const urlblog = decodeURIComponent(
    process.env.NEXT_PUBLIC_mainurl + "/api/blogs?" + queryblog
  );
  const urlblogdetail = decodeURIComponent(
    process.env.NEXT_PUBLIC_mainurl + "/api/blogs?" + queryblogdetail
  );

  useEffect(() => {
    const fetching = async (url) => {
      toggleBlogLoadingTrue();
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
            setApiData(response.data.data);
          }
          toggleErrorTrue();
        })
        .catch((error) => {
          toggleError();
        });
    };
    const fetchingblog = async (url) => {
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
            response.data.data[0] != undefined &&
            (response.data.data[0].attributes.page_url == searchurl ||
              response.data.data[0].attributes.page_url == searchurltwo)
          ) {
            setApiDetail(response.data.data[0].attributes);
          } else {
            setApiDetail(null);
          }
          toggleErrorTrue();
        })
        .catch((error) => {
          toggleError();
        });
      toggleBlogLoadingFalse();
    };
    if (searchurl !== "/[slugg]/[slug2" && searchurl !== "/[slugg") {
      fetching(urlblog);
      fetchingblog(urlblogdetail);
    }
  }, [searchurl]);
  return (
    <Blogcontext.Provider value={{ blogData, blogDetail }}>
      {children}
    </Blogcontext.Provider>
  );
}

export function useBlogData() {
  return useContext(Blogcontext);
}
