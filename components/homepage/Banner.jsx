import Image from "next/image"
import RightSection from "../foreign-language-services/language-translation/content/RightSection"

const Banner = () => {
  return (
    <div className='w-full h-[540px] relative'>
        <div className="w-full absolute top-0 flex h-full">
            <Image src='/imgs/cover.png' alt="" className="w-full object-cover" sizes="100vw" priority fill/>
        </div>
        <div className="w-[319px] absolute right-[10px] top-[30px]">
            <RightSection />
        </div>
    </div>
  )
}

export default Banner