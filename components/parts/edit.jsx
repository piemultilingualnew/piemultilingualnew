import { blogData, resetBlog } from "@/Redux/features/blogSlice";
import { setIsVisible } from "@/Redux/features/editSlice";
import { hireData, resetHire } from "@/Redux/features/hireSlice";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Edit() {
  const dispatch = useDispatch();

  const { caseData } = useSelector((state) => state.caseStudy);
  const { caseDetailData } = useSelector((state) => state.caseDetail);
  const { inner2Data } = useSelector((state) => state.inner2);
  const { inner3Data } = useSelector((state) => state.inner3);
  const { inner1Data } = useSelector((state) => state.inner1);
  const { isVisible } = useSelector((state) => state.edit);
  const { contactData } = useSelector((state) => state.contact);
  const { learningData } = useSelector((state) => state.learning);
  const { aboutData } = useSelector((state) => state.about);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const showBlock = localStorage.getItem("showBlock") === "true";
      dispatch(setIsVisible(showBlock));
    }
  }, [dispatch]);

  const handleBlock = async () => {
    const { toggleBlock } = await import("@/Redux/features/editSlice");
    dispatch(toggleBlock());
  };

  const getApiAndId = () => {
    if (contactData != null)
      return { api: contactData.api, id: contactData.id };
    if (aboutData != null) return { api: aboutData.api, id: aboutData.id };
    if (hireData != null) return { api: hireData.api, id: hireData.id };
    if (blogData != null) return { api: blogData.api, id: blogData.id };
    if (learningData != null)
      return { api: learningData.api, id: learningData.id };
    if (caseData != null) return { api: caseData.api, id: caseData.id };
    if (caseDetailData != null)
      return { api: caseDetailData.api, id: caseDetailData.id };
    if (inner3Data != null) return { api: inner3Data.api, id: inner3Data.id };
    if (inner2Data != null) return { api: inner2Data.api, id: inner2Data.id };
    if (inner1Data != null) return { api: inner1Data.api, id: inner1Data.id };
    return { api: "", id: "" }; // Default if no data is available
  };

  const { api, id } = getApiAndId();

  const handleLinkClick = (e) => {
    console.log("api: ", api);
    e.preventDefault();
    window.open(
      process.env.NEXT_PUBLIC_mainurl +
        "/admin/content-manager/collectionType/api::" +
        api +
        "." +
        api +
        "/" +
        id,
      "_blank"
    );
  };
  if (!isVisible) {
    return <></>;
  }

  return (
    <div className="flex justify-between px-10 fixed z-50 top-0 mb-[20px] w-[100%] bg-[#5d5c5c]">
      <Link
        href="#"
        onClick={handleLinkClick}
        className="border-[1px] border-solid text-[#FFF] border-[#adadad] px-3 py-1 rounded"
      >
        edit page
      </Link>
      <button
        onClick={handleBlock}
        className="border-[1px] text-[#FFF] border-solid border-[#adadad] px-3 py-1 rounded"
      >
        close
      </button>
    </div>
  );
}
