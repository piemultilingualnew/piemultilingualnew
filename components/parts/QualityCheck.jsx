import { useState, useEffect } from "react"

const QualityCheck = ({content}) => {
  const [text, setText] = useState();
  useEffect(() => {
    let textt = content || "";
    textt = textt.replace(
        /^#\s(.+)/gm,
        '<h1 class="font-acme inline-block text-[25px] uppercase font-normal mb-[2px] mt-[0px]">$1</h1>'
    );
    textt = textt.replace(
        /^##\s(.+)/gm,
        '<h2 class="font-acme inline-block text-[24px] uppercase font-normal mb-[2px] mt-[4px]">$1</h2>'
    );
    textt = textt.replace(
        /^###\s(.+)/gm,
        '<h3 class="font-acme inline-block text-[23px] uppercase font-normal mb-[2px] mt-[4px]">$1</h3>'
    );
    textt = textt.replace(
        /^####\s(.+)/gm,
        '<h4 class="font-acme inline-block text-[22px] uppercase font-normal mb-[2px] mt-[25px]">$1</h4>'
    );
    textt = textt.replace(
        /^#####\s(.+)/gm,
        '<h5 class="font-acme inline-block text-[21px] uppercase font-normal mb-[2px] mt-[4px]">$1</h5>'
    );
    textt = textt.replace(
        /^######\s(.+)/gm,
        '<h6 class="font-acme inline-block text-[20px] uppercase font-normal mb-[2px] mt-[4px">$1</h6>'
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
    setText(textt);
  }, [content])
  return (
    <div className='w-full flex items-center gap-[20px] max-w-[1250px] mx-auto my-[10px]'>
        <div className='w-[30%] h-[338px] self-start' dangerouslySetInnerHTML={{__html: text}}>
            
        </div>
        <hr className="bg-[#ccc] w-[0.5px] h-[290px]"/>
        <div className='py-[15px] bg-[#f9b000] w-[68%]'>
            <h2 className='uppercase text-white text-[30px] text-center font-fira-sans'>our multi step quality check process involves</h2>
            <div className='w-full my-[70px]'></div>
            <div className='w-full px-4 grid grid-cols-4 gap-8 mb-[13px]'>
                <div className='h-[180px] py-[20px] px-[5px] relative bg-white'>
                    <div className='absolute top-[-50px] right-0 left-0 mx-auto h-[92px] w-[92px]' style={{backgroundImage: 'url(/imgs/sprites-generated.png)', backgroundPosition: '-547px -368px'}}></div>
                    <h3 className='uppercase text-[#10617f] pt-[30px] text-[23px] font-fira-sans text-center'>transcription</h3>
                    <p className='text-[15px] mt-[10px] text-black text-center'>Subject specific certified transcriber will transcribe received audio file.</p>
                    <div className='absolute top-[56px] right-[-49px] z-10 w-[65px] h-[65px]' style={{backgroundImage: 'url(/imgs/sprites-generated.png)', backgroundPosition: '-460px -428px'}}></div>
                </div>
                <div className='h-[180px] py-[20px] px-[5px] relative bg-white'>
                    <div className='absolute top-[-50px] right-0 left-0 mx-auto h-[92px] w-[92px]' style={{backgroundImage: 'url(/imgs/sprites-generated.png)', backgroundPosition: '0 -520px'}}></div>
                    <h3 className='uppercase text-[#10617f] pt-[30px] text-[23px] font-fira-sans text-center'>proofreading</h3>
                    <p className='text-[15px] mt-[10px] text-black text-center'>Another transcriber will fill the blanks along with wrongly spelled words.</p>
                    <div className='absolute top-[56px] right-[-49px] z-10 w-[65px] h-[65px]' style={{backgroundImage: 'url(/imgs/sprites-generated.png)', backgroundPosition: '-460px -428px'}}></div>
                </div>
                <div className='h-[180px] py-[20px] px-[5px] relative bg-white'>
                    <div className='absolute top-[-50px] right-0 left-0 mx-auto h-[92px] w-[92px]' style={{backgroundImage: 'url(/imgs/sprites-generated.png)', backgroundPosition: '-92px -520px'}}></div>
                    <h3 className='uppercase text-[#10617f] pt-[30px] text-[23px] font-fira-sans text-center'>quality check</h3>
                    <p className='text-[15px] mt-[10px] text-black text-center'>Before delivery file will be doubled checked for Time stamp and format.</p>
                    <div className='absolute top-[56px] right-[-49px] z-10 w-[65px] h-[65px]' style={{backgroundImage: 'url(/imgs/sprites-generated.png)', backgroundPosition: '-460px -428px'}}></div>
                    <div className='absolute top-[118px] right-[-49px] z-10 rotate-180 h-[65px] w-[65px]' style={{backgroundImage: 'url(/imgs/sprites-generated.png)', backgroundPosition: '-460px -428px'}}></div>
                </div>
                <div className='h-[180px] py-[20px] px-[5px] relative bg-white'>
                    <div className='absolute top-[-50px] right-0 left-0 mx-auto h-[92px] w-[92px]' style={{backgroundImage: 'url(/imgs/sprites-generated.png)', backgroundPosition: '-276px -520px'}}></div>
                    <h3 className='uppercase text-[#10617f] pt-[30px] text-[23px] font-fira-sans text-center'>delivery</h3>
                    <p className='text-[15px] mt-[10px] text-black text-center'>Transcribed File will be delivered in the requested format.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default QualityCheck