import Cards from "./cards";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Business_benefits({apiData}) {
    const data = (apiData != null) ? apiData : ""
    const [text, setText] = useState("");
    const [headings, setHeadings] = useState("");
    useEffect(() => {
        let textt = (data?.Benefits != null) ? data.Benefits.content : "";
        let extractedHeadings = [];
        let remainingContent = textt;
        textt = textt.replace(/^#\s(.+)/gm, (_, content) => {
            const headingTag = `<h1 class="font-acme inline-block text-[24px] uppercase font-normal mb-[2px] text-[#114e5f]">${content}</h1>`;
            extractedHeadings.push(headingTag);
            remainingContent = remainingContent.replace(`${headingTag}`, '');
            return headingTag;
        });
        remainingContent = remainingContent.replace(/^#\s(.+)/gm, '')
        textt = textt.replace(/^##\s(.+)/gm, (_, content) => {
            const headingTag = `<h2 class="font-acme inline-block text-[22px] uppercase font-normal mb-[2px] text-[#114e5f]">${content}</h2>`;
            extractedHeadings.push(headingTag);
            remainingContent = remainingContent.replace(`${headingTag}`, "");
            return headingTag;
        });
        remainingContent = remainingContent.replace(/^##\s(.+)/gm, '')
        textt = textt.replace(/^###\s(.+)/gm, (_, content) => {
            const headingTag = `<h3 class="font-acme inline-block text-[21px] uppercase font-normal mb-[2px] text-[#114e5f]">${content}</h3>`;
            extractedHeadings.push(headingTag);
            remainingContent = remainingContent.replace(`${headingTag}`, "");
            return headingTag;
        });
        remainingContent = remainingContent.replace(/^###\s(.+)/gm, '')
        textt = textt.replace(/^####\s(.+)/gm, (_, content) => {
            const headingTag = `<h4 class="font-acme inline-block text-[20px] uppercase font-normal mb-[2px] text-[#114e5f]">${content}</h4>`;
            extractedHeadings.push(headingTag);
            remainingContent = remainingContent.replace(`${headingTag}`, "");
            return headingTag;
        });
        remainingContent = remainingContent.replace(/^####\s(.+)/gm, '')
        textt = textt.replace(/^#####\s(.+)/gm, (_, content) => {
            const headingTag = `<h5 class="font-acme inline-block text-[19px] uppercase font-normal mb-[2px] text-[#114e5f]">${content}</h5>`;
            extractedHeadings.push(headingTag);
            remainingContent = remainingContent.replace(`${headingTag}`, "");
            return headingTag;
        });
        remainingContent = remainingContent.replace(/^#####\s(.+)/gm, '')
        textt = textt.replace(/^######\s(.+)/gm, (_, content) => {
            const headingTag = `<h6 class="font-acme inline-block text-[18px] uppercase font-normal mb-[2px] text-[#114e5f]">${content}</h6>`;
            extractedHeadings.push(headingTag);
            remainingContent = remainingContent.replace(`${headingTag}`, '');
            return headingTag;
        });
        remainingContent = remainingContent.replace(/^#######\s(.+)/gm, '')
        setHeadings(extractedHeadings.join(''));
        textt = remainingContent;
        textt = textt.replace(/\{service\}/g, () => '<Document></Document>');
        textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#F60]">$1</strong>');

        textt = textt.replace(/\*(.*?)\*/g, '<em>$1</em>');
        textt = textt.replace(/_(.*?)_/g, '<em>$1</em>');
        textt = textt.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" class="w-[100px] h-[200px]">');
        textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2"  class="text-[#F60] font-bold">$1</a>');
        textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="">${item.slice(2)}</li>`).join('\n');
            return `<ul class='chooseus'>\n${listItems}\n</ul>`;
        });
        textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
            return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
        });
        textt = textt.replace(/\n/gi, "<br /> \n");
        setText(textt)
    }, [data])
    return (
        (data?.Benefits != null) ? <div className="w-full bg-[#bbe6f0] mt-[30px]" style={{backgroundImage: 'url(/imgs/X-pattern-2.png)'}}>
        <div className="w-full px-2 max-w-[1210px] mx-auto relative z-10 mt-[10px] mb-[20px]">
            <p dangerouslySetInnerHTML={{ __html: headings }}>

            </p>
            <div className="flex mt-[15px] justify-between gap-[20px]">
                <div className="w-[450px] md:flex hidden">
                    <div className="w-[450px] h-full">
                    <div className="w-[450px] h-full rounded-[13px]  flex flex-col p-[30px] relative justify-between" style={{background: 'linear-gradient(45deg,#000850,#000320),radial-gradient(100% 225% at 100% 0,#ff6928 0,#000 100%),linear-gradient(225deg,#ff7a00,#000),linear-gradient(135deg,#cdffeb 10%,#cdffeb 35%,#009f9d 0,#009f9d 60%,#07456f 0,#07456f 67%,#0f0a3c 0,#0f0a3c)',
                        backgroundBlendMode: 'screen,overlay,hard-light,normal'
                    }}>
                        <div className="relative flex-col px-2 py-4 h-full flex bg-[url('/imgs/business-benefits-bg.webp')]" style={{backgroundPosition: 'center', backgroundSize: '100% 100%'}}>
                            <div className="absolute top-0 left-0 w-full h-full" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}></div> 
                            <p className="text-white my-auto text-[32px] font-normal font-fira-sans overflow-hidden leading-[48px] z-10">
                                {data.Benefits.boxtext}
                            </p>
                            <div className="w-full flex items-center z-10 mt-auto">
                                <Link href={`/${data.Benefits.url}`} className="ml-auto"> <button className="uppercase text-[20px] w-[160px] hover:bg-[white] hover:text-[#fa5252] text-[white] px-3 py-2 border-solid  rounded-[25px] font-roboto z-10 transition delay-[100ms] duration-200" style={{borderColor: 'rgb(255, 122, 0)'}}>Read more +</button></Link >
                            </div>
                        </div>
                    </div>
                </div>

                </div>

                <div className=" flex-grow flex flex-col justify-between">
                    <p dangerouslySetInnerHTML={{ __html: text }} className='pb-4 mt-[-25px] font-roboto font-normal text-[#333]'></p>
                    <div className=" h-[inherit] flex justify-between">
                        <Cards data={data.Benefits.cards}></Cards>
                    </div>
                </div>
            </div>
        </div>
        </div> : <></>

    )
}