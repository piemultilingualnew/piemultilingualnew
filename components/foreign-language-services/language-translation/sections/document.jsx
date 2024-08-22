import Link from "next/link";
export default function Document({ apiData }) {
  const data = apiData;
  return data != null && (data.Service_Box_Red != null || data.Service_Box) ? (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-y-[20px] mb-[16px] w-[340px] sm:w-full">
      {" "}
      {data.Service_Box_Red.map((e, i) => {
        return (
          <div
            key={i}
            className="sm:w-[277px] docuiconparent h-[50px] flex justify-between border items-center   shadow-md shadow-gray-300 rounded-[4px]"
          >
            <div className="w-[54px] rounded-l-[4px] flex justify-center  items-center hover h-full">
              <i
                className={`${
                  e.icon || "fa fi-sr-book"
                }  docuicon text-[30px] text-white`}
              ></i>
            </div>
            {e.url ? (
              <Link href={e.url} className="mr-[6px] w-full flex pl-[10px]">
                <p className="text-[15.5px] font-roboto font-normal">
                  {e.text}
                </p>
              </Link>
            ) : (
              <p className="mr-[6px] w-full flex pl-[10px]">
                <p className="text-[15.5px] font-roboto font-normal">
                  {e.text}
                </p>
              </p>
            )}
          </div>
        );
      })}
    </div>
  ) : (
    <></>
  );
}
