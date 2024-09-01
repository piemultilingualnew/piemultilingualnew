import dynamic from "next/dynamic";
// const Footer = dynamic(() => import("@/components/Footer/page"), {
//   loading: () => () => <div className="w-full min-h-screen">Loading</div>,
// });
// import Banner from "@/components/homepage/Banner";
// const ClientLogos = dynamic(() => import("@/components/homepage/ClientLogos"), {
//   loading: () => () => <div className="w-full min-h-screen">Loading</div>,
// });
// const Services = dynamic(() => import("@/components/homepage/Services"), {
//   loading: () => () => <div className="w-full min-h-screen">Loading</div>,
// });
import Welcome from "@/components/homepage/Welcome";
import HowWeWork from "@/components/home/how-we-work/page";
import Testimonials from "@/components/parts/testimonial";
import FAQ from "@/components/home/testimonials/faq";
import BusinessService from "@/components/parts/serviceVideo";
import ClientLogos from "@/components/homepage/ClientLogos";

import Footer from "@/components/Footer/page";
import Banner from "@/components/homepage/Banner";
import Services from "@/components/homepage/Services";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeData } from "@/Redux/actions/homeActions";

const Advantage = dynamic(() => import("@/components/parts/advantage"), {
  loading: () => () => <div className="w-full min-h-screen">Loading</div>,
});

const home = () => {
  const dispatch = useDispatch();
  const { homeData, loadingHome, errorHome } = useSelector(
    (state) => state.home
  );

  useEffect(() => {
    dispatch(fetchHomeData());
  }, [dispatch]);

  if (loadingHome) {
    return (
      <div className="main-container justify-center items-center">
        <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
          <span className="loading loading-ring loading-lg text-[#F60]"></span>
        </div>
        <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]"></div>
      </div>
    );
  }
  if (errorHome) {
    return <>No home data found!</>;
  }

  console.log("data for home page: ", homeData);

  return (
    <div className="main-container">
      {homeData ? (
        <>
          <Banner slider={homeData.Slider} />
          <ClientLogos data={homeData.customer} />
          <BusinessService data={homeData.video_section} />
          <Services />
          <HowWeWork data={homeData.how_we_work} />
          <div className="max-w-[1210px] mx-auto w-full mt-[60px] hidden lg:block">
            <Advantage />
          </div>
          <Welcome />

          <div className="faq flex items-center justify-between flex-col md:flex-row max-w-[1300px] mx-auto mt-[1rem] mb-[7rem]">
            <div className="">
              <p className="font-acme sm:text-3xl text-2xl ml-[2.7rem] uppercase relative sm:top-[5rem] px-2">
                CUSTOMER TESTIMONIAL
              </p>
              <div className="mx-[2rem] flex items-center space-x-0 mt-0 sm:mt-0 h-fit">
                <h2 className="lg:text-[27rem] text-[20rem] lg:font-semibold text-orange-300 sm:block hidden">
                  {"["}
                </h2>
                <Testimonials data={homeData.Testimonials} />
                <h2 className="lg:text-[27rem] text-[20rem] lg:font-semibold text-orange-300 sm:block hidden">
                  {"]"}
                </h2>
              </div>
            </div>
            <div className="px-20 sm:mt-20 mb-[30px] dropDown">
              <p className="font-acme sm:text-3xl text-2xl text-center uppercase mb-5">
                Find the answers to your multilingual business outsourcing
              </p>
              <FAQ faqData={homeData.faq} />
            </div>
          </div>

          <Footer></Footer>
        </>
      ) : (
        <div className="main-container justify-center items-center">
          <div className="main-container h-[300px] flex relative bg-white justify-center z-20 items-center">
            <span className="loading loading-ring loading-lg text-[#F60]"></span>
          </div>
          <div className="sticky h-[520px] w-[100%] z-0 bottom-[0px]"></div>
        </div>
      )}
    </div>
  );
};

export default home;
