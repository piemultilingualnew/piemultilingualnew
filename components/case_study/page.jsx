import dynamic from "next/dynamic";
const BlogCards = dynamic(() => import("@/components/case_study/cards"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
import Banner from "../foreign-language-services/language-translation/banner/Banner";
import { useState } from "react";
import { useBlogData } from "@/context/blogapi";
import { useSelector } from "react-redux";
const RightSection = dynamic(
  () =>
    import(
      "../foreign-language-services/language-translation/content/RightSection"
    ),
  {
    loading: () => <div className="w-[500px] min-h-[500px]">Loading</div>,
  }
);

export default function Blog() {
  const { caseData, loadingCase, errorCase } = useSelector(
    (state) => state.caseStudy
  );
  const dataa = caseData;
  const { blogData, loadingBlogData, errorBlogData } = useSelector(
    (state) => state.blog
  );
  const [showDetails, setShowDetails] = useState(false);
  const [detailsData, setDetailsData] = useState();
  const setdetails = (data) => {
    setDetailsData(data);
    setShowDetails(true);
  };
  return dataa != null || blogData != null ? (
    <div className="max-w-[1210px] w-full gap-[40px] relative bg-white  ">
      {dataa?.Banner != null ? <Banner data={dataa}></Banner> : ""}
      <div className="flex md:flex-row flex-col mt-[30px] max-w-[1210px] gap-[20px] justify-between">
        {<BlogCards click={setdetails}></BlogCards>}
        <div
          className={`w-[345px] md:w-[420px] sticky flex flex-col top-0 right-0 h-[100%] mb-[30px] mr-[12px]`}
        >
          <RightSection></RightSection>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
