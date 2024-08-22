import {useState} from 'react'

const StaffingCalculator = ({fullWidth, apiData}) => {
  const voiceSupportOptions = apiData?.Voice_support_options?.map((data) => data.option);
  const nonVoiceSupportOptions = apiData?.Non_voice_support_options?.map((data) => data.option);
  console.log(nonVoiceSupportOptions)
  const [voice, setVoice] = useState(voiceSupportOptions);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const handleChange = (e) =>{
    if(e.target.name === 'name'){
      if(e.target.value !== '' && !/^[A-Za-z ]+$/.test(e.target.value)){
        return;
      }
      setName(e.target.value);
    }
    if(e.target.name === 'phone'){
      if(!(e.target.value !== '' && !/^[\d+\- ]+$/.test(e.target.value))){
        setPhone(e.target.value);
      }
      else{
        return;
      }
    }
    if(e.target.name === 'email'){
      if(!(e.target.value !== '' && !/^[a-zA-Z0-9.@]+$/.test(e.target.value))){
        setEmail(e.target.value);
      }
      else{
        return;
      }
    }
  }
  return (
    <div className={`${fullWidth ? 'w-[825px] mt-[7px] ml-[10px] float-right' : 'w-[508px] mx-auto mt-[30px] h-[600px]'} text-white`}>
        <div className='flex flex-col items-center px-3 py-1 gap-2 rounded-t-[5px] relative' style={{background: 'linear-gradient(to bottom,#0161a2 0,#015995 100%)'}}>
            <h2 className='font-acme uppercase text-[24px] ml-[60px]'>Call center staffing calculator</h2>
            <p className='text-[#B2DCFC] text-[14px] ml-[60px]'>Calculate staffing & costing for your project</p>
            <i className={`flaticon-calculator -top-0.5 ${fullWidth ? 'left-[70px]' : 'left-[20px]'} absolute text-[50px]`}></i>
        </div>
        <div className='bg-[#0161a2] p-2 flex flex-col rounded-b-[5px]'>
          <div className={`flex items-center gap-4 ${fullWidth ? 'px-14' : 'px-4'} my-4`}>
            <i className='flaticon-sitemap text-[20px]'></i>
            <p className='w-[30%]'>Project type</p>
            <div className='bg-[#196FAA] p-[7px] flex items-center gap-2 w-full rounded-[5px]'>
              <div className='flex w-[42%] items-center gap-2'>
                <input type='radio'defaultChecked  id='voiceSupport' name='voiceSupport' onChange={() => {setVoice(voiceSupportOptions)}}/>
                <label htmlFor='voiceSupport'>Voice Support</label>
              </div>
              <div className='flex w-[53%] items-center gap-2'>
                <input type='radio' id='nonVoiceSupport' name='voiceSupport' onChange={() => {setVoice(nonVoiceSupportOptions)}}/>
                <label htmlFor='nonVoiceSupport'>Non Voice Support</label>
              </div>
            </div>
          </div>
          <div className={`grid grid-cols-2 ${fullWidth ? 'px-14' : 'px-4'} gap-x-10 gap-y-2`}>
            <div>
              <div className='flex items-center gap-2'>
                <i className='flaticon-sitemap text-[20px]'></i>
                <label htmlFor='serviceType'>Service type</label>
              </div>
              <select id='serviceType' className='w-full rounded-[5px] bg-white px-4 py-2 text-[#666] outline-none'>
                {voice?.map((opt, index) => <option value={opt} key={index} className='block' style={{marginRight: '8px'}}>{opt}</option> )}
              </select>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <i className='flaticon-calculator text-[20px]'></i>
                <label htmlFor='callCount'>Average {voice?.includes('Inbound Call Center') ? 'Call' : ''} Per Week</label>
              </div>
              <input type='number' id='callCount' className='w-full rounded-[5px] bg-white px-4 py-1.5 text-black' placeholder='Enter weekly counter'/>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <i className='flaticon-phone-call text-[20px]'></i>
                <label htmlFor='handlingTime'>Average Handling Time</label>
              </div>
              <input type='number' id='handlingTime' className='w-full rounded-[5px] bg-white px-4 py-1.5 text-black' placeholder='Enter Minutes'/>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <i className='flaticon-name text-[20px]'></i>
                <label htmlFor='name'>Name</label>
              </div>
              <input id='name' name='name' className='w-full rounded-[5px] bg-white px-4 py-1.5 text-black' placeholder='Enter Name' onChange={handleChange} value={name}/>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <i className='flaticon-call-1 text-[20px]'></i>
                <label htmlFor='phone'>Phone</label>
              </div>
              <input id='phone' name='phone' className='w-full rounded-[5px] bg-white px-4 py-1.5 text-black' placeholder='Enter Number' onChange={handleChange} value={phone} maxLength={15}/>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <i className='flaticon-email text-[20px]'></i>
                <label htmlFor='email'>Email</label>
              </div>
              <input id='email' name='email' className='w-full rounded-[5px] bg-white px-4 py-1.5 text-black' placeholder='Enter Email' onChange={handleChange} value={email}/>
            </div>
          </div>
          <button className='w-1/2 bg-[#44a51a] hover:bg-white hover:text-[#f60] hover:font-semibold transition duration-500 mx-auto my-4 uppercase py-[10px]'>calculate cost</button>
          <p className={`border-t border-[#4f84a4] text-[14px] ${fullWidth ? 'px-14' : 'px-4'} mb-[10px]`}>
          Multilingual call center service company will be arranging result oriented, cost effective and proficient agent to work on your project exclusively. You are requested to use Call Center Staffing calculator to meet your business expectations that will deliver outstanding result.
          </p>
        </div>
    </div>
  )
}

export default StaffingCalculator