

const VideoTranscriptionBox = () => {
  return (
    <div className='w-[825px] h-[180px] mx-auto text-white mb-[20px] px-4 py-3 flex items-center' style={{background: 'url(/imgs/video_transcription_gradient.jpg)', backgroundSize: 'cover'}}>
        <div className='w-1/4 text-center p-[10px] group relative hover:border hover:border-[#7fe4ea]'>
          <div className='w-full h-[125px] flex flex-col items-center group-hover:translate-y-[-8px] group-hover:translate-x-[-2px]'>
            <span className='text-[40px] font-acme'>2-24 Hrs</span>
            <span className='text-[20px] font-acme'>Turnaround</span>
            <span className='text-[20px] font-acme'>Time</span>
          </div>
          <div className='h-[10px] absolute -bottom-4 right-1 w-full rounded-[50%] bg-[#000] opacity-20 hidden group-hover:block'></div>
        </div>
        <div className='w-1/4 text-center p-[10px] group relative border-l border-[#7fe4ea] hover:border hover:border-[#7fe4ea]'>
          <div className='w-full h-[125px] flex flex-col items-center group-hover:translate-y-[-8px] group-hover:translate-x-[-2px]'>
            <span className='text-[40px] font-acme'>30-50%</span>
            <span className='text-[20px] font-acme'>Cost</span>
            <span className='text-[20px] font-acme'>Savings</span>
          </div>
          <div className='h-[10px] absolute -bottom-4 w-full rounded-[50%] bg-[#000] opacity-20 hidden group-hover:block'></div>
        </div>
        <div className='w-1/4 text-center p-[10px] group relative border-l border-[#7fe4ea] hover:border hover:border-[#7fe4ea]'>
          <div className='w-full h-[125px] flex flex-col items-center group-hover:translate-y-[-8px] group-hover:translate-x-[-2px]'>
            <span className='text-[40px] font-acme'>99%</span>
            <span className='text-[20px] font-acme'>Accurate</span>
            <span className='text-[20px] font-acme'>Results</span>
          </div>
          <div className='h-[10px] absolute -bottom-4 w-full rounded-[50%] bg-[#000] opacity-20 hidden group-hover:block'></div>
        </div>
        <div className='w-1/4 text-center p-[10px] group relative border-l border-[#7fe4ea] hover:border hover:border-[#7fe4ea]'>
          <div className='w-full h-[125px] flex flex-col items-center group-hover:translate-y-[-8px] group-hover:translate-x-[-2px]'>
            <span className='text-[40px] font-acme'>50+</span>
            <span className='text-[20px] font-acme'>Certified</span>
            <span className='text-[20px] font-acme'>Transcribers</span>
          </div>
          <div className='h-[10px] absolute -bottom-4 w-full rounded-[50%] bg-[#000] opacity-20 hidden group-hover:block'></div>
        </div>
    </div>
  )
}

export default VideoTranscriptionBox