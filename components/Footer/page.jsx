import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { fetchFooterData } from "@/Redux/actions/footerActions";
export default function Footer() {
  const dispatch = useDispatch();
  const { footerData, loading, error } = useSelector((state) => state.footer);
  const { ipInfo } = useSelector((state) => state.ip);
  const ipData = ipInfo;
  const navigate = useRouter();
  const { rh } = navigate.query;
  const [formData, setFormData] = useState({
    name: "",

    email: "",
  });
  useEffect(() => {
    dispatch(fetchFooterData());
  }, [dispatch]);

  const handleChange = (ee) => {
    const { name, value } = ee.target;
    if (name === "name" && value !== "" && !/^[A-Za-z ]+$/.test(value)) {
      ee.target.classList.add("invalid");
      setNamewarn(true);
      return;
    } else {
      ee.target.classList.remove("invalid");
      setNamewarn(false);
    }
    setFormData({ ...formData, [name]: value });
  };
  const dateTime = new Date();
  const handleUpload = async () => {
    try {
      const formdata = new FormData();
      const dateString = dateTime.toLocaleString();
      formdata.append("name", formData.name);
      formdata.append("email", formData.email);
      formdata.append("country", ipData.country);
      formdata.append("IP", ipData.ip);
      formdata.append("url", `Footer`);
      formdata.append("date", dateString);
      const response = await axios.post("/api/sendEmail", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        alert("Submitted!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Error submitting form:", response.data.message);
        alert(response.data.message);
      }
      const data = {
        name: formData.name,
        email: formData.email,
        country: ipData.country,
        IP: ipData.ip,
        url: `Footer`,
        date: dateString,
      };
      const formdataa = new FormData();
      formdataa.append("data", JSON.stringify(data));
      await fetch(process.env.NEXT_PUBLIC_mainurl + "/api/forms", {
        method: "POST",
        body: formdataa,
      })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error("AxiosError:", error);
        });
    } catch (error) {
      console.error("Error submittinggg form:", error);
      alert(error);
    }
  };
  //   const { footerData } = useSharedData();
  const bottomLinks = [
    {
      icon: "flaticon-house",
      url: "/",
    },
    {
      text: "FOREIGN LANGUAGE SUPPORT",
      url: "/foreign-language-services",
    },
    {
      text: "MARKET RESEARCH & ANALYSIS",
      url: "/outsource-market-research-services",
    },
    {
      text: "TRANSCRIPTION SERVICES",
      url: "/transcription-services",
    },
    {
      text: "MULTILINGUAL CALL CENTER",
      url: "/multilingual-call-center-outsourcing",
    },
    {
      text: "DATA ENTRY SERVICES",
      url: "/data-entry",
    },
    {
      text: "CREATIVE SERVICES",
      url: "/outsource-creative-services",
    },
    {
      text: "PHOTO EDITING SERVICES",
      url: "/outsource-photo-editing-services",
    },
    {
      text: "VIRTUAL ASSISTANT SERVICES",
      url: "/virtual-assistant-services",
    },
    {
      text: "FINANCE & ACCOUNTING",
      url: "/",
    },
    {
      text: "WEB DESIGN & DEVELOPMENT",
      url: "/",
    },
  ];
  const data = footerData != null ? footerData.footer : "";
  const currentYear = new Date().getFullYear();
  return data != null ? (
    <div
      className="bg-[#434146]"
    >
      <div className=" sm:h-[450px] flex justify-between">
        {rh == null ? (
          <div className="w-[90px] h-[520px] mt-[200px] z-30 relative top-[70px] bg-[#30B1C0] flex self-end rounded-tr-[150px]">
            <Link
              href="/multilingual-outsourcing-contact-us?rh=request_a_quote"
              className="vertical text-[#FFF] text-[23px] font-bold text-center sm:pl-[20px] pl-[8px] mt-[10px]"
            >
              request a quote
            </Link>
          </div>
        ) : (
          ""
        )}
        <div className="flex flex-col sm:flex-row justify-between w-full sm:px-10 px-1 pt-10">
          <div className=" flex flex-col w-[28%] ">
            <div className="boxarrow h-[45px]  ">
              <p className="text-[20px] font-roboto font-medium text-[#FFF]">
                About us
              </p>
            </div>
            <p className=" text-[15px] mt-[30px] sm:w-[85%] w-[250px] text-[#FFF] font-roboto">
              {data.about_us_content}
            </p>
          </div>
          <div className="flex flex-col h-full w-[28%]">
            <div className="boxarrow justify-start h-[45px] ">
              <p className="text-[20px] font-roboto font-medium text-[#FFF]">
                Quick Links
              </p>
            </div>
            <div className="mt-[22px] sm:w-[100%] w-[250px] text-[#FFF] flex flex-col justify-start ">
              {data?.quick_links != null
                ? data.quick_links.map((e, i) => {
                    return (
                      <div className="mt-[8px]  flex" key={i}>
                        {
                          <div className="flex  justify-start items-center gap-[10px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-[10px] w-[12px] rotate-[270deg]"
                              shapeRendering="geometricPrecision"
                              textRendering="geometricPrecision"
                              imageRendering="optimizeQuality"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="#fff"
                              viewBox="0 0 512 299.283"
                            >
                              <path d="M75.334 12.591C10.57-24.337-20.852 28.186 15.131 64.566l200.866 209.613c33.472 33.471 46.534 33.471 80.006 0L496.869 64.566c35.983-36.38 4.561-88.903-60.203-51.975L256 109.944 75.334 12.591z" />
                            </svg>
                            <Link href={e.link} className="uppercase">
                              {e.text}
                            </Link>
                          </div>
                        }
                      </div>
                    );
                  })
                : bottomLinks.map((e, i) => {
                    return (
                      <div className="mt-[8px]  flex" key={i}>
                        {e.text ? (
                          <div className="flex  justify-start items-center gap-[10px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-[10px] w-[12px] rotate-[270deg]"
                              shapeRendering="geometricPrecision"
                              textRendering="geometricPrecision"
                              imageRendering="optimizeQuality"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              fill="#fff"
                              viewBox="0 0 512 299.283"
                            >
                              <path d="M75.334 12.591C10.57-24.337-20.852 28.186 15.131 64.566l200.866 209.613c33.472 33.471 46.534 33.471 80.006 0L496.869 64.566c35.983-36.38 4.561-88.903-60.203-51.975L256 109.944 75.334 12.591z" />
                            </svg>
                            <Link href={`${e.url}`} className="uppercase">
                              {e.text}
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className="flex flex-col h-full w-[28%] ">
            <div className="boxarrow h-[45px] ">
              <p className="text-[20px] font-roboto font-medium text-[#FFF]">
                News letter
              </p>
            </div>
            <div className="sm:w-[90%] w-[250px]  text-[#FFF]  ">
              <div className=" text-[#FFF] flex flex-col mt-[30px]">
                <label
                  htmlFor="name"
                  className="text-[15px] font-roboto font-normal"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className=" p-2 bg-white rounded-[4px] text-black"
                />
              </div>
              <div className=" flex flex-col mt-[8px]">
                <label
                  htmlFor="email"
                  className="text-[15px] font-roboto font-normal"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className=" p-2 bg-white rounded-[4px] text-black"
                />
              </div>
              <div className="mt-[15px] flex items-start">
                <input
                  type="checkbox"
                  defaultChecked
                  id="check"
                  name="checkbox"
                  className=" mr-[10px] mt-[2px]"
                />
                <label className="text-[12px]" htmlFor="check">
                  Subscribing I accept the privacy rules of this site
                </label>
              </div>
              <button
                name="subscribe"
                className="  p-2 rounded-[2px] mt-[20px] font-roboto font-medium text-[16px] border border-[#6c6868] bg-[#4f4f54]  ease-in-out transition-transform  hover:bg-[#30B1C0]"
                onClick={handleUpload}
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="hidden flex-col sm:flex h-full w-[28%] ">
            <div className="boxarrow h-[45px] ">
              <p className="text-[20px] font-roboto font-medium text-[#FFF]">
                Social links
              </p>
            </div>
            <div className="grid grid-cols-4 text-[#FFF] gap-[30px] w-[70%] mt-[40px] justify-start">
              <div className=" ease-in-out transition-transform  w-[32px] h-[35px] text-[35px] flex justify-center items-center hover:text-[#30B1C0] text-white flaticon-pinterest-sign rounded-[4px]"></div>
              <div className="w-[32px]  ease-in-out transition-transform  h-[35px] text-[35px] flex justify-center items-center text-white flaticon-youtube-logo hover:text-[#30B1C0] rounded-[4px]"></div>
              <div className="w-[32px] h-[35px] text-[35px] hover:text-[#30B1C0] flex justify-center items-center text-white   flaticon-facebook-logo  ease-in-out transition-transform  rounded-[4px]"></div>
              <div className="w-[32px] hover:text-[#30B1C0] ease-in-out transition-transform h-[35px] text-[35px] flex justify-center items-center text-white   flaticon-linkedin-logo rounded-[4px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[70px] sm:w-[100%] w-[350px] items-center ">
        <div className="sm:ml-[100px] ml-[70px]">
          <p className="font-roboto sm:text-[14px] text-[12px] text-white  sm:w-[400px] md:w-[700px] w-[270px]">
            © {currentYear}, PIE Multilingual Services All Rights Reserved.
          </p>
        </div>
        <div className="flex  h-[70px] justify-end items-center ">
          <div className="flex absolute right-[125px]  sm:h-[35px]  items-center justify-between bg-[#F60] shadow-sm shadow-[#191919;] rounded-bl-[50px] pl-[14px]">
            {data?.bottom_links != null ? (
              data.bottom_links.map((link, i) => {
                return i != data.bottom_links.length - 1 ? (
                  <div key={i}>
                    <Link
                      href={link.url}
                      className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold "
                    >
                      {link.text}
                    </Link>
                  </div>
                ) : (
                  <div key={i}>
                    <Link
                      href={link.url}
                      className="text-[#FCFCFF] text-[14px] capitalize  border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold "
                    >
                      {link.text}
                    </Link>
                  </div>
                );
              })
            ) : (
              <>
                <div>
                  <p className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[16px] pr-[6px] font-roboto font-bold ">
                    Privacy policy
                  </p>
                </div>
                <div>
                  <Link
                    href="/careers"
                    className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold "
                  >
                    Career
                  </Link>
                </div>
                <div>
                  <Link
                    href="/blog"
                    className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold "
                  >
                    Blog
                  </Link>
                </div>
                <div>
                  <p className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold ">
                    Sitemap
                  </p>
                </div>
                <div>
                  <Link
                    href="/faq"
                    className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold "
                  >
                    FAQs
                  </Link>
                </div>
                <div>
                  <p className="text-[#FCFCFF] mr-[10px] text-[14px]  pl-[6px] pr-[6px] font-roboto font-bold ">
                    Video
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className=" h-[450px] w-[100%] bg-[#434146] flex justify-between ">
        <div className="w-[90px] h-[520px] mt-[200px] z-30 relative top-[70px] bg-[#30B1C0] flex self-end rounded-tr-[150px]">
          <p className="vertical text-[#FFF] text-[23px] font-bold text-center pl-[20px] mt-[10px]">
            request a quote
          </p>
        </div>
        <div className=" justify-between w-full px-10 pt-10">
          <div className="w-[28%] ">
            <div className="boxarrow h-[45px]  ml-[]">
              <p className="text-[20px] font-roboto font-medium text-[#FFF]">
                About us
              </p>
              <p className=" text-[15px] mt-[30px]  font-roboto">
                We, Multilingual Business Service Company, provide valuable
                insights about what you expect from us. Our Multilingual cum
                multidisciplinary business service help you to cut your
                operation cost. We understand your needs and build long-lasting
                happy relations with you. We develop loyal customers by
                delivering the highest customer satisfaction for long-term
                success. We are Flexible, Custom Configured and Customer
                delighted company. We are here to talk anytime.
              </p>
            </div>
          </div>
          <div className=" w-[28%]">
            <div className="boxarrow justify-start h-[45px] ">
              <p className="text-[20px] font-roboto font-medium text-[#FFF]">
                Quick Links
              </p>
              <div className="mt-[22px]  flex flex-col justify-start ml-[-15px]">
                {bottomLinks.map((e, i) => {
                  return (
                    <div className="mt-[8px]  flex" key={i}>
                      {e.text ? (
                        <div className="flex  justify-start items-center gap-[10px]">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[10px] w-[12px] rotate-[270deg]"
                            shapeRendering="geometricPrecision"
                            textRendering="geometricPrecision"
                            imageRendering="optimizeQuality"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            fill="#fff"
                            viewBox="0 0 512 299.283"
                          >
                            <path d="M75.334 12.591C10.57-24.337-20.852 28.186 15.131 64.566l200.866 209.613c33.472 33.471 46.534 33.471 80.006 0L496.869 64.566c35.983-36.38 4.561-88.903-60.203-51.975L256 109.944 75.334 12.591z" />
                          </svg>
                          <Link href={`${e.url}`} className="uppercase">
                            {e.text}
                          </Link>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-[28%] ">
            <div className="boxarrow h-[45px] ">
              <p className="text-[20px] font-roboto font-medium text-[#FFF]">
                News letter
              </p>
              <div>
                <div className=" flex flex-col mt-[30px]">
                  <label
                    htmlFor="name"
                    className="text-[15px] font-roboto font-normal"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className=" p-2 bg-white rounded-[4px]"
                  />
                </div>
                <div className=" flex flex-col mt-[8px]">
                  <label
                    htmlFor="email"
                    className="text-[15px] font-roboto font-normal"
                  >
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    className=" p-2 bg-white rounded-[4px]"
                  />
                </div>
                <div className="flex">
                  <input type="checkbox" id="check" className=" mr-[10px]" />
                  <label className="text-[12px] mt-[15px]" htmlFor="check">
                    Subscribing I accept the privacy rules of this site
                  </label>
                </div>
                <button
                  name="subscribe"
                  className="  p-2 rounded-[2px] mt-[20px] font-roboto font-medium text-[16px] border border-[#6c6868] bg-[#4f4f54]  ease-in-out transition-transform  hover:bg-[#30B1C0]"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="w-[28%] ">
            <div className="boxarrow h-[45px] ">
              <p className="text-[20px] font-roboto font-medium text-[#FFF]">
                Social links
              </p>
              <div className="grid grid-cols-4  gap-[30px] ml-[-19px] mt-[40px] justify-start">
                <div className=" ease-in-out transition-transform  w-[32px] h-[35px] text-[35px] flex justify-center items-center hover:text-[#30B1C0] text-white flaticon-pinterest-sign rounded-[4px]"></div>
                <div className="w-[32px]  ease-in-out transition-transform  h-[35px] text-[35px] flex justify-center items-center text-white flaticon-youtube-logo hover:text-[#30B1C0] rounded-[4px]"></div>
                <div className="w-[32px] h-[35px] text-[35px] hover:text-[#30B1C0] flex justify-center items-center text-white   flaticon-facebook-logo  ease-in-out transition-transform  rounded-[4px]"></div>
                <div className="w-[32px] hover:text-[#30B1C0] ease-in-out transition-transform h-[35px] text-[35px] flex justify-center items-center text-white   flaticon-linkedin-logo rounded-[4px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[70px] sm:w-[100%] w-[350px] items-center ">
        <div>
          <p className="font-roboto  text-[14px] text-white sm:w-[100%] w-[374px]">
            © {currentYear}, PIE Multilingual Services All Rights Reserved.
          </p>
        </div>
        <div className="flex  h-[70px] justify-end items-center ">
          <div className="flex absolute right-[125px] w-[400px] sm:h-[35px]  items-center justify-between bg-[#F60] shadow-sm shadow-[#191919;] rounded-bl-[50px] ">
            <div>
              <p className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[16px] pr-[6px] font-roboto font-bold ">
                Privacy policy
              </p>
            </div>
            <div>
              <Link
                href="/careers"
                className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold "
              >
                Career
              </Link>
            </div>
            <div>
              <Link
                href="/blog"
                className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold "
              >
                Blog
              </Link>
            </div>
            <div>
              <p className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold ">
                Sitemap
              </p>
            </div>
            <div>
              <Link
                href="/faq"
                className="text-[#FCFCFF] text-[14px] border-r-[1px] border-r-[#FCFCFF] pl-[6px] pr-[6px] font-roboto font-bold "
              >
                FAQs
              </Link>
            </div>
            <div>
              <p className="text-[#FCFCFF] mr-[10px] text-[14px]  pl-[6px] pr-[6px] font-roboto font-bold ">
                Video
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
