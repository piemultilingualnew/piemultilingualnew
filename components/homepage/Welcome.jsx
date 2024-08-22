import Image from "next/image"
import Link from "next/link"

const Welcome = () => {
  return (
    <div className="my-[50px] w-full min-h-[825px] bg-[#14212b] flex items-center justify-center relative overflow-hidden">
        <Image src='/imgs/shape-1.png' alt="" width={350} height={815} className="absolute left-[-35px] bottom-[-15%]"/>
        <Image src='/imgs/shape-2.png' alt="" width={474} height={341} className="top-0 right-0 absolute"/>
        <div className="flex justify-between items-center relative w-full px-[40px] max-w-[1350px] group">
            <div className="w-[400px] h-[400px]  border border-[#ff4a17] z-20 rounded-[40px] rotate-[40deg] absolute left-[120px] mt-[-80px]"></div>
            <div className="w-[400px] h-[400px] overflow-hidden rounded-[40px] mt-[-80px] ml-[30px] rotate-[40deg] relative">
                <div className="rounded-[40px] rotate-[324deg] w-[150%] h-[152%] absolute top-[-36%] left-[-28%] group-hover:scale-110 transition">
                    <Image src='/imgs/story-1.png' alt="" width={360} height={360} className="w-full h-full object-cover"/>
                </div>
            </div>
            <div className="flex flex-col max-w-[600px] w-[45%] gap-[40px]">
                <p className="text-[21px] text-[#ff4a17] font-semibold">Welcome To Consoel</p>
                <p className="text-[50px] text-white leading-tight mt-[-10px]">We are trusted consulting company.</p>
                <p className="text-[18px] text-[#dddfe1]">A business consultant is a professional who provides professional or expert advice in a particular area such as security, management, accountancy, law, human resources, marketing, financial control, engineering, science, digital transformation, exit planning or any of many other specialized fields</p>
                <div className="w-full flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <i className="text-[50px] flaticon-budget text-[#ff4a17]"></i>
                        <p className="text-[20px] text-white">Perfect solution of business strategy.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <i className="text-[50px] flaticon-budget text-[#ff4a17]"></i>
                        <p className="text-[20px] text-white">Perfect solution of business strategy.</p>
                    </div>
                </div>
                <Link href='/' className="px-[40px] py-[20px] font-semibold text-white bg-[#ff4a17] hover:bg-[#cf2d00] transition-colors duration-300 w-2/5 rounded-md flex items-center gap-4">
                    <span>Our services</span>
                    <p className="text-[12px]">
                        <i className="flaticon-right-arrow-angle text-white"></i>
                        <i className="flaticon-right-arrow-angle text-white ml-[-5px]"></i>
                    </p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Welcome