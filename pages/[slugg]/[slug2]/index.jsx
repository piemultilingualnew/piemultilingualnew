import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useCallback } from "react";
import { resetHire } from "@/Redux/features/hireSlice";
import { resetInner2 } from "@/Redux/features/inner2Slice";
import { resetInner3 } from "@/Redux/features/inner3Slice";

const Footer = dynamic(() => import("@/components/Footer/page"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const Navbar = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/Navbar/Navbar"
    ),
  {
    loading: () => <div className="w-full min-h-[200px]">Loading</div>,
  }
);
const Banner = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/banner/Banner"
    ),
  {
    loading: () => <div className="w-full min-h-[300px]">Loading</div>,
  }
);
const Section = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/sections/page"
    ),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
const NotFound = dynamic(() => import("@/components/layout/NotFound"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { hireData, loadingHire } = useSelector((state) => state.hire);
  const { inner2Data, loadingInner2 } = useSelector((state) => state.inner2);
  const { inner3Data, loadingInner3, errorInner3 } = useSelector(
    (state) => state.inner3
  );

  const fetchData = useCallback(async () => {
    const {fetchInner2Data} = await import("@/Redux/actions/inner2Actions");

    let url = router.asPath.slice(0, -1);
    let parts = url.split("/")[1]?.replace(/-/g, " ") || "";

    dispatch(resetInner2());
    dispatch(resetInner3());
    dispatch(resetHire());

    dispatch(fetchInner2Data(url));
  }, [router.asPath, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loadingHire || loadingInner2 || loadingInner3)
    return (
      <div className="main-container justify-center items-center">
        <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
          <span className="loading loading-ring loading-lg text-[#F60]"></span>
        </div>
        <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]"></div>
      </div>
    );

  const renderContent = (data) => (
    <>
      <Banner data={data} />
      <Navbar />
      <div className="main-container flex justify-center items-center">
        <Section data={data}></Section>
      </div>
    </>
  );

  return (
    <div className="">
      {hireData ? (
        renderContent(hireData)
      ) : inner2Data ? (
        renderContent(inner2Data)
      ) : inner3Data ? (
        renderContent(inner3Data)
      ) : errorInner3 === "error" ? (
        <NotFound />
      ) : (
        <div className="main-container justify-center items-center">
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
