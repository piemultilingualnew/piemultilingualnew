"use client";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect, useCallback } from "react";


const Footer = dynamic(() => import("@/components/Footer/page"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const Navbar = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/Navbar/Navbar"
    ),
  {
    loading: () => <div className="w-full min-h-[200px]">Loading</div>,
  }
);
const Banner = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/banner/Banner"
    ),
  {
    loading: () => <div className="w-full min-h-[300px]">Loading</div>,
  }
);
const Section = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/sections/page"
    ),
  {
    loading: () => <div className="w-full min-h-screen">Loading</div>,
  }
);

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { hireData, loadingHire, errorHire } = useSelector(
    (state) => state.hire
  );


  const fetchData = useCallback(async () => {
    const [fetchHireData] = await Promise.all([
      import("@/Redux/actions/hireActions").then((m) => m.fetchHireData),
    ]);

    const { slug } = router.query;

    await Promise.all([dispatch(fetchHireData(slug))]);
  }, [router.asPath, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loadingHire)
    return (
      <div className="main-container justify-center items-center">
        <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
          <span className="loading loading-ring loading-lg text-[#F60]"></span>
        </div>
        <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]"></div>
      </div>
    );

  const renderContent = (data) => (
    <>
      <Banner data={data} />
      <Navbar />
      <div className="main-container flex justify-center items-center">
        <Section data={data}></Section>
      </div>
    </>
  );

  return (
    <div className="">
      {hireData ? (
        renderContent(hireData)
      ) : errorHire ? (
        <>No Data Found!</>
      ) : (
        <div className="main-container justify-center items-center">
          <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
            <span className="loading loading-ring loading-lg text-[#F60]"></span>
          </div>
          <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]">
            <Footer></Footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
