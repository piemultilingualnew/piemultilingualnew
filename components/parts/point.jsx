export default function Points(props) {
    return (
        <div className="w-full grid gap-[15px] py-8 px-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 bg-[#e3a83c]">
                {props.data?.map((e, i) => {
                    return <div key={i} className="w-[300px] flex flex-col justify-center items-center">
                        <div className="w-[180px] h-[180px]  flex justify-center items-center rounded-[50%] z-10 relative bg-[#212e88] ">
                            <p className="text-white text-[18px] font-medium text-center w-[95%] flex justify-center items-center font-roboto">
                               {e.heading}
                            </p>
                        </div>
                        <div className="w-[300px] mt-[-75px]  overflow-hidden px-4 flex justify-center items-center h-[310px] bg-white">
                            <p className="h-[70.7%] leading-[24px] mt-[69px] text-[15.5px] overflow-hidden ">
                              {e.content}
                            </p>
                        </div>
                    </div>
                })}
        </div>
    )
}