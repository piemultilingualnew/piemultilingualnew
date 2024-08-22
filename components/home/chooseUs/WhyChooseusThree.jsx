import Image from "next/image";
import { useState } from "react";
import parse from "html-react-parser";
import styles from "./chooseusthree.module.scss";

const WhyChooseusThree = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const SetContent = ({ textt }) => {
    textt = textt.replace(
      /^#\s(.+)/gm,
      '<h1 class="font-acme inline-block text-[25px] uppercase font-normal mb-[2px] mt-[0px]  text-[#30B1C0]">$1</h1>'
    );
    textt = textt.replace(
      /^##\s(.+)/gm,
      '<h2 class="font-acme inline-block text-[24px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h2>'
    );
    textt = textt.replace(
      /^###\s(.+)/gm,
      '<h3 class="font-acme inline-block text-[23px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h3>'
    );
    textt = textt.replace(
      /^####\s(.+)/gm,
      '<h4 class="font-acme inline-block text-[22px] uppercase font-normal mb-[2px] mt-[25px]  text-[#30B1C0]">$1</h4>'
    );
    textt = textt.replace(
      /^#####\s(.+)/gm,
      '<h5 class="font-acme inline-block text-[21px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h5>'
    );
    textt = textt.replace(
      /^######\s(.+)/gm,
      '<h6 class="font-acme inline-block text-[20px] uppercase font-normal mb-[2px] mt-[4px] text-[#30B1C0]">$1</h6>'
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
    const parsedContent = parse(textt, {
      decodeEntities: true,
    });
    return (
      <p className="text-[14px] leading-[25px] text-white font-normal font-roboto">
        {parsedContent}
      </p>
    );
  };
  if (!data) {
    return <>No data found!</>
  }
  return (
    <div className="w-full max-w-[1210px] mx-auto my-[30px]">
      <p className="text-[47px] font-medium font-acme mb-[10px]">
        {data.heading}
      </p>
      <div
        className={`${styles.section_wrapper} flex items-center justify-center gap-[5rem]`}
      >
        <div
          className={`w-full md:w-3/5 max-w-[800px] md:max-xl:w-[55%] md:my-0 my-6 ${styles.side_content}`}
        >
          {data.image.data ? (
            <Image
              src={
                process.env.NEXT_PUBLIC_mainurl + data.image.data.attributes.url
              }
              width={200}
              height={200}
              className={`rounded-full xl:w-[450px] xl:h-[450px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] ${styles.side_img}`}
              alt=""
            />
          ) : (
            <Image
              src="/imgs/default.jpg"
              width={200}
              height={200}
              className={`rounded-full xl:w-[450px] xl:h-[450px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] ${styles.side_img}`}
              alt=""
            />
          )}
          <div
            className={`xl:w-[450px] xl:h-[450px] md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-[50%] md:rounded-full bg-[#d80650e6] ${styles.circle_content} flex items-center justify-center`}
          >
            {data.cards.map((card, i) => (
              <div
                className={`text-white w-3/4 ${
                  i !== currentSlide ? "hidden" : ""
                }`}
                key={i}
              >
                <p className="font-bold sm:text-lg">{card.button}</p>
                <SetContent textt={card.content} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8 md:w-[30%] max-w-[300px] w-full font-semibold">
          {data.cards.map((card, index) => (
            <button
              className={`w-full py-2 px-4 flex items-center gap-4 ${
                currentSlide == index
                  ? "bg-[#d80650e6] text-white"
                  : "bg-slate-200"
              } rounded-l-full`}
              onClick={() => {
                setCurrentSlide(index);
              }}
              key={index}
            >
              <i className="flaticon-report text-[30px]"></i>
              <p>{card.button}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseusThree;
