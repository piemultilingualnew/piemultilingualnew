"use client";
import dynamic from "next/dynamic";
import Welcome from "@/components/homepage/Welcome";
import HowWeWork from "@/components/home/how-we-work/page";
import Testimonials from "@/components/parts/testimonial";
import FAQ from "@/components/home/testimonials/faq";
import BusinessService from "@/components/parts/serviceVideo";
import ClientLogos from "@/components/homepage/ClientLogos";

import Footer from "@/components/Footer/page";
import Banner from "@/components/homepage/Banner";
import Services from "@/components/homepage/Services";

const Advantage = dynamic(() => import("@/components/parts/advantage"), {
  loading: () => () => <div className="w-full min-h-screen">Loading</div>,
});

const home = () => {
  return (
    <div className="main-container">
      <Banner />
      <ClientLogos />
      <BusinessService />
      <Services />
      <HowWeWork />
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
            <Testimonials />
            <h2 className="lg:text-[27rem] text-[20rem] lg:font-semibold text-orange-300 sm:block hidden">
              {"]"}
            </h2>
          </div>
        </div>
        <div className="px-20 sm:mt-20 mb-[30px] dropDown">
          <p className="font-acme sm:text-3xl text-2xl text-center uppercase mb-5">
            Find the answers to your multilingual business outsourcing
          </p>
          <FAQ />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default home;
