import Image from "next/image";
import { useState, useEffect } from "react";
export default function IndustriesCards(props) {
  const [text, setText] = useState("");
  useEffect(() => {
    let textt = props?.data?.content != null ? props.data.content : "";
    textt = textt.replace(
      /^#\s(.+)/gm,
      '<h1 class="font-acme text-[24px] uppercase font-normal mb-[-10px] text-[#30B1C0]">$1</h1>'
    );
    textt = textt.replace(
      /^##\s(.+)/gm,
      '<h2 class="font-acme text-[22px] uppercase font-normal mb-[-15px] text-[#30B1C0]">$1</h2>'
    );
    textt = textt.replace(
      /^###\s(.+)/gm,
      '<h3 class="font-acme text-[21px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h3>'
    );
    textt = textt.replace(
      /^####\s(.+)/gm,
      '<h4 class="font-acme text-[20px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h4>'
    );
    textt = textt.replace(
      /^#####\s(.+)/gm,
      '<h5 class="font-acme text-[19px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h5>'
    );
    textt = textt.replace(
      /^######\s(.+)/gm,
      '<h6 class="font-acme text-[18px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h6>'
    );
    textt = textt.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-[]">$1</strong>'
    );
    textt = textt.replace(/\*(.*?)\*/g, "<em>$1</em>");
    textt = textt.replace(/_(.*?)_/g, "<em>$1</em>");
    textt = textt.replace(
      /!\[([^\]]+)\]\(([^)]+)\)/g,
      `<img src="${process.env.NEXT_PUBLIC_mainurl}$2" >`
    );
    textt = textt.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class=" text-[#f60] font-semibold">$1</a>'
    );
    textt = textt.replace(/\n/gi, "<br/> \n");
    textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
      const listItems = match
        .trim()
        .split("\n")
        .map((item) => `<li class="">${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='chooseus mt-[-10px] grid grid-cols-2'>\n${listItems}\n</ul>`;
    });
    setText(textt);
  }, [props.data]);

  return (
    <div
      className={`langcard ${
        props.num % 2 == 0 ? "bg-[#fef5ef]" : "bg-[#e4f7f9]"
      }  w-[850px] h-[225px] rounded-l-[20px] gap-[20px] flex mt-[20px]`}
    >
      <div className="w-[175px] h-full flex flex-col justify-center items-center relative">
        {props.data.image.data != null && props.data.image.data != undefined ? (
          <Image
            src={
              process.env.NEXT_PUBLIC_mainurl +
              props.data.image.data.attributes.url
            }
            width={1000}
            height={1000}
            className="z-10 relative object-cover rounded-l-[10px] h-[100%] w-[175px]"
            alt=""
          ></Image>
        ) : (
          <Image
            src="/imgs/default.jpg"
            width={1000}
            height={1000}
            className="z-10 relative object-cover rounded-[10px] h-[100%] w-[175px]"
            alt=""
          ></Image>
        )}
      </div>
      <div
        className="w-[695px] py-[8px] text-[14px] leading-[25px] overflow-hidden "
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </div>
  );
}
