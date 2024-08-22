import dynamic from "next/dynamic";
import Banner from "../foreign-language-services/language-translation/banner/Banner";
import Form from "./form";
const Footer = dynamic(() => import("../Footer/page"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { fetchContactData } from "@/Redux/actions/contactActions";
import { useEffect } from "react";
const TrustBox = dynamic(() => import("./TrustBox"), {
  loading: () => <div className="w-full min-h-[400px]">Loading</div>,
});

const Contact = () => {
  const dispatch = useDispatch();
  const { contactData, loadingContact, errorContact } = useSelector(
    (state) => state.contact
  );
  const data = contactData;

  useEffect(() => {
    dispatch(fetchContactData());
  }, [dispatch]);

  if (loadingContact) {
    return (
      <div className="main-container justify-center items-center">
        <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
          <span className="loading loading-ring loading-lg text-[#F60]"></span>
        </div>
        <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]">
        </div>
      </div>
    );
  }
  if (errorContact) {
    return <>No contact data found!</>;
  }

  const SetContent = ({ text }) => {
    let textt = text || "";
    textt = textt.replace(
      /^#\s(.+)/gm,
      '<h1 class="font-acme text-[25px] uppercase font-normal mb-[-10px] text-[#30B1C0]">$1</h1>'
    );
    textt = textt.replace(
      /^##\s(.+)/gm,
      '<h2 class="font-acme text-[24px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h2>'
    );
    textt = textt.replace(
      /^###\s(.+)/gm,
      '<h3 class="font-acme text-[23px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h3>'
    );
    textt = textt.replace(
      /^####\s(.+)/gm,
      '<h4 class="font-acme text-[22px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h4>'
    );
    textt = textt.replace(
      /^#####\s(.+)/gm,
      '<h5 class="font-acme text-[21px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h5>'
    );
    textt = textt.replace(
      /^######\s(.+)/gm,
      '<h6 class="font-acme text-[20px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h6>'
    );
    textt = textt.replace(
      /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim,
      (match) => `<a href='mailto:${match}' class='text-[#337AB7]'>${match}</a>`
    );
    textt = textt.replace(/\{service\}/g, () => "<Document></Document>");
    textt = textt.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-[#F60]">$1</strong>'
    );
    textt = textt.replace(/\*(.*?)\*/g, "<em>$1</em>");
    textt = textt.replace(
      /\$\$([\s\S]*?)\$\$/g,
      '<div class="flex items-center justify-between gap-[20px] mt-[20px]">$1</div>'
    );
    textt = textt.replace(
      /!\[([^\]]+)\]\(([^)]+)\)/g,
      `<div class="w-full h-full bg-[#e1dede] p-2 hover:translate-y-[-8px] transition-transform"><img src="${process.env.NEXT_PUBLIC_mainurl}$2" height='65px' width='130px'  class="h-[65px] w-auto m-auto"></div>`
    );
    textt = textt.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-[#F60] font-bold"  >$1</a>'
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
    return parsedContent;
  };

  return data != null ? (
    <div className="">
      <div className=" z-[10]  overflow-hidden relative w-full bg-white bg-contain  flex  flex-col items-center">
        <Banner data={data} page="contact"></Banner>
        <div className="flex justify-center items-center">
          <div className="w-[1210px] pt-[30px] flex justify-between">
            <div className="w-[47%] rounded-[15px] border-[1.5px] border-[#43b8c5] pr-[10px] justify-between items-center flex flex-col p-2">
              <SetContent text={data.first_content} />
            </div>
            <div className="w-[50%]">
              <Form></Form>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[1200px] ">
          <div className="mt-[30px]">
            <SetContent text={data.clients_content} />
          </div>
          <TrustBox reviews={data.Testimonials} />
          <h3 className="font-acme text-[23px] uppercase font-normal text-[#30B1C0] mt-[25px]">
            Flexible engagement
          </h3>
          <p className="">What our customers think about PIE Multilingual.</p>
          <div className="flex gap-[20px] justify-between mt-[30px]">
            {contactData?.first.map((box, i) => (
              <div
                className={`w-[280px] h-[180px] rounded-tl-[68px] ${
                  i == 0 && "splitbg"
                }`}
                key={i}
                style={{
                  background:
                    i == 1
                      ? "linear-gradient(to bottom, transparent 35%, #bfde62d6 35%), linear-gradient(100deg, #6d8625, #6d8625)"
                      : i == 2
                      ? "linear-gradient(to bottom, transparent 35%, #efeded86 35%), linear-gradient(100deg, #606060, #606060)"
                      : i == 3
                      ? "linear-gradient(to bottom, transparent 35%, #e6bc49 35%), linear-gradient(100deg, #b38404, #b38404)"
                      : i != 0
                      ? "linear-gradient(to bottom, transparent 35%, #efeded86 35%), linear-gradient(100deg, #606060, #606060)"
                      : "",
                }}
              >
                <p className="text-center py-[14px] text-[22px] font-medium w-full border-b-[5px] border-solid border-white text-[#FFF]">
                  {box.heading}
                </p>
                <p className="p-2">{box.content}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-[20px] justify-between mt-[40px] mb-[40px]">
            {contactData?.Address_boxes?.map((box, i) => (
              <div
                className="w-[350px] bg-[#efefef] p-[10px] shadow-lg shadow-[#a9a4a4] border-2 border-[#CCC]"
                key={i}
              >
                <p className="font-acme uppercase text-[20px] font-medium w-full  text-[#30b1c0]">
                  {box.country}{" "}
                </p>
                <p className="mb-4 leading-9">
                  <SetContent text={box.address} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px] ">
        <Footer></Footer>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Contact;
