import Link from "next/link";
import Image from "next/image";

const HiringModels = (props) => {
  return (
    <div>
      {props?.data?.cards != null && props?.data?.title != null && (
        <h3 className="font-acme ml-6 inline-block text-[21px] uppercase font-normal mb-[2px] my-[4px] text-[#30B1C0]">
          {props.data.title}
        </h3>
      )}
      {props?.data?.cards != null && props?.data?.cards.length > 0 && (
        <div className=" w-[100%] max-w-[850px] mx-auto md:grid-cols-3 grid grid-cols-1 mb-10 ml-6">
          {props.data.cards.map((e, i) => {
            const str = e.heading != null ? e.heading : "";
            const words = str.split(" ");
            const midpoint = Math.ceil(words.length / 2);
            const firstPart = words.slice(0, midpoint).join(" ");
            const secondPart = words.slice(midpoint).join(" ");
            return (
              <div
                className=" mt-[20px] flex flex-col h-[220px] border-[2px] rounded-[5px]  w-[250px] -rotate-[11deg] hover:rotate-0 transition duration-[400] ease-out group"
                key={i}
              >
                <div className="h-[100px] flex flex-col py-2 justify-center items-center border-[0px] border-b-[2px] group-hover:bg-[#ff6600]">
                  <Image
                    alt=""
                    width={50}
                    height={50}
                    src={
                      e.image.data != null
                        ? process.env.NEXT_PUBLIC_mainurl +
                          e.image.data.attributes.url
                        : "/imgs/default.jpg"
                    }
                  ></Image>
                  <p className="text-[22px] font-bold text-[#296a89] group-hover:text-white uppercase">
                    {firstPart}{" "}
                    <span className="text-[#30B1C0] group-hover:text-white">
                      {secondPart}
                    </span>
                  </p>
                </div>
                <div className="flex relative h-full  px-2 gap-[5px] w-full pb-4 flex-col pt-2 items-center ">
                  <span className="font-semibold text-black">{e.hours}</span>
                  <p className="text-[13px] text-center mb-[16px] text-[#565656] w-[]">
                    {e.text}
                  </p>
                  <button className="absolute bottom-4 px-2 p">
                    <Link
                      href={`/${e.url}`}
                      className="y-1 text-[15px] uppercase font-medium   border-[#296a89] border-[2px] border-solid rounded advantage_button"
                    >
                      {e.button ? e.button : ""}
                    </Link>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HiringModels;
