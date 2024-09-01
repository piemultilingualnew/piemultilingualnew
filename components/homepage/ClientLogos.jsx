import Image from "next/image";

const ClientLogos = ({data}) => {
  // const [content, setContent] = useState();

  // useEffect(() => {
  //   let textt =
  //     videoData != null && videoData != undefined ? videoData?.content : "";
  //   textt = textt.replace(
  //     /^#\s(.+)/gm,
  //     '<h1 class=" font-acme text-[24px]">$1</h1>'
  //   );
  //   textt = textt.replace(
  //     /^##\s(.+)/gm,
  //     `<h2 class="font-acme text-[27px]">$1</h2>`
  //   );
  //   textt = textt.replace(
  //     /^###\s(.+)/gm,
  //     '<h3 class="font-acme orangeText">$1</h3>'
  //   );
  //   textt = textt.replace(
  //     /\*\*(.*?)\*\*/g,
  //     '<strong className="text-[#F60]">$1</strong>'
  //   );
  //   textt = textt.replace(/\*(.*?)\*/g, "<em>$1</em>");
  //   textt = textt.replace(/_(.*?)_/g, "<em>$1</em>");
  //   textt = textt.replace(
  //     /!\[([^\]]+)\]\(([^)]+)\)/g,
  //     '<img src="$2" class="w-[100px] h-[200px]">'
  //   );
  //   textt = textt.replace(
  //     /\[([^\]]+)\]\(([^)]+)\)/g,
  //     '<a href="$2" class="text-[#F60] font-bold">$1</a>'
  //   );
  //   textt = textt.replace(/\n/gi, "<br/> \n");
  //   textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
  //     const listItems = match
  //       .trim()
  //       .split("\n")
  //       .map((item) => `<li class="leading-[22px]">${item.slice(2)}</li>`)
  //       .join("\n");
  //     return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
  //   });
  //   setContent(textt);
  // }, [videoData, content]);
  const clients = [
    "/imgs/GEP_svg.svg",
    "/imgs/client2_svg.svg",
    "/imgs/client3_svg.svg",
    "/imgs/client4_svg.svg",
    "/imgs/ariba_svg.svg",
    "/imgs/discovery_svg.svg",
    "/imgs/client4_svg.svg",
    "/imgs/ariba_svg.svg",
    "/imgs/discovery_svg.svg",
  ];
  return (
    <div className="w-full grid md:grid-cols-2 grid-cols-1 max-w-[1250px] mx-auto gap-[30px]">
      <div>
        <div className="my-[50px] border-l-[4px] border-[#f60] px-[20px] py-[2px] shadow-md shadow-[#888]">
          <h2 className="text-[24px] font-medium font-acme uppercase">
            MOST PROMINENT CUSTOMERS
          </h2>
          <p className="mt-5">
            {data.content}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 h-3/4 mb-[3rem] md:mb-0 md:mt-8">
        {clients.map((client, i) => (
          <Image
            src={client}
            alt=""
            className="m-auto hover:scale-110 duration-300 transition"
            width={124}
            height={38}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientLogos;
