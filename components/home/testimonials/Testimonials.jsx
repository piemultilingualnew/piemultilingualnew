import dynamic from 'next/dynamic';
import styles from './testimonials.module.scss';
const Reviews = dynamic(() => import('./Reviews'));
import Image from 'next/image';
const StarRating = dynamic(() => import('./StarRating'));

const data = {
  heading: 'Testonomials',
  descripiton: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum consectetur adipisicing elit. Esse earum beatae voluptas reiciendis.',
  ratings: '4.8',
  reviews: [
    {
      name: 'John Doe',
      role: 'Developer',
      location: 'Ohio, USA',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
      name: 'John Doe',
      role: 'Developer',
      location: 'Ohio, USA',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
      name: 'John Doe',
      role: 'Developer',
      location: 'Ohio, USA',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    },
    {
      name: 'John Doe',
      role: 'Developer',
      location: 'Ohio, USA',
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"
    }
  ]
}

const Testimonials = ({apiData}) => {

  return (
    (apiData!=null)?<div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
        <h2 className={styles.heading}>{apiData.Testimonial.heading}</h2>
        <p className={styles.brief}>{apiData.Testimonial.description}</p>
          <div className={styles.div}>
            <ul className={styles.usersList}>
              <li>
                <Image src='/imgs/testimonials/1.jpg' width={45} height={45} alt="" loading='lazy'/>
              </li>
              <li>
                <Image src='/imgs/testimonials/2.jpg' width={45} height={45} alt="" loading='lazy'/>
              </li>
              <li>
                <Image src='/imgs/testimonials/3.jpg' width={45} height={45} alt="" loading='lazy'/>
              </li>
              <li>
                <Image src='/imgs/testimonials/4.jpg' width={45} height={45} alt="" loading='lazy'/>
              </li>
            </ul>
            <div className={`${styles.ratings} flex`}>
            <div className='flex'>
            {
              [...Array(5)].map((i)=>{
                return( <StarRating initialValue={data.ratings} size='20' readonly key={i}/>)
              })
            }
            </div>
              <p>{data.ratings}/5</p>
            </div>
          </div>
        </div>
        
        <div className={styles.right}>
          <Reviews reviews={data.reviews} apiData={apiData}/>
        </div>
      </div>
    </div>: <></>
  )
}

export default Testimonials