"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import Footer from "@/components/Footer/page";


const DynamicFooter = dynamic(() => import("@/components/Footer/page"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const DynamicNavbar = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/Navbar/Navbar"
    ),
  {
    loading: () => <div className="w-full min-h-[250px]">Loading</div>,
  }
);
const DynamicBanner2 = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/banner/Banner"
    ),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
const DynamicSection = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/sections/page"
    ),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);

const NotFound = dynamic(() => import("@/components/layout/NotFound"), {
  loading: () => () => <div className="w-full min-h-screen">Loading</div>,
});

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { aboutData, loadingAbout, errorAbout } = useSelector(
    (state) => state.about
  );

  useEffect(() => {
    const fetching = async () => {
      const { fetchAboutData } = await import("@/Redux/actions/aboutActions");
      if (router.asPath) {
        let searchurl = router.asPath;
        const indexOfQuestionMark = searchurl.indexOf("?");
        if (indexOfQuestionMark !== -1)
          searchurl = searchurl.substring(0, indexOfQuestionMark - 1);
        else {
          searchurl = searchurl.substring(0, searchurl.length - 1);
        }
        let parts = searchurl.split("/");
        parts = parts[1] ? parts[1].replace(/-/g, " ") : "";

        dispatch(fetchAboutData(searchurl));
      }
    };

    fetching();
  }, [router.asPath, dispatch]);

  if ( loadingAbout) {
    return (
      <div className="main-container justify-center items-center">
        <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
          <span className="loading loading-ring loading-lg text-[#F60]"></span>
        </div>
        <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]">
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="main-container ">
        {aboutData != null && aboutData != undefined ? (
          <div className="pt-[2px] main-container">
            <DynamicBanner2 data={aboutData} />
            <DynamicNavbar />
            <DynamicSection data={aboutData}></DynamicSection>
          </div>
        ) : errorAbout ? (
          <>
            <NotFound />
          </>
        ) : (
          <div className="main-container justify-center items-center">
            <div className="main-container flex justify-center items-center">
              <span className="loading loading-ring loading-lg text-[#F60]"></span>
            </div>
            <DynamicFooter></DynamicFooter>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
