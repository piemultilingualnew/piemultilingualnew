import Image from "next/image";
export default function Aboutme() {
  return (
    <div className="flex gap-[50px]">
      <div>
        <div className="flex gap-[10px] items-center ">
          <p className="font-medium font-lexend-deca">Testimonials</p>
          <i className="flaticon-support text-[20px] rotateicon text-[#30B1C0]"></i>
        </div>
        <p className="text-[#12103E] mb-[80px] w-[350px] font-lexend-deca text-[48px] font-semibold">
          What <span className="text-[#f60]"> my client </span> have to say{" "}
          <span className="text-[#342EAD]"> about me</span>
        </p>
        <div className="aboutmecard px-[40px] mb-[50px] justify-between items-start flex flex-col py-[30px] max-sm:w-[340px]">
          <div className="flex relative h-[40px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="118"
              height="131"
              viewBox="0 0 118 131"
              className="mt-[-30px] ml-[-40px]"
              fill="none"
            >
              <g opacity="0.2" filter="url(#filter0_f_218_260)">
                <path
                  d="M30.2376 33.8545C17.7378 10.871 -3.53204 10.8373 -12.6045 13.6935V41.9188C-8.57229 85.0633 31.0776 78.7126 50.3986 70.1442C80.2369 40.3059 49.3906 33.5184 30.2376 33.8545Z"
                  fill="#436CFF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_218_260"
                  x="-67.0392"
                  y="-42.0304"
                  width="184.297"
                  height="172.823"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="27.2174"
                    result="effect1_foregroundBlur_218_260"
                  />
                </filter>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="37"
              className="absolute  "
              viewBox="0 0 50 37"
              fill="none"
            >
              <g clipPath="url(#clip0_218_267)">
                <path
                  d="M19.277 3.24435L19.9939 1.7998H18.3813H8.8525H8.23241L7.95675 2.35525L1.60425 15.1552L1.5 15.3653V15.5998V34.7998V35.7998H2.5H21.5575H22.5575V34.7998V15.5998V14.5998H21.5575H13.6414L19.277 3.24435ZM44.687 3.24435L45.404 1.7998H43.7913H34.2625H33.6424L33.3668 2.35525L27.0143 15.1552L26.91 15.3653V15.5998V34.7998V35.7998H27.91H46.9675H47.9675V34.7998V15.5998V14.5998H46.9675H39.0514L44.687 3.24435Z"
                  stroke="#342EAD"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_218_267">
                  <rect
                    width="49"
                    height="36"
                    fill="white"
                    transform="translate(0.5 0.799805)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="  font-jost text-[18px] font-normal text-[#9E9EAC]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
          <div className="flex gap-[20px]">
            <Image
              src="/imgs/story-3.png"
              width={55}
              height={55}
              alt=""
              className="rounded-[50%]"
            ></Image>
            <div>
              <p className="capitalize text-[#12103E] font-semibold font-lexend-deca text-[20px]">
                adnana
              </p>
              <p className="font-jost text-[16px] font-normal text-[#9E9EAC]">
                Business owner
              </p>
            </div>
          </div>
        </div>
        <div className="aboutmecard px-[40px] justify-between items-start flex flex-col py-[30px] max-sm:w-[340px]">
          <div className="flex relative h-[40px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="118"
              height="131"
              viewBox="0 0 118 131"
              className="mt-[-30px] ml-[-40px]"
              fill="none"
            >
              <g opacity="0.2" filter="url(#filter0_f_218_260)">
                <path
                  d="M30.2376 33.8545C17.7378 10.871 -3.53204 10.8373 -12.6045 13.6935V41.9188C-8.57229 85.0633 31.0776 78.7126 50.3986 70.1442C80.2369 40.3059 49.3906 33.5184 30.2376 33.8545Z"
                  fill="#436CFF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_218_260"
                  x="-67.0392"
                  y="-42.0304"
                  width="184.297"
                  height="172.823"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="27.2174"
                    result="effect1_foregroundBlur_218_260"
                  />
                </filter>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="37"
              className="absolute  "
              viewBox="0 0 50 37"
              fill="none"
            >
              <g clipPath="url(#clip0_218_267)">
                <path
                  d="M19.277 3.24435L19.9939 1.7998H18.3813H8.8525H8.23241L7.95675 2.35525L1.60425 15.1552L1.5 15.3653V15.5998V34.7998V35.7998H2.5H21.5575H22.5575V34.7998V15.5998V14.5998H21.5575H13.6414L19.277 3.24435ZM44.687 3.24435L45.404 1.7998H43.7913H34.2625H33.6424L33.3668 2.35525L27.0143 15.1552L26.91 15.3653V15.5998V34.7998V35.7998H27.91H46.9675H47.9675V34.7998V15.5998V14.5998H46.9675H39.0514L44.687 3.24435Z"
                  stroke="#342EAD"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_218_267">
                  <rect
                    width="49"
                    height="36"
                    fill="white"
                    transform="translate(0.5 0.799805)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="  font-jost text-[18px] font-normal text-[#9E9EAC]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
          <div className="flex gap-[20px]">
            <Image
              src="/imgs/story-3.png"
              width={55}
              height={55}
              alt=""
              className="rounded-[50%]"
            ></Image>
            <div>
              <p className="capitalize text-[#12103E] font-semibold font-lexend-deca text-[20px]">
                adnana
              </p>
              <p className="font-jost text-[16px] font-normal text-[#9E9EAC]">
                Business owner
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="w-[563px] shadow-md mb-[50px] rounded-[15px] h-[481px] ">
          <div className="h-[350px] w-full rounded-t-[15px] bg-[url('/imgs/story-1.png')]"></div>
          <div className="h-[131px] flex flex-col justify-center items-start p-[40px] rounded-b-[15px] w-full bg-[#FFFBF1]">
            <p className="capitalize text-[#12103E] font-semibold font-lexend-deca text-[28px]">
              Michel Smith
            </p>
            <p className="font-jost text-[16px] font-normal text-[#9E9EAC]">
              Business Owner
            </p>
          </div>
        </div>
        <div className="aboutmecard px-[40px] mb-[50px] justify-between items-start flex flex-col py-[30px] ">
          <div className="flex relative h-[40px] ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="118"
              height="131"
              viewBox="0 0 118 131"
              className="mt-[-30px] ml-[-40px]"
              fill="none"
            >
              <g opacity="0.2" filter="url(#filter0_f_218_260)">
                <path
                  d="M30.2376 33.8545C17.7378 10.871 -3.53204 10.8373 -12.6045 13.6935V41.9188C-8.57229 85.0633 31.0776 78.7126 50.3986 70.1442C80.2369 40.3059 49.3906 33.5184 30.2376 33.8545Z"
                  fill="#436CFF"
                />
              </g>
              <defs>
                <filter
                  id="filter0_f_218_260"
                  x="-67.0392"
                  y="-42.0304"
                  width="184.297"
                  height="172.823"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feGaussianBlur
                    stdDeviation="27.2174"
                    result="effect1_foregroundBlur_218_260"
                  />
                </filter>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="37"
              className="absolute  "
              viewBox="0 0 50 37"
              fill="none"
            >
              <g clipPath="url(#clip0_218_267)">
                <path
                  d="M19.277 3.24435L19.9939 1.7998H18.3813H8.8525H8.23241L7.95675 2.35525L1.60425 15.1552L1.5 15.3653V15.5998V34.7998V35.7998H2.5H21.5575H22.5575V34.7998V15.5998V14.5998H21.5575H13.6414L19.277 3.24435ZM44.687 3.24435L45.404 1.7998H43.7913H34.2625H33.6424L33.3668 2.35525L27.0143 15.1552L26.91 15.3653V15.5998V34.7998V35.7998H27.91H46.9675H47.9675V34.7998V15.5998V14.5998H46.9675H39.0514L44.687 3.24435Z"
                  stroke="#342EAD"
                  strokeWidth="2"
                />
              </g>
              <defs>
                <clipPath id="clip0_218_267">
                  <rect
                    width="49"
                    height="36"
                    fill="white"
                    transform="translate(0.5 0.799805)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="  font-jost text-[18px] font-normal text-[#9E9EAC]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
          <div className="flex gap-[20px]">
            <Image
              src="/imgs/story-3.png"
              width={55}
              height={55}
              alt=""
              className="rounded-[50%]"
            ></Image>
            <div>
              <p className="capitalize text-[#12103E] font-semibold font-lexend-deca text-[20px]">
                adnana
              </p>
              <p className="font-jost text-[16px] font-normal text-[#9E9EAC]">
                Business owner
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
