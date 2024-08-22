import { useState, useEffect } from "react";
export default function Details(props) {
  const { blogDetail } = useSelector((state) => state.blog);
  const data = blogDetail != null ? blogDetail : props.data;
  const [text, setText] = useState("");
  useEffect(() => {
    let textt = data?.content != null ? data.content : "";
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
        .map((item) => `<li>${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='chooseus'>\n${listItems}\n</ul>`;
    });
    setText(textt);
  }, [data]);
  return (
    <div>
      <div className="border-b-2 border-solid border-[#30B1C0] pb-[10px]">
        <div className="bg-[#30B1C0] h-[50px] w-[900px] overflow-hidden rounded-tl-[50px] ">
          <p className="font-acme text-[32px] uppercase font-normal mb-[-10px] truncate h-[50px] w-[900px] text-[#FFF] ml-[20px]">
            {data.tiitle}
          </p>
        </div>
      </div>
      <div
        className="text-[15px] leading-[30px] font-roboto font-normal text-[#333] w-[871px]"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>
    </div>
  );
}
