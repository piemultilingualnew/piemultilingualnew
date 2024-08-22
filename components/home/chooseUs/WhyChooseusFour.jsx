const WhyChooseusFour = () => {
  return (
    <div
      className="w-full max-w-[1210px] mx-auto min-h-[500px] my-[50px] grid grid-cols-12 bg-[url(/imgs/world-map.png)]"
      style={{ backgroundSize: "100% 100%" }}
    >
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="col-span-4 border-4 border-white flex flex-col items-center justify-center"
        >
          <p className="text-[#f60] text-[30px]">40%</p>
          <p className="text-[30px]">Cost Reduction</p>
        </div>
      ))}
      <div className="col-span-3 border-4 border-white flex flex-col items-center justify-center">
        <p className="text-[#f60] text-[30px]">40%</p>
        <p className="text-[30px]">Cost Reduction</p>
      </div>
      <div className="col-span-6 border-4 border-white flex flex-col items-center justify-center">
        <p className="text-[40px] font-acme uppercase">why choose us</p>
      </div>
      <div className="col-span-3 border-4 border-white flex flex-col items-center justify-center">
        <p className="text-[#f60] text-[30px]">40%</p>
        <p className="text-[30px]">Cost Reduction</p>
      </div>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="col-span-4 border-4 border-white flex flex-col items-center justify-center"
        >
          <p className="text-[#f60] text-[30px]">40%</p>
          <p className="text-[30px]">Cost Reduction</p>
        </div>
      ))}
    </div>
  );
};

export default WhyChooseusFour;
