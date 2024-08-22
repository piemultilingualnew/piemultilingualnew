import Image from "next/image";

const CallCenterSoftware = () => {
  const softwares = [
    "/imgs/software1.jpg",
    "/imgs/software2.jpg",
    "/imgs/software3.jpg",
    "/imgs/software4.jpg",
    "/imgs/software5.jpg",
    "/imgs/software6.jpg",
    "/imgs/software7.jpg",
    "/imgs/software8.jpg",
    "/imgs/software9.jpg",
    "/imgs/clickdesk-live-chat-logo.svg",
    "/imgs/cloudtalk-logo.svg",
    "/imgs/godiallogo.svg",
  ];
  return (
    // <div className='w-[825px] mx-auto text-white mb-[20px] border-[1.5px] border-[#ff6600] rounded-[5px]' style={{backgroundImage: 'linear-gradient(to right,#86898c, white)'}}>
    //     <h2 className='uppercase w-full bg-[#ff6600] p-[10px] border-b border-[#ff6600] text-center font-acme font-[500] text-[22px]'>call center software we use</h2>
    //     <div className='p-[25px] flex'>
    //         <div className='w-1/2 p-[25px]'>
    //         The software suite which we use automates the process of receiving and responding to customer calls. Connect with clients and agencies remotely over voice and e-mail. Best call quality, channel capacity, data storage, call recording, training and scheduling features.
    //         </div>
    <div className="w-full mx-auto grid grid-cols-4 gap-y-2">
      {softwares.map((software, index) => (
        <div
          key={index}
          className="border border-[#30b1c0] bg-white flex items-center justify-center w-[85%] m-auto h-[48px] py-[10px] hover:-translate-y-1.5 transition duration-300 mt-[5px]"
        >
          <Image
            src={software}
            alt=""
            width={90}
            height={0}
            className="w-[90px] h-[38px]"
          />
        </div>
      ))}
    </div>
    //     </div>
    // </div>
  );
};

export default CallCenterSoftware;
