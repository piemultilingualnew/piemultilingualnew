import Image from "next/image";
export default function PPT(props) {
  const handleClick = (event) => {
    event.preventDefault();
    window.open(process.env.NEXT_PUBLIC_mainurl + props.url, "_blank");
  };
  return (
    <div className="w-full h-[270px] relative bg-white bg-opacity-0 rounded-t-[13px] mb-[px]  mt-[30px] rounded-b-[13px] shadow border border-stone-300 border-opacity-80">
      <div className="w-full h-[35px] left-[1px] flex justify-center items-center top-[1px] absolute rounded-t-[13px] bg-[#f60]">
        <div className="w-[137.01px] h-[35px]  text-center text-white text-xl font-medium font-acme ">
          VIEW ONLINE
        </div>
      </div>
      <div
        href={props}
        className="w-full h-[231px] left-[1px] top-[36px] rounded-b-[13px] absolute flex justify-center items-center bg-neutral-100"
      >
        <button onClick={handleClick}>
          <Image
            className="w-[193px] h-[193px] self-center "
            src="/imgs/link.png"
            alt=""
            width={193}
            height={193}
          />
        </button>
      </div>
    </div>
  );
}
