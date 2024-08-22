import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function BlogCards(props) {
  const { blogData, loadingBlogData, errorBlogData } = useSelector(
    (state) => state.blog
  );
  const dataa = blogData;
  return dataa != null ? (
    <div>
      <div className="max-w-[840px] w-full gap-[40px] relative bg-white flex ">
        <div className="w-[100%] flex flex-col gap-[20px] ">
          {dataa.map((e, i) => {
            return i % 2 == 0 ? (
              <div className="w-[99%]  bg-gray-300 overflow-hidden  rounded-tl-[61px] h-[190px]">
                <div className="bg-[#7182BF] h-[46px] border-b-[4px] flex items-center border-solid border-[white] w-full">
                  <Link
                    href={`/${e.attributes.url}`}
                    className="font-acme text-[18px] font-normal ml-[40px] uppercase text-[#FFF]"
                  >
                    {e.attributes.title}
                  </Link>
                </div>
                <div className="h-[145px] gap-[10px] flex  items-center p-[8px]  bg-[rgba(107,123,180,0.5)]">
                  {e.attributes.image.data != null &&
                  e.attributes.image.data != undefined ? (
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_mainurl +
                        e.attributes.image.data.attributes.url
                      }
                      height={125}
                      width={140}
                      className="  h-[125px] w-[140px] object-cover"
                      alt="img"
                    ></Image>
                  ) : (
                    <Image
                      src="/imgs/default.jpg"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                      priority
                    />
                  )}

                  <div className="flex flex-col  h-full justify-between">
                    <p className="sm:w-[632px] h-[80px] text-black text-ellipsis overflow-hidden text-[14px] font-roboto font-normal leading-[25px]">
                      {e.attributes.content}
                    </p>
                    <div className="flex w-[100%] relative justify-end  pb-[10px] ">
                      <Link
                        href={`/${e.attributes.url}`}
                        className="hover:scale-110   ease-out duration-200 uppercase text-[15px]  bg-[#7182BF] px-2 py-1 text-[white] font-medium w-[100px] font-acme  font-roboto"
                      >
                        {e.attributes.button}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="w-[99%]  bg-gray-300 overflow-hidden  rounded-tl-[61px] h-[190px]">
                <div className="bg-[#97B63A] h-[46px] border-b-[4px] flex items-center border-solid border-[white] w-full">
                  <Link
                    href={`/${e.attributes.url}`}
                    className="font-acme text-[18px] font-normal ml-[40px] uppercase text-[#FFF]"
                  >
                    {e.attributes.title}
                  </Link>
                </div>
                <div className="h-[145px] gap-[10px] flex  items-center p-[8px]  bg-[rgba(151,182,58,0.5)]">
                  {e.attributes.image.data != null &&
                  e.attributes.image.data != undefined ? (
                    <Image
                      src={
                        process.env.NEXT_PUBLIC_mainurl +
                        e.attributes.image.data.attributes.url
                      }
                      height={125}
                      width={140}
                      className="  h-[125px] w-[140px] object-cover "
                      alt="img"
                    ></Image>
                  ) : (
                    <Image
                      src="/imgs/default.jpg"
                      width={0}
                      height={0}
                      sizes="100%"
                      alt=""
                      priority
                    />
                  )}
                  <div className="flex flex-col  h-full justify-between">
                    <p className="sm:w-[632px] h-[80px]  text-ellipsis overflow-hidden text-[14px] font-roboto font-normal leading-[25px]">
                      {e.attributes.content}
                    </p>
                    <div className="flex w-[100%] relative justify-end  pb-[10px] ">
                      <Link
                        href={`/${e.attributes.url}`}
                        className="hover:scale-110   ease-out duration-200 uppercase text-[15px]  bg-[#97B63A] px-2 py-1 text-[white] font-medium w-[100px] font-acme  font-roboto"
                      >
                        {e.attributes.button}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
