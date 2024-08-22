"use client";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Casestudy = dynamic(() => import("@/components/case_study/page"), {
  loading: () => () => <div className="w-full min-h-screen">Loading</div>,
});
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

const Last = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/sections/last"
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
  const { caseData, loadingCase, errorCase } = useSelector(
    (state) => state.caseStudy
  );
  const { caseDetailData, loadingCaseDetail, errorCaseDetail } = useSelector(
    (state) => state.caseDetail
  );

  useEffect(() => {
    const fetching = async () => {
      const { fetchCaseStudyData } = await import(
        "@/Redux/actions/caseStudyActions"
      );
      const { fetchCaseDetailsData } = await import(
        "@/Redux/actions/caseDetailActions"
      );

      if (router.asPath) {
        let url = router.asPath;
        url = url.substring(0, url.length - 1);
        let parts = url.split("/");
        parts = parts[1] ? parts[1].replace(/-/g, " ") : "";

        dispatch(fetchCaseStudyData(url));
        dispatch(fetchCaseDetailsData(url));
      }
    };
    fetching();
  }, [router.asPath, dispatch]);

  if (loadingCase || loadingCaseDetail)
    return (
      <div className="main-container justify-center items-center">
        <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
          <span className="loading loading-ring loading-lg text-[#F60]"></span>
        </div>
        <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]">
        </div>
      </div>
    );

  return (
    <div className="">
      {caseData != null ? (
        <div className="">
          <div className="relative z-10 bg-white">
            <div className="main-container mb-[30px] flex justify-center items-center">
              <Casestudy data={caseData}></Casestudy>
            </div>
            <Last></Last>
          </div>
          <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]">
            <Footer></Footer>
          </div>
        </div>
      ) : caseDetailData != null ? (
        <>
          <div className=" flex flex-col justify-center pt-[20px] bg-white items-center">
            <Banner data={caseDetailData} />
            <Navbar />
            <Section data={caseDetailData}></Section>
          </div>
        </>
      ) : errorCase && errorCaseDetail ? (
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
