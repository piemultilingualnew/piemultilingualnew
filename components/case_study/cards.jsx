import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";


export default function BlogCards(props) {
  const { caseData, loadingCase, errorCase } = useSelector(
    (state) => state.caseStudy
  );
  const dataa = caseData;
  const len = Math.floor(dataa?.Case_Study.length / 2) + 1;
  let index = 0;
  return dataa != null ? (
    <div>
      <div className="max-w-[880px] relative  flex ">
        <div className="w-[100%] flex flex-col gap-[20px] ">
          {[...Array(len)].map((l, i) => {
            {
              return (
                <div key={l} className="flex gap-[20px] flex-col md:flex-row">
                  {[...Array(2)].map((j, k) => {
                    const e = dataa.Case_Study[index];

                    index = index + 1;

                    return k + (i % 2) == 0
                      ? e != null && (
                          <div className="sm:w-[420px] w-[300px]  bg-gray-300 overflow-hidden  rounded-tl-[61px] h-[190px]">
                            <div className="bg-[#7182BF] h-[46px] border-b-[4px] flex items-center border-solid border-[white] w-full">
                              <p
                                className="font-acme truncate text-[18px] font-normal ml-[40px] uppercase text-[#FFF]"
                                onClick={() => {
                                  props.click(e);
                                }}
                              >
                                {e.tiitle}
                              </p>
                            </div>
                            <div className="h-[145px] gap-[10px] flex  items-center p-[8px]  bg-[rgba(107,123,180,0.5)]">
                              {e.image.data != null &&
                              e.image.data != undefined ? (
                                <Image
                                  src={
                                    process.env.NEXT_PUBLIC_mainurl +
                                    e.image.data.attributes.url
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
                                <p className="w-[95%] break-words  h-[80px]  text-ellipsis overflow-hidden text-[14px] font-roboto font-normal leading-[25px]">
                                  {e.content}
                                </p>
                                <div className="flex w-[100%] relative justify-end  pb-[10px] ">
                                  <Link
                                    href={`/${e.url}`}
                                    className="hover:scale-110   ease-out duration-200 uppercase text-[15px]  bg-[#7182BF] px-2 py-1 text-[white] font-medium w-[100px] font-acme  font-roboto"
                                  >
                                    {e.button}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      : k + (i % 2) == 1
                      ? e != null && (
                          <div className="sm:w-[420px] w-[300px]  bg-gray-300 overflow-hidden  rounded-tl-[61px] h-[190px]">
                            {/* {console.log(index)} */}
                            <div className="bg-[#97B63A] h-[46px] border-b-[4px] flex items-center border-solid border-[white] w-full">
                              <p
                                className="font-acme text-[18px] truncate font-normal ml-[40px] uppercase text-[#FFF]"
                                onClick={() => {
                                  props.click(e);
                                }}
                              >
                                {e.tiitle}
                              </p>
                            </div>
                            <div className="h-[145px] gap-[10px] flex  items-center p-[8px]  bg-[rgba(151,182,58,0.5)]">
                              {e.image.data != null &&
                              e.image.data != undefined ? (
                                <Image
                                  src={
                                    process.env.NEXT_PUBLIC_mainurl +
                                    e.image.data.attributes.url
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
                                <p className="w-[95%] h-[80px]  text-ellipsis overflow-hidden text-[14px] font-roboto font-normal leading-[25px]">
                                  {e.content}
                                </p>
                                <div className="flex w-[100%] relative justify-end  pb-[10px] ">
                                  <Link
                                    href={`/${e.url}`}
                                    className="hover:scale-110   ease-out duration-200 uppercase text-[15px]  bg-[#97B63A] px-2 py-1 text-[white] font-medium w-[100px] font-acme  font-roboto"
                                  >
                                    {e.button}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      : e != null && (
                          <div className="sm:w-[420px] w-[300px]  bg-gray-300 overflow-hidden  rounded-tl-[61px] h-[190px]">
                            <div className="bg-[#7182BF] h-[46px] border-b-[4px] flex items-center border-solid border-[white] w-full">
                              <p
                                className="font-acme truncate text-[18px] font-normal ml-[40px] uppercase text-[#FFF]"
                                onClick={() => {
                                  props.click(e);
                                }}
                              >
                                {e.tiitle}
                              </p>
                            </div>
                            <div className="h-[145px] gap-[10px] flex  items-center p-[8px]  bg-[rgba(107,123,180,0.5)]">
                              {e.image.data != null &&
                              e.image.data != undefined ? (
                                <Image
                                  src={
                                    process.env.NEXT_PUBLIC_mainurl +
                                    e.image.data.attributes.url
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
                                <p className="w-[95%] break-words  h-[80px]  text-ellipsis overflow-hidden text-[14px] font-roboto font-normal leading-[25px]">
                                  {e.content}
                                </p>
                                <div className="flex w-[100%] relative justify-end  pb-[10px] ">
                                  <Link
                                    href={`/${e.url}`}
                                    className="hover:scale-110   ease-out duration-200 uppercase text-[15px]  bg-[#7182BF] px-2 py-1 text-[white] font-medium w-[100px] font-acme  font-roboto"
                                  >
                                    {e.button}
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                  })}
                </div>
              );
              {
                i = i + k + 1;
              }
            }
          })}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
