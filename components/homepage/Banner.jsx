import Image from "next/image";
import RightSection from "../foreign-language-services/language-translation/content/RightSection";
import Slider from "../parts/slider";

const Banner = () => {
  return (
    <div className="w-full md:h-[540px] bg-[url('/imgs/cover.png')] bg-cover bg-center lg-px-10 xl:px-0 px-5">
      <div className="max-w-[1250px] h-full mx-auto flex flex-col md:flex-row justify-between items-center">
        <Slider />
        <div className="w-full md:w-[319px] pb-5 sm:pb-0">
          <RightSection />
        </div>
      </div>
    </div>
  );
};

export default Banner;
