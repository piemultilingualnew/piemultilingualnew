import parse from 'html-react-parser'

const SetContent = ({textt}) => {
    textt = textt.replace(
      /^#\s(.+)/gm,
      '<h1 class="font-acme inline-block text-[25px] uppercase font-normal mb-[2px] mt-[0px]  text-[#30B1C0]">$1</h1>'
    );
    textt = textt.replace(
        /^##\s(.+)/gm,
        '<h2 class="text-[30px] relative font-fira-sans font-[500] after:bg-[#27aae1] after:bottom-[9px] after:h-[15px] after:w-[156px] after:inline-block after:absolute after:ml-[20px] after:opacity-20">$1</h2>'
    );
    textt = textt.replace(
        /^###\s(.+)/gm,
        '<h3 class="font-acme inline-block text-[23px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h3>'
    );
    textt = textt.replace(
        /^####\s(.+)/gm,
        '<h4 class="font-acme inline-block text-[22px] uppercase font-normal mb-[2px] mt-[25px]  text-[#30B1C0]">$1</h4>'
    );
    textt = textt.replace(
        /^#####\s(.+)/gm,
        '<h5 class="font-acme inline-block text-[21px] uppercase font-normal mb-[2px] mt-[4px]  text-[#30B1C0]">$1</h5>'
    );
    textt = textt.replace(
        /^######\s(.+)/gm,
        '<h6 class="font-acme inline-block text-[20px] uppercase font-normal mb-[2px] mt-[4px] text-[#30B1C0]">$1</h6>'
    );
    textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong className="text-[#F60]">$1</strong>');
    textt = textt.replace(/\*(.*?)\*/g, '<em>$1</em>');
    textt = textt.replace(/_(.*?)_/g, '<em>$1</em>');
    textt = textt.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" class="w-[100px] h-[200px]">');
    textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#F60] font-bold">$1</a>');
    textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
        const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
        return `<ul class='chooseus'>\n${listItems}\n</ul>`;
    });
    textt = textt.replace(/\n/gi, "<span class='mb-[8px]  block'></span> \n");
    textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
        const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
        return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
    });
    const parsedContent = parse(textt, {
        decodeEntities: true,
    });
    return parsedContent;
} 

const ChooseusChart = ({data}) => {
  return (
    <>
        <h2 className="text-[30px] font-acme uppercase w-full max-w-[1210px] mt-[40px] mx-auto">{data?.heading}</h2>
        <div className="w-full max-w-[1210px] mx-auto flex mb-[70px] mt-[50px] justify-between">
        <div className="w-[300px] h-[300px] border-r-[10px] relative border-r-[#216faa] flex items-center justify-center rounded-full">
            <h2 className="font-acme uppercase text-[30px] text-center mr-[30px]">{data?.Side_heading}</h2>
            <div className="absolute top-[40px] left-[248px]">
                <div className="h-[20px] w-[20px] rounded-full border-4 border-[#216faa] bg-white z-10 relative"></div>
                <div className="w-0 h-0 border-l-[2px] border-l-transparent border-r-[2px] absolute -top-[38px] left-[30px] border-r-transparent border-b-[70px] border-b-[#216faa]
                rotate-[240deg]"></div>
                <div className="flex items-center gap-4 text-[#216faa] w-[200px] absolute top-[-80px] left-[56px]">
                    <div className="w-[150px] h-[80px] rounded-full flex items-center justify-center border-[3px] border-[#216faa]">
                        <i className={`text-[50px] ${data?.Why_us_three_cards && data.Why_us_three_cards[0] ? data.Why_us_three_cards[0].icon : 'flaticon-support'}`}></i>
                    </div>
                    <p className="uppercase font-semibold">{data?.Why_us_three_cards && data.Why_us_three_cards[0] ? data.Why_us_three_cards[0].title : ''}</p>
                </div>
            </div>
            <div className="absolute top-[130px] left-[285px]">
                <div className="h-[20px] w-[20px] rounded-full border-4 border-[#216faa] bg-white z-10 relative"></div>
                <div className="w-0 h-0 border-l-[2px] border-l-transparent border-r-[2px] absolute -top-[25px] left-[33px] border-r-transparent border-b-[70px] border-b-[#216faa]
                rotate-[270deg]"></div>
                <div className="flex items-center gap-4 text-[#216faa] w-[200px] absolute top-[-30px] left-[68px]">
                    <div className="w-[150px] h-[80px] rounded-full flex items-center justify-center border-[3px] border-[#216faa]">
                        <i className={`text-[50px] ${data?.Why_us_three_cards && data.Why_us_three_cards[1] ? data.Why_us_three_cards[1].icon : 'flaticon-support'}`}></i>
                    </div>
                    <p className="uppercase font-semibold">{data?.Why_us_three_cards && data.Why_us_three_cards[1] ? data.Why_us_three_cards[1].title : ''}</p>
                </div>
            </div>
            <div className="absolute top-[230px] left-[258px]">
                <div className="h-[20px] w-[20px] rounded-full border-4 border-[#216faa] bg-white z-10 relative"></div>
                <div className="w-0 h-0 border-l-[2px] border-l-transparent border-r-[2px] absolute -top-[13px] left-[30px] border-r-transparent border-b-[70px] border-b-[#216faa]
                rotate-[300deg]"></div>
                <div className="flex items-center gap-4 text-[#216faa] w-[200px] absolute top-[17px] left-[58px]">
                    <div className="w-[150px] h-[80px] rounded-full flex items-center justify-center border-[3px] border-[#216faa]">
                        <i className={`text-[50px] ${data?.Why_us_three_cards && data.Why_us_three_cards[2] ? data.Why_us_three_cards[2].icon : 'flaticon-support'}`}></i>
                    </div>
                    <p className="uppercase font-semibold">{data?.Why_us_three_cards && data.Why_us_three_cards[2] ? data.Why_us_three_cards[2].title : ''}</p>
                </div>
            </div>
        </div>
        <div className="w-[540px] flex flex-col gap-3">
            <SetContent textt={data?.content || ""}/>
        </div>
    </div>
    </>
  )
}

export default ChooseusChart