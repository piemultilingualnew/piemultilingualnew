import Image from "next/image";
import Link from "next/link";

export default function Casestudycards(props) {
  return props.data != null && props.data != undefined ? (
    <div className="lg:w-[590px] w-full bg-white p-4  border-[2px] border-[#30B1C0] gradborder lg:h-[220px] flex flex-col sm:flex-row items-center shadow-md mt-[30px]  ">
      <div className="flex justify-center border-dashed hover:border-[#F60] items-center border-[#30B1C0] rounded-[50%]  border-[2.5px]">
        {props.data.image.data != null && props.data.image.data != undefined ? (
          <Image
            src={
              process.env.NEXT_PUBLIC_mainurl +
              props.data.image.data.attributes.url
            }
            className="w-[162px] h-[162px] object-cover bg-cover p-2 rounded-full"
            alt="img"
            width={160}
            height={160}
          />
        ) : (
          <Image
            src="/imgs/default.jpg"
            width={0}
            height={0}
            sizes="100%"
            alt=""
            priority
            className="w-[160px] h-[160px] object-cover bg-cover p-2 rounded-full "
          />
        )}
      </div>
      <div className=" flex  flex-col  sm:w-[400px] w-full  justify-between items-end ">
        <p className="text-[20px]  tracking-[-0.5px] left-[17px] relative sm:w-[400px] w-full mt-[-10px] uppercase text-[#F60]  font-medium font-fira-sans text-[]">
          {props.data.heading}
        </p>
        <p className=" text-ellipsis w-[380px] overflow-hidden text-[15px] leading-6 flex justify-center  ">
          {props.data.text}
        </p>
        <Link href={props.data.url} className="mt-3">
          <button
            name="cards"
            className="mr-4 sm:mr-0 float-right relative hover:bg-[#f60] hover:text-[white] hover:border-[#F60] border-[#30B1C0] text-[#30B1C0] px-3 py-1 border-solid  rounded-[20px] border-[2px] font-roboto z-30 transition delay-[100ms] duration-200 uppercase hover:scale-105"
          >
            {props.data.button}
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <></>
  );
}
