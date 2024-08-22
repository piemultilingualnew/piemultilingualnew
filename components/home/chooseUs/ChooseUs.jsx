import dynamic from 'next/dynamic';
import styles from './chooseUs.module.scss'
const ChooseUsCards = dynamic(() => import('./chooseuscards'));

const ChooseUs = ({apiData}) => {
    const dataa = apiData;
    return (
        (dataa != null && dataa != undefined) ? <div className={styles.container}>

            <div className={styles.topContent}>
                <h3 className={styles.heading} style={{fontSize: '26px', marginTop: '40px'}}>{dataa.why_choose_us.heading}</h3>
                <ul className={styles.reasonCards}>

                    {dataa.why_choose_us.inner_box.map((item, i) =>
                        <ChooseUsCards key={i} data={item}></ChooseUsCards>
                    )}
                </ul>
            </div>
            <div className={styles.content} style={{marginTop: '-3rem'}}>
                <ul className={styles.list}>
                    {dataa.why_choose_us.bottom_box.map((item, i) => <li className={styles.item} key={i}>
                        <h2>{item.heading[0]}</h2>
                        <h3 className='text-black -ml-3'>{item.heading.slice(1,)}</h3>
                        <p>{item.content}</p>
                    </li>)}
                </ul>
            </div>
        </div> : <></>
    )
}

export default ChooseUs