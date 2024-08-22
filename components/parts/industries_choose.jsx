export default function Industries_choose() {
  return (
    <div className="bg-[#CCC] mt-[50px] w-full  flex p-[20px] flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center mb-[20px]">
        <p className="font-acme text-[30px] uppercase">Why Choose us</p>
        <p className="font-roboto text-[16px] text-center">
          Over 10+ years of working experience
          <br /> Our main vision is to deliver our customers the best
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-[20px] justify-center items-center">
        {[...Array(6)].map((e, i) => {
          return (
            <div
              key={i}
              className="w-[350px] hover:shadow-3 hover:shadow-[#939393] duration-500 shadow-md shadow-[#606060]  h-[304px] overflow-hidden bg-[#fff] flex flex-col justify-center items-center p-[24px]"
              style={{ boxShadow: "" }}
            >
              <i className="flaticon-photo-1 text-[70px] text-[#30B1C0] "></i>
              <p className="font-acme text-[22px] text-[#30B1C0]">
                INDUSTRY EXPERTS
              </p>
              <p className="text-center">
                Our experts are seasonal professionals, who hold a great command
                in their area of expertise and specialist in their language and
                they know every aspect of it.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
