import parse from 'html-react-parser'

const WhyChooseGrid = ({data}) => {
    const SetContent = ({text}) => {
        let textt = text || "";
        textt = textt.replace(
            /^#\s(.+)/gm,
            '<h1 class="font-acme text-[25px] uppercase font-normal mb-[-10px] text-[#30B1C0]">$1</h1>'
        );
        textt = textt.replace(
            /^##\s(.+)/gm,
            '<h2 class="font-acme text-[24px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h2>'
        );
        textt = textt.replace(
            /^###\s(.+)/gm,
            '<h3 class="font-acme text-[23px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h3>'
        );
        textt = textt.replace(
            /^####\s(.+)/gm,
            '<h4 class="font-acme text-[22px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h4>'
        );
        textt = textt.replace(
            /^#####\s(.+)/gm,
            '<h5 class="font-acme text-[21px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h5>'
        );
        textt = textt.replace(
            /^######\s(.+)/gm,
            '<h6 class="font-acme text-[20px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h6>'
        );
        textt = textt.replace(/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm, (match) => `<a href='mailto:${match}' class='text-[#337AB7]'>${match}</a>`)
        textt = textt.replace(/\{service\}/g, () => '<Document></Document>');
        textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#F60]">$1</strong>');
        textt = textt.replace(/\*(.*?)\*/g, '<em>$1</em>');
        textt = textt.replace(/\$\$([\s\S]*?)\$\$/g, '<div class="flex items-center justify-between gap-[20px] mt-[20px]">$1</div>');
        textt = textt.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, `<div class="w-full h-full bg-[#e1dede] p-2 hover:translate-y-[-8px] transition-transform"><img src="${process.env.NEXT_PUBLIC_mainurl}$2" height='65px' width='130px'  class="h-[65px] w-auto m-auto"></div>`);
        textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#F60] font-bold"  >$1</a>');
        textt = textt.replace(/\n/gi, "<br/> \n");
        textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="">${item.slice(2)}</li>`).join('\n');
            return `<ul class='chooseus'>\n${listItems}\n</ul>`;
        });
        textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
            return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
        });
        const parsedContent = parse(textt, {
            decodeEntities: true,
        })
        return parsedContent;
    }
  return (
    <div className="w-full max-w-[1210px] mx-auto grid grid-cols-12 mb-[30px] mt-[40px] gap-4">
        {
            data?.cards?.length >= 3 && data.cards.slice(0,3).map((card, i) => (
                <div className="col-span-4 flex flex-col group border border-[rgb(0,0,0)] pl-4 bg-[#f75e7d]" key={i} style={{borderRadius: '20px 0px 20px 0px'}}>
                        <div className="w-full flex items-center gap-4">
                            <p className="text-[50px] text-[#f60] font-outline group-hover:text-white group-hover:no-stroke transition tracking-wider">{'0'+`${i+1}`}</p>
                            <p className="text-[40px] font-acme uppercase">{card.button}</p>
                        </div>
                        <p className="mb-3"><SetContent text={card.content}/></p>
                </div>
            ))
        }
        {data?.cards?.length >= 4 && <div className="border border-[rgb(0,0,0)] col-span-3 flex flex-col px-4 group" style={{borderRadius: '20px 0px 20px 0px'}}>
            <div className="w-full flex items-center gap-4">
                <p className="text-[50px] text-[#f60] font-outline group-hover:text-[#f60] group-hover:no-stroke transition tracking-wider">04</p>
                <p className="text-[40px] font-acme uppercase">{data.cards[3].button}</p>
            </div>
            <p className="mb-3"><SetContent text={data.cards[3].content}/></p>
        </div>}
        <div className="col-span-6 flex items-center justify-center">
            <div className='w-full h-full border border-[#000] flex flex-col items-center justify-center gap-[10px] py-4 rounded-[5px]'>
                <h2 className="font-fira-sans text-[30px] font-[500] text-center">{data?.heading?.split(' ')[0] +  ' ' + data?.heading?.split(' ')[1]}</h2>
                <h2 className="font-acme uppercase text-[30px] text-center">{data?.heading?.split(' ')[2] + ' ' + data?.heading?.split(' ')[3] + ' ' + data?.heading?.split(' ')[4]}</h2>
            </div>
        </div>
        {data?.cards?.length >= 5 && <div className="border border-[rgb(0,0,0)] col-span-3 flex flex-col px-4 group" style={{borderRadius: '20px 0px 20px 0px'}}>
            <div className="w-full flex items-center gap-4">
                <p className="text-[50px] text-white font-outline group-hover:text-[#f60] group-hover:no-stroke transition tracking-wider">05</p>
                <p className="text-[40px] font-acme uppercase">{data.cards[4].button}</p>
            </div>
            <p className="mb-3"><SetContent text={data.cards[4].content}/></p>
        </div>}
        {
            data?.cards?.length >= 8 && data.cards.slice(5, ).map((card, i) => (
                <div className="border border-[rgb(0,0,0)] col-span-4 flex flex-col px-4 group" key={i} style={{borderRadius: '20px 0px 20px 0px'}}>
                    <div className="w-full flex items-center gap-4">
                        <p className="text-[50px] text-white font-outline group-hover:text-[#f60] group-hover:no-stroke transition tracking-wider">{'0'+`${i+6}`}</p>
                        <p className="text-[20px] font-acme uppercase">{card.button}</p>
                    </div>
                    <p className="mb-3"><SetContent text={card.content}/></p>
                </div>
            ))
        }
    </div>
  )
}

export default WhyChooseGrid