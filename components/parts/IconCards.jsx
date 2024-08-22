export default function IconCards(props) {
  return (
    props.data != null && (
      <div className=" mb-[20px] gap-y-[20px] grid grid-cols-4 py-4">
        {props.data.map((e, i) => {
          return (
            <div
              key={i}
              className="w-48 h-36 relative flex flex-col justify-center items-center bg-transparent shadow-md shadow-[#878787] border-solid border-[#ccc] border-[0.5px]"
            >
              <i
                className={`${e.icon_name}  text-[#f60] text-[80px] absolute top-[45px]`}
              ></i>
              <p className="h-6 text-center text-[#959595] mt-[26px] absolute bottom-2 text-sm font-roboto capitalize font-normal leading-6 break-words">
                {e.name}
              </p>
            </div>
          );
        })}
      </div>
    )
  );
}
