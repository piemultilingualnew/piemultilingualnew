export default function Cards(props) {
    return (
        <div className="grid lg:grid-cols-2 grid-cols-1  w-full justify-between gap-[30px]">
            {
                props.data.map((e, i) => {
                    return (
                        <div className="xl:w-[372px] w-full p-[15px] curvedparent flex bg-white  border border-gray-200 shadow-sm" key={i}>
                            <div className="h-[41px] w-[56px] curved flex justify-center items-center border-solid border-b-2 border-[#30B1C0]">
                                <i className={`${e.icon} text-[50px] mt-[-5px]`}  ></i>
                            </div>
                            <div className="w-[302px] h-[131px] px-[15px] py-[7px]">
                                <p className="w-full text-[#F60] border-b-2 border-t-2 border-solid border-[#F60] font-fira-sans text-[15px] font-medium uppercase">
                                   {e.heading}
                                </p>
                                <p className="text-[14px] mt-[12px] font-fira-sans font-normal text-[#333] leading-[25px]">{e.text}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}