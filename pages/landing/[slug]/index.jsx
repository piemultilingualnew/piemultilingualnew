"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import dynamic from "next/dynamic";
import { resetInner1 } from "@/Redux/features/innner1Slice";
import { resetInner3 } from "@/Redux/features/inner3Slice";
import { resetLearning } from "@/Redux/features/learningSlice";
import { resetAbout } from "@/Redux/features/aboutSlice";

const Banner = dynamic(() => import("@/components/home/banner/Banner"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const DynamicVideo = dynamic(() => import("@/components/home/video/Video"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const DynamicServices = dynamic(
  () => import("@/components/home/services/Services"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
const DynamicSteps = dynamic(() => import("@/components/parts/step"));
const DynamicCountries = dynamic(
  () => import("@/components/home/countries/Countries"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
const DynamicChooseUs = dynamic(
  () => import("@/components/home/chooseUs/ChooseUs"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
const DynamicChooseUsTwo = dynamic(
  () => import("@/components/parts/whychooseustwo"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
const WhyChooseGrid = dynamic(
  () => import("@/components/parts/WhyChooseGrid"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
const ChooseUsThree = dynamic(
  () => import("@/components/home/chooseUs/ChooseusChart"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
const DynamicPoints = dynamic(() => import("@/components/parts/point"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const DynamicTestimonials = dynamic(
  () => import("@/components/home/testimonials/Testimonials"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
const DynamicPricing = dynamic(
  () => import("@/components/home/pricing/Pricing"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
const DynamicContact = dynamic(
  () => import("@/components/home/contact/Contact"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
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
const DynamicLearningBanner = dynamic(
  () => import("@/components/learning_page/banner"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
const DynamicCounters = dynamic(
  () => import("@/components/learning_page/counter"),
  {
    loading: () => <div className="w-full min-h-[250px]">Loading</div>,
  }
);
const DynamicService = dynamic(() => import("@/components/parts/services"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const DynamicAboutme = dynamic(() => import("@/components/parts/aboutme"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const DynamicHappyClient = dynamic(() => import("@/components/parts/clients"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const DynamicIndustries = dynamic(
  () => import("@/components/home/industries/Industries"),
  {
    loading: () => <div className="w-full min-h-[250px]">Loading</div>,
  }
);
const DynamicCaseStudies = dynamic(
  () => import("@/components/home/caseStudies/CaseStudies"),
  {
    loading: () => <div className="w-full min-h-[250px]">Loading</div>,
  }
);
const IndustriesChoose = dynamic(
  () => import("@/components/parts/industries_choose"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);
const NotFound = dynamic(() => import("@/components/layout/NotFound"), {
  loading: () => () => <div className="w-full min-h-screen">Loading</div>,
});

const QualityCheck = dynamic(() => import("@/components/parts/QualityCheck"), {
  loading: () => <div className="w-full min-h-[500px]">Loading</div>,
});
const WhyChooseusThree = dynamic(
  () => import("@/components/home/chooseUs/WhyChooseusThree"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { inner1Data, loadingInner1, errorInner1 } = useSelector(
    (state) => state.inner1
  );
  const { inner3Data, loadingInner3, errorInner3 } = useSelector(
    (state) => state.inner3
  );
  const { learningData, loadingLearning, errorLearning } = useSelector(
    (state) => state.learning
  );

  useEffect(() => {
    const fetching = async () => {
      const { fetchLearningData } = await import(
        "@/Redux/actions/learningActions"
      );
      const { fetchInner1Data } = await import("@/Redux/actions/inner1Actions");
      const { fetchInner3Data } = await import("@/Redux/actions/inner3Actions");

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

        dispatch(resetInner1());
        dispatch(resetInner3());
        dispatch(resetLearning());
        dispatch(resetAbout());

        dispatch(fetchLearningData(searchurl));
      }
    };

    fetching();
  }, [router.asPath, dispatch]);

  if (loadingLearning) {
    return (
      <div className="main-container justify-center items-center">
        <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
          <span className="loading loading-ring loading-lg text-[#F60]"></span>
        </div>
        <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]"></div>
      </div>
    );
  }

  if (errorInner3==="error") {
    console.log("error Inner 3 true..............!!!!!!!!!!!!");
  }

  return (
    <>
      <div className="main-container ">
        {learningData != null && learningData != undefined ? (
          <div>
            <DynamicLearningBanner data={learningData}></DynamicLearningBanner>
            <DynamicCounters data={learningData.number_box}></DynamicCounters>
            <div className="flex pt-[30px] pb-[50px] flex-col justify-center items-center">
              <DynamicService data={learningData.service}></DynamicService>
              <DynamicAboutme></DynamicAboutme>
              <IndustriesChoose></IndustriesChoose>
              <DynamicHappyClient></DynamicHappyClient>
            </div>
            <DynamicFooter></DynamicFooter>
          </div>
        ) : errorInner3==="error" ? (
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
