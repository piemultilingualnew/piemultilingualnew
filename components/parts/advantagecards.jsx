import Link from "next/link"
export default function AdvantageCards() {
   
    return (
        <div className="max-w-[850px] mr-auto grid md:grid-cols-3 grid-cols-1 gap-[30px] my-4">
            <div className=" mt-[20px] border-[2px] h-[220px] rounded-[5px] w-[250px] -rotate-[11deg] hover:rotate-0 transition duration-[400] ease-out group">
                <div className="h-[100px] flex flex-col justify-center items-center border-[0px] border-b-[2px] group-hover:bg-[#ff6600]">
                    <i className="flaticon-support text-[40px] text-[#ff6600] group-hover:text-white"></i>
                    <p className="text-[22px] font-bold text-[#296a89] group-hover:text-white">Data <span className="text-[#30B1C0] group-hover:text-white">Security</span></p>
                </div>
                <div className="flex gap-[10px] w-full h-[120px] flex-col justify-center items-center ">
                    <p className="text-[13px] text-center text-[#565656]">
                        We are committed to protect your data with a number of careful system
                    </p>
                    <Link href='/data-security-solutions' className="px-2 py-1 text-[15px] uppercase font-medium text-[#26919d] border-[#296a89] border-[2px] rounded hover:bg-orange-500 hover:text-white hover:border-orange-500">Read More</Link>
                </div>
            </div>
            <div className=" mt-[20px] border-[2px] h-[220px] rounded-[5px] w-[250px] -rotate-[11deg] hover:rotate-0 transition duration-[400] ease-out group">
                <div className="h-[100px] flex flex-col justify-center items-center border-[0px] border-b-[2px] group-hover:bg-[#ff6600]">
                    <i className="flaticon-support text-[40px] text-[#ff6600] group-hover:text-white"></i>
                    <p className="text-[22px] font-bold text-[#296a89] group-hover:text-white">Quality <span className="text-[#30B1C0] group-hover:text-white">System</span></p>
                </div>
                <div className="flex gap-[10px] w-full h-[120px] flex-col justify-center items-center ">
                    <p className="text-[13px] text-center text-[#565656]">
                        Our goal is to provide best quality in all deliverables.
                    </p>
                    <Link href='/quality-system' className="px-2 py-1 text-[15px] uppercase font-medium text-[#26919d]  border-[#296a89] border-[2px] rounded hover:bg-orange-500 hover:text-white hover:border-orange-500">Read More</Link>
                </div>
            </div>
            <div className=" mt-[20px] border-[2px] h-[220px] rounded-[5px] w-[250px] -rotate-[11deg] hover:rotate-0 transition duration-[400] ease-out group">
                <div className="h-[100px] flex flex-col justify-center items-center border-[0px] border-b-[2px] group-hover:bg-[#ff6600]">
                    <i className="flaticon-money text-[40px] text-[#ff6600] group-hover:text-white"></i>
                    <p className="text-[22px] font-bold text-[#296a89] group-hover:text-white">Business <span className="text-[#30B1C0] group-hover:text-white">Benefits</span></p>
                </div>
                <div className="flex gap-[10px] w-full h-[120px] flex-col justify-center items-center">
                    <p className="text-[13px] text-center text-[#565656]">
                        Being Multilingual business company we bring multiple advantages.
                    </p>
                    <Link href='/multilingual-company-business-benefits' className="px-2 py-1 text-[15px] uppercase font-medium text-[#26919d] border-[#296a89] border-[2px] rounded hover:bg-orange-500 hover:text-white hover:border-orange-500">Read More</Link>
                </div>
            </div>
        </div>
    )
}