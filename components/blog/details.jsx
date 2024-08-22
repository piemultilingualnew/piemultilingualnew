import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
export default function Details(props) {
  const { blogData, blogDetail } = useSelector(
    (state) => state.blog
  );
  const data = blogDetail != null ? blogDetail : props.data;
  const [text, setText] = useState("");
  useEffect(() => {
    let textt = data?.content ?? "";
    textt = textt.replace(
      /^#\s(.+)/gm,
      '<h1 class="font-acme text-[32px] uppercase font-normal mb-[-10px] text-[#30B1C0]">$1</h1>'
    );
    textt = textt.replace(
      /^##\s(.+)/gm,
      '<h2 class="font-acme text-[24px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h2>'
    );
    textt = textt.replace(
      /^###\s(.+)/gm,
      '<h3 class="font-acme text-[20px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h3>'
    );
    textt = textt.replace(
      /^####\s(.+)/gm,
      '<h4 class="font-acme text-[18px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h4>'
    );
    textt = textt.replace(
      /^#####\s(.+)/gm,
      '<h5 class="font-acme text-[16px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h5>'
    );
    textt = textt.replace(
      /^######\s(.+)/gm,
      '<h6 class="font-acme text-[14px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h6>'
    );
    textt = textt.replace(/\{service\}/g, () => "<Document></Document>");
    textt = textt.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-[#F60]">$1</strong>'
    );
    textt = textt.replace(/\*(.*?)\*/g, "<em>$1</em>");
    textt = textt.replace(/_(.*?)_/g, "<em>$1</em>");
    textt = textt.replace(
      /!\[([^\]]+)\]\(([^)]+)\)/g,
      `<img src="${process.env.NEXT_PUBLIC_mainurl}$2" class='w-[100%] h-[100%]'>`
    );
    textt = textt.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-[#F60] font-bold">$1</a>'
    );
    textt = textt.replace(/\n/gi, "<br/> \n");
    textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
      const listItems = match
        .trim()
        .split("\n")
        .map((item) => `<li class="">${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='chooseus'>\n${listItems}\n</ul>`;
    });
    setText(textt);
  }, [data]);

  const reverseData = blogData != null ? [...blogData].reverse() : [];
  return (
    <div className="max-w-[840px]">
      <div className="border-b-2 border-solid border-[#30B1C0] pb-[10px]">
        <div className="bg-[#30B1C0] h-[50px] w-[100%] overflow-hidden rounded-tl-[50px] ">
          <p className="font-acme text-[32px] uppercase font-normal mb-[-10px] truncate h-[50px] max-w-[840px] text-[#FFF] ml-[20px]">
            {data.title}
          </p>
        </div>
      </div>
      <div
        className="text-[15px] leading-[30px] font-roboto font-normal text-[#333] max-w-[840px]"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>

      <div className="h-[38px] w-full bg-[#F60] flex justify-center mt-[20px]">
        <p className="uppercase font-acme text-[24px] font-normal text-[#FFF]">
          recent post
        </p>
      </div>
      <div className="flex md:flex-row flex-col">
        {reverseData?.map((e, i) => {
          return (
            <div key={i} className="w-[188px] p-[20px]">
              {e.attributes.image.data != null &&
              e.attributes.image.data != undefined ? (
                <Image
                  src={
                    process.env.NEXT_PUBLIC_mainurl +
                    e.attributes.image.data.attributes.url
                  }
                  height={145}
                  width={180}
                  className="  h-[145px] w-[180px] object-cover "
                  alt="img"
                ></Image>
              ) : (
                <Image
                  src="/imgs/default.jpg"
                  width={0}
                  height={0}
                  sizes="100%"
                  alt=""
                  priority
                />
              )}
              <Link
                href={e.attributes.url}
                className="h-[120px] text-[#337AB7] py-[20px] font-roboto text-[14px]  flex justify-center ellipsis overflow-hidden"
              >
                {e.attributes.title}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="h-[151px] border-solid p-[10px] border-y-[2px] border-[#CCC] mt-[50px] bg-[#F8F8F8]">
        <p className="uppercase font-acme text-[24px] font-normal text-[#555]">
          admin
        </p>
        <div className="flex">
          {data.author?.image?.data != null ? (
            <Image
              src={
                process.env.NEXT_PUBLIC_mainurl + data.image.data.attributes.url
              }
              height={125}
              width={140}
              className="  h-[125px] w-[140px] object-cover "
              alt="img"
            ></Image>
          ) : (
            <Image
              src="/imgs/default.jpg"
              width={100}
              height={100}
              sizes="100%"
              alt=""
              priority
            />
          )}
          <p className="ml-[10px]">
            PIE Multilingual Services is a Business Service company that helps
            to cut operation cost. By providing superior service at economical
            cost this company is able to generate extra revenue for them.
          </p>
        </div>
      </div>
    </div>
  );
}
