import Image from "next/image";
import Link from "next/link";

const Welcome = () => {
  return (
    <div className="w-full min-h-[825px] bg-[#14212b] flex items-center justify-center relative overflow-hidden">
      <Image
        src="/imgs/shape-1.png"
        alt=""
        width={350}
        height={815}
        className="absolute left-[-35px] bottom-[-15%]"
      />
      <Image
        src="/imgs/shape-2.png"
        alt=""
        width={474}
        height={341}
        className="top-0 right-0 absolute"
      />
      <div className="flex justify-between items-center relative w-full px-[40px] md:max-w-[1350px] group">
        <div className="w-[400px] h-[400px]  border border-[#ff4a17] z-20 rounded-[40px] rotate-[40deg] absolute left-[120px] mt-[-80px]"></div>
        <div className="w-[400px] h-[400px] overflow-hidden rounded-[40px] mt-[-80px] ml-[30px] rotate-[40deg] relative">
          <div className="rounded-[40px] rotate-[324deg] w-[150%] h-[152%] absolute top-[-36%] left-[-28%] group-hover:scale-110 transition">
            <Image
              src="/imgs/story-1.png"
              alt=""
              width={360}
              height={360}
              className="w-full h-full object-cover lg:opacity-100 opacity-50"
            />
          </div>
        </div>
        <div className="flex flex-col w-full mt-5 md:mt-0 md:max-w-[600px] gap-[40px]">
          <p className="text-[21px] text-[#ff4a17] font-semibold">
            Welcome To Console
          </p>
          <p className="text-[50px] text-white leading-tight mt-[-10px] font-acme">
            We are trusted consulting company.
          </p>
          <p className="text-[18px] text-[#dddfe1]">
            A business consultant is a professional who provides professional or
            expert advice in a particular area such as security, management,
            accountancy, law, human resources, marketing, financial control,
            engineering, science, digital transformation, exit planning or any
            of many other specialized fields
          </p>
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4">
              <i className="text-[50px] flaticon-budget text-[#ff4a17]"></i>
              <p className="text-[20px] text-white">
                Perfect solution of business strategy.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <i className="text-[50px] flaticon-budget text-[#ff4a17]"></i>
              <p className="text-[20px] text-white">
                Perfect solution of business strategy.
              </p>
            </div>
          </div>

          <Link
            href="/"
            className="px-[30px] py-[10px] md:py-[13px] text-[18px] tracking-widest font-semibold text-black bg-white hover:bg-[#ff4a17] hover:text-white transition-colors duration-300 w-fit rounded-md flex items-center gap-4 mb-10 md:mb-0 skew-x-[-18deg] border-l-[10px] border-[#ff4a17] group-btn"
          >
            <span>Our services</span>
            <p className="text-[12px]">
              <i className="flaticon-right-arrow-angle text-black"></i>
              <i className="flaticon-right-arrow-angle text-black ml-[-5px]"></i>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
