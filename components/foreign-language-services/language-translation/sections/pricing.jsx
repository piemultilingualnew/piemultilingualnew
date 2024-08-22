import Link from "next/link";

export default function Pricing({apiData}) {
    const data = apiData
    const setcontent = (e) => {
        let textt = e;
        textt = textt.replace(
            /^#\s(.+)/gm,
            '<h1 class="font-acme text-[24px] uppercase font-medium mb-[-10px] text-[#30B1C0]">$1</h1>'
        );
        textt = textt.replace(
            /^##\s(.+)/gm,
            '<h2 class="font-acme text-[22px] uppercase font-medium mb-[-25px] text-[#30B1C0]">$1</h2>'
        );
        textt = textt.replace(
            /^###\s(.+)/gm,
            '<h3 class="font-acme text-[21px] uppercase font-medium mb-[-25px] text-[#30B1C0]">$1</h3>'
        );
        textt = textt.replace(
            /^####\s(.+)/gm,
            '<h4 class="font-acme text-[20px] uppercase font-medium mb-[-25px] text-[#30B1C0]">$1</h4>'
        );
        textt = textt.replace(
            /^#####\s(.+)/gm,
            '<h5 class="font-acme text-[19px] uppercase font-medium mb-[-25px] text-[#30B1C0]">$1</h5>'
        );
        textt = textt.replace(
            /^######\s(.+)/gm,
            '<h6 class="font-acme text-[18px] uppercase font-medium mb-[-25px] text-[#30B1C0]">$1</h6>'
        );
        textt = textt.replace(
            /<h2 class="font-acme text-\[22px\] uppercase font-medium mb-\[-25px\] text-\[#30B1C0\]">(.*?)<\/h2>/,
            '<div class="recentorange  rounded-t-lg  w-[100%] flex justify-center items-center">\n' +
            '    <h2 class="uppercase font-roboto text-[20px] font-medium text-[#FFF]">$1</h2>\n' +
            '</div>'
        );
        textt = textt.replace(/\{service\}/g, () => '<Document></Document>');
        textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#F60]">$1</strong>');
        textt = textt.replace(/\*(.*?)\*/g, '<em>$1</em>');
        textt = textt.replace(/_(.*?)_/g, '<em>$1</em>');
        textt = textt.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, `<img src="${process.env.NEXT_PUBLIC_mainurl}$2" >`);
        textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#F60] font-bold">$1</a>');
        textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="">${item.slice(2)}</li>`).join('\n');
            return `<ul class='chooseus'>\n${listItems}\n</ul>`;
        });
        textt = textt.replace(/\n/gi, "<br/> \n");
        textt = textt.replace(/(^|<\/h[1-6]>)([^<]+)(?=(<|$))/gm, function (match, p1, p2) {
            return p1 + (p2.trim() ? `<p>${p2.trim()}</p>` : '');
        });
        const imageHTML = '<img src="/imgs/Our-Pricing.webp" loading="lazy" width="100" height="100" alt="Description of the image" class="mr-[10px] float-left">';
        textt = textt.replace(/<p>([^<]+)<\/p>/g, function (match, p1) {
            const paragraphWithImage = `<div class='px-4 mt-[-18px] mb-[14px]'>${imageHTML}
            <p>${p1}<p></div>`;
            return paragraphWithImage;
        });
        textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
            return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
        });
        return textt;
    }
    return (
        (data.Pricing != null) ? <div className=" w-[300px] h-fit flex flex-col justify-center items-center shadow-lg shadow-[#CCC] rounded-t-lg ">

            <div className="h-[100%] flex flex-col overflow-hidden justify-between relative  text-[#000] ">

                {(data.Pricing.content) && <>
                    <div className='leading-[25px] inline font-roboto font-normal text-[#333] text-[14px]' dangerouslySetInnerHTML={{ __html: setcontent((data?.Pricing?.content != null) ? data.Pricing.content : "") }}>

                    </div>
                    <Link href={(data?.Pricing?.url != null)?data.Pricing.url:"/"} name="pricing" className="uppercase font-fir font-medium w-[100px] h-[35px]  text-[15px] relative left-[65%]  float-right mr-[0px] mb-[10px] text-black border hover:bg-[#f60] duration-500 border-[#f60] rounded-lg flex justify-center hover:text-[#fff] items-center">{(data.Pricing.button!=null)?data.Pricing.button:"READ MORE"}</Link></>}
            </div>
        </div> : <></>
    )
}