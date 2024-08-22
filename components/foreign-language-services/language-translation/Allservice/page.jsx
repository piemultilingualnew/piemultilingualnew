import Link from "next/link";
import { useEffect, useState } from "react";
export default function Allservicecards(props) {
    const data = props.data;
    const [text, setText] = useState("")
    const [videos, setVideos] = useState('')
    useEffect(() => {
        let textt = (data?.content != null) ? data.content : "";
        textt = textt.replace(
            /^#\s(.+)/gm,
            '<h1 class="font-acme text-[32px] uppercase font-normal mb-[-10px] text-[#30B1C0]">$1</h1>'
        );
        textt = textt.replace(
            /^##\s(.+)/gm,
            '<h2 class="font-acme text-[24px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h2>'
        );
        textt = textt.replace(
            /^###\s(.+)/gm,
            '<h3 class="font-acme text-[20px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h3>'
        );
        textt = textt.replace(
            /^####\s(.+)/gm,
            '<h4 class="font-acme text-[18px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h4>'
        );
        textt = textt.replace(
            /^#####\s(.+)/gm,
            '<h5 class="font-acme text-[16px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h5>'
        );
        textt = textt.replace(
            /^######\s(.+)/gm,
            '<h6 class="font-acme text-[14px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h6>'
        );
        textt = textt.replace(/\{service\}/g, () => '<Document></Document>');
        textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#F60]">$1</strong>');
        textt = textt.replace(/\*(.*?)\*/g, '<em>$1</em>');
        textt = textt.replace(/_(.*?)_/g, '<em>$1</em>');
        textt = textt.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, `<img src="${process.env.NEXT_PUBLIC_mainurl}$2" class='w-[100%] h-[100%]'>`);
        textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#F60] font-bold">$1</a>');
        textt = textt.replace(/\n/gi, "<br/> \n");
        textt = textt.replace(/(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})(&\S*)?/g, (match, p1, p2, p3, p4) => {
            setVideos(true);
            const videoId = p4;
            return `<iframe width="100%" height="180px" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;
        });
        textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li>${item.slice(2)}</li>`).join('\n');
            return `<ul class=''>\n${listItems}\n</ul>`;
        });
        setText(textt)
    }, [data])
    return (
        !videos ?
            <div className="w-[340px]  fromleft">
                <div className="allservicecard w-full relative z-[0]">

                </div>
                <div className="relative px-[26px] z-10 w-full h-full allservicecard hover:scale-105 duration-500" style={{background: 'rgb(139,25,146)', background: 'linear-gradient(77deg, rgba(139,25,146,1) 26%, rgba(127,13,49,1) 99%, rgba(127,13,49,1) 100%)'}}>
                    <div className="w-full h-[90px] flex relative z-20  border-solid border-b-2">
                        <div className="w-[110px] flex justify-center items-center h-[90px]  ">
                            <i className={`${data.icon} text-[50px] iconn`} ></i>

                        </div>
                        <div className="ml-[10px] flex flex-col justify-center ">
                            <p className="uppercase hover:text-[#CCC] font-acme font-normal text-[22px] text-white">
                                {data.heading}
                            </p>
                        </div>
                    </div>
                    <div className="mt-[15px] z-20 relative w-[100%] flex flex-col gap-[30px]">
                        <p className="text-white leading-[26px] text-[15px] font-normal mb-[5px] font-inter" dangerouslySetInnerHTML={{ __html: text }}>


                        </p>
                        <button className=" mt-[10px]">
                            <Link href={(data.url != null) ? data.url : "/"} className="border border-[#f60] bg-[#f60] hover:border-[#fff] tracking-tight  hover:text-[#333] hover:bg-white uppercase font-roboto  text-[16px] float-right right-[0px] absolute bottom-4 font-mediuum text-white duration-400 px-2 py-[2px] rounded">
                                {data.button}
                            </Link>
                        </button>
                    </div>
                </div>
            </div> : <div className="w-[90%] rounded-t-[13px]  border-2  my-[30px]">

                <div className="relative  bg-white z-10 w-full h-full  hover:scale-105 duration-500">
                    <div className="w-full h-[42px] bg-[#30B1C0] rounded-t-[13px]  flex relative justify-center items-center z-20  border-solid border-b-2">

                        <div className="  flex flex-col ">
                            <p className="uppercase hover:text-[#CCC] font-acme font-normal text-[22px] text-[#fff]">
                                {data.heading}
                            </p>
                        </div>
                    </div>
                    <div className=" z-20 relative w-[100%] flex  flex-col gap-[30px]">
                        <p className="text-[#777A7C] overflow-hidden h-[180px] leading-[26px] text-[15px] font-normal font-inter" dangerouslySetInnerHTML={{ __html: text }}>


                        </p>
                        {(data.button != null) && <button className=" mt-[10px]">
                            <Link href={(data.url != null) ? data.url : "/"} className="border hover:bg-[#CCC] tracking-tight bg-white  hover:text-[#FFF] uppercase font-roboto  text-[16px] float-right right-[0px] absolute bottom-4 font-mediuum text-[#000] duration-400 px-2 py-[2px] rounded">
                                {data.button}
                            </Link>
                        </button>}
                    </div>
                </div>
            </div>
    )
}