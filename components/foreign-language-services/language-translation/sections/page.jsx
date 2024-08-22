import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer/page"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
import parse from "html-react-parser";
import FaqSide from "@/components/parts/FaqSide";
const Aboutus = dynamic(() => import("@/components/case_study/Aboutus"), {
  loading: () => <div className="w-full min-h-[500px]">loading</div>,
});
const IndustriesChoose = dynamic(
  () => import("@/components/parts/industries_choose"),
  {
    loading: () => <div className="w-full min-h-screen">loading</div>,
  }
);
const Block = dynamic(() => import("../careers/block"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const Results = dynamic(() => import("@/components/parts/results.jsx"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const LangCards = dynamic(() => import("@/components/language/card"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const IndustriesCards = dynamic(() => import("@/components/industries/card"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const Careerform = dynamic(() => import("../careers/form"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const AboutusCard = dynamic(() => import("@/components/parts/aboutus"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const PPT = dynamic(() => import("@/components/parts/ppt"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const FAQscard = dynamic(() => import("@/components/FAQs/FAQcard"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const Hire = dynamic(() => import("@/components/parts/hire"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const HireForm = dynamic(() => import("@/components/parts/hire_form"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const IconCards = dynamic(() => import("@/components/parts/IconCards"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const Countries = dynamic(
  () => import("@/components/home/countries/Countries"),
  {
    loading: () => <div className="w-full min-h-screen">loading</div>,
  }
);
const Industries = dynamic(
  () => import("@/components/home/industries/Industries"),
  {
    loading: () => <div className="w-full min-h-screen">loading</div>,
  }
);
const Steps = dynamic(() => import("@/components/parts/step"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const Last = dynamic(() => import("./last"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const Tiltcard = dynamic(() => import("./titlcard.jsx"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const BusinessBenefits = dynamic(() => import("./business_benefits"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const Lastsection = dynamic(() => import("./lastsection"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const RightSection = dynamic(() => import("../content/RightSection"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const Document = dynamic(() => import("./document.jsx"), {
  loading: () => <div className="w-full min-h-[150px]">loading</div>,
});
const AdvantageCards = dynamic(
  () => import("@/components/parts/advantagecards"),
  {
    loading: () => <div className="w-full min-h-screen">loading</div>,
  }
);
const Testimonials = dynamic(() => import("@/components/parts/testimonial"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const Allservicecards = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/Allservice/page.jsx"
    ),
  {
    loading: () => <div className="w-full min-h-screen">loading</div>,
  }
);
const DataClients = dynamic(() => import("@/components/parts/DataClients"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const PricingCards = dynamic(() => import("@/components/parts/PricingCards"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const Clients2 = dynamic(() => import("./clients2"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});
const HiringModels = dynamic(() => import("@/components/parts/HiringModels"), {
  loading: () => <div className="w-full min-h-screen">loading</div>,
});

export default function Section(props) {
  const { asPath } = useRouter();
  const navigate = useRouter();
  const currentUrl = navigate.asPath;
  const searchurl = asPath;
  let parts = searchurl.split("/");
  let data = props.data;
  let apiData2 = props.data;
  const Setcontent = (props) => {
    let textt = "";
    textt = props.e != null ? props.e : "";
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
      '<h4 class="font-acme inline-block text-[22px] uppercase font-normal mb-[2px] mt-[4px] text-[#30B1C0]">$1</h4>'
    );
    textt = textt.replace(
      /^#####\s(.+)/gm,
      '<h5 class="font-acme inline-block text-[21px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h5>'
    );
    textt = textt.replace(
      /^######\s(.+)/gm,
      '<h6 class="font-acme inline-block text-[20px] uppercase font-normal mb-[2px] mt-[4px] text-[#30B1C0]">$1</h6>'
    );
    textt = textt.replace(/\[\[\[([\s\S]+?)\]\]\]/gm, function (match, p1) {
      const lines = p1.trim().split("\n");
      const numRows = 3;
      const numRowsRemainder = lines.length % numRows;
      const numRowsFull = Math.floor(lines.length / numRows);
      const rowLengths = Array(numRows).fill(numRowsFull);
      for (let i = 0; i < numRowsRemainder; i++) {
        rowLengths[i]++;
      }

      let currentIndex = 0;
      const rows = rowLengths.map((rowLength) => {
        const rowContent = lines.slice(currentIndex, currentIndex + rowLength);
        currentIndex += rowLength;

        const rowHTML = rowContent
          .map((line) => {
            if (line.startsWith("-")) {
              const listItems = line
                .trim()
                .split("\n")
                .map((item) => `<li>${item.slice(2)}</li>`)
                .join("\n");
              return `<ul class='chooseus leading-[18px]'>\n${listItems}\n</ul>`;
            } else {
              return `<div>${line}</div>`;
            }
          })
          .join("\n");
        return `<div class="w-[${100 / numRows}%]">${rowHTML}</div>`;
      });

      return `<div class="flex justify-between w-full">${rows.join("")}</div>`;
    });
    textt = textt.replace(/\[\[([\s\S]+?)\]\]/gm, function (match, p1) {
      const lines = p1.trim().split("\n");
      const halfLength = Math.ceil(lines.length / 2);
      const firstHalf = lines
        .slice(0, halfLength)
        .map((line) => {
          if (line.startsWith("-")) {
            const listItems = line
              .trim()
              .split("\n")
              .map((item) => `<li>${item.slice(2)}</li>`)
              .join("\n");
            return `<ul class='chooseus leading-[18px]'>\n${listItems}\n</ul>`;
          } else {
            return `<div>${line}</div>`;
          }
        })
        .join("\n");
      const secondHalf = lines
        .slice(halfLength)
        .map((line) => {
          if (line.startsWith("-")) {
            const listItems = line
              .trim()
              .split("\n")
              .map((item) => `<li>${item.slice(2)}</li>`)
              .join("\n");
            return `<ul class='chooseus leading-[18px]'>\n${listItems}\n</ul>`;
          } else {
            return `<div>${line}</div>`;
          }
        })
        .join("\n");
      return `<div class="flex justify-between w-full">
                        <div class="w-[50%]">${firstHalf}</div>
                        <div class="w-[50%]">${secondHalf}</div>
                    </div>`;
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

    textt = textt.replace(/\{service\}/g, () => "<Document></Document>");
    textt = textt.replace(/\{icon_cards\}/g, () => "<IconCards></IconCards>");
    textt = textt.replace(/\{countries\}/g, () => "<Countries></Countries>");
    textt = textt.replace(/\{industries\}/g, () => "<Industries></Industries>");
    textt = textt.replace(
      /\{pricing_card\}/g,
      () => "<PricingCards></PricingCards>"
    );
    textt = textt.replace(
      /\{whychooseus\}/g,
      () => "<IndustriesChoose></IndustriesChoose>"
    );
    const parsedContent = parse(textt, {
      decodeEntities: true,
      replace: (node) => {
        if (node.name === "document") {
          return <Document apiData={apiData2} />;
        }
        if (node.name === "iconcards") {
          return <IconCards data={data?.LanguageIconBox} />;
        }
        if (node.name === "countries") {
          return <Countries data={true} />;
        }
        if (node.name === "industries") {
          return <Industries data={true} />;
        }
        if (node.name === "pricingcards") {
          return <PricingCards apiData={apiData2} />;
        }
        if (node.name === "industrieschoose") {
          return <IndustriesChoose />;
        }
        return undefined;
      },
    });
    return <div className="text-[15px]">{parsedContent}</div>;
  };
  Setcontent(data?.content ?? "");
  return data != null && data != undefined ? (
    <div className="w-[100%] h-[100%] flex flex-col justify-center relative z-10   bg-black items-center">
      <div className="flex flex-col justify-center items-center mt-[-5px] w-[100%] bg-white z-10">
        <div className="w-[100%] relative z-[-10] h-[20px] bg-white"></div>
        <div className="md:flex-row flex-col flex md:gap-[20px] bg-white w-full max-w-[1210px] mx-auto mb-[15px]">
          <div className="w-full">
            <div className=" leading-[25px] sm:max-md:w-[630px] max-xl:w-[95%] mx-auto font-roboto font-normal text-[#333] ">
              {data.content && <Setcontent e={data.content}></Setcontent>}
            </div>
            {apiData2?.All_Service_Card ? (
              <div className="grid grid-cols-2 gap-y-[40px]">
                {apiData2.All_Service_Card.map((e, i) => {
                  return <Allservicecards key={i} data={e}></Allservicecards>;
                })}
              </div>
            ) : (
              <></>
            )}
            {apiData2?.results ? (
              <Results data={apiData2.results}></Results>
            ) : (
              <></>
            )}
            {apiData2?.About_company && (
              <Aboutus content={apiData2.About_company} />
            )}
            {apiData2?.language_card && apiData2.language_card.length > 0 ? (
              <div className="mb-[15px]">
                {apiData2.language_card.map((e, i) => (
                  <LangCards key={i} num={i} data={e}></LangCards>
                ))}
              </div>
            ) : (
              ""
            )}
            {apiData2?.Industries_We_Serve &&
            apiData2.Industries_We_Serve.length > 0 ? (
              <div className="">
                {apiData2.Industries_We_Serve.map((e, i) => (
                  <IndustriesCards key={i} num={i} data={e}></IndustriesCards>
                ))}
              </div>
            ) : (
              ""
            )}
            {apiData2?.FAQCards && apiData2.FAQCards.length > 0 ? (
              <div className="">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-[15px] my-[20px] mx-auto max-w-[850px]">
                  {apiData2.FAQCards.map((e, i) => (
                    <FAQscard key={i} num={i} data={e}></FAQscard>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
            {apiData2?.Steps != null ? (
              <div className="">
                <div
                  className={`flex flex-col my-[0px] w-full justify-center items-center gap-[42px]`}
                >
                  {apiData2.Steps.map((e, i) => {
                    return <Steps key={i} num={i} data={e}></Steps>;
                  })}
                </div>
              </div>
            ) : (
              ""
            )}
            {apiData2 != null && apiData2.cv_form == true ? (
              <div className="">
                <Careerform></Careerform>
              </div>
            ) : (
              ""
            )}
            {apiData2?.HireForm != undefined &&
            apiData2?.HireForm != null &&
            apiData2?.HireForm == true ? (
              <HireForm></HireForm>
            ) : (
              <></>
            )}
            {apiData2?.Advantage_Box != null &&
            apiData2?.Advantage_Box.add == true &&
            apiData2?.Advantage_Box?.cards.length === 0 ? (
              <div className={`w-full max-w-[1250px] mx-auto mb-8`}>
                <div className="w-full bg-white gap-8 ">
                  <AdvantageCards
                    data={apiData2.Advantage_Box}
                  ></AdvantageCards>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>

          <div
            className={`w-[345px] md:w-[420px] sticky flex flex-col top-0 right-0 h-[100%] mb-[30px] mr-[12px]`}
          >
            {apiData2 != null &&
            (apiData2.enquiry_form == null || apiData2.enquiry_form == true) ? (
              <div className="flex flex-col w-full items-center justify-center">
                {" "}
                <RightSection></RightSection>
                {apiData2?.pdf?.data != null ? (
                  <PPT url={apiData2.pdf.data.attributes.url}></PPT>
                ) : (
                  ""
                )}
              </div>
            ) : (
              ""
            )}
            {apiData2?.Testimonial?.length > 0 && parts.length < 4 ? (
              <div>
                <Testimonials
                  data={apiData2.Testimonial[0].data}
                ></Testimonials>
              </div>
            ) : (
              ""
            )}
            {apiData2?.clients != null &&
            apiData2.clients === true &&
            (!apiData2?.Advantage_Box ||
              apiData2?.Advantage_Box?.cards.length === 0) ? (
              <div className="w-[345px]">
                <DataClients />
              </div>
            ) : (
              ""
            )}
            <div>
              {apiData2?.Career != null && apiData2.Career.length > 0 ? (
                <Block data={apiData2.Career}></Block>
              ) : (
                ""
              )}
            </div>
            {apiData2?.enquiry_form === false && <FaqSide />}
          </div>
        </div>
        <BusinessBenefits apiData={apiData2}></BusinessBenefits>
        {data.Development != undefined && data.Development != null ? (
          <p className=" leading-[25px] font-roboto font-normal text-[#333] max-w-[1210px] mx-auto w-full mt-[40px]">
            <Setcontent e={data.Development.content}></Setcontent>
          </p>
        ) : (
          ""
        )}
        {data.Development != undefined && data.Development != null ? (
          <div className=" max-w-[1210px] mx-auto xl:w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[30px] gap-x-[60px] mt-[20px]">
            {data.Development.cards.map((e, i) => {
              return <Tiltcard key={i} data={e}></Tiltcard>;
            })}
          </div>
        ) : (
          ""
        )}
        {data.Hire_green_box != undefined && data.Hire_green_box != null ? (
          <div className=" max-w-[1140px] w-full flex  justify-center items-center">
            <Hire data={data.Hire_green_box}></Hire>
          </div>
        ) : (
          ""
        )}
        {apiData2 != null ? (
          <AboutusCard apiData2={apiData2}></AboutusCard>
        ) : (
          ""
        )}
        <Lastsection apiData={apiData2}></Lastsection>
      </div>
      <div className="w-[100%] flex flex-col justify-center items-center z-20 pb-[px] bg-[white] relative">
        {apiData2?.Advantage_Box != null &&
        apiData2?.Advantage_Box.add == true &&
        apiData2?.Advantage_Box?.cards.length > 0 ? (
          <div
            className={`w-full max-w-[1250px] flex justify-between mx-auto mb-6`}
          >
            <div className="w-full max-w-[850px] bg-white gap-8 ">
              <HiringModels data={apiData2.Advantage_Box}></HiringModels>
            </div>
            <div className="w-[345px] mt-[20px]">
              {apiData2?.clients && <DataClients data={true} />}
            </div>
          </div>
        ) : (
          ""
        )}
        {currentUrl === "/thank-you/" && <Clients2 />}
        {apiData2?.about_us ? <IndustriesChoose></IndustriesChoose> : ""}
      </div>
      <Last />
      <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px] ">
        <Footer></Footer>
      </div>
    </div>
  ) : (
    <></>
  );
}
