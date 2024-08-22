import { useState, useRef } from 'react';
import { useIpData } from '@/context/ipcontext';

export default function Form() {
    const ipData = useIpData();
    const [namewarn, setNamewarn] = useState(false);
    const [phonewarn, setPhonewarn] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const fileInputRef = useRef(null);
    const namePattern = /^[A-Za-z ]+$/;
    const phonePattern = /^[0-9+]+$/;

    function warning() {
        alert("You can select at most 4 files.");
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        if (selectedFiles.length + files.length <= 4) {
            setSelectedFiles([...selectedFiles, ...files]);
            setFileNames([...fileNames, ...files.map((file) => file.name)]);
        } else {
            alert("You can select at most 4 files.");
            fileInputRef.current.value = null;
        }
    };

    const handleFileDelete = (fileName) => {
        setSelectedFiles(selectedFiles.filter((file) => file.name !== fileName));
        setFileNames(fileNames.filter((name) => name !== fileName));
    };

    const handleNameChange = (e) => {
        const value = e.target.value;
        if (!namePattern.test(value)) {
            if (value != "" && value != null) {
                e.target.classList.add('invalid');
                setNamewarn(true)
            }
        } else {
            e.target.classList.remove('invalid');
            setNamewarn(false)
        }
        setName(value);
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (!phonePattern.test(value)) {
            if (value != "" && value != null) {
                e.target.classList.add('invalid');
                setPhonewarn(true)
            }
        } else {

            e.target.classList.remove('invalid');
            setPhonewarn(false)

        }
        setPhone(value);
    };
    return (
        <div className={`w-[100%] gap-[10px] z-0  justify-between   shadow-lg bg-[#eeeded] rounded-[15px] flex flex-col  items-center   shadow-[#514e4e]   `}>

            <p className="text-[24px] robotomono  mt-[10px] tracking-[-2px]  text-[#F60]">
                Request a <span className="font-acme tracking-[-1px] font-medium text-[27px]">
                    FREE QUOTE
                </span>
            </p>
            <div className="px-[25px] gap-[18px] h-full w-[100%] justify-start items-center  shadow-none flex flex-col  ">
                <div className='flex w-full gap-[15px]'>
                    <div className='w-[50%]'>
                        <label htmlFor="name" hidden>Name</label>
                        <input type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={handleNameChange}
                            className=" shadow-md shadow-[#CCC] rounded-[3px] bg-white text-[black]  text-[15px] p-[5px] w-full h-[40px]  "
                            placeholder='Name'
                            required />
                        {
                            (namewarn) ? <p className='text-[9px] text-start  w-full text-[red]'>
                                no number or special characters are allowed
                            </p> : ""
                        }
                    </div>
                    <div className='w-[50%]'>
                        <label htmlFor="email" hidden>Email</label>
                        <input type="text"
                            id='email'
                            className=" shadow-md shadow-[#CCC] rounded-[3px] bg-white text-[black] text-[15px]  p-[5px] w-full h-[40px] "
                            placeholder='Email'
                            required />
                    </div>
                </div>
                <div className='flex w-full  gap-[15px]'>

                    <div className='w-[50%]'>
                        <div className="flex shadow-md shadow-[#CCC]">

                            <label htmlFor="phonenumbr" hidden>Phone</label>
                            <button name='form' className=" w-[35px]  rounded-l-[3px] text-[14px] bg-[#807d7aac] font-medium font-roboto text-white">
                                {(ipData != null && ipData != undefined) ? ipData.country_code : ""}
                            </button>
                            <input id="phonenumbr"
                                name="phone"
                                value={phone}
                                onChange={handlePhoneChange} className=" rounded-r-[3px] bg-white text-[15px] text-[black] p-[5px] w-full h-[40px] border-[1px]  rounded-bl-none rounded-tl-none " required placeholder='Phone number' />

                        </div>
                        {
                            (phonewarn) ? <p className='text-[9px] text-start mt-[-px] wfull text-[red]'>
                                no alphabets or special characters are allowed
                            </p> : ""
                        }

                    </div>
                    <div className='w-[50%]'>
                        <label htmlFor="Company" hidden>Company</label>
                        <input type="text"
                            id='Company'
                            className=" shadow-md shadow-[#CCC] rounded-[3px] bg-white text-[black]  text-[15px]  p-[5px] w-full h-[40px]"
                            placeholder='Company Name'
                            required />
                    </div>
                </div>

                <textarea name="" id="" placeholder='Requirements' className="p-[5px] shadow-md shadow-[#CCC]  rounded-[3px] bg-white w-full h-[142px]  " style={{ resize: 'none' }}>
                </textarea>
                <div className=" overflow-hidden flex justify-start  flex-col text-[16px]  font-roboto text-[gray]">
                    <label htmlFor="description" hidden>Description</label>
                    <input
                        type="file"
                        multiple
                        onChange={(selectedFiles.length <= 3) ? handleFileChange : warning}
                        ref={fileInputRef}
                        id="fileInput"
                        style={{ display: 'none' }}

                    />
                    <div className='flex gap-[28px] justify-between z-[50]'>
                        <label htmlFor="fileInput" className=" flex justify-center items-center h-[35px] w-[119px] border-dashed border-2 border-[#0c5460] items-centercustom-file-input-label text-[#0c5460] font-normal text-[15px]  ">
                            <svg fill="#1e5f71" className='mr-[8px]' height="25px" width="25px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M470.7,277.2c3-11.2,4.7-22.9,4.7-35c0-75.8-61.4-137.1-137.1-137.1c-19.5,0-38,4.1-54.7,11.4 c-16.8-39-55.6-66.3-100.7-66.3c-60.6,0-109.7,49.1-109.7,109.7c0,4.1,0.8,7.9,1.2,11.9C30.5,192.1,0,236.3,0,287.9 c0,70.7,57.3,128,128,128h310.9c40.4,0,73.1-32.7,73.1-73.1C512,313.8,495.1,289.1,470.7,277.2z M292.6,251.3v91.4h-73.1v-91.4 h-54.9l91.4-91.4l91.4,91.4H292.6z"></path> </g></svg>
                            <input type="file" id="fileInput" className="hidden" />
                            <p className='font-acme'> Upload files</p>
                        </label>
                        <p className='text-[11px] text-[#000] font-roboto mr-[12px]'> Upload Max 4 files <br /> (10MB each)</p>
                    </div>
                    <ul>
                        {fileNames.map((fileName, index) => (
                            <li key={index} className='w-[250px] flex overflow-hidden justify-between pr-2'>
                                <p className='h-[20px] mt-[4px] w-[170px] '>{fileName}</p>
                                <button name='form' onClick={() => handleFileDelete(fileName)} className='hover:text-red-600'>
                                    <svg className='hover:fill-red-500 h-[10px] w-[10px]  font-extrabold' fill="#000000" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <polygon points="456.851,0 245,212.564 33.149,0 0.708,32.337 212.669,245.004 0.708,457.678 33.149,490 245,277.443 456.851,490 489.292,457.678 277.331,245.004 489.292,32.337 "></polygon> </g></svg>
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* <button onClick={handleUpload}>Upload</button> */}
                </div>
                <div className='flex w-full gap-[10px]'>
                    <input type="checkbox" name="" id="check"  className='h-full mt-[5px]'/>
                    <p className='w-[95%] text-[14px]'>
                        <span className='font-bold'>Yes!</span> I&apos;d like to stay informed with the latest content, industry trends and events.
                    </p>
                </div>
                <div className='w-full flex justify-center'>
                    <button name='form' className={`rounded-[4px] hover:bg-[#F60] w-[150px] hover:text-[#FFF] border-[1px] h-[40px] text-[21px] border-solid border-[#F60] font-medium font-roboto text-[#F60] `} >Get in Touch</button>
                </div>
                <p className="font-normal font-inter text-[13.3px] text-center m-[30px] mt-[0px] text-[#5b5a5a] leading-[30px] ">By submitting this data, I acknowledge that I have read the Privacy Policy and consent to the processing of my personal data in accordance with the terms of the Privacy Policy. </p>
            </div>
        </div>
    )
}