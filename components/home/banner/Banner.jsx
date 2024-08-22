import styles from "./banner.module.scss";
import Image from "next/image";
import RightSection from "@/components/foreign-language-services/language-translation/content/RightSection";
import { useEffect, useState } from "react";
import Head from "next/head";

const Banner = ({ apiData }) => {
  const [content, setContent] = useState();
  const dataa = apiData;
  useEffect(() => {
    let textt =
      dataa != null && dataa != undefined ? dataa.herobox.content : "";
    textt = textt.replace(
      /^#\s(.+)/gm,
      '<h1 class="font-bold p-0 orangeText">$1</h1>'
    );
    textt = textt.replace(
      /^##\s(.+)/gm,
      `<h2 class="mb-3 -mt-4 font-roboto whiteText">$1</h2>`
    );
    textt = textt.replace(/^###\s(.+)/gm, '<h3 class=" orangeText">$1</h3>');
    textt = textt.replace(
      /\*\*(.*?)\*\*/g,
      '<strong class="text-[28px] font-fira-sans font-medium text-white">$1</strong>'
    );
    textt = textt.replace(/\*(.*?)\*/g, "<em>$1</em>");
    textt = textt.replace(/_(.*?)_/g, "<em>$1</em>");
    textt = textt.replace(
      /!\[([^\]]+)\]\(([^)]+)\)/g,
      '<Image src="$2" class="w-[100px] h-[200px]"/>'
    );
    textt = textt.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-[#F60] font-bold">$1</a>'
    );
    textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
      const listItems = match
        .trim()
        .split("\n")
        .map((item) => `<li>${item.slice(2)}</li>`)
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
    setContent(textt);
  }, [dataa, content]);
  return (
    <>
      <div>
        <Head>
          <title>{dataa.Title}</title>
          <meta name="description" content={dataa.Description} />
          <meta name="keywords" content={dataa.Keywords} />
        </Head>
      </div>
      <div className={`${styles.container} h-[1000px]`}>
        {dataa?.herobox?.image?.data != null ? (
          <Image
            src={
              process.env.NEXT_PUBLIC_mainurl +
              dataa.herobox.image.data.attributes.url
            }
            alt="banner_image"
            fill
            className="w-full object-cover"
            priority
            fetchPriority="high"
            placeholder="blur"
            blurDataURL="/imgs/default.jpg"
          />
        ) : (
          <Image src="/imgs/default.jpg" fill alt="" priority />
        )}
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <div className={`${styles.leftContainer} justify-between`}>
              <div className={styles.box}>
                <div
                  className="leading-[-20px] text-white"
                  dangerouslySetInnerHTML={{ __html: content }}
                ></div>
                <ul className={styles.serviceCards}>
                  {dataa != null && dataa != undefined ? (
                    dataa.herobox.headbox.map((item, i) => (
                      <li className={styles.serviceCard} key={i}>
                        <div className={styles.serviceIcon}>
                          <i className={item.icon_name}></i>
                        </div>
                        <div className={styles.serviceText}>
                          <h4>{item.heading}</h4>
                          <p>{item.text}</p>
                        </div>
                      </li>
                    ))
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
              <div className={styles.clientContainer}>
                <h3 className={styles.clientHeading}>
                  We have been Trusted by
                </h3>
                <div className={styles.clients}>
                  {dataa != null && dataa != undefined ? (
                    dataa.herobox.logo.map(
                      (item, index) =>
                        item.logo.data[0].attributes.url != null && (
                          <div key={index} className={styles.clientImg}>
                            <Image
                              src={
                                process.env.NEXT_PUBLIC_mainurl +
                                item.logo.data[0].attributes.url
                              }
                              width={124}
                              height={48}
                              className="w-full h-full"
                              alt=""
                            />
                          </div>
                        )
                    )
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            <div className={`${styles.formContainer} sm:mt-[0px] mt-[40px] `}>
              <RightSection></RightSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
