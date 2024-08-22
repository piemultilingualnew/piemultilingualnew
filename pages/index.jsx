import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer/page"), {
  loading: () => () => <div className="w-full min-h-screen">Loading</div>,
});
import Banner from "@/components/homepage/Banner";
const ClientLogos = dynamic(() => import("@/components/homepage/ClientLogos"), {
  loading: () => () => <div className="w-full min-h-screen">Loading</div>,
});
const Services = dynamic(() => import("@/components/homepage/Services"), {
  loading: () => () => <div className="w-full min-h-screen">Loading</div>,
});
import Image from "next/image";
import Welcome from "@/components/homepage/Welcome";
const Advantage = dynamic(() => import("@/components/parts/advantage"), {
  loading: () => () => <div className="w-full min-h-screen">Loading</div>,
});

const home = () => {
  return (
    <div className="main-container">
      <Banner />
      <ClientLogos />
      <Image
        src={"/imgs/video.png"}
        alt=""
        width={1200}
        height={540}
        className="w-full"
      />
      <Services />
      <div className="max-w-[1210px] mx-auto w-full mt-[60px]">
        <Advantage />
      </div>
      <Welcome />
      {/* <div className="w-full min-h-screen">

        </div> */}
      <Footer></Footer>
    </div>
  );
};

export default home;
