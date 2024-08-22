import Link from "next/link";

export default function Services(props) {
    const setcontent = (e) => {
        let textt = "";
        textt = (e != null) ? e : "";
        textt = textt.replace(
            /^#\s(.+)/gm,
            '<h1 class="text-[#12103E] font-lexend-deca text-[48px] font-semibold">$1</h1>'
        );
        textt = textt.replace(
            /^##\s(.+)/gm,
            '<h2 class="text-[#12103E] font-lexend-deca text-[48px] font-semibold">$1</h2>'
        );
        textt = textt.replace(
            /^###\s(.+)/gm,
            '<h3 class="mb-2 text-[28px] font-lexend-deca font-medium tracking-tight text-gray-900 dark:text-white">$1</h3>'
        );
        textt = textt.replace(
            /^####\s(.+)/gm,
            '<h4 class="text-[24px] font-lexend-deca font-medium tracking-tight text-gray-900 dark:text-white">$1</h4>'
        );
        textt = textt.replace(
            /^#####\s(.+)/gm,
            '<h5 class="font-jost text-[15px] font-normal text-[#9E9EAC] uppercase mt-[25px]">$1</h5>'
        );
        textt = textt.replace(
            /^######\s(.+)/gm,
            '<h6 class="font-jost text-[15px] font-normal text-[#9E9EAC] uppercase mt-[25px]">$1</h6>'
        );
        textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#F60]">$1</strong>');
        textt = textt.replace(/\*(.*?)\*/g, '<em>$1</em>');
        textt = textt.replace(/_(.*?)_/g, '<em>$1</em>');
        textt = textt.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, `<img src="${process.env.NEXT_PUBLIC_mainurl}$2" >`);
        textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#F60] font-bold">$1</a>');
        textt = textt.replace(/\n/gi, "<span class='mb-[10px]  block'></span> \n");
        textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="">${item.slice(2)}</li>`).join('\n');
            return `<ul class='chooseus'>\n${listItems}\n</ul>`;
        });
        textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
            return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
          });
        return textt;
    }

    return (
        <div className="flex flex-col justify-start items-start mb-[60px]">
            <div className="flex items-center gap-2">
                <p className="capitalize">
                    {props.data.name}
                </p>
                <i className="flaticon-support text-[26px] rotateicon text-[#30B1C0]"></i>
            </div>
            <p className="text-[#12103E] font-lexend-deca text-[48px] font-semibold" dangerouslySetInnerHTML={{__html:setcontent(props.data.content)}}>
                
            </p>
            <div className="grid md:grid-cols-5 gap-[20px] sm:grid-cols-3 grid-cols-1">


                {
                    props.data.card.map((e, i) => {
                        return <div key={i} className="max-w-sm mt-[50px] px-[15px] pb-4  arrow-container bg-white border border-gray-200 rounded-lg   shadow-xl dark:bg-gray-800 dark:border-gray-700">
                            <div className="rounded-[50%] mt-[-32px] w-[65px] flex justify-center items-center bg-[#fff] shadow-md" style={{
                                boxShadow: '0px 10px 40px 0px rgba(0, 0, 0, 0.12)',
                            }}>
                                <i className="flaticon-delivery text-[40px]  text-[#30B1C0]"></i>

                            </div>
                            <p className="mb-[15px] w-[190px]  font-jost text-[18px] font-normal text-[#9E9EAC] " dangerouslySetInnerHTML={{__html:setcontent(e.content)}}>

                            </p>
                            <div className="flex mt-[10px] mb-[10px] justify-between items-center">
                                <Link href='/' className="font-jost text-[18px] font-normal text-[#9E9EAC] capitalize ">explore</Link>
                                <hr className="w-[80px]" />
                                <div className="bg-[#ff6d5a59]  parentarrow overflow-hidden h-[36px] w-[36px] flex justify-center items-center rounded-[50%]">

                                    <Link href=''>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" color="#FF6D5A" stroke="#FF6D5A" className="arrow opacity-100" height="12" viewBox="0 0 12 12" fill="none">
                                            <g clipPath="url(#clip0_218_151)">
                                                <path d="M1.33008 10.6699L10.3301 1.66992" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1.33008 1.66992H10.3301V10.6699" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_218_151">
                                                    <rect width="11" height="11" fill="white" transform="translate(0.330078 0.669922)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" color="#FF6D5A" stroke="#FF6D5A" className="arrowtwo opacity-100" height="12" viewBox="0 0 12 12" fill="none">
                                            <g clipPath="url(#clip0_218_151)">
                                                <path d="M1.33008 10.6699L10.3301 1.66992" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M1.33008 1.66992H10.3301V10.6699" stroke="" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_218_151">
                                                    <rect width="11" height="11" fill="white" transform="translate(0.330078 0.669922)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    })
                }

            </div>
        </div >
    )
}