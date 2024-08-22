import Image from 'next/image'
import { useEffect, useState } from 'react'

const clientImgs1 = ['/imgs/GEP_svg.svg', '/imgs/client2_svg.svg', '/imgs/client3_svg.svg', '/imgs/client4_svg.svg']
const clientImgs2 = ['/imgs/ariba_svg.svg', '/imgs/discovery_svg.svg', '/imgs/natgeo_svg.svg', '/imgs/smart_cube.svg'];

const DataClients = ({data}) => {
  const [clientImgs, setClientImgs] = useState(clientImgs1);
  useEffect(() => {
    const interval = setInterval(() => {
        setClientImgs(clientImgs === clientImgs1? clientImgs2 : clientImgs1);
    }, 4000);
    return () => clearInterval(interval);
  }, [clientImgs])
  return (
    <div className={`w-full ${data ? '' : 'mt-[75px]'} rounded-[15px] flex flex-col items-center overflow-hidden`}>
        <p className='text-[24px] h-[42px] w-full flex items-center justify-center text-white font-normal mt-[0px] font-acme uppercase bg-[#30B1C0]'>
            <span className='uppercase'>our clients</span>
        </p>
        <div className='w-full py-2 px-4 grid grid-cols-2 border-[1.5px] border-blue-100 rounded-b-[15px]'>
            {
                clientImgs.map((img, i) => (
                    <Image src={img} key={i} alt='' width={124} height={38} className='m-auto'/>
                ))
            }
        </div>
    </div>
  )
}

export default DataClients