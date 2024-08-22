import Link from 'next/link'

const Services = () => {
  return (
    <div className='w-full flex items-center justify-between gap-[40px] max-w-[1210px] mx-auto my-[30px]'>
        <div className='w-[35%] flex flex-col gap-[20px]'>
            <h2 className='text-[28px] text-blue-900 font-medium'>Award winning creative agency</h2>
            <p className='text-blue-900'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam error soluta vitae quae consectetur illum reprehenderit, nemo, aperiam expedita sit sequi optio? Aut dicta sed quo quis blanditiis aspernatur ullam? Deleniti, minima ipsa officia iusto ratione quasi asperiores atque vel et quis ab sed voluptatem nulla laudantium repudiandae ut sint?</p>
            <Link href='/' className='text-white bg-[#ff6600] mt-[45px] w-1/2 text-center px-4 py-3 rounded-full'>REQUEST QUOTE</Link>
        </div>
        <div className='w-[65%] grid grid-cols-3 gap-x-9 gap-y-5'>
            {
                [...Array(9)].map((item, i) => (
                    <div key={i} className='w-full shadow-md shadow-[#888] flex gap-5 h-[95px]'>
                        <div className='w-[65px] border-[2px] border-l-0 border-[#504c4c] flex items-center justify-center rounded-r-full'>
                            <i className='flaticon-support text-[40px] ml-[-6px]'></i>
                        </div>
                        <p className='my-auto'>Mobile app development</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Services