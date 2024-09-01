import { YouTubeEmbed } from "@next/third-parties/google";

const HowWeWork = () => {
  return (
    <section className="bg-[url('/imgs/workBg.jpg')] bg-cover text-white mt-10">
      <div className="bg-[#0d2543]/85 w-full h-full py-[40px]">
        <div className="mb-12 max-w-[1250px] mx-auto">
          <div className="flex justify-between flex-col md:flex-row">
            <div className="flex items-center justify-center h-fit md:mx-10">
              <div className="relative bottom-6">
                <div className="flex items-center space-x-4 justify-center md:justify-start">
                  <h2 className="text-[6rem]">{"["}</h2>
                  <div className="text-center font-acme pt-4">
                    <h2 className="text-5xl">HOW WE</h2>
                    <h2 className="text-5xl">WORK</h2>
                    <span className="block h-1 w-[60px] bg-orange-500 mx-auto relative top-5"></span>
                    <span className="block h-1 w-[140%] mx-auto bg-gray-400 mt-2 relative top-5 right-10"></span>
                  </div>

                  <h2 className="text-[6rem]">{"]"}</h2>
                </div>
                <p className="text-gray-400 md:w-[350px] mt-10 text-center md:text-start px-5 md:px-0 relative right-0 md:right-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa praesentium officia saepe corrupti obcaecati reiciendis, quidem repudiandae at aliquam sint earum, ex vel recusandae perspiciatis? Animi fugiat illo, esse commodi aut quibusdam hic ex.
                </p>
              </div>
            </div>

            <div className="md:mx-0 mx-auto mt-7 md:mt-0 ">
              <div className="">
                <div className="h-[250px] sm:w-[450px] w-[280px]">
                  <YouTubeEmbed
                    style="min-height: 250px; min-width: 400px padding-top:0"
                    videoid="7GZ0qHTUAuo"
                    params="rel=0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 sm:px-10 md:px-0 px-10 gap-8 mt-[1rem] max-w-[1250px]">
          <div className="text-center mt-5 group hover:mt-0 transition-all duration-300 ease-in-out">
            <div className="text-[5rem] font-bold text-orange-500 mb-2 group-hover:rotate-[10deg] transition-all duration-300 ease-in-out">
              01
            </div>
            <h3 className="text-lg font-semibold mb-2">Establish Contact</h3>
            <div className="h-[2px] bg-orange-500 w-20 mx-auto mb-4"></div>
            <p className="text-gray-400">
              Query form fill up and we will contact by call or email.
            </p>
          </div>
          <div className="text-center mt-5 group hover:mt-0 transition-all duration-300 ease-in-out">
            <div className="text-[5rem] font-bold text-orange-500 mb-2 group-hover:rotate-[10deg] transition-all duration-300 ease-in-out">
              02
            </div>
            <h3 className="text-lg font-semibold mb-2">Requirement Analysis</h3>
            <div className="h-[2px] bg-orange-500 w-20 mx-auto mb-4"></div>
            <p className="text-gray-400">
              Analysis of requirement to get a ballpark estimate.
            </p>
          </div>
          <div className="text-center mt-5 group hover:mt-0 transition-all duration-300 ease-in-out">
            <div className="text-[5rem] font-bold text-orange-500 mb-2 group-hover:rotate-[10deg] transition-all duration-300 ease-in-out">
              03
            </div>
            <h3 className="text-lg font-semibold mb-2">Pricing & Signing</h3>
            <div className="h-[2px] bg-orange-500 w-20 mx-auto mb-4"></div>
            <p className="text-gray-400">
              Price acceptance, Proposal creation along with SLA signing.
            </p>
          </div>
          <div className="text-center mt-5 group hover:mt-0 transition-all duration-300 ease-in-out">
            <div className="text-[5rem] font-bold text-orange-500 mb-2 group-hover:rotate-[10deg] transition-all duration-300 ease-in-out">
              04
            </div>
            <h3 className="text-lg font-semibold mb-2">Project Execution</h3>
            <div className="h-[2px] bg-orange-500 w-20 mx-auto mb-4"></div>
            <p className="text-gray-400">
              Resource deployment, training & project execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
