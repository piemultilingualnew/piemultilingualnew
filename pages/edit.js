import { useState, useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useRouter } from "next/router";
import Footer from "@/components/Footer/page";
import { useDispatch, useSelector } from "react-redux";

export default function Editing() {
  const [Data, setData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { isVisible } = useSelector((state) => state.edit);
  const [showForm, setShowForm] = useState(false);
  const [queries, setQueries] = useState("");
  const [wrong, setWrong] = useState(false);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value });
  };
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isVisible) {
      setIsLoading(true);
      router.push("/");
    }
  }, [isVisible]);

  const Handlesubmit = async () => {
    setShowForm(true);
    const query = qs.stringify(
      {
        filters: {
          $or: [
            {
              email: {
                $eq: Data.email,
              },
            },
          ],
        },
        populate: ["email", "password", "username"],
      },
      {
        encodeValuesOnly: true,
      }
    );
    setQueries(query);
  };

  useEffect(() => {
    const fetching = async () => {
      const { toggleEdit } = await import("@/Redux/features/editSlice");
      await axios
        .get(process.env.NEXT_PUBLIC_mainurl + "/api/admins?" + queries)
        .then((response) => {
          if (
            response.data.data[0] != null &&
            response.data.data[0].attributes.password == Data.password &&
            response.data.data[0].attributes.email == Data.email
          ) {
            dispatch(toggleEdit());
            setShowForm(false);
          } else if (response.data.data[0] == null) {
            alert("create account");
          } else {
            setWrong(true);
            alert("wrong passwrod");
          }
        });
      setShowForm(false);
    };
    if (showForm) fetching();
  }, [showForm]);
  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  return (
    <div>
      {!isVisible ? (
        <div className="main-container h-[1200px] justify-between items-center bg-gray-100 pl-2 pb-1  border-slate-300 flex-col gap-2 flex">
          <div className="w-[350px] border-solid border-[1px] relative top-[12%] border-slate-300 bg-white p-10 gap-[20px] flex flex-col">
            <div className="  w-full border-slate-300 flex-col justify-start items-start gap-2 flex">
              <label
                htmlFor="email"
                className="text-neutral-600 text-base font-medium font-['Inter'] capitalize leading-snug"
              >
                email:
              </label>
              <input
                type="email"
                name="email"
                onChange={handlechange}
                className="  border-slate-300 flex-col justify-start items-start gap-2 border-2 w-full border-solid h-[45px] p-2 rounded-md flex placeholder:text-[14px]"
                placeholder="Enter email"
              />
            </div>
            <div className="  w-full border-slate-300 flex-col justify-start items-start gap-2 flex">
              <label
                htmlFor="password"
                className="text-neutral-600 text-base font-medium font-['Inter'] capitalize leading-snug"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                onChange={handlechange}
                style={{ border: wrong ? "red" : "" }}
                className="  border-2 border-solid w-full h-[45px] p-2  rounded-md  border-slate-300 flex-col justify-start items-start gap-2 flex placeholder:text-[14px]"
                placeholder="Enter Password"
              />
            </div>
            <button
              onClick={() => {
                Handlesubmit();
              }}
              type="submit"
              onChange={handlechange}
              className="xt-center text-white w-full text-sm font-medium font-['Inter'] h-12 px-[31px] py-4 bg-slate-600 rounded-lg shadow flex-col justify-center items-center gap-2.5"
            >
              click to show
            </button>
          </div>
          <Footer></Footer>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
