import { useState, useEffect } from "react";
import styles from './chooseUs.module.scss'

export default function ChooseUsCards(props) {
    const data = props.data;
    const [text, setText] = useState()
    useEffect(() => {
        let textt = (data?.content != null) ? data.content : "";
        textt = textt.replace(/^#\s(.+)/gm, '<h1 class="font-acme text-[32px] uppercase font-normal mb-[-10px] text-[#30B1C0]">$1</h1>'
        );
        textt = textt.replace(/^##\s(.+)/gm, '<h2 class="font-acme text-[24px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h2>'
        );
        textt = textt.replace(/^###\s(.+)/gm, '<h3 class="font-acme text-[20px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h3>'
        );
        textt = textt.replace(/^####\s(.+)/gm, '<h4 class="font-acme text-[18px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h4>'
        );
        textt = textt.replace(/^#####\s(.+)/gm, '<h5 class="font-acme text-[16px] uppercase font-normal mb-[-25px] text-[#30B1C0]">$1</h5>'
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
        textt = textt.replace(/^- (.+)(\n- .+)*/gm, function (match, p1) {
            const listItems = match.trim().split('\n').map(item => `<li>${item.slice(2)}</li>`).join('\n');
            return `<ul class='chooseus leading-[23px]'>\n${listItems}\n</ul>`;
        });
        setText(textt)
    }, [data])
    return (
        <div className={`${styles.reasonCard} md:w-[420px] w-[330px]`} >
            <p dangerouslySetInnerHTML={{ __html: text }}>  
            </p>
        </div>
    )
}