import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import domtoimage from "dom-to-image";
import { useSelector } from "react-redux";

export default function HireForm() {
  const { ipData } = useSelector((state) => state.ip);
  const { inner1Data } = useSelector((state) => state.inner1);
  const { inner3Data } = useSelector((state) => state.inner3);
  const apiData = inner1Data;
  const apiData2 = inner3Data;

  const [namewarn, setNamewarn] = useState(false);
  const [phonewarn, setPhonewarn] = useState(false);
  const [uploadbutton, setUploadbutton] = useState(false);
  const { asPath } = useRouter();
  const navigate = useRouter();
  const searchurl = asPath;
  let parts = searchurl.split("/");

  useEffect(() => {
    if (parts.length >= 3) setUploadbutton(true);
    else if (apiData2 != null) {
      setUploadbutton(true);
    } else setUploadbutton(false);
    if (apiData != null) setUploadbutton(false);
  }, [parts, apiData2, apiData]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
    message: "",
  });

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
    if (name === "phone" && !/^\d*$/.test(value)) {
      ee.target.classList.add("invalid");
      setPhonewarn(true);
      return;
    } else {
      ee.target.classList.remove("invalid");
      setPhonewarn(false);
    }
    setFormData({ ...formData, [name]: value });
  };

  const tableRef = useRef(null);
  const [gap, setGap] = useState();
  const [gapp, setGapp] = useState();
  useEffect(() => {
    uploadbutton ? setGap(10) : setGap(18);
    uploadbutton ? setGapp(10) : setGap(10);
  }, [gap, gapp, uploadbutton]);
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(`${window.location.origin}${asPath}`);
  }, [asPath]);

  const [dateTime, setDateTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  const dateString = dateTime.toLocaleString();
  const handleUpload = async () => {
    try {
      const formdata = new FormData();
      const dataUrl = await domtoimage.toPng(tableRef.current);
      const blob = await fetch(dataUrl).then((res) => res.blob());
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      formdata.append("name", formData.name);
      formdata.append("email", formData.email);
      formdata.append("phone", formData.phone);
      formdata.append("role", formData.role);
      formdata.append("message", formData.message);
      formdata.append("country", ipData.country);
      formdata.append("IP", ipData.ip);
      formdata.append("url", `${window.location.origin}${asPath}`);
      formdata.append("date", dateString);
      const response = await axios.post("/api/sendEmail", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        navigate.push("/thank-you");
        alert("Form submitted successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          role: "",
        });
      } else {
        console.error("Error submitting form:", response.data.message);
        alert(response.data.message);
      }
      const data = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        role: formData.role,
        country: ipData.country,
        IP: ipData.ip,
        url: `${window.location.origin}${asPath}`,
        date: dateString,
      };
      const formdataa = new FormData();
      formdataa.append("files.table", blob, `${randomNumber}.jpg`);
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
  return (
    <div className="w-[850px] py-[20px] border-solid border-[#CCC] border-[1px] mr-[10px]">
      <div className=" absolute  h-[800px] left-[-999999999999px] bg-white text-black">
        <div
          style={{
            padding: "30px",
            borderStyle: "solid",
            borderColor: "#f60",
            borderWidth: "1px",
            background: "white",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "200px",
              marginBottom: "0px",
              background: "white",
            }}
          >
            <p style={{ color: "#000", lineHeight: "25px" }}>
              Dear Admin,
              <br />
              You have a new enquiry .
              <br />
              Please see details:
            </p>
          </div>
          <table
            ref={tableRef}
            style={{
              borderCollapse: "collapse",
              border: "1px solid black",
              minWidth: "500px",
              background: "white",
            }}
          >
            {/* {console.log(dateString)} */}
            <tbody>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "40px",
                  }}
                >
                  Name
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {formData.name}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "40px",
                  }}
                >
                  Email
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {formData.email}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "40px",
                  }}
                >
                  Phone
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {formData.phone}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "40px",
                  }}
                >
                  Country
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {ipData != null ? ipData.country : ""}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "40px",
                  }}
                >
                  IP
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {ipData != null ? ipData.ip : ""}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "40px",
                  }}
                >
                  URL
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {url}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "40px",
                  }}
                >
                  Message
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {formData.message}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "40px",
                  }}
                >
                  Role
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {formData.role}
                </td>
              </tr>
              <tr>
                <td
                  style={{
                    border: "1px solid black",
                    padding: "8px",
                    width: "40px",
                  }}
                >
                  Date
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {dateString != null ? dateString : ""}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="px-[25px]   w-[100%] justify-start  shadow-none flex flex-col gap-y-[8px] ">
        <label htmlFor="name" className="hidden">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="rounded-[3px] text-[black]  text-[15px] p-[5px] w-full h-[35px]  border-[1px] border-solid border-[#ccc]"
          placeholder="Name"
        />
        {namewarn ? (
          <p className="text-[9px] text-start mt-[-10px] w-full text-[red]">
            no number or special characters are allowed
          </p>
        ) : (
          ""
        )}
        <label htmlFor="email" className="hidden">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="rounded-[3px] text-[black]  text-[15px]  p-[5px] w-full h-[35px] border-[1px] border-solid border-[#ccc]"
          placeholder="Email"
          required
        />
        <div>
          <div>
            <div className="flex">
              <button
                name="form"
                className=" w-[35px] border-[1px] text-[14px] border-solid border-[#ccc] bg-[#807d7aac] font-medium font-roboto text-white"
              >
                {ipData != null && ipData != undefined
                  ? ipData.country_code
                  : ""}
              </button>
              <label htmlFor="phonenumbr" hidden>
                Phone
              </label>
              <input
                id="phonenumbr"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="rounded-[3px] text-[15px] text-[black] p-[5px] w-full h-[35px] border-[1px] border-l-0 rounded-bl-none rounded-tl-none border-solid border-[#ccc]"
                required
                placeholder="Phone number"
              />
            </div>
            {phonewarn ? (
              <p className="text-[9px] text-start mt-[-px] wfull text-[red]">
                no alphabets or special characters are allowed
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
        <div
          className=" overflow-hidden flex justify-start  flex-col text-[16px]  font-roboto text-[gray]"
          style={{ backgroundColor: "white" }}
        >
          <label htmlFor="role" hidden>
            Role
          </label>
          <select
            name="role"
            id="role"
            required
            className="rounded-[3px] bg-white text-[15px]  p-[5px] w-full h-[35px] border-[1px] border-solid border-[#ccc]"
            placeholder="select from one"
            value={formData.role}
            onChange={handleChange}
          >
            <option className="text-[15px]" value="select-one">
              Select One
            </option>

            <option
              className="text-[black]  text-[15px]"
              value="foreign-language-support"
            >
              FOREIGN LANGUAGE SUPPORT
            </option>
            <option
              className="text-[black]  text-[15px]"
              value="outsource-market-research-services"
            >
              MARKET RESEARCH & ANALYSIS
            </option>
            <option
              className="text-[black]  text-[15px]"
              value="transcription-services"
            >
              TRANSCRIPTION SERVICES
            </option>
            <option
              className="text-[black]  text-[15px]"
              value="multilingual-call-center-outsourcing"
            >
              MULTILINGUAL CALL CENTER
            </option>
            <option className="text-[black]  text-[15px]" value="data-entry">
              DATA ENTRY SERVICES
            </option>
            <option
              className="text-[black]  text-[15px]"
              value="outsource-creative-services"
            >
              CREATIVE SERVICES
            </option>
            <option
              className="text-[black]  text-[15px]"
              value="outsource-photo-editing-services"
            >
              PHOTO EDITING SERVICES
            </option>
            <option
              className="text-[black]  text-[15px]"
              value="virtual-assistant-services"
            >
              VIRTUAL ASSISTANT SERVICES
            </option>
            <option
              className="text-[black]  text-[15px]"
              value="finance-and-accounting"
            >
              FINANCE & ACCOUNTING
            </option>
            <option
              className="text-[black]  text-[15px]"
              value="web-design-and-development"
            >
              WEB DESIGN & DEVELOPMENT
            </option>
          </select>
        </div>
        <div>
          <textarea
            name="message"
            value={formData.message}
            placeholder="Description of requirement"
            onChange={handleChange}
            id=""
            className=" rounded-[3px] w-full h-[142px] border-[1px] border-solid border-[#ccc] "
            style={{ resize: "none" }}
          ></textarea>
        </div>
        <button
          name="form"
          className={`rounded-[4px] hover:bg-[#F60] hover:text-[#FFF] border-[1px] h-[40px] text-[21px] border-solid border-[#F60] font-medium font-roboto text-[#F60] `}
          type="submit"
          onClick={handleUpload}
        >
          ➤ SEND
        </button>
      </div>
    </div>
  );
}
