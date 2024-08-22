import Link from "next/link"
import Image from "next/image"

const StaffingCalculatorBanner = () => {
  return (
    <div className="my-[50px] text-white w-full min-h-[445px] bg-[url(/imgs/calc-banner.webp)]">
        <p className="mt-[30px] text-center text-[23px]">We believe in total transparency, and allow our customers to make informed business decisions.</p>
        <p className="text-center text-[23px]">Calculate your call center staffing and budget before taking the plunge!</p>
        <div className="w-full max-w-[1170px] mt-[20px] mx-auto flex items-center justify-around">
            <div className="flex flex-col items-center justify-center gap-4 w-[526px]">
                <p className="uppercase text-[30px] text-center">Planning to outsource call center services, but not sure what it costs?</p>
            </div>
            <Link href='/call-center-staffing-calculator'>
                <Image src='/imgs/staffing-calculator.webp' alt="" width={465} height={365} style={{transform: 'perspective(1400px) rotate3D(0, 1, 0, 155deg)'}}/>
            </Link>
        </div>
    </div>
  )
}

export default StaffingCalculatorBanner