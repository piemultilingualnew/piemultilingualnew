import Image from "next/image";
import styles from "./banner.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const Banner = (props) => {
  const dataa = props.data;
  const data = props.data2;
  const navigate = useRouter();
  const { rh } = navigate.query;
  let rhContent = "";
  if (rh?.indexOf("-")) {
    rhContent = rh.split("-").join(" ");
  }
  if (rh?.indexOf("_")) {
    rhContent = rhContent.split("_").join(" ");
  }
  const [text, setText] = useState("");
  useEffect(() => {
    let textt =
      dataa != null && dataa != undefined && dataa.Banner != null
        ? dataa.Banner.text
        : data?.herobox?.content
        ? data.herobox.content
        : "";
    textt = textt.replace(
      /^[A-Z]+(.+)/,
      `<p class="font-acme text-[24px] uppercase font-normal mb-[12px] text-[#30B1C0]">$& ${
        rhContent !== "" ? "- " + rhContent : ""
      }</p>`
    );
    textt = textt.replace(
      /^#\s(.+)/gm,
      `<h1 class="font-acme text-[32px] uppercase font-normal  text-[#30B1C0]">$1 ${rhContent}</h1>`
    );
    textt = textt.replace(
      /^##\s(.+)/gm,
      `<h2 class="font-acme text-[24px] uppercase font-normal   mb-[12px] text-[#30B1C0]">$1 ${
        rhContent !== "" ? "- " + rhContent : ""
      }</h2>`
    );
    textt = textt.replace(
      /^###\s(.+)/gm,
      `<h3 class="font-acme text-[20px] uppercase font-normal   mb-[10px]  text-[#30B1C0]">$1  ${
        rh != null ? "- " + rh : ""
      }</h3>`
    );
    textt = textt.replace(
      /^####\s(.+)/gm,
      `<h4 class="font-acme text-[18px] uppercase font-normal   mb-[15px] text-[#30B1C0]">$1 ${
        rh != null ? "- " + rh : ""
      }</h4>`
    );
    textt = textt.replace(
      /^#####\s(.+)/gm,
      `<h5 class="font-acme text-[16px] uppercase font-normal  mb-[15px]   text-[#30B1C0]">$1 ${
        rh != null ? "- " + rh : ""
      }</h5>`
    );
    textt = textt.replace(
      /^######\s(.+)/gm,
      `<h6 class="font-acme text-[14px] uppercase font-normal  mb-[15px]   text-[#30B1C0]">$1</h6>`
    );
    textt = textt.replace(
      /\*\*(.*?)\*\*/g,
      "<strong class=text-[#303030]>$1</strong>"
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
    textt = textt.replace(
      /^- (.+)/gm,
      '<li class="mx-[2px] my-[4px] text-[#303030]">$1</li>'
    );
    textt = textt.replace(/\n/gi, " \n");

    setText(textt);
  }, [dataa]);

  const banimage =
    dataa != null && dataa != undefined && dataa.Banner.image.data != null
      ? process.env.NEXT_PUBLIC_mainurl + dataa.Banner.image.data.attributes.url
      : data?.herobox?.image
      ? process.env.NEXT_PUBLIC_mainurl + data.herobox.image.data.attributes.url
      : "";
  return (dataa != null && dataa != undefined) ||
    (data != null && data != undefined) ? (
    <div className={`${styles.container} relative z-30`}>
      {
        <>
          <Head>
            <title>
              {dataa?.Title ? dataa.Title : data?.Title ? data.Title : ""}
            </title>
            <meta
              name="description"
              content={
                dataa?.Description
                  ? dataa.Description
                  : data?.Description
                  ? data.Description
                  : ""
              }
            />
            <meta
              name="keywords"
              content={
                dataa?.Keywords
                  ? dataa.Keywords
                  : data?.Keywords
                  ? data.Keywords
                  : ""
              }
            />
          </Head>

          <div className={`${styles.textContainer}   z-30 mb-[20px] relative`}>
            <div className={`${styles.div} w-full`}>
              <div
                className={`flex flex-col ${
                  dataa?.Banner?.Price || dataa?.Banner?.button
                    ? "w-[70%]"
                    : "w-full"
                }`}
              >
                <div
                  className={`justify-start bannerlist items-center gap-[5px]`}
                  dangerouslySetInnerHTML={{ __html: text }}
                ></div>
              </div>
              {(dataa?.Banner?.Price || dataa?.Banner?.button) && (
                <div className="flex flex-col items-center w-[31%] h-full">
                  {dataa?.Banner?.Price ? (
                    <div
                      className="w-[125px] leading-[18px] h-[125px] rounded-full mt-[-9px] text-white flex flex-col items-center justify-center"
                      style={{
                        backgroundImage: "url(/imgs/peeled_circle.avif)",
                        backgroundPosition: "center",
                        backgroundSize: "160% 160%",
                      }}
                    >
                      <p className="text-[14px] ml-[40px]">Starts from</p>
                      <span className="font-bold text-[16px]">
                        {dataa.Banner.Price.split(" ")[0]}
                      </span>
                      <span className="text-[14px] ml-[40px]">
                        {dataa.Banner.Price.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                  ) : (
                    <></>
                  )}
                  {dataa?.Banner?.button ? (
                    <Link
                      href={`/${dataa.Banner.url}`}
                      className={`${styles.link} float-right relative  flex`}
                    >
                      {dataa.Banner.button}
                    </Link>
                  ) : data ? (
                    <Link
                      href={`/multilingual-outsourcing-contact-us`}
                      className={`${styles.link} float-right relative  flex`}
                    >
                      FREE CONSULTATION
                    </Link>
                  ) : (
                    <></>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className={`${styles.imgContainer} `}>
            {(dataa?.Banner?.image?.data != null &&
              dataa?.Banner.image.data != undefined) ||
            (data?.herobox?.image != null &&
              data?.herobox?.image != undefined) ? (
              <Image
                src={banimage}
                quality={100}
                width={568}
                height={186}
                style={{ aspectRatio: "1/1" }}
                alt=""
                priority
              />
            ) : dataa?.Banner != null && dataa?.Banner?.video_link != null ? (
              <iframe
                className={`w-[590px]`}
                src={`https://youtube.com/embed/${dataa.Banner.video_link}?rel=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            ) : (
              <Image
                src="/imgs/default.jpg"
                width={100}
                height={150}
                sizes="100vw"
                alt=""
                priority
              />
            )}
          </div>
        </>
      }
    </div>
  ) : (
    <></>
  );
};

export default Banner;
