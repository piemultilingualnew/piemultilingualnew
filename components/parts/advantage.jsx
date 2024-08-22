import { useState } from "react";
export default function Advantage() {
  const [fir, setFir] = useState(true);
  const [sec, setSec] = useState(false);
  const [thir, setThir] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const first = (
    <div className="flex gap-3 h-[490px] justify-between px-[50px] py-[40px] items-center">
      <div className="w-[420px] overflow-hidden">
        <h2 className="">
          First Improve your bottom line with customized business support
        </h2>
        <p>
          Every business has unique requirements and one solution cannot fit
          all. We at Pie Multilingual follow a solution-oriented approach to
          provide customized support for individual business requirements. Our
          customized enterprize-ready business- oriented solutions help small
          and large business organizations serve their clientele more
          effectively. Our customized support combined with multilingual
          expertise improves your efficiency by elevating your productivity. Our
          customized support provides unmatchable solutions to a wide spectrum
          of industries. Outsource to India and get immaculate comprehensive
          solutions for improving your bottom line. Our tailor-made solutions
          guarantee:
        </p>
      </div>
      <div className="bg-[url('../public/imgs/tailored.png')]  self-center bg-cover h-full w-[300px]"></div>
    </div>
  );
  const second = (
    <div className="flex gap-3 h-[490px] justify-between px-[50px] py-[40px] items-center">
      <div className="w-[420px] overflow-hidden">
        <h2>
          second Improve your bottom line with customized business support
        </h2>
        <p>
          Every business has unique requirements and one solution cannot fit
          all. We at Pie Multilingual follow a solution-oriented approach to
          provide customized support for individual business requirements. Our
          customized enterprize-ready business- oriented solutions help small
          and large business organizations serve their clientele more
          effectively. Our customized support combined with multilingual
          expertise improves your efficiency by elevating your productivity. Our
          customized support provides unmatchable solutions to a wide spectrum
          of industries. Outsource to India and get immaculate comprehensive
          solutions for improving your bottom line. Our tailor-made solutions
          guarantee:
        </p>
      </div>
      <div className="bg-[url('../public/imgs/story-1.png')] self-center bg-cover h-full w-[300px]"></div>
    </div>
  );
  const third = (
    <div className="flex h-[490px] justify-between gap-3 px-[50px] py-[40px] items-center">
      <div className="w-[420px] overflow-hidden">
        <h2>third Improve your bottom line with customized business support</h2>
        <p>
          Every business has unique requirements and one solution cannot fit
          all. We at Pie Multilingual follow a solution-oriented approach to
          provide customized support for individual business requirements. Our
          customized enterprize-ready business- oriented solutions help small
          and large business organizations serve their clientele more
          effectively. Our customized support combined with multilingual
          expertise improves your efficiency by elevating your productivity. Our
          customized support provides unmatchable solutions to a wide spectrum
          of industries. Outsource to India and get immaculate comprehensive
          solutions for improving your bottom line. Our tailor-made solutions
          guarantee:
        </p>
      </div>
      <div className="bg-[url('../public/imgs/story-2.png')] self-center bg-cover h-full w-[300px]"></div>
    </div>
  );

  return (
    <div className="flex gap-5 mb-[50px] max-w-[1210px]">
      <div className="flex flex-col w-[27%] gap-[20px] h-full">
        <div
          className="boxarrowthree flex justify-between items-center"
          style={{
            backgroundColor: fir ? "#EDAE49" : "white",
            color: fir ? "white" : "#999",
          }}
          onMouseEnter={() => {
            setFir(true);
            setSec(false);
            setThir(false);
            setFour(false);
            setFive(false);
          }}
        >
          <i className="flaticon-research text-[40px]  text-[#646464]"></i>
          <p
            className="uppercase text-[21px] text-center w-full"
            style={{ fontFamily: "var(--font-tinos)" }}
          >
            Tailored solutions
          </p>
        </div>
        <div
          className="boxarrowthree flex justify-between items-center"
          style={{
            backgroundColor: sec ? "#EDAE49" : "white",
            color: sec ? "white" : "#999",
          }}
          onMouseEnter={() => {
            setFir(false);
            setSec(true);
            setThir(false);
            setFour(false);
            setFive(false);
          }}
        >
          <i className="flaticon-market text-[40px]  text-[#646464]"></i>
          <p
            className="uppercase text-[21px] text-center w-full"
            style={{ fontFamily: "var(--font-tinos)" }}
          >
            Multilingual expertise
          </p>
        </div>
        <div
          className="boxarrowthree flex justify-between items-center"
          style={{
            backgroundColor: thir ? "#EDAE49" : "white",
            color: thir ? "white" : "#999",
          }}
          onMouseEnter={() => {
            setFir(false);
            setSec(false);
            setThir(true);
            setFour(false);
            setFive(false);
          }}
        >
          <i className="flaticon-cash text-[40px]  text-[#646464]"></i>
          <p
            className="uppercase text-[21px] text-center w-full"
            style={{ fontFamily: "var(--font-tinos)" }}
          >
            Flexible engagement
          </p>
        </div>
        <div
          className="boxarrowthree flex justify-between items-center"
          style={{
            backgroundColor: four ? "#EDAE49" : "white",
            color: four ? "white" : "#999",
          }}
          onMouseEnter={() => {
            setFir(false);
            setSec(false);
            setThir(false);
            setFour(true);
            setFive(false);
          }}
        >
          <i className="flaticon-medal text-[40px]  text-[#646464]"></i>
          <p
            className="uppercase text-[21px] text-center w-full"
            style={{ fontFamily: "var(--font-tinos)" }}
          >
            Quality centric approach
          </p>
        </div>
        <div
          className="boxarrowthree flex justify-between items-center"
          style={{
            backgroundColor: five ? "#EDAE49" : "white",
            color: five ? "white" : "#999",
          }}
          onMouseEnter={() => {
            setFir(false);
            setSec(false);
            setThir(false);
            setFour(false);
            setFive(true);
          }}
        >
          <i className="flaticon-ux text-[40px]  text-[#646464]"></i>
          <p
            className="uppercase text-[21px] text-center w-full"
            style={{ fontFamily: "var(--font-tinos)" }}
          >
            Multidomain expertise
          </p>
        </div>
      </div>
      <div className="h-full ml-[10px] w-[80%] border-[#CCC] border-solid border-2 ">
        {fir ? first : <></>}
        {sec ? second : <></>}
        {thir ? third : <></>}
        {four ? third : <></>}
        {five ? third : <></>}
      </div>
    </div>
  );
}
