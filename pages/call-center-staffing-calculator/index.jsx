import parse from "html-react-parser";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

const Footer = dynamic(() => import("@/components/Footer/page"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const StaffingCalculator = dynamic(
  () => import("@/components/parts/StaffingCalculator"),
  {
    loading: () => <div className="w-[800px] min-h-screen">Loading</div>,
  }
);
const WhyChooseUsTwo = dynamic(
  () => import("@/components/parts/whychooseustwo"),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);

import Banner from "@/components/foreign-language-services/language-translation/banner/Banner";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [text, setText] = useState();
  const [headings, setHeadings] = useState();
  const { inner1Data, loadingInner1, errorInner1 } = useSelector(
    (state) => state.inner1
  );
  useEffect(() => {
    let textt = inner1Data?.Staffing_calculator?.content || "";
    let extractedHeadings = [];
    let remainingContent = textt;
    textt = textt.replace(/^#\s(.+)/gm, (_, content) => {
      const headingTag = `<h1 class="font-acme inline-block text-[24px] uppercase font-normal mb-[2px] text-[#30b1c0]">${content}</h1>`;
      extractedHeadings.push(headingTag);
      remainingContent = remainingContent.replace(`${headingTag}`, "");
      return headingTag;
    });
    remainingContent = remainingContent.replace(/^#\s(.+)/gm, "");
    textt = textt.replace(/^##\s(.+)/gm, (_, content) => {
      const headingTag = `<h2 class="font-acme inline-block text-[22px] uppercase font-normal text-[#30b1c0]">${content}</h2>`;
      extractedHeadings.push(headingTag);
      remainingContent = remainingContent.replace(`${headingTag}`, "");
      return headingTag;
    });
    remainingContent = remainingContent.replace(/^##\s(.+)/gm, "");
    textt = textt.replace(/^###\s(.+)/gm, (_, content) => {
      const headingTag = `<h3 class="font-acme inline-block text-[21px] uppercase font-normal mb-[2px] text-[#30b1c0]">${content}</h3>`;
      extractedHeadings.push(headingTag);
      remainingContent = remainingContent.replace(`${headingTag}`, "");
      return headingTag;
    });
    remainingContent = remainingContent.replace(/^###\s(.+)/gm, "");
    textt = textt.replace(/^####\s(.+)/gm, (_, content) => {
      const headingTag = `<h4 class="font-acme inline-block text-[20px] uppercase font-normal mb-[2px] text-[#30b1c0]">${content}</h4>`;
      extractedHeadings.push(headingTag);
      remainingContent = remainingContent.replace(`${headingTag}`, "");
      return headingTag;
    });
    remainingContent = remainingContent.replace(/^####\s(.+)/gm, "");
    textt = textt.replace(/^#####\s(.+)/gm, (_, content) => {
      const headingTag = `<h5 class="font-acme inline-block text-[19px] uppercase font-normal mb-[2px] text-[#30b1c0]">${content}</h5>`;
      extractedHeadings.push(headingTag);
      remainingContent = remainingContent.replace(`${headingTag}`, "");
      return headingTag;
    });
    remainingContent = remainingContent.replace(/^#####\s(.+)/gm, "");
    textt = textt.replace(/^######\s(.+)/gm, (_, content) => {
      const headingTag = `<h6 class="font-acme inline-block text-[18px] uppercase font-normal mb-[2px] text-[#30b1c0]">${content}</h6>`;
      extractedHeadings.push(headingTag);
      remainingContent = remainingContent.replace(`${headingTag}`, "");
      return headingTag;
    });
    remainingContent = remainingContent.replace(/^#######\s(.+)/gm, "");
    setHeadings(extractedHeadings.join(""));
    textt = remainingContent;
    textt = textt.replace(
      /\*\*(.*?)\*\*/g,
      '<strong className="text-[#F60]">$1</strong>'
    );
    textt = textt.replace(/\*(.*?)\*/g, "<em>$1</em>");
    textt = textt.replace(/_(.*?)_/g, "<em>$1</em>");
    textt = textt.replace(
      /!\[([^\]]+)\]\(([^)]+)\)/g,
      '<img src="$2" class="w-[100px] h-[200px]">'
    );
    textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    textt = textt.replace(/\n/gi, "<span class='mb-[8px] block'></span>");
    textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
      const listItems = match
        .trim()
        .split("\n")
        .map((item) => `<li class="leading-[22px]">${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
    });
    textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
      const listItems = match
        .trim()
        .split("\n")
        .map((item) => `<li class="leading-[22px]">${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='chooseus'>\n${listItems}\n</ul>`;
    });
    textt = textt.replace(
      /\{Staffing_calculator\}/g,
      () => "<StaffingCalculator></StaffingCalculator>"
    );
    const parsedContent = parse(textt, {
      decodeEntities: true,
      replace: (node) => {
        if (node.name === "staffingcalculator") {
          return (
            <StaffingCalculator
              inner1Data={inner1Data?.Staffing_calculator}
              fullWidth={true}
            />
          );
        }
        return undefined;
      },
    });
    setText(parsedContent);
  }, [inner1Data]);

  useEffect(() => {
    const fetching = async () => {
      const { fetchInner1Data } = await import("@/Redux/actions/inner1Actions");

      if (router.asPath) {
        let searchurl = router.asPath;
        const indexOfQuestionMark = searchurl.indexOf("?");
        if (indexOfQuestionMark !== -1)
          searchurl = searchurl.substring(0, indexOfQuestionMark - 1);
        else {
          searchurl = searchurl.substring(0, searchurl.length - 1);
        }

        dispatch(fetchInner1Data(searchurl));
      }
    };

    fetching();
  }, [router.asPath, dispatch]);

  if (loadingInner1) {
    return <div className="main-container justify-center items-center">
    <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
      <span className="loading loading-ring loading-lg text-[#F60]"></span>
    </div>
    <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]">
    </div>
  </div>;
  }

  return inner1Data ? (
    <div className="main-container">
      <Banner data2={inner1Data} />
      <div
        className="max-w-[1210px] mx-auto mt-[20px]"
        dangerouslySetInnerHTML={{ __html: headings }}
      ></div>
      <div className="max-w-[1210px] mx-auto flex">
        <div className="w-full mb-[30px]">{text}</div>
      </div>
      {inner1Data?.whyustwo && <WhyChooseUsTwo data={inner1Data.whyustwo} />}
      <Footer />
    </div>
  ) : (
    <div className="main-container justify-center items-center">
      <div className="main-container flex justify-center items-center">
        <span className="loading loading-ring loading-lg text-[#F60]"></span>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
