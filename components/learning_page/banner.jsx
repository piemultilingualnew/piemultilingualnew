import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const RightSection = dynamic(() =>
  import(
    "../foreign-language-services/language-translation/content/RightSection"
  )
);
import { useRouter } from "next/router";
export default function LearningBanner(props) {
  const navigate = useRouter();
  const { rh } = navigate.query;
  let rhContent = "";
  if (rh?.indexOf("-")) {
    rhContent = rh.split("-").join(" ");
  }
  if (rh?.indexOf("_")) {
    rhContent = rhContent.split("_").join(" ");
  }
  const [text, setText] = useState();
  useEffect(() => {
    let textt =
      props?.data?.Banner?.content != null ? props.data.Banner.content : "";
    textt = textt.replace(/{{(.*?)}}/g, `${rhContent}`);
    textt = textt.replace(
      /^#\s(.+)/gm,
      '<h1 class="font-normal leading-[32px] capitalize font-acme text-[28px] text-[#F60] w-full">$1</h1>'
    );
    textt = textt.replace(
      /^##\s(.+)/gm,
      '<h2 class="capitalize leading-[32px] font-fira-sans font-medium text-[28px] text-[#FFF] w-full">$1</h2>'
    );
    textt = textt.replace(
      /^###\s(.+)/gm,
      '<h3 class="font-normal leading-[32px] font-acme text-[28px] text-[#FFF] w-full">$1</h3>'
    );
    textt = textt.replace(
      /^####\s(.+)/gm,
      '<h4 class="font-normal font-acme  text-[21px] uppercase  text-[#f60]">$1</h4>'
    );
    textt = textt.replace(
      /^#####\s(.+)/gm,
      '<h5 class="font-normal font-acme  text-[21px] uppercase  text-[#f60]">$1</h5>'
    );
    textt = textt.replace(
      /^######\s(.+)/gm,
      '<h6 class="font-normal font-acme  text-[21px] uppercase  text-[#f60]">$1</h6>'
    );
    textt = textt.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-[#F60]">$1</strong>'
    );
    textt = textt.replace(/\*(.*?)\*/g, "<em>$1</em>");
    textt = textt.replace(/_(.*?)_/g, "<em>$1</em>");
    textt = textt.replace(
      /!\[([^\]]+)\]\(([^)]+)\)/g,
      `<img src="${process.env.NEXT_PUBLIC_mainurl}$2" >`
    );
    textt = textt.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-[#F60] font-bold">$1</a>'
    );
    textt = textt.replace(/\n/gi, "<span class='mb-[10px]  block'></span> \n");
    textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
      const listItems = match
        .trim()
        .split("\n")
        .map((item) => `<li class=' flex  items-center'>${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='arrowli font-roboto gap-[10px] flex flex-col justify-between'>\n${listItems}\n</ul>`;
    });

    setText(textt);
  }, [props, rh]);
  return (
    <div
      style={{
        backgroundImage: `url(${
          process.env.NEXT_PUBLIC_mainurl +
          props.data.Banner.image.data.attributes.url
        })`,
      }}
      className="h-[601px]  w-full bg-cover flex  justify-center items-center"
    >
      <div className="flex gap-[120px] justify-between">
        <div
          className="sm:w-[625px] w-[300px] px-[20px]  h-[273px] flex flex-col justify-center  bg-[#00000088] border-solid border-l-4 border-[#F60]"
          dangerouslySetInnerHTML={{ __html: text }}
        ></div>
        <div className="hidden md:block w-[320px]">
          <RightSection></RightSection>
        </div>
      </div>
    </div>
  );
}
