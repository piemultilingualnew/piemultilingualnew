import { useEffect, useState } from "react"

export default function Results({data}) {
    const [text, setText] = useState();
    useEffect(() => {
        let textt = (data?.content!=null)? data.content : "";
        textt = textt.replace(
            /^#\s(.+)/gm,
            '<h1 class="font-acme inline-block text-[24px] uppercase font-normal mb-[2px] mt-[0px]  text-[#30B1C0]">$1</h1>'
        );
        textt = textt.replace(
            /^##\s(.+)/gm,
            '<h2 class="font-acme inline-block text-[23px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h2>'
        );
        textt = textt.replace(
            /^###\s(.+)/gm,
            '<h2 class="font-acme inline-block text-[22px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h2>'
        );
        textt = textt.replace(
            /^####\s(.+)/gm,
            '<h4 class="font-acme inline-block text-[20px] uppercase font-normal mb-[2px] mt-[25px]  text-[#30B1C0]">$1</h4>'
        );
        textt = textt.replace(
            /^#####\s(.+)/gm,
            '<h5 class="font-acme inline-block text-[19px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h5>'
        );
        textt = textt.replace(
            /^######\s(.+)/gm,
            '<h6 class="font-acme inline-block text-[18px] uppercase font-normal mb-[2px] mt-[4px] text-[#30B1C0]">$1</h6>'
        );
        textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#F60]">$1</strong>');
        textt = textt.replace(/\*(.*?)\*/g, '<em>$1</em>');
        textt = textt.replace(/_(.*?)_/g, '<em style="font-size:15px;">$1</em>');
        textt = textt.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, `<img src="${process.env.NEXT_PUBLIC_mainurl}$2" >`);
        textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#F60] font-bold">$1</a>');
        textt = textt.replace(/\n/gi, "<span class='mb-[8px]  block'></span> \n");
        textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
            return `<ul class='chooseus'>\n${listItems}\n</ul>`;
        });
        textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
            return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
        });
        setText(textt);
    }, [data])
    return (
        <div className=" flex gap-[10px] justify-start  mt-[40px]">
            <div className="w-[445px] flex flex-col text-[15px] leading-[25px] -mt-[20px]" dangerouslySetInnerHTML={{__html: text}}>
                
            </div>
            <div className="grid grid-cols-2 gap-[28px]">
                {
                    data.box.map((item, index) => {
                        let values = []
                        if(item.content.indexOf('%')){
                            values = item.content.split('%')
                        }
                        return(
                            <div className={`w-[189px] h-[189px] border-solid border-[1px] px-[6px] flex flex-col justify-center rounded-[20px] border-[#E7E8EC] ${index%2 === 0 && 'mt-[-20px]'}`} key={index}>
                                {values.length > 0 ? <>
                                    <p className=" font-inter text-[47px] font-semibold text-[#10B981] text-center">{values[0]}%</p>
                                    <p className="font-roboto text-[18px] font-normal text-[#131740] w-full text-center">{values[1]}</p>
                                </> : <p className="w-full font-roboto text-[18px] font-normal text-[#131740]">{item.content}</p>}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}