import Link from "next/link"

export default function Block(props) {
    const data=props.data;
    return (
        <div className="recentpost border w-[100%] mt-[50px] rounded-t-[15px]">
            <div className="recentorange w-[100%] flex justify-center rounded-t-[15px] items-center">
                <p className="uppercase font-roboto text-[20px] font-normal text-[#FFF]">career opening</p>
            </div>
                <div className="recentinner w-[100%] p-[5px] flex flex-col justify-center items-center">
                {
                    (data != null) ? data.slice(0, 5).map((e, i) => {
                        return (
                            
                            <Link href={(e.url!=null)?e.url:"/"} key={i}  className="recentposttext capitalize">
                                {e.text}
                            </Link>
                        )
                    }) : <></>
                }
            </div>
        </div>
    )
}