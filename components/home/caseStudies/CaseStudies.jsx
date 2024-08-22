import styles from './caseStudies..module.scss'
import Image from 'next/image'
import Link from 'next/link'

const CaseStudies = ({apiData}) => {
    const dataa = apiData;
    return (
        (dataa != null && dataa != undefined) ?
            <div className={`${styles.container} `}>
                <div className={styles.top}>
                    <div className={styles.topLeft}>
                        <h4 className={styles.heading}>CASE STUDIES</h4>
                        <h2 className={styles.bigText} style={{maxWidth: '570px'}}>{dataa.success_stories.text_left}</h2>
                    </div>
                    <div className={`${styles.topRight} h-[140px]`}>
                        <div>
                            <p>{dataa.success_stories.text_right}</p>
                            <Link href={(dataa.success_stories.url != null) ? dataa.success_stories.url : '/'} className='uppercase'>{dataa.success_stories.button}</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.stories}>
                    <div className={styles.storiesLeft}>
                        <div className={styles.storyBig} >
                            {
                                (dataa.success_stories.image_big.image.data != null) ? <Image loading='lazy' src={process.env.NEXT_PUBLIC_mainurl + dataa.success_stories.image_big.image.data.attributes.url} alt="case study" height={1000} width={1000} /> : <Image src='/imgs/default.jpg' width={0} height={0} sizes='100%' alt='' loading='lazy' />
                            }
                            <div className={`${styles.storyBigText} sm:w-full w-[400px]`}>
                                <h3>{dataa.success_stories.image_big.heading}</h3>
                                <p>{dataa.success_stories.image_big.text}</p>
                                <Link href={(dataa.success_stories.image_big.url != null) ? dataa.success_stories.image_big.url : '/'}>Find out More</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.storiesRight}>
                        <div className={`${styles.story} `}  >
                            <div className={styles.storyText}>
                                <h3>{dataa.success_stories.image_small[0].title}</h3>
                                <p className='h-[130px] overflow-hidden'>{dataa.success_stories.image_small[0].text}</p>
                                <Link href={(dataa.success_stories.image_small[0].url != null) ? dataa.success_stories.image_small[0].url : '/case-study/foreign-language-case-study'} className='border-[2px]  ease-in-out duration-200 hover:ease-in-out hover:duration-200 hover:scale-105 p-[3px] border-[#F60] font-roboto hover:shadow-xl border-x-0 border-solid hover:bg-[#f60] text-[#F60] uppercase hover:text-[white]' >Read more</Link>
                            </div>
                            <div className={styles.storyImgWrapper}>
                                {(dataa.success_stories.image_small[0].image.data != null) ? <Image loading='lazy' className={styles.storyImg} src={process.env.NEXT_PUBLIC_mainurl + dataa.success_stories.image_small[0].image.data.attributes.url} width={1000} height={1000} alt="case study" /> : <Image src='/imgs/default.jpg' width={0} height={0} sizes='100%' alt='' loading='lazy' />}
                            </div>
                        </div>
                        <div className={styles.story} >
                            <div className={styles.storyText}>
                                <h3>{dataa.success_stories.image_small[1].title}</h3>
                                <p className='h-[130px]  overflow-hidden'>{dataa.success_stories.image_small[1].text}</p>
                                <Link href={(dataa.success_stories.image_small[1].url != null) ? dataa.success_stories.image_small[1].url : '/case-study/foreign-language-case-study'} className='border-[2px]  ease-in-out duration-200 hover:ease-in-out hover:duration-200  hover:scale-105 p-[3px] border-x-0 font-roboto hover:shadow-xl border-[#F60] border-solid hover:bg-[#f60] text-[#F60] hover:text-[white] uppercase'>Read more</Link>
                            </div>
                            <div className={styles.storyImgWrapper}>
                                {(dataa.success_stories.image_small[1].image.data != null) ? <Image className={styles.storyImg} loading='lazy' src={process.env.NEXT_PUBLIC_mainurl + dataa.success_stories.image_small[1].image.data.attributes.url} width={1000} height={1000} alt="" /> : <Image src='/imgs/default.jpg' width={0} height={0} sizes='100%' alt='' loading='lazy' />}
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <></>
    )
}
export default CaseStudies