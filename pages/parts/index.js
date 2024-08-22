import dynamic from 'next/dynamic';
import StaffingCalculatorBanner from '@/components/parts/StaffingCalculatorBanner';
import WhyChooseusFour from '@/components/home/chooseUs/WhyChooseusFour';
const VideoTranscriptionBox = dynamic(() => import('@/components/parts/VideoTranscriptionBox'), {
    loading: () => <div className='w-full min-h-screen'>Loading</div>,
  });
const Advantage = dynamic(() => import('@/components/parts/advantage'), {
    loading: () => <div className='w-full min-h-screen'>Loading</div>,
});
const IndustriesChoose = dynamic(() => import('@/components/parts/industries_choose'), {
    loading: () => <div className='w-full min-h-screen'>Loading</div>,
});
import Image from 'next/image';

export default function Partss() {
    return (
    <div className="flex flex-col justify-center items-center pt-10">
        <Advantage></Advantage>
        <Image
              src='/imgs/pie-logo.png'
              
              width={200} height={200}
              alt='pie-multilingual'
              priority
            />
        <IndustriesChoose></IndustriesChoose>
        <VideoTranscriptionBox></VideoTranscriptionBox>
        <StaffingCalculatorBanner></StaffingCalculatorBanner>
        <WhyChooseusFour></WhyChooseusFour>
    </div>
    )
}