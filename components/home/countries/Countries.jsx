import styles from './countries.module.scss'
import { useState, useEffect } from 'react';

export const countryData = {
  data: {
    attributes: {
      heading: 'Countires That We Serve',
      description: 'Browse Case Studies to find out how our Multiilingual Virtual Assistants have helped our global customers to exceed their expectations. Browse Case Studies to find out how our Multilingual Virtual Assistants have helped our global customers to exceed their expectations. Browse Case Studies to find out how our Multilingual Virtual Assistants have helped our global customers to exceed their expectations.',
      countries: [
        {
          name: 'Chinese',
          icon: '/imgs/countries/china.svg'
        },
        {
          name: 'German',
          icon: '/imgs/countries/germany.svg'
        },
        {
          name: 'Hebrew',
          icon: '/imgs/countries/israel.svg'
        },
        {
          name: 'Indonesian',
          icon: '/imgs/countries/indonesia.svg'
        },
        {
          name: 'Portuguese',
          icon: '/imgs/countries/portugal.svg'
        },
        {
          name: 'Arabic',
          icon: '/imgs/countries/uae.svg'
        },
        {
          name: 'Thai',
          icon: '/imgs/countries/thai.svg'
        },
        {
          name: 'French',
          icon: '/imgs/countries/france.svg'
        },
        {
          name: 'Japanese',
          icon: '/imgs/countries/japan.svg'
        },
        {
          name: 'Korean',
          icon: '/imgs/countries/korea.svg'
        },
        {
          name: 'Hungarian',
          icon: '/imgs/countries/hungary.svg'
        },
        {
          name: 'Norwegian',
          icon: '/imgs/countries/norway.svg'
        },
        {
          name: 'Turkish',
          icon: '/imgs/countries/turkey.svg'
        },
        {
          name: 'Czech',
          icon: '/imgs/countries/czech.svg'
        },
        {
          name: 'Mandarin',
          icon: '/imgs/countries/poland.svg'
        },
        {
          name: 'Spanish',
          icon: '/imgs/countries/spain.svg'
        },
        { 
          name: 'Dutch',
          icon: '/imgs/countries/netherlands.svg'
        },
        {
          name: 'Italian',
          icon: '/imgs/countries/italy.svg'
        },
        {
          name: 'Russian',
          icon: '/imgs/countries/russia.svg'
        },
        {
          name: 'Vietnamese',
          icon: '/imgs/countries/vietnam.svg'
        },
        {
          name: 'Tagalog',
          icon: '/imgs/countries/tanzania.svg'
        }
      ]
    }
  }
}

const Countries = (props) => {
  const [content, setContent] = useState()
  const dataa = props.apiData;
  useEffect(() => {
    let textt = (dataa != null && dataa != undefined) ? dataa.countries.content : ""
    textt = textt.replace(/^#\s(.+)/gm, '<h1 class="text-[30px] font-acme">$1</h1>');
    textt = textt.replace(/^##\s(.+)/gm, `<h2 class=" text-[27px] font-acme">$1</h2>`);
    textt = textt.replace(/^###\s(.+)/gm, '<h3 class=" orangeText font-acme">$1</h3>');
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
  }, [dataa, content])
  const { data: { attributes } } = countryData;

  return (
    (props.data == null || props.data==undefined) ? <div className={styles.container}>
      <div className={styles.left} style={{fontSize: '13.5px'}}>
        <div className='text-black' dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
      <div className={styles.right}>
        <ul className={styles.countries}>
          {attributes.countries.map((item, i) => (
            <li className={styles.country} key={i}>
              <div className='w-[36px] h-[36px]' style={{backgroundImage: `url(${item.icon})`, backgroundPosition: 'center', backgroundSize: '36px 36px'}}></div>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div> : (props.data) &&<div className={styles.container}>
    <div className={styles.right} style={{width: '100%'}}>
      <ul className={styles.countries} style={{rowGap: '0px'}}>
        {attributes.countries.map((item, i) => (
          <li className={styles.country} key={i}>
            <div className='w-[36px] h-[36px]' style={{backgroundImage: `url(${item.icon})`, backgroundPosition: 'center', backgroundSize: '36px 36px'}}></div>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  )
}

export default Countries