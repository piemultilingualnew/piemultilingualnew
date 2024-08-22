export default function Steps(props) {
    const Setcontent = (props) => {
        let textt = "";
        textt = (props != null) ? props : "";
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
        textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#F60] font-bold">$1</a>');
        textt = textt.replace(/\n/gi, "<span class='mb-[10px]  block'></span> \n");
        textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="">${item.slice(2)}</li>`).join('\n');
            return `<ul class='chooseus leading-[22px]'>\n${listItems}\n</ul>`;
        });
        textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
            return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
        });
        return textt;
    }
    return (

        ((props?.data?.content!=null))&&<div  className="boxarrowtwo h-[200px]  w-[100%] flex justify-center  items-center ">
            <p className="bg-white text-[25px] font-bold ml-[10px] top-[-20px] w-[100px] align-middle text-center z-[20] text-[#F60] relative"> STEP {props.num}</p>
            <p className="bg-white text-[14px]  mt-[-15px] font-roboto font-normal text-[#333]" dangerouslySetInnerHTML={{__html:Setcontent((props?.data?.content!=null)?props.data.content:"")}}>
            </p>
        </div>

    )
}