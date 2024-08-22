import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Edit() {
  const router = useRouter();
  const dispatch = useDispatch();
  const { caseData, loadingCase, errorCase } = useSelector(
    (state) => state.caseStudy
  );
  const { caseDetailData, loadingCaseDetail, errorCaseDetail } = useSelector(
    (state) => state.caseDetail
  );
  const { inner2Data, loadingInner2, errorInner2 } = useSelector(
    (state) => state.inner2
  );
  const { inner3Data, loadingInner3, errorInner3 } = useSelector(
    (state) => state.inner3
  );
  const { inner1Data, loadingInner1, errorInner1 } = useSelector(
    (state) => state.inner1
  );
  const { isVisible } = useSelector((state) => state.edit);
  const { contactData, loading, error } = useSelector((state) => state.contact);
  const { learningData, loadingLearning, errorLearning } = useSelector(
    (state) => state.learning
  );


  const handleBlock = async () => {
    const { toggleBlock } = await import("@/Redux/features/editSlice");
    dispatch(toggleBlock());
  };

  const apiCaseData = caseData;
  const apiCaseDetail = caseDetailData;
  const apiDatainnertwo = inner2Data || inner3Data;
  const apiDatatwo = learningData;
  const apiData = inner1Data;
  const apiData2 = inner3Data;

  const api =
    apiData != null
      ? apiData.api
      : apiData2 != null
      ? apiData2.api
      : apiDatainnertwo != null
      ? apiDatainnertwo.api
      : apiDatatwo != null
      ? apiDatatwo.api
      : apiCaseData != null
      ? apiCaseData.api
      : apiCaseDetail != null
      ? apiCaseDetail.api
      : contactData != null
      ? contactData.api
      : "";
  const id =
    apiData !== null
      ? apiData.id
      : apiData2 !== null
      ? apiData2.id
      : apiDatainnertwo !== null
      ? apiDatainnertwo.id
      : apiDatatwo !== null
      ? apiDatatwo.id
      : apiCaseData != null
      ? apiCaseData.id
      : apiCaseDetail != null
      ? apiCaseDetail.id
      : contactData != null
      ? contactData.id
      : "";
  const handleLinkClick = (e) => {
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

  return (
    isVisible && (
      <div className="flex justify-between px-10 fixed z-50 top-0 mb-[20px] w-[100%] bg-[#5d5c5c]">
        <Link
          href={
            process.env.NEXT_PUBLIC_mainurl +
            "/admin/content-manager/collectionType/api::" +
            api +
            "." +
            api +
            "/" +
            id
          }
          onClick={handleLinkClick}
          className="border-[1px] border-solid text-[#FFF] border-[#adadad] px-3 py-1 rounded"
        >
          {" "}
          edit page
        </Link>
        <button
          onClick={handleBlock}
          className="border-[1px] text-[#FFF] border-solid border-[#adadad] px-3 py-1 rounded"
        >
          close
        </button>
      </div>
    )
  );
}
