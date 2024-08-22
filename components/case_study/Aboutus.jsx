import { useState, useEffect } from "react";

const Aboutus = ({ content }) => {
  const [text, setText] = useState();
  useEffect(() => {
    let textt = "";
    textt = content || "";
    textt = textt.replace(/^#\s(.+)/gm, (match) => {
      let content = match;
      const isLink = content.match(/\[([^[\]]+)\]\(([^)]+)\)/);
      if (isLink) {
        content = content.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-[#F60]">$1</a>'
        );
      }
      content = content.replace(
        /^#\s(.+)/gm,
        '<h1 class="font-acme inline-block text-[25px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h1>'
      );
      return content;
    });
    textt = textt.replace(/^##\s(.+)/gm, (match) => {
      let content = match;
      const isLink = content.match(/\[([^[\]]+)\]\(([^)]+)\)/);
      if (isLink) {
        content = content.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-[#F60]">$1</a>'
        );
      }
      content = content.replace(
        /^##\s(.+)/gm,
        '<h2 class="font-acme inline-block text-[24px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h2>'
      );
      return content;
    });
    textt = textt.replace(/^###\s(.+)/gm, (match) => {
      let content = match;
      const isLink = content.match(/\[([^[\]]+)\]\(([^)]+)\)/);
      if (isLink) {
        content = content.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-[#F60]">$1</a>'
        );
      }
      content = content.replace(
        /^###\s(.+)/gm,
        '<h3 class="font-acme inline-block text-[23px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h3>'
      );
      return content;
    });
    textt = textt.replace(/^####\s(.+)/gm, (match) => {
      let content = match;
      const isLink = content.match(/\[([^[\]]+)\]\(([^)]+)\)/);
      if (isLink) {
        content = content.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-[#F60]">$1</a>'
        );
      }
      content = content.replace(
        /^####\s(.+)/gm,
        '<h4 class="font-acme inline-block text-[22px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h4>'
      );
      return content;
    });
    textt = textt.replace(/^#####\s(.+)/gm, (match) => {
      let content = match;
      const isLink = content.match(/\[([^[\]]+)\]\(([^)]+)\)/);
      if (isLink) {
        content = content.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-[#F60]">$1</a>'
        );
      }
      content = content.replace(
        /^#####\s(.+)/gm,
        '<h5 class="font-acme inline-block text-[21px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h5>'
      );
      return content;
    });
    textt = textt.replace(/^######\s(.+)/gm, (match) => {
      let content = match;
      const isLink = content.match(/\[([^[\]]+)\]\(([^)]+)\)/);
      if (isLink) {
        content = content.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-[#F60]">$1</a>'
        );
      }
      content = content.replace(
        /^######\s(.+)/gm,
        '<h6 class="font-acme inline-block text-[20px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h6>'
      );
      return content;
    });
    textt = textt.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-[#F60]">$1</strong>'
    );
    textt = textt.replace(/\*(.*?)\*/g, "<em>$1</em>");
    textt = textt.replace(/_(.*?)_/g, '<em style="font-size:15px;">$1</em>');
    textt = textt.replace(
      /!\[([^\]]+)\]\(([^)]+)\)/g,
      `<img src="${process.env.NEXT_PUBLIC_mainurl}$2" >`
    );
    textt = textt.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" class="text-[#F60] font-bold">$1</a>'
    );
    textt = textt.replace(/\n/gi, "<span class='mb-[8px] block'></span> \n");
    textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
      const listItems = match
        .trim()
        .split("\n")
        .map((item) => `<li class="leading-[22px]">${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='chooseus'>\n${listItems}\n</ul>`;
    });
    textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
      const listItems = match
        .trim()
        .split("\n")
        .map((item) => `<li class="leading-[22px]">${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
    });
    setText(textt);
  }, [content]);
  return <div dangerouslySetInnerHTML={{ __html: text }}></div>;
};

export default Aboutus;
