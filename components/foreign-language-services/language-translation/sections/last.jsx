import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
export default function Last() {
  const { caseData, loadingCase, errorCase } = useSelector(
    (state) => state.caseStudy
  );

  const { inner2Data, loadingInner2, errorInner2 } = useSelector(
    (state) => state.inner2
  );
  const { inner3Data, loadingInner3, errorInner3 } = useSelector(
    (state) => state.inner3
  );

  const apiDatainnertwo = inner2Data || inner3Data;
  const apiCaseData = caseData;

  const data =
    apiDatainnertwo != null
      ? apiDatainnertwo
      : apiCaseData != null
      ? apiCaseData
      : null;
  const [text, setText] = useState("");
  useEffect(() => {
    console.log("above footer: ", data);
    let textt =
      data?.Above_Footer?.content != null ? data.Above_Footer.content : "";
    textt = textt.replace(
      /^#\s(.+)/gm,
      '<h1 class="font-acme inline-block text-[24px] uppercase font-normal mb-[2px] mt-[]  text-[#30B1C0]">$1</h1>'
    );
    textt = textt.replace(
      /^##\s(.+)/gm,
      '<h2 class="font-acme inline-block text-[22px] uppercase font-normal mb-[2px] mt-[]  text-[#30B1C0]">$1</h2>'
    );
    textt = textt.replace(
      /^###\s(.+)/gm,
      '<h3 class="font-acme inline-block text-[21px] uppercase font-normal mb-[2px] mt-[]  text-[#30B1C0]">$1</h3>'
    );
    textt = textt.replace(
      /^####\s(.+)/gm,
      '<h4 class="font-acme inline-block text-[20px] uppercase font-normal mb-[2px] mt-[]  text-[#30B1C0]">$1</h4>'
    );
    textt = textt.replace(
      /^#####\s(.+)/gm,
      '<h5 class="font-acme inline-block text-[19px] uppercase font-normal mb-[2px] mt-[]  text-[#30B1C0]">$1</h5>'
    );
    textt = textt.replace(
      /^######\s(.+)/gm,
      '<h6 class="font-acme inline-block text-[18px] uppercase font-normal mb-[2px] mt-[] text-[#30B1C0]">$1</h6>'
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
        .map((item) => `<li class="">${item.slice(2)}</li>`)
        .join("\n");
      return `<ul class='chooseus'>\n${listItems}\n</ul>`;
    });
    setText(textt);
  }, [data]);
  return (
    <div className="w-full flex flex-col relative">
      {data?.Above_Footer?.content != null ? (
        <div
          className="z-[10] overflow-hidden relative w-full bg-gray-300 bg-contain filter flex items-center bg-[url('/imgs/bokeh-orange2.jpg')] bg-cover bg-center"
          style={{
            height: data.Above_Footer.last[0] != null ? "414px" : "350px",
          }}
        >
          <div
            className="flex"
            style={{
              height: data.Above_Footer.last[0] != null ? "414px" : "300px",
            }}
          >
            <div className="h-[130px] w-[0.1px] relative left-[230px] star bg-white "></div>
            <div className="h-[120px] w-[0.2px] relative left-[500px] star3 bg-white "></div>
            <div className="h-[200px] w-[0.1px] relative left-[900px] star1 bg-white "></div>
            <div className="h-[100px] w-[1px] relative left-[400px] star bg-white "></div>
            <div className="h-[150px] w-[1px] relative left-[1200px] star3 bg-white "></div>
            <div className="h-[110px] w-[1px] relative left-[100px] star2 bg-white "></div>
          </div>
          <div className="w-[100%] h-full flex flex-col gap-[20px] justify-center items-center">
            <p
              className="myFont text-[#FFF] text-center"
              style={{
                fontSize: data.Above_Footer.last[0] != null ? "40px" : "35px",
                width: data.Above_Footer.last[0] != null ? "881px" : "",
              }}
              dangerouslySetInnerHTML={{ __html: text }}
            ></p>
            <Link
              href={`/landing/${data.Above_Footer.url}`}
              name="last"
              className="!text-[20px] mt-[0px] rounded-[4px] p-2 uppercase border-solid border-[2px] border-[#FFF] text-[#FFF] hover:bg-white/30 hover:scale-105 ease-in-out transition-transform whitespace-nowrap myFont"
            >
              {data.Above_Footer.button}
            </Link>
          </div>
          {data?.Above_Footer?.last != null &&
          data?.Above_Footer?.last.length > 0 ? (
            <div className="myFont flex flex-col justify-center items-center h-full border-l-[1px] border-0 border-[#fff] w-[40%] bg-gray-600/20 backdrop-blur-md">
              <div className="flex flex-col gap-[30px]">
                {data.Above_Footer.last.map((e, i) => {
                  return (
                    <div className="flex flex-col my-[15px]" key={i}>
                      <div className="flex flex-col h-[70px]">
                        <div className="icon flex items-center gap-[10px]">
                          <i
                            className={`${e.icon} text-[30px] text-[white]`}
                          ></i>
                          <p className="text-[40px] text-[#FFF]">{e.heading}</p>
                        </div>

                        <p className="text-[25px] text-[#FFF]">{e.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
