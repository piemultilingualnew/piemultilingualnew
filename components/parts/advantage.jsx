import { useState } from "react";
export default function Advantage() {
  const [fir, setFir] = useState(true);
  const [sec, setSec] = useState(false);
  const [thir, setThir] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const first = (
    <div className="advantage flex gap-3 h-[450px] lg:h-[430px] justify-between py-3 px-[25px] items-center">
      <div className="overflow-hidden w-[60%]">
        <h2
          className="w-full uppercase text-[1.3rem] !py-1 font-acme"
          style={{ color: "rgb(249 148 80)" }}
        >
          First Improve your bottom line with customized business support
        </h2>
        <p>
          First Every business has unique requirements and one solution cannot
          fit all. We at Pie Multilingual follow a solution-oriented approach to
          provide customized support for individual business requirements. Our
          customized enterprize-ready business- oriented solutions help small
          and large business organizations serve their clientele more
          effectively. Our customized support combined with multilingual
          expertise improves your efficiency by elevating your productivity. Our
          customized support provides unmatchable solutions to a wide spectrum
          of industries. Outsource to India and get immaculate comprehensive
          solutions for improving your bottom line. Our tailor-made solutions
          guarantee:of industries. Outsource to India and get immaculate
          comprehensive guarantee:of industries.
          guarantee:of industries. Outsource to India and get immaculate
          comprehensive guarantee:of industries comprehensive guarantee:of industries.
        </p>
      </div>
      <div className="bg-[url('../public/imgs/tailored.png')] self-center bg-cover h-[100%] w-[300px]"></div>
    </div>
  );
  const second = (
    <div className="flex gap-3 h-[460px] justify-between py-20 px-[25px] items-center">
      <div className="overflow-hidden w-[60%]">
        <h2
          className="w-full uppercase text-[1.3rem] !py-3 font-acme"
          style={{ color: "#30b1c0" }}
        >
          Second Improve your bottom line with customized business support
        </h2>
        <p>
          Second Every business has unique requirements and one solution cannot
          fit all. We at Pie Multilingual follow a solution-oriented approach to
          provide customized support for individual business requirements. Our
          customized enterprize-ready business- oriented solutions help small
          and large business organizations serve their clientele more
          effectively. Our customized support combined with multilingual
          expertise improves your efficiency by elevating your productivity. Our
          customized support provides unmatchable solutions to a wide spectrum
          of industries. Outsource to India and get immaculate comprehensive
          solutions for improving your bottom line. Our tailor-made solutions
          guarantee:of industries. Outsource to India and get immaculate
          comprehensive guarantee:of industries.
        </p>
      </div>
      <div className="bg-[url('../public/imgs/story-1.png')] self-center bg-cover h-[115%] w-[300px]"></div>
    </div>
  );
  const third = (
    <div className="flex gap-3 h-[460px] justify-between py-20 px-[25px] items-center">
      <div className="overflow-hidden w-[60%]">
        <h2
          className="w-full uppercase text-[1.3rem] !py-3 font-acme"
          style={{ color: "#30b1c0" }}
        >
          Third Improve your bottom line with customized business support
        </h2>
        <p>
          Third Every business has unique requirements and one solution cannot
          fit all. We at Pie Multilingual follow a solution-oriented approach to
          provide customized support for individual business requirements. Our
          customized enterprize-ready business- oriented solutions help small
          and large business organizations serve their clientele more
          effectively. Our customized support combined with multilingual
          expertise improves your efficiency by elevating your productivity. Our
          customized support provides unmatchable solutions to a wide spectrum
          of industries. Outsource to India and get immaculate comprehensive
          solutions for improving your bottom line. Our tailor-made solutions
          guarantee:of industries. Outsource to India and get immaculate
          comprehensive guarantee:of industries.
        </p>
      </div>
      <div className="bg-[url('../public/imgs/story-2.png')] self-center bg-cover h-[115%] w-[300px]"></div>
    </div>
  );

  return (
    <>
      <h3 className="font-acme sm:text-3xl text-2xl text-center uppercase relative text-[#30b1c0]">
        MULTILINGUAL BUSINESS SERVICE COMPANY ADVANTAGE & SOLUTIONS
      </h3>
      <div className="flex md:flex-row flex-col gap-5 mb-[50px] max-w-[1250px] mt-[3rem]">
        <div className="flex flex-col md:w-[27%] w-full gap-[20px] h-full">
          <div
            className={`boxarrowthree flex justify-between items-center ${
              fir ? "bg-blue-600/70" : "white"
            }`}
            onMouseEnter={() => {
              setFir(true);
              setSec(false);
              setThir(false);
              setFour(false);
              setFive(false);
            }}
          >
            <i
              className={`flaticon-research text-[40px] ${
                fir ? "text-white" : "text-[#646464]"
              }`}
            ></i>
            <p
              className={`uppercase text-[19px] px-4 text-center w-full font-roboto font-[500] ${
                fir ? "text-white" : "text-gray-500"
              }`}
            >
              Tailored solutions
            </p>
          </div>
          <div
            className={`boxarrowthree flex justify-between items-center ${
              sec ? "bg-blue-600/70" : "white"
            }`}
            onMouseEnter={() => {
              setFir(false);
              setSec(true);
              setThir(false);
              setFour(false);
              setFive(false);
            }}
          >
            <i
              className={`flaticon-market text-[40px] text-[#646464] ${
                sec ? "text-white" : "text-[#646464]"
              }`}
            ></i>
            <p
              className={`uppercase text-[19px] text-center w-full font-roboto px-4 font-[500] ${
                sec ? "text-white" : "text-gray-500"
              }`}
              // style={{ fontFamily: "var(--font-tinos)" }}
            >
              Multilingual expertise
            </p>
          </div>
          <div
            className={`boxarrowthree flex justify-between items-center ${
              thir ? "bg-blue-600/70" : "white"
            }`}
            onMouseEnter={() => {
              setFir(false);
              setSec(false);
              setThir(true);
              setFour(false);
              setFive(false);
            }}
          >
            <i
              className={`flaticon-cash text-[40px] text-[#646464] ${
                thir ? "text-white" : "text-[#646464]"
              }`}
            ></i>
            <p
              className={`uppercase text-[19px] text-center w-full font-roboto px-4 font-[500] ${
                thir ? "text-white" : "text-gray-500"
              }`}
              // style={{ fontFamily: "var(--font-tinos)" }}
            >
              Flexible engagement
            </p>
          </div>
          <div
            className={`boxarrowthree flex justify-between items-center ${
              four ? "bg-blue-600/70" : "white"
            }`}
            onMouseEnter={() => {
              setFir(false);
              setSec(false);
              setThir(false);
              setFour(true);
              setFive(false);
            }}
          >
            <i
              className={`flaticon-medal text-[40px] text-[#646464] ${
                four ? "text-white" : "text-[#646464]"
              }`}
            ></i>
            <p
              className={`uppercase text-[19px] text-center w-full font-roboto font-[500] ${
                four ? "text-white" : "text-gray-500"
              }`}
              // style={{ fontFamily: "var(--font-tinos)" }}
            >
              Quality centric approach
            </p>
          </div>
          <div
            className={`boxarrowthree flex justify-between items-center ${
              five ? "bg-blue-600/70" : "white"
            }`}
            onMouseEnter={() => {
              setFir(false);
              setSec(false);
              setThir(false);
              setFour(false);
              setFive(true);
            }}
          >
            <i
              className={`flaticon-ux text-[40px] text-[#646464] ${
                five ? "text-white" : "text-[#646464]"
              }`}
            ></i>
            <p
              className={`uppercase text-[19px] text-center w-full font-roboto px-4 font-[500] ${
                five ? "text-white" : "text-gray-500"
              }`}
              // style={{ fontFamily: "var(--font-tinos)" }}
            >
              Multidomain expertise
            </p>
          </div>
        </div>
        <div className="h-fit py-5 md:py-0 ml-[10px] w-full md:w-[80%] border-[#CCC] border-solid border-2">
          {fir ? first : <></>}
          {sec ? second : <></>}
          {thir ? third : <></>}
          {four ? third : <></>}
          {five ? third : <></>}
        </div>
      </div>
    </>
  );
}
