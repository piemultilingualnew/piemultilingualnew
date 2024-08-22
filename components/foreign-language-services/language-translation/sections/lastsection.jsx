import dynamic from "next/dynamic";
const Casestudycards = dynamic(() => import("./casestudycards"));
import Pricing from "./pricing";
import parse from 'html-react-parser'
import Document from "./document";

export default function Lastsection({apiData}) {
    const data = apiData
    const SetContent = ({text}) => {
        let textt = text || "";
        textt = textt.replace(
            /^#\s(.+)/gm,
            '<h1 class="font-acme inline-block text-[24px] uppercase font-normal mb-[2px] mt-[]  text-[#30B1C0]">$1</h1>'
        );
        textt = textt.replace(
            /^##\s(.+)/gm,
            '<h2 class="font-acme inline-block text-[22px] uppercase font-normal mb-[2px] mt-[]  text-[#30B1C0]">$1</h2>'
        );
        textt = textt.replace(
            /^###\s(.+)/gm,
            '<h3 class="font-acme inline-block text-[21px] uppercase font-normal mb-[2px] mt-[]  text-[#30B1C0]">$1</h3>'
        );
        textt = textt.replace(
            /^####\s(.+)/gm,
            '<h4 class="font-acme inline-block text-[20px] uppercase font-normal mb-[2px] mt-[]  text-[#30B1C0]">$1</h4>'
        );
        textt = textt.replace(
            /^#####\s(.+)/gm,
            '<h5 class="font-acme inline-block text-[19px] uppercase font-normal mb-[2px] mt-[]  text-[#30B1C0]">$1</h5>'
        );
        textt = textt.replace(
            /^######\s(.+)/gm,
            '<h6 class="font-acme inline-block text-[18px] uppercase font-normal mb-[2px] mt-[] text-[#30B1C0]">$1</h6>'
        );
        textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#F60]">$1</strong>');
        textt = textt.replace(/\*(.*?)\*/g, '<em>$1</em>');
        textt = textt.replace(/_(.*?)_/g, '<em>$1</em>');
        textt = textt.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, `<img src="${process.env.NEXT_PUBLIC_mainurl}$2" >`);
        textt = textt.replace(/\n/gi, "<span class='h-[8px] block'></span> \n");
        textt = textt.replace(/\[\[\[([\s\S]+?)\]\]\]/gm, function (match, p1) {
            const lines = p1.trim().split('\n');
            const numRows = 3;
            const numRowsRemainder = lines.length % numRows;
            const numRowsFull = Math.floor(lines.length / numRows);
            const rowLengths = Array(numRows).fill(numRowsFull);
            for (let i = 0; i < numRowsRemainder; i++) {
                rowLengths[i]++;
            }
        
            let currentIndex = 0;
            const rows = rowLengths.map((rowLength) => {
                const rowContent = lines.slice(currentIndex, currentIndex + rowLength);
                currentIndex += rowLength;
        
                const rowHTML = rowContent.map(line => {
                    if (line.startsWith('-')) {
                        const listItems = line.trim().split('\n').map(item => `<li>${item.slice(2)}</li>`).join('\n');
                        return `<ul class='chooseus leading-[22px]'>\n${listItems}\n</ul>`;
                    } else {
                        return `<div>${line}</div>`;
                    }
                }).join('\n');
                return `<div class="w-[${100 / numRows}%]">${rowHTML}</div>`;
            });
        
            return `<div class="flex justify-between w-full">${rows.join('')}</div>`;
        });
        textt = textt.replace(/\[\[([\s\S]+?)\]\]/gm, function (match, p1) {
            const lines = p1.trim().split('\n');
            const halfLength = Math.ceil(lines.length / 2);
            const firstHalf = lines.slice(0, halfLength).map(line => {
                if (line.startsWith('-')) {
                    const listItems = line.trim().split('\n').map(item => `<li>${item.slice(2)}</li>`).join('\n');
                    return `<ul class='chooseus leading-[22px]'>\n${listItems}\n</ul>`;
                } else {
                    return `<div>${line}</div>`;
                }
            }).join('\n');
            const secondHalf = lines.slice(halfLength).map(line => {
                if (line.startsWith('-')) {
                    const listItems = line.trim().split('\n').map(item => `<li>${item.slice(2)}</li>`).join('\n');
                    return `<ul class='chooseus leading-[22px]'>\n${listItems}\n</ul>`;
                } else {
                    return `<div>${line}</div>`;
                }
            }).join('\n');
            return `<div class="flex justify-between w-full">
                        <div class="w-[50%]">${firstHalf}</div>
                        <div class="w-[50%]">${secondHalf}</div>
                    </div>`;
        });
        textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
            return `<ul class='chooseus'>\n${listItems}\n</ul>`;
        });
        textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
            return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
        });
        textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#F60] font-bold">$1</a>');
        textt = textt.replace(/\{service\}/g, () => '<Document></Document>');
        let parsedContent = parse(textt, {
            decodeEntities: true,
            replace: (node) => {
                if(node.name === 'document'){
                    return <Document apiData={apiData}/>
                }
            }
        })
        return parsedContent;
    }

    return (
        (data?.Case_Study != null) ?
            <div className="w-[100%] max-w-[1210px] mx-auto bg-white z-[10] relative mt-[40px] flex flex-col justify-center items-center">

                <p className="text-[24px] w-full font-normal font-acme text-[#30B1C0] mt-[30px] uppercase leading-3 ">
                    {data.Case_Study.heading}
                </p>
                <div className="flex flex-col lg:flex-row w-full gap-[30px]  justify-center">
                    {
                        data.Case_Study.cards.map((e, i) => {
                            return <Casestudycards data={e} key={i}></Casestudycards>
                        })
                    }


                </div>
                <div className="flex flex-col sm:flex-row w-full justify-between gap-[40px]">
                    {(data.case_content) && <div className=" mt-[50px] mb-[30px]">
                        <div className='leading-[22px] font-roboto text-[15px] font-normal text-[#333] w-full' >
                            <SetContent text={data.case_content}/>
                        </div>

                    </div>}
                    {(data.Pricing) && <div className=" mt-[50px] mr-[12px] mb-[30px]">
                        <Pricing apiData={data}></Pricing>
                    </div>}
                </div>
                

            </div> : <></>
    )
}