import styles from './pricing.module.scss'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Pricing = ({apiData}) => {
  const [content, setContent] = useState()
  const dataa=apiData;

  useEffect(() => {
    let textt = (dataa != null && dataa != undefined) ? dataa.Pricing.content : ""
    textt = textt.replace(/^#\s(.+)/gm, '<h1 class="text-[24px]">$1</h1>');
    textt = textt.replace(/^##\s(.+)/gm, `<h2 class=" whiteText">$1</h2>`);
    textt = textt.replace(/^###\s(.+)/gm, '<h3 class=" orangeText">$1</h3>');
    textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong className="text-[#F60]">$1</strong>');
    textt = textt.replace(/\*(.*?)\*/g, '<em>$1</em>');
    textt = textt.replace(/_(.*?)_/g, '<em>$1</em>');
    textt = textt.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" class="w-[100px] h-[200px]">');
    textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
    textt = textt.replace(/\n/gi, "<br/> \n");
    textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
      const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
      return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
    });
    setContent(textt)
  }, [dataa, content])

  return (
   (dataa!=null && dataa!=undefined)? <div className={styles.container}>
        {/* <div className='absolute top-0 left-0 w-full h-full' style={{backgroundColor: 'rgba(25, 62, 95, .7)'}}></div> */}
        <div className={styles.content}>
            <div className={styles.div}>
              <div className='max-w-[1240px] mx-auto flex'>
                <div className={styles.left}>
                <div className='absolute top-0 left-0 lg:w-[950px] md:w-[700px] w-full h-full' style={{backgroundColor: 'rgba(25, 62, 95, .8)'}}></div>
                <div className='relative'>
                  <h2 className={styles.heading}>{dataa.Pricing.heading}</h2>
                  <div className={styles.description} dangerouslySetInnerHTML={{ __html: content }}></div>
                </div>
                </div>
                <div className={styles.right}>
                  <Image src='/imgs/bg-right.svg' alt='' className='w-full h-full' width={350} height={150}/>
                  <div className={styles.btnWrapper}>
                    <button className={styles.btn}>Know More</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>: <></>
  )
}

export default Pricing