import Image from "next/image";

export default function HappyClient() {
  return (
    <div className="mt-[60px] flex md:gap-[50px] sm:gap-[20px] gap-[0px]">
      <div>
        <div className="flex gap-[10px] items-center ">
          <p className="font-medium capitalize font-lexend-deca">
            Happy clients
          </p>
          <i className="flaticon-support text-[20px] rotateicon text-[#30B1C0]"></i>
        </div>
        <p className="text-[#12103E] mb-[40px] sm:w-[370px] font-lexend-deca text-[48px] font-semibold">
          I work with over 150+{" "}
          <span className="text-[#f60]"> happy clients </span>
        </p>
        <p className=" font-jost text-[18px] sm:w-[350px] font-normal text-[#9E9EAC]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
      </div>
      <div className="flex flex-col gap-[50px] sm:ml-[20px] ">
        <div className="flex sm:ml-[50px] gap-[40px] flex-col sm:flex-row">
          <div className="flex  w-[200px] shadow-lg rounded-lg  hover:translate-y-[-5px] duration-300 items-center justify-center ">
            <div className="mx-auto w-[200px] rounded-lg ">
              <div className="max-w-xs cursor-pointer  rounded-lg bg-white  shadow duration-150  hover:shadow-md ">
                <Image
                  className="w-full rounded-t-lg object-cover object-center h-[130px]"
                  src={"/imgs/client-placeholder.avif"}
                  height={130}
                  width={200}
                  alt="product"
                />
                <div className="py-2 flex justify-center items-center">
                  <p className=" font-normal font-jost text-[18px] capitalize text-gray-500  ">
                    Product Name
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  w-[200px] shadow-lg  hover:translate-y-[-5px] duration-300 rounded-lg  items-center justify-center ">
            <div className="mx-auto w-[200px]  ">
              <div className="max-w-xs cursor-pointer  rounded-lg bg-white  shadow duration-150  hover:shadow-md">
                <Image
                  className="w-full rounded-t-lg object-cover object-center h-[130px]"
                  src={"/imgs/client-placeholder.avif"}
                  height={130}
                  width={200}
                  alt="product"
                />
                <div className="py-2  flex justify-center items-center">
                  <p className="  font-normal font-jost text-[18px] capitalize text-gray-500  ">
                    Product Name
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  w-[200px] shadow-lg  hover:translate-y-[-5px] duration-300 rounded-lg items-center justify-center ">
            <div className="mx-auto w-[200px] ">
              <div className="max-w-xs cursor-pointer  rounded-lg bg-white  shadow duration-150   hover:shadow-md">
                <Image
                  className="w-full rounded-t-lg object-cover object-center h-[130px]"
                  src={"/imgs/client-placeholder.avif"}
                  height={130}
                  width={200}
                  alt="product"
                />
                <div className="py-2 flex justify-center items-center">
                  <p className="  font-normal font-jost text-[18px] capitalize text-gray-500  ">
                    Product Name
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex gap-[40px] hidden">
          <div className="flex  w-[200px] shadow-lg  hover:translate-y-[-5px] duration-300 rounded-lg items-center justify-center ">
            <div className="mx-auto w-[200px] ">
              <div className="max-w-xs cursor-pointer  rounded-lg bg-white  shadow duration-150  hover:shadow-md">
                <Image
                  className="w-full rounded-t-lg object-cover object-center h-[130px]"
                  src={"/imgs/client-placeholder.avif"}
                  height={130}
                  width={200}
                  alt="product"
                />
                <div className="py-2 flex justify-center items-center">
                  <p className=" font-normal font-jost text-[18px] capitalize text-gray-500  ">
                    Product Name
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  w-[200px] shadow-lg  hover:translate-y-[-5px] duration-300 rounded-lg items-center justify-center ">
            <div className="mx-auto w-[200px] ">
              <div className="max-w-xs cursor-pointer  rounded-lg bg-white  shadow duration-150  hover:shadow-md">
                <Image
                  className="w-full rounded-t-lg object-cover object-center h-[130px]"
                  src={"/imgs/client-placeholder.avif"}
                  height={130}
                  width={200}
                  alt="product"
                />
                <div className="py-2  flex justify-center items-center">
                  <p className="  font-normal font-jost text-[18px] capitalize text-gray-500  ">
                    Product Name
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  w-[200px] shadow-lg  hover:translate-y-[-5px] duration-300 rounded-lg items-center justify-center ">
            <div className="mx-auto w-[200px] ">
              <div className="max-w-xs cursor-pointer  rounded-lg bg-white  shadow duration-150   hover:shadow-md">
                <Image
                  className="w-full rounded-t-lg object-cover object-center h-[130px]"
                  src={"/imgs/client-placeholder.avif"}
                  height={130}
                  width={200}
                  alt="product"
                />
                <div className="py-2 flex justify-center items-center">
                  <p className="  font-normal font-jost text-[18px] capitalize text-gray-500  ">
                    Product Name
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
