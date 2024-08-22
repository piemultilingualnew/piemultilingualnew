import { useState } from "react";
import parse from "html-react-parser";
import CallCenterSoftware from "./CallCenterSoftware";
import Image from "next/image";

export default function WhyChooseUsTwo(props) {
  const [tab, setTab] = useState(0);
  const SetContent = ({ textt }) => {
    textt = textt.replace(
      /^#\s(.+)/gm,
      '<h1 class=" font-acme text-[24px]">$1</h1>'
    );
    textt = textt.replace(
      /^##\s(.+)/gm,
      `<h2 class="font-acme text-[27px]">$1</h2>`
    );
    textt = textt.replace(
      /^###\s(.+)/gm,
      '<h3 class="font-acme orangeText">$1</h3>'
    );
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
    textt = textt.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-[#F60] font-bold">$1</a>'
    );
    textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
      const listItems = match
        .trim()
        .split("\n")
        .map((item) => `<li class="leading-[22px]">${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='chooseus'>\n${listItems}\n</ul>`;
    });
    textt = textt.replace(/\n/gi, "<span class='mb-[8px]  block'></span> \n");
    textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
      const listItems = match
        .trim()
        .split("\n")
        .map((item) => `<li class="leading-[22px]">${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
    });
    textt = textt.replace(
      /\{callcenter_logos\}/g,
      () => "<CallCenterSoftware></CallCenterSoftware>"
    );
    const parsedContent = parse(textt, {
      decodeEntities: true,
      replace: (node) => {
        if (node.name === "callcentersoftware") {
          return <CallCenterSoftware />;
        }
        return undefined;
      },
    });
    return (
      <p className="text-[15px] leading-[25px] text-black font-normal font-roboto">
        {parsedContent}
      </p>
    );
  };

  if (!props || !props.data) {
    return <>No data found!</>
  }
  return (
    <div className="w-full mt-[20px] max-w-[1210px] mx-auto">
      <p className="text-[47px] font-medium font-acme">{props.data.heading}</p>
      <div className="flex justify-center min-h-[585px]">
        <div className="w-[1210px] flex">
          <div className="w-[50%] h-full flex p-2 gap-2">
            <div className=" bg-cover h-full w-[50%]">
              {props.data.image.data ? (
                <Image
                  src={
                    process.env.NEXT_PUBLIC_mainurl +
                    props.data.image.data.attributes.url
                  }
                  alt=""
                  width={400}
                  height={900}
                  className="w-full h-full"
                />
              ) : (
                <Image
                  src="/imgs/default.jpg"
                  alt=""
                  width={400}
                  height={900}
                  className="w-full h-full"
                />
              )}
            </div>
            <div className="w-[40%] flex flex-col gap-2 h-full">
              <div className="w-full h-[50%] bg-[#30B1C0] flex flex-col items-center justify-center text-white px-4 gap-[10px]">
                <i className="flaticon-email text-[55px] font-[900]"></i>
                <h2 className="text-[45px] font-acme font-bold">
                  <span className="font-roboto">9</span> hr
                </h2>
                <p className="text-center">
                  Avarage time to resolve a cyber attack.
                </p>
              </div>
              <div className="w-full h-[50%] bg-[#f39353] flex flex-col text-white items-center justify-center px-4 gap-[10px]">
                <i className="flaticon-support text-[55px] font-[900]"></i>
                <h2 className="text-[45px] font-acme font-bold">
                  <span className="font-roboto">9</span> hr
                </h2>
                <p className="text-center">
                  Avarage time to resolve a cyber attack.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[50%] overflow-hidden">
            <div className="flex justify-between gap-4 w-full mt-2 text-[#F60]">
              {props.data.cards != null
                ? props.data.cards.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className={`text-[14px] text-center cursor-pointer font-semibold p-1 rounded-md border-2 border-[#f60] ${
                          tab === i ? "text-[#f60]" : "bg-[#f60] text-white"
                        } transition`}
                        onClick={() => {
                          setTab(i);
                        }}
                      >
                        <p className={`px-2 py-1 transition`}>{e.button}</p>
                      </div>
                    );
                  })
                : ""}
            </div>
            <div className="w-full h-[88%]">
              {props.data.cards != null
                ? props.data.cards.map((e, i) => {
                    return (
                      <div
                        key={i}
                        className={` w-full h-full bg-[#f4f4f4] p-2 flex pt-6 flex-col ${
                          tab === i ? "" : "hidden"
                        }`}
                      >
                        <SetContent textt={e.content} />
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
