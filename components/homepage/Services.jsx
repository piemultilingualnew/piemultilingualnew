import Link from "next/link";

const Services = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-between gap-[20px] max-w-[1210px] mx-auto my-[30px]">
      <div className="md:w-[35%] flex flex-col w-full gap-[20px] p-4 md:p-1">
        <h2 className="text-[28px] text-blue-900 font-medium font-acme">
          Award winning creative agency
        </h2>
        <p className="text-blue-900">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error
          soluta vitae quae consectetur illum reprehenderit, nemo, aperiam
          expedita sit sequi optio? Aut dicta sed quo quis blanditiis aspernatur
          ullam? Deleniti, minima ipsa officia iusto ratione quasi asperiores
          atque vel et quis ab sed voluptatem nulla laudantium repudiandae ut
          expedita sit sequi optio? Aut dicta sed quo quis blanditiis aspernatur
          ullam? Deleniti, minima ipsa officia iusto ratione quasi asperiores
          atque vel et quis ab sed voluptatem nulla laudantium repudiandae ut
          sint?
        </p>
        <Link
          href="/"
          className="bg-gray-200 text-black mt-[45px] w-fit text-center px-4 py-3 font-semibold hover:bg-[#ff4a17] rounded-md skew-x-[-18deg] border-l-[10px] border-[#ff4a17] group hover:text-white"
        >
          <i className="flaticon-send-1 text-[#ff4a17] group-hover:text-white text-[18px] px-2"></i>
          VIEW ALL SERVICES
        </Link>
      </div>

      <div className="md:w-[65%] w-full md:p-0 sm:p-10 p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-9 gap-y-5">
        {[...Array(12)].map((item, i) => (
          <div
            key={i}
            className="w-full shadow-md shadow-[#888] flex gap-5 h-[90px] group cursor-pointer hover:shadow-lg hover:shadow-gray-400"
          >
            <div className="w-[50px] flex items-center justify-center rounded-r-full p-1 bg-gray-100 group-hover:bg-orange-500 transition-colors duration-300">
              <i className="flaticon-support text-orange-500 group-hover:text-white text-[34px] ml-[-3px] mb-1"></i>
            </div>
            <p className="my-auto text-[16px]">Mobile App Development</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
