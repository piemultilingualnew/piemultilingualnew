"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";

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
  const { inner3Data, loadingInner3, errorInner3 } = useSelector(
    (state) => state.inner3
  );


  useEffect(() => {
    const fetching = async () => {
      const { fetchInner3Data } = await import("@/Redux/actions/inner3Actions");
      if (router.asPath) {
        let url = router.asPath;
        url = url.substring(0, url.length - 1);
        let parts = url.split("/");
        parts = parts[1] ? parts[1].replace(/-/g, " ") : "";

        dispatch(fetchInner3Data(url));
      }
    };

    fetching();
  }, [router.asPath, dispatch]);

  if (loadingInner3) {
    return (
      <div className="main-container justify-center items-center">
        <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
          <span className="loading loading-ring loading-lg text-[#F60]"></span>
        </div>
        <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]"></div>
      </div>
    );
  }

  return (
    <>
      <div className="main-container ">
        {inner3Data != null && inner3Data != undefined ? (
          <div className="pt-[2px] main-container">
            <DynamicBanner2 data={inner3Data} />
            <DynamicNavbar />
            <DynamicSection data={inner3Data}></DynamicSection>
          </div>
        ) : errorInner3 ? (
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
