import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Testimonials(props) {
  return (
    <div className="w-fit rounded-[15px] overflow-hidden">
      {
        <div className="w-[340px] border-[1.5px] border-blue-200 sm:border-white rounded-b-[15px]">
          <Carousel
            additionalTransfrom={0}
            autoPlay={true}
            autoPlaySpeed={5000}
            centerMode={false}
            className=" flex items-center"
            arrows={false}
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={true}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 224,
                },
                items: 1,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 200,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
            }}
            rewind={true}
            rewindWithAnimation={true}
            customTransition="1000ms"
          >
            {props?.data?.map((item, i) => (
              <div
                className="w-[330px] px-6 py-8 text-black flex flex-col justify-between"
                key={i}
              >
                <p className=" h-[200px] overflow-hidden text-[15px] text-[#4f4f4f]">
                  {item.text}
                </p>
                <div className="ml-auto">
                  <h4
                    className="text-[22px]"
                    style={{ fontFamily: "var(--font-acme)" }}
                  >
                    {item.name}
                  </h4>
                  <h4 className="text-[13.5px]">
                    {item.role} |{" "}
                    <span className="text-[#ff6600] font-medium">
                      {item.location}
                    </span>
                  </h4>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      }
    </div>
  );
}
