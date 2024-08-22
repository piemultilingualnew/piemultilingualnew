export default function Hire(props) {
  const Setcontent = (props) => {
    let textt = "";
    textt = props != null ? props : "";
    textt = textt.replace(
      /^#\s(.+)/gm,
      '<h1 class="h-[65px] text-center  text-neutral-800 text-[50px] font-bold font-roboto leading-[65px]">$1</h1>'
    );
    textt = textt.replace(
      /^##\s(.+)/gm,
      '<h2 class="h-[65px] text-center  text-neutral-800 text-[50px] font-bold font-roboto leading-[65px]">$1</h2>'
    );
    textt = textt.replace(
      /^###\s(.+)/gm,
      '<h3 class="h-[65px] text-center  text-neutral-800 text-[48px] font-bold font-roboto leading-[65px]">$1</h3>'
    );
    textt = textt.replace(
      /^####\s(.+)/gm,
      '<h4 class="h-[65px] text-center  text-neutral-800 text-[46px] font-bold font-roboto leading-[65px]">$1</h4>'
    );
    textt = textt.replace(
      /^#####\s(.+)/gm,
      '<h5 class="h-[65px] text-center  text-neutral-800 text-[44px] font-bold font-roboto leading-[65px]">$1</h5>'
    );
    textt = textt.replace(
      /^######\s(.+)/gm,
      '<h6 class="h-[65px] text-center  text-neutral-800 text-[42px] font-bold font-roboto leading-[65px]">$1</h6>'
    );
    textt = textt.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-green-600  font-roboto">$1</strong>'
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
        .map((item) => `<li class="">${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='chooseus leading-[22px]'>\n${listItems}\n</ul>`;
    });
    textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
      const listItems = match
        .trim()
        .split("\n")
        .map((item) => `<li class="leading-[22px]">${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
    });

    return textt;
  };
  return (
    <div className=" flex flex-col max-w-[1140px] justify-center items-center">
      <div
        dangerouslySetInnerHTML={{ __html: Setcontent(props.data.content) }}
        className="flex flex-col mt-[10px] justify-center items-center"
      ></div>
      <div className="flex flex-wrap gap-[50px] max-w-[1140px] mt-[50px] mb-[50px] justify-evenly">
        {props.data.cards.map((e, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col justify-center items-center ${
                i % 3 === 0 ? "w-full" : ""
              }`}
              style={{ flex: "0 0 calc(33.333% - 50px)" }} // Ensure three cards per row
            >
              <div className="bg-[url('/imgs/shape-4.jpg')] flex justify-center items-center relative bg-no-repeat h-[190px] w-[220px]">
                <div className="h-[70px] w-[70px] absolute top-0 flex justify-center items-center right-0 bg-black rounded-[50%]">
                  <p className="text-center text-white text-[22px] font-bold font-roboto leading-[65px]">
                    0{i + 1}
                  </p>
                </div>
                <i
                  className={`${e.icon} text-[70px] font-light inline-block`}
                ></i>
              </div>
              <p className="text-center text-neutral-800 text-[25px] mt-[20px] font-bold font-roboto tracking-[3px]">
                {e.heading}
              </p>
              <p className="text-center text-neutral-500 w-[345px] text-[16px] mt-[20px] font-normal font-roboto tracking-[3px]">
                {e.content}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
