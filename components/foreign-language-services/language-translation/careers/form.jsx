import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Careerform() {
    const { ipData } = useSelector((state) => state.ip);
    const { inner3Data } = useSelector((state) => state.inner3);
    const { inner1Data } = useSelector((state) => state.inner1);
    const apiData = inner1Data;
    const apiData2 = inner3Data;

    const [namewarn, setNamewarn] = useState(false);
    const [phonewarn, setPhonewarn] = useState(false);
    const [uploadbutton, setUploadbutton] = useState(false)

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [fileNames, setFileNames] = useState([]);
    const fileInputRef = useRef(null);

    const {
        asPath,
    } = useRouter();
    const navigate = useRouter();
    const searchurl = asPath;
    let parts = searchurl.split('/');

    useEffect(() => {
        if (parts.length >= 3)
            setUploadbutton(true);
        else if(apiData2 != null) {
            setUploadbutton(true);
        }
        else
            setUploadbutton(false)
        if (apiData != null)
            setUploadbutton(false);
    }, [parts, apiData2, apiData])

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedFiles([...selectedFiles, ...files]);
        setFileNames([...fileNames, ...files.map((file) => file.name)]);
    };
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
    });

    const handleChange = (ee) => {
        const { name, value } = ee.target;
        if (name === 'name' && value !== '' && !/^[A-Za-z ]+$/.test(value)) {

            ee.target.classList.add('invalid');
            setNamewarn(true)
            return;

        }
        else {
            ee.target.classList.remove('invalid');
            setNamewarn(false)
        }
        if (name === 'phone' && !/^\d*$/.test(value)) {

            ee.target.classList.add('invalid');
            setPhonewarn(true)
            return;
        }
        else {
            ee.target.classList.remove('invalid');
            setPhonewarn(false)
        }
        setFormData({ ...formData, [name]: value });
    };

    const [gap, setGap] = useState()
    const [gapp, setGapp] = useState()
    useEffect(() => {
        uploadbutton ? setGap(10) : setGap(18)
        uploadbutton ? setGapp(10) : setGap(10)

    }, [gap, gapp, uploadbutton])

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {

        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000); 

        return () => clearInterval(interval);
    }, []);
    const handleUpload = async () => {
        try {
            const formdata = new FormData();
            const dateString = dateTime.toLocaleString();
            formdata.append('name', formData.name);
            formdata.append('email', formData.email);
            formdata.append('phone', formData.phone);
            formdata.append('country', ipData.country);
            formdata.append('IP', ipData.ip);
            formdata.append('url', `${window.location.origin}${asPath}`);
            formdata.append('date', dateString);
            selectedFiles.forEach((file) => {
                formdata.append('files', file);
            });
             const response = await axios.post('/api/sendEmail', formdata, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.data.success) {
                navigate.push('/thank-you');
                alert('Form submitted successfully!');
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                });
                fileInputRef.current.value = null;
                setSelectedFiles([]);
                setFileNames([]);
            } else {
                console.error('Error submitting form:', response.data.message);
                alert(response.data.message);
            }

            const data = {
                'name': formData.name,
                'email': formData.email,
                'phone': formData.phone,
                'country': ipData.country,
                'IP': ipData.ip,
                'url': `${window.location.origin}${asPath}`,
                'date': dateString,
            }
            const formdataa = new FormData();
            selectedFiles.forEach((file, index) => {
                formdataa.append('files.file', file, file.name);
            });
            formdataa.append('data', JSON.stringify(data));

            await fetch(process.env.NEXT_PUBLIC_mainurl + '/api/forms', {
                method: 'POST',
                body: formdataa
            }).then((res) => {
                console.log(res);
            }).catch(error => {
                console.error('AxiosError:', error);
            });
        } catch (error) {
            console.error('Error submittinggg form:', error);
            alert(error);
        }
    };


    return (
        <div className='w-[800px]'>
            <p className="font-acme px-[25px] text-[#30B1C0] text-[20px] uppercase font-normal">Submit your CV to us</p>
            <div className="px-[25px]   w-[100%] justify-start  shadow-none flex flex-col gap-y-[8px] ">
                <label htmlFor="name" className='hidden'>Name</label>
                <input type="text"
                    id="name"
                    name="name"

                    value={formData.name}
                    onChange={handleChange}

                    className="rounded-[3px] text-[black]  text-[15px] p-[5px] w-full h-[35px]  border-[1px] border-solid border-[#ccc]"
                    placeholder='Name'
                />
                {
                    (namewarn) ? <p className='text-[9px] text-start mt-[-10px] w-full text-[red]'>
                        no number or special characters are allowed
                    </p> : ""
                }
                <label htmlFor="email" className='hidden'>Email</label>
                <input type="text"
                    id='email'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-[3px] text-[black]  text-[15px]  p-[5px] w-full h-[35px] border-[1px] border-solid border-[#ccc]"
                    placeholder='Email'
                    required />
                <div>
                    <div>
                        <div className="flex">
                            <button name='form' className=" w-[35px] border-[1px] text-[14px] border-solid border-[#ccc] bg-[#807d7aac] font-medium font-roboto text-white">
                                {(ipData != null && ipData != undefined) ? ipData.country_code : ""}
                            </button>
                            <label htmlFor="phonenumbr" hidden>Phone</label>
                            <input id="phonenumbr"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange} className="rounded-[3px] text-[15px] text-[black] p-[5px] w-full h-[35px] border-[1px] border-l-0 rounded-bl-none rounded-tl-none border-solid border-[#ccc]" required placeholder='Phone number' />

                        </div>
                        {
                            (phonewarn) ? <p className='text-[9px] text-start mt-[-px] wfull text-[red]'>
                                no alphabets or special characters are allowed
                            </p> : ""
                        }

                    </div>



                </div>

                <div className=" overflow-hidden flex justify-start  flex-col text-[16px]  font-roboto text-[gray]">
                    <label htmlFor="description" hidden>Description</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        id="fileInput"
                        style={{ display: 'none' }}
                    />

                    <div className='flex gap-[28px] justify-between z-[50]'>
                        <div className=" flex justify-center items-center h-[35px] w-[px]   items-centercustom-file-input-label text-[#0c5460] font-normal text-[15px]  ">
                            <label htmlFor="fileInput" hidden>File</label>
                            <input type="file"
                                onChange={handleFileChange}
                                ref={fileInputRef}
                                id="fileInput"

                            />

                        </div>
                    </div>
                </div>
                <button name='form' className={`rounded-[4px] hover:bg-[#F60] hover:text-[#FFF] border-[1px] h-[40px] text-[21px] border-solid border-[#F60] font-medium font-roboto text-[#F60] `} type='submit' onClick={handleUpload}>➤ SEND</button>

            </div>
        </div>
    )
}