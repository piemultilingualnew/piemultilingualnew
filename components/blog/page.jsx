import dynamic from "next/dynamic";
const RightSection = dynamic(
  () =>
    import(
      "@/components/foreign-language-services/language-translation/content/RightSection"
    ),
  {
    loading: () => <div className="w-[400px] min-h-[320px]">Loading</div>,
  }
);
const Carousel = dynamic(() => import("react-multi-carousel"), {
  loading: () => <div className="w-[400px] min-h-[320px]">Loading</div>,
});

const BlogCards = dynamic(() => import("@/components/blog/cards"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
const Details = dynamic(() => import("@/components/blog/details"), {
  loading: () => <div className="w-full min-h-screen">Loading</div>,
});
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";


const data = {
  heading: "Testonomials",
  descripiton:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse earum consectetur adipisicing elit. Esse earum beatae voluptas reiciendis.",
  ratings: "4.8",
  reviews: [
    {
      name: "John Doe",
      role: "Developer",
      location: "Ohio, USA",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      name: "John Doe",
      role: "Developer",
      location: "Ohio, USA",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      name: "John Doe",
      role: "Developer",
      location: "Ohio, USA",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
    {
      name: "John Doe",
      role: "Developer",
      location: "Ohio, USA",
      review:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },
  ],
};

export default function Blog(props) {
  const {
    blogData,
    blogDetail,
    loadingBlogData,
    loadingBlogDetail,
    errorBlogData,
    errorBlogDetail,
  } = useSelector((state) => state.blog);
  const { caseData, loadingCase, errorCase } = useSelector(
    (state) => state.caseStudy
  );

  if (loadingBlogData || loadingCase || loadingBlogDetail) {
    return <>loading...</>;
  }

  const dataa = caseData;

  return blogData != null || blogDetail != null ? (
    <div className="max-w-[1200px] w-full gap-[40px] relative bg-white my-[50px] ">
      <div className="flex md:flex-row flex-col">
        {blogDetail != null && props.detail != null && props.detail ? (
          <Details></Details>
        ) : (
          <BlogCards></BlogCards>
        )}
        <div className="md:w-[28%] w-full md:ml-[50px] sticky">
          <div className="w-[100%]  h-[500px] flex top-12 right-0 ">
            <RightSection></RightSection>
          </div>
          <div className="w-[100%]   flex top-12 right-0">
            {dataa?.Testimonial?.use ? (
              <div className="w-full mt-[50px] h-[200px] bg-blue-50 ">
                <p className="text-[24px] px-4 font-normal mt-[0px] font-acme uppercase text-[#30B1C0]">
                  testimonials
                </p>
                {
                  <div className="w-[340px] ">
                    <Carousel
                      additionalTransfrom={0}
                      autoPlay={true}
                      autoPlaySpeed={3000}
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
                      {data.reviews.map((item, i) => (
                        <div className="w-[330px] px-4 pb-4" key={i}>
                          <p className="h-[100px] overflow-hidden">
                            {item.review}
                          </p>
                          <h4 className="">{item.name}</h4>
                          <h4 className="">
                            {item.role} <span>{item.location}</span>
                          </h4>
                        </div>
                      ))}
                    </Carousel>
                  </div>
                }
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="recentpost border w-[100%] mt-[50px]">
            <div className="recentorange w-[100%] h-[35px] flex justify-center items-center">
              <p className="uppercase font-roboto text-[20px] font-normal text-[#FFF]">
                Recent post
              </p>
            </div>
            <div className="recentinner w-[100%] p-[15px] flex flex-col justify-center items-center">
              {blogData != null ? (
                blogData.slice(0, 5).map((e, i) => {
                  return (
                    <p key={i} className="recentposttext h-[76px] capitalize">
                      {e.attributes.title}
                    </p>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
