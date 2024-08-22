import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import domtoimage from "dom-to-image";
import { useDispatch, useSelector } from "react-redux";

export default function RightSection(props) {
  const { inner1Data } = useSelector(
    (state) => state.inner1
  );
  const { inner3Data } = useSelector(
    (state) => state.inner3
  );
  const { ipInfo } = useSelector(
    (state) => state.ip
  );

  const ipdata = ipInfo;
  const [show, setShow] = useState(false);
  const [namewarn, setNamewarn] = useState(false);
  const [phonewarn, setPhonewarn] = useState(false);
  const [uploadbutton, setUploadbutton] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileNames, setFileNames] = useState([]);
  const fileInputRef = useRef(null);

  const { asPath } = useRouter();
  const navigate = useRouter();
  let searchurl = asPath;
  searchurl = searchurl.substring(0, searchurl.length - 1);
  let parts = searchurl.split("/");

  const dispatch = useDispatch();
  useEffect(() => {
    const fetching = async () => {
      const { fetchIpData } = await import("@/Redux/actions/ipActions");

      dispatch(fetchIpData());
      parts = parts[1] ? parts[1].replace(/-/g, " ") : "";

      if (parts.length >= 3) setUploadbutton(true);
      else {
        if (inner3Data != null) setUploadbutton(true);
        else setUploadbutton(false);
      }
      if (inner1Data != null) setUploadbutton(false);
    };
    fetching();
  }, []);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    if (selectedFiles.length + files.length <= 4) {
      setSelectedFiles([...selectedFiles, ...files]);
      setFileNames([...fileNames, ...files.map((file) => file.name)]);
    } else {
      alert("You can select at most 4 files.");
      fileInputRef.current.value = null;
    }
  };

  const handleFileDelete = (fileName) => {
    setSelectedFiles(selectedFiles.filter((file) => file.name !== fileName));
    setFileNames(fileNames.filter((name) => name !== fileName));
  };

  useEffect(() => {
    if (selectedFiles.length > 4) {
      alert("You can select at most 4 files.");
      fileInputRef.current.value = null;
    }
  }, [selectedFiles]);

  useEffect(() => {
    if (props.data !== null && props.data !== undefined) {
      setUploadbutton(true);
      setGap(15);
    } else setGap(5);
  }, [props]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
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
    if (name === "phone" && value !== "" && !/^[\d+\- ]+$/.test(value)) {
      ee.target.classList.add("invalid");
      setPhonewarn(true);
      return;
    } else {
      ee.target.classList.remove("invalid");
      setPhonewarn(false);
    }
    setFormData({ ...formData, [name]: value });
  };

  function warning() {
    alert("You can select at most 4 files.");
  }

  const [gap, setGap] = useState();
  const [gapp, setGapp] = useState();
  useEffect(() => {
    uploadbutton ? setGap(10) : setGap(18);
    uploadbutton ? setGapp(10) : setGap(10);
  }, [gap, gapp, uploadbutton]);

  const dateTime = new Date();
  const tableRef = useRef(null);
  const dateString = dateTime.toLocaleString();
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(`${window.location.origin}${asPath}`);
  }, [asPath]);
  const handleUpload = async () => {
    try {
      const formdata = new FormData();
      const dataUrl = await domtoimage.toPng(tableRef.current);
      const blob = await fetch(dataUrl).then((res) => res.blob());
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      formdata.append("name", formData.name);
      formdata.append("email", formData.email);
      formdata.append("phone", formData.phone);
      formdata.append("country", ipdata.country);
      formdata.append("IP", ipdata.ip);
      formdata.append("url", `${window.location.origin}${asPath}`);
      formdata.append("message", formData.message);
      formdata.append("date", dateString);
      selectedFiles.forEach((file) => {
        formdata.append("files", file);
      });
      const response = await axios.post("/api/sendEmail", formdata, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        navigate.push("/thank-you");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
        setSelectedFiles([]);
        setFileNames([]);
      } else {
        console.error("Error submitting form:", response.data.message);
        alert(response.data.message);
      }
      formdata.delete("files");
      const datasend = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: ipdata.country,
        IP: ipdata.ip,
        url: `${window.location.origin}${asPath}`,
        message: formData.message,
        date: dateString,
      };
      const formdataa = new FormData();
      selectedFiles.forEach((file, index) => {
        formdataa.append("files.file", file, file.name);
      });

      formdataa.append("files.table", blob, `${randomNumber}.jpg`);
      formdataa.append("data", JSON.stringify(datasend));
      await fetch(process.env.NEXT_PUBLIC_mainurl + "/api/forms", {
        method: "POST",
        body: formdataa,
      })
        .then((res) => {
          for (const key of formdataa.keys()) {
            formdataa.delete(key);
          }
        })
        .catch((error) => {
          console.error("AxiosError:", error);
        });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div
      className={`w-[100%] gap-[${gap}px] z-0   justify-between   shadow-lg bg-[#eeeded] rounded-[15px] flex flex-col  items-center   shadow-[#514e4e]   `}
    >
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
                  {ipdata != null ? ipdata.country : ""}
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
                  {ipdata != null ? ipdata.ip : ""}
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
                  Date
                </td>
                <td style={{ border: "1px solid black", padding: "8px" }}>
                  {dateString != null ? dateString : ""}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <button onClick={convertToImage}>Convert to Image</button>  */}
      </div>
      <div
        className={`w-[100%] py-[1px] bg-[#F60] rounded-t-[15px] border-b-[1px] shadow-none relative border-[#F60] flex flex-col justify-center items-center`}
      >
        <p className="text-[24px] max-lg:text-center robotomono  tracking-[-1px]  text-[#FFFF]">
          Request a{" "}
          <span className="font-acme tracking-[1px] font-medium text-[27px]">
            FREE QUOTE
          </span>
        </p>
      </div>
      <p className="text-[15px] relative  font-roboto  leading-[20px]  text-[#211f1f]">
        Partner with Multilingual experts <br />
        Save your cost within 12 hours
      </p>

      <div className="px-[25px]   w-[100%] justify-start  shadow-none flex flex-col gap-y-[8px] ">
        <label htmlFor="name" className="hidden">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="rounded-[3px] text-[black] bg-[#eeeded] text-[15px] p-[5px] w-full h-[35px]  border-[1px] border-solid border-[#F60]"
          placeholder="Name"
        />
        {namewarn ? (
          <p className="text-[9px] text-start mt-[-10px] wfull text-[red]">
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
          className="rounded-[3px] text-[black] bg-[#eeeded] text-[15px]  p-[5px] w-full h-[35px] border-[1px] border-solid border-[#F60]"
          placeholder="Email"
          required
        />
        <div>
          <div>
            <div className="flex">
              <button
                name="form"
                className=" w-[35px] border-[1px] text-[14px] border-solid border-[#F60] bg-[#807d7aac] font-medium font-roboto text-white"
              >
                {ipdata != null && ipdata != undefined
                  ? ipdata.country_code
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
                className="rounded-[3px] text-[15px] text-[black] p-[5px] w-full h-[35px] border-[1px] border-l-0 rounded-bl-none rounded-tl-none border-solid border-[#F60]"
                required
                placeholder="Phone number"
                maxLength={15}
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
        {show ? (
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            id=""
            className=" rounded-[3px] w-full h-[142px] border-[1px] border-solid border-[#F60] mt-[-110.5px]"
            style={{ resize: "none" }}
          ></textarea>
        ) : (
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            id=""
            className=" p-2  text-[15px]  rounded-[3px] w-full h-[142px] border-[1px] border-solid border-[#F60] text-[black]"
            style={{ resize: "none" }}
            placeholder="Write requirements"
          ></textarea>
        )}
        <div className=" overflow-hidden flex justify-start  flex-col text-[16px]  font-roboto text-[gray]">
          <label htmlFor="description" hidden>
            Description
          </label>
          <input
            type="file"
            multiple
            onChange={selectedFiles.length <= 3 ? handleFileChange : warning}
            ref={fileInputRef}
            id="fileInput"
            style={{ display: "none" }}
          />
          {uploadbutton ? (
            <div className="flex gap-[28px] justify-between z-[50]">
              <label
                htmlFor="fileInput"
                className=" flex justify-center items-center h-[35px] w-[119px] border-dashed border-2 border-[#0c5460] items-centercustom-file-input-label text-[#0c5460] font-normal text-[15px]  "
              >
                <svg
                  fill="#1e5f71"
                  className="mr-[8px]"
                  height="25px"
                  width="25px"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  enableBackground="new 0 0 512 512"
                  space="preserve"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M470.7,277.2c3-11.2,4.7-22.9,4.7-35c0-75.8-61.4-137.1-137.1-137.1c-19.5,0-38,4.1-54.7,11.4 c-16.8-39-55.6-66.3-100.7-66.3c-60.6,0-109.7,49.1-109.7,109.7c0,4.1,0.8,7.9,1.2,11.9C30.5,192.1,0,236.3,0,287.9 c0,70.7,57.3,128,128,128h310.9c40.4,0,73.1-32.7,73.1-73.1C512,313.8,495.1,289.1,470.7,277.2z M292.6,251.3v91.4h-73.1v-91.4 h-54.9l91.4-91.4l91.4,91.4H292.6z"></path>{" "}
                  </g>
                </svg>
                <input type="file" id="fileInput" className="hidden" />
                <p className="font-acme"> Upload files</p>
              </label>
              <p className="text-[11px] text-[#000] font-roboto mr-[12px]">
                {" "}
                Upload Max 4 files <br /> (10MB each)
              </p>
            </div>
          ) : (
            ""
          )}
          <ul>
            {fileNames.map((fileName, index) => (
              <li
                key={index}
                className="w-[250px] flex overflow-hidden justify-between pr-2"
              >
                <p className="h-[20px] mt-[4px] w-[170px] ">{fileName}</p>
                <button
                  name="form"
                  onClick={() => handleFileDelete(fileName)}
                  className="hover:text-red-600"
                >
                  <svg
                    className="hover:fill-red-500 h-[10px] w-[10px]  font-extrabold"
                    fill="#000000"
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 490 490"
                    space="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon>{" "}
                    </g>
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          {/* <button onClick={handleUpload}>Upload</button> */}
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
      <div
        className={`h-[42px] relative mt-[5px] bg-[#F60] w-[100%] rounded-b-[15px] flex justify-center items-center`}
      >
        <p className="font-normal font-inter text-[15.3px]  text-[black] ">
          We respect your privacy.{" "}
          <span className="text-[#FFF] ">
            <a href="">Read our Policy</a>
          </span>
        </p>
      </div>
    </div>
  );
}
