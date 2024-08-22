import Link from "next/link";

export default function Tiltcard(props) {
    return (
        <div className="flex justify-center lg:w-[310px] md:w-[280px] sm:w-[600px] items-center">
            <div className="h-[100px] icon mt-[2px] relative w-[120px] bg-white shadow-lg border-[1px] skew-x-[-9deg] z-20 left-[40px]">
                <div className="  flex justify-center items-center h-[110px] skew-x-[9deg] w-[99px]">
                    <i className={`${props.data.icon || 'fa fi-sr-book'} text-[50px]`}  ></i>
                </div>
            </div>
            <div className="rounded-[10px] relative lg:w-[300px] sm:w-[300px] bg-gray-200 flex flex-col justify-center  ">
                <div className="">
                    <div className="bg-[#30B1C0] flex justify-center items-center rounded-t-[10px] h-[40px]">
                        <p className="text-[18px] text-[#FFF] font-acme uppercase">
                            {props.data.heading}
                        </p>
                    </div>
                    <div className="px-2 py-4">
                        <div className="sm:w-[242px] flex items-center sm:h-[100px] -mt-2 w-[70%] h-full first-letter:uppercase overflow-hidden ml-[35px] font-roboto text-[15px] text-black">
                           <p>{props.data.text}</p>
                        </div>
                       <Link href={`/${props.data.url}`}>
                       <button name="pricing" className="border-[#30B1C0] border-solid border-[2px] border-l-0 border-r-0  uppercase  text-[#F60] font-roboto mr-[20px] pl-2 pr-2 float-right mb-[16px] hover:bg-[#30B1C0] hover:border-[#30B1C0] hover:rounded-sm hover:border-x-[2px] transition-transform   ease-in-out hover:scale-110  duration-300 hover:text-[#FFF]">{(props.data.button!=null)?props.data.button:"READ MORE"}</button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}