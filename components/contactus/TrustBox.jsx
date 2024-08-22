import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const TrustBox = ({ reviews }) => {
  return (
    <div className="w-full max-w-[1210px] mx-auto mt-[20px]">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        autoPlay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Pagination]}
      >
        {reviews.map((review, i) => (
          <SwiperSlide key={i}>
            <div className="h-[300px] p-[20px] flex flex-col gap-[30px] rounded-lg border border-[#d1d1d1]">
              <div className="flex gap-[20px]">
                {review.image.data ? (
                  <Image
                    src={
                      process.env.NEXT_PUBLIC_mainurl +
                      review.image.data.attributes.url
                    }
                    width={50}
                    height={50}
                    className="rounded-full"
                    alt=""
                  />
                ) : (
                  <Image
                    src="/imgs/default.jpg"
                    width={100}
                    height={100}
                    sizes="100%"
                    alt=""
                    priority
                  />
                )}
                <div>
                  <p>
                    <span className="font-acme text-[18px]">{review.name}</span>
                    ,{" "}
                    <span className="text-[#F60] font-acme">
                      {review.location}
                    </span>
                  </p>
                  <div className="flex items-center">
                    {[...Array(review.stars)].map((star, i) => (
                      <svg
                        className="star-svg"
                        stroke="#f4c43c"
                        fill="#f4c43c"
                        strokeWidth="0"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        key={i}
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <span
                  className="text-[15px]"
                  style={{
                    backgroundImage: "url(/icons/doubleQuaote.svg)",
                    backgroundSize: "30px 30px",
                    paddingLeft: "40px",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  {review.review}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrustBox;
