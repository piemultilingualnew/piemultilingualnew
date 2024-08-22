import styles from './video.module.scss'
import { useState, useEffect } from 'react';
import {YouTubeEmbed} from '@next/third-parties/google'
import Image from 'next/image';

const Video = ({videoData}) => {
  const [content, setContent] = useState()

  useEffect(() => {
    let textt = (videoData != null && videoData != undefined) ? videoData.content : ""
    textt = textt.replace(/^#\s(.+)/gm, '<h1 class=" font-acme text-[24px]">$1</h1>');
    textt = textt.replace(/^##\s(.+)/gm, `<h2 class="font-acme text-[27px]">$1</h2>`);
    textt = textt.replace(/^###\s(.+)/gm, '<h3 class="font-acme orangeText">$1</h3>');
    textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong className="text-[#F60]">$1</strong>');
    textt = textt.replace(/\*(.*?)\*/g, '<em>$1</em>');
    textt = textt.replace(/_(.*?)_/g, '<em>$1</em>');
    textt = textt.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" class="w-[100px] h-[200px]">');
    textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#F60] font-bold">$1</a>');
    textt = textt.replace(/\n/gi, "<br/> \n");
    textt = textt.replace(/^-- (.+)(\n-- .+)*/gm, function (match, p1) {
      const listItems = match.trim().split('\n').map(item => `<li class="leading-[22px]">${item.slice(2)}</li>`).join('\n');
      return `<ul class='pointerlist'>\n${listItems}\n</ul>`;
    });
    setContent(textt)
  }, [videoData, content])

  return ( 
    <div className='mt-[35px]'>
      <div className={styles.content}>
        <div className={styles.left}>
          {
            (videoData != null && videoData != undefined) ? <div className={styles.description} dangerouslySetInnerHTML={{ __html: content }}></div> : ""
          }
        </div>
        <div className={styles.right}>
            <div className={styles.videoWrapper}>
              <Image className={`${styles.videoBg1}`} src='/imgs/videoBg_svg.svg' alt="" width={100} height={100} />
              <Image className={`${styles.videoBg2} `} src='/imgs/videoBg_svg.svg' alt="" width={100} height={100} />
              <div className='h-[250px] sm:w-[450px] w-[280px]'>
                <YouTubeEmbed style='min-height: 250px; min-width: 400px padding-top:0'
                videoid={videoData.video_link || '7GZ0qHTUAuo'} params='rel=0'/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Video