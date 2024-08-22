import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './testimonials.module.scss';

const Reviews = ({apiData}) => {
  const data=apiData;
  return (
   (data!=null && data!=undefined)? <div className={styles.swiper}>
   <Swiper
   slidesPerView={2}
   spaceBetween={30}
   pagination={{
       clickable: true,
   }}
   autoPlay={{
       delay:1000,
       disableOnInteraction: false
   }}
   modules={[Pagination]}
   className={styles.mySwiper}
 >
   {data.Testimonial.data.map((item, i) => (
       <SwiperSlide className={styles.swiperSlide} key={i}>
           <div className={styles.review}>
              <span style={{
                backgroundImage: 'url(/icons/doubleQuaote.svg)',
                backgroundSize: '30px 30px',
                paddingLeft: '40px',
                backgroundRepeat: 'no-repeat'
              }}>{item.text}</span>
           </div>
           <h4 className={styles.name}>{item.name}</h4>
           <h4 className={styles.role}>{item.role} <span>{item.location}</span></h4>
       </SwiperSlide>
   ))}
 </Swiper>
</div>: <></>
  )
}

export default Reviews