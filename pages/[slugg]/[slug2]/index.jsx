"use client";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { resetHire } from "@/Redux/features/hireSlice";
import { resetInner2 } from "@/Redux/features/inner2Slice";
import { resetInner3 } from "@/Redux/features/inner3Slice";

const Footer = dynamic(() => import("@/components/Footer/page"), {
  loading: () => () => <div className="w-full min-h-screen">Loading</div>,
});
const Navbar = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/Navbar/Navbar"
    ),
  {
    loading: () => () => <div className="w-full min-h-[200px]">Loading</div>,
  }
);
const Banner = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/banner/Banner"
    ),
  {
    loading: () => () => <div className="w-full min-h-[300px]">Loading</div>,
  }
);
const Section = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/sections/page"
    ),
  {
    loading: () => () => <div className="w-full min-h-screen">Loading</div>,
  }
);

const NotFound = dynamic(() => import("@/components/layout/NotFound"), {
  loading: () => () => <div className="w-full min-h-screen">Loading</div>,
});

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { hireData, loadingHire, errorHire } = useSelector(
    (state) => state.hire
  );
  const { inner2Data, loadingInner2, errorInner2 } = useSelector(
    (state) => state.inner2
  );
  const { inner3Data, loadingInner3, errorInner3 } = useSelector(
    (state) => state.inner3
  );

  useEffect(() => {
    const fetching = async () => {
      const { fetchInner2Data } = await import("@/Redux/actions/inner2Actions");
      const { fetchInner3Data } = await import("@/Redux/actions/inner3Actions");
      const { fetchHireData } = await import("@/Redux/actions/hireActions");

      if (router.asPath) {
        let url = router.asPath;
        url = url.substring(0, url.length - 1);
        let parts = url.split("/");
        parts = parts[1] ? parts[1].replace(/-/g, " ") : "";
        let urltwo = url + "/";
        dispatch(resetInner3());
        dispatch(resetInner2());
        dispatch(resetHire());

        await Promise.all([dispatch(fetchInner2Data(url))]);
        await Promise.all([dispatch(fetchInner3Data(url))]);
        await Promise.all([dispatch(fetchHireData(urltwo))]);
      }
    };
    fetching();
  }, [router.asPath, dispatch]);

  if (loadingHire || loadingInner2 || loadingInner3)
    return (
      <div className="main-container justify-center items-center">
        <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
          <span className="loading loading-ring loading-lg text-[#F60]"></span>
        </div>
        <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]"></div>
      </div>
    );

  return (
    <div className="">
      {hireData ? (
        <>
          <Banner data={hireData} />
          <Navbar />
          <div className="main-container   flex justify-center items-center">
            <Section data={hireData}></Section>
          </div>
        </>
      ) : inner2Data ? (
        <>
          <Banner data={inner2Data} />
          <Navbar />
          <div className="main-container   flex justify-center items-center">
            <Section data={inner2Data}></Section>
          </div>
        </>
      ) : inner3Data ? (
        <>
          <Banner data={inner3Data} />
          <Navbar />
          <div className="main-container   flex justify-center items-center">
            <Section data={inner3Data}></Section>
          </div>
        </>
      ) : errorInner2 && errorInner3 && errorHire ? (
        <NotFound />
      ) : (
        <div className="main-container  justify-center items-center">
          <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
            <span className="loading loading-ring loading-lg text-[#F60]"></span>
          </div>
          <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]">
            <Footer></Footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
