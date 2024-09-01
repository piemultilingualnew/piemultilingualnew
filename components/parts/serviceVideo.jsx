import { YouTubeEmbed } from "@next/third-parties/google";
import React from "react";

const BusinessService = () => {
  return (
    <div className=" bg-[#236cb9] px-2">
      <div className="flex flex-col lg:flex-row items-center justify-between py-2 lg:pl-8 max-w-[1250px] mx-auto">
        {/* Left Side: Text Content */}
        <div className="w-full lg:w-full text-white p-8 rounded-lg mx-auto">
          <h1 className="text-2xl lg:text-3xl font-acme mb-6 text-[#f99450]">
            MULTILINGUAL BUSINESS SERVICE COMPANY WILL TAKE YOU TO THE NEXT
            LEVEL
          </h1>
          <p className="text-lg mb-4">
            With businesses becoming more competitive than ever before, a
            committed, skilled, multilingual business service outsourcing
            company helps you achieve more within the time, expense, and
            efficiency limits rather than simply carrying out projects.
          </p>
          <p className="text-lg mb-6">
            Our multilingual professional support services assist companies to
            increase productivity while reducing operational costs. Our
            excellent services offer multifarious support for multi-domain
            business operations.
          </p>
          <div className="block sm:flex sm:flex-row mt-8 justify-between">
            <div className="bg-[url('/imgs/hexa.png')] bg-cover block isolate w-[160px] h-[160px] float-left text-center pt-[25px] mr-[20px]">
              <i className="glyph-icon flaticon-save-money text-green-400 text-[30px]"></i>
              <p className="relative bottom-1">
                30-50% <br />
                Cost Savings
              </p>
            </div>

            <div className="bg-[url('/imgs/hexa.png')] bg-cover block isolate w-[160px] h-[160px] float-left text-center pt-[25px] mr-[20px]">
              <i className="glyph-icon flaticon-languages text-green-400 text-[30px]"></i>
              <p className="relative bottom-1">
                Multilingual <br />
                Support
              </p>
            </div>

            <div className="bg-[url('/imgs/hexa.png')] bg-cover block isolate w-[160px] h-[160px] float-left text-center pt-[25px] mr-[20px]">
              <i className="glyph-icon flaticon-line-chart text-green-400 text-[30px]"></i>
              <p className="relative bottom-1">
                Improved <br />
                Efficiency
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Video */}
        <div className="w-full lg:w-[900px] h-[400px]">
          <YouTubeEmbed
            style="min-width:100%; min-height:315px; max-height:400px;"
            videoid="12"
            params="rel=0"
          />
        </div>
      </div>
    </div>
  );
};

export default BusinessService;
