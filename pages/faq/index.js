import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
const Banner = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/banner/Banner"
    ),
  {
    loading: () => <div className="w-full min-h-[400px]">Loading</div>,
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
export default function FAQ() {
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

        dispatch(fetchAboutData(searchurl));
      }
    };

    fetching();
  }, [router.asPath, dispatch]);

  if (loadingAbout) {
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
    <div>
      {aboutData != null && aboutData != undefined ? (
        <Banner data={aboutData}></Banner>
      ) : (
        ""
      )}
      <div className="main-container flex justify-center items-center">
        <Section data={aboutData}></Section>
      </div>
    </div>
  );
}
