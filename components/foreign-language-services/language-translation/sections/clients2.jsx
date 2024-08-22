import Image from "next/image";

const Clients2 = () => {
  const clients = [
    "/imgs/GEP_svg.svg",
    "/imgs/client2_svg.svg",
    "/imgs/client3_svg.svg",
    "/imgs/client4_svg.svg",
  ];
  return (
    <div className="w-3/5 mx-auto px-6 mt-[20px]">
      <h2 className="font-acme inline-block text-center w-full text-[24px] uppercase font-normal mb-[10px] text-[#30B1C0]">
        our clients
      </h2>
      <div className="grid lg:grid-cols-4 gap-[60px] mt-[10px] md:grid-cols-2">
        {clients.map((client, index) => (
          <div
            key={index}
            className="bg-white flex items-center justify-center px-3 py-0.5 hover:scale-110 transition-transform duration-200"
          >
            <Image
              src={client}
              alt=""
              className="h-[44px]"
              width={120}
              height={48}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients2;
