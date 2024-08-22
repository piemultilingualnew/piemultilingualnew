import Image from "next/image";

export default function AboutusCard({ apiData2 }) {
  return apiData2?.AboutUs != null ? (
    <div className="flex w-full  bg-[#ebebeb]">
      <div className="w-[50%] mapbg flex flex-col justify-center items-center">
        <div className=" flex flex-col justify-center items-center ">
          <p
            style={{
              backgroundImage: `url(${
                process.env.NEXT_PUBLIC_mainurl +
                apiData2?.AboutUs?.image?.data?.attributes?.url
              })`,
              backgroundSize: "inherit",
              backgroundRepeat: "repeat",
            }}
            className={`textimg `}
          >
            80
          </p>

          <p className=" mt-[-80px] mb-[30px] capitalize font-bold text-[40px] font-roboto">
            {apiData2.AboutUs.content}
          </p>
        </div>
      </div>
      <div className="w-[50%] flex justify-center items-center ">
        <div className="grid grid-cols-3 gap-x-[50px] gap-y-[120px]">
          {apiData2?.AboutUs?.logo?.data != null ? (
            apiData2.AboutUs.logo.data.map((e, i) => {
              return (
                <Image
                  key={i}
                  src={process.env.NEXT_PUBLIC_mainurl + e.attributes.url}
                  height={150}
                  width={150}
                  alt="jhkh"
                ></Image>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
