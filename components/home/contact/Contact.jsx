import styles from './contact.module.scss'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { useRouter } from 'next/router';
import StaffingCalculator from '@/components/parts/StaffingCalculator';
import { useSelector } from 'react-redux';
const Contact = ({calculator, apiData, apiData2}) => {
  const [text, setText] = useState("");
  
  const {ipData} = useSelector((state) => state.ip);
  const [uploadbutton, setUploadbutton] = useState(false)
  const [namewarn, setNamewarn] = useState(false);
  const [phonewarn, setPhonewarn] = useState(false);
  const {
    asPath,
  } = useRouter();
  const navigate = useRouter();
  const searchurl = asPath;
  let parts = searchurl.split('/');
  useEffect(() => {
    if (parts.length >= 3)
      setUploadbutton(true);
    else {
      if (apiData2 != null)
        setUploadbutton(true);
      else
        setUploadbutton(false)
    }
    if (apiData != null)
      setUploadbutton(false);
  }, [parts, apiData2, apiData])

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
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
    if (name === 'phone' && value !== '' && !/^[\d+\- ]+$/.test(value)) {
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
      formdata.append('message', formData.message);
      formdata.append('country', ipData.country);
      formdata.append('IP', ipData.ip);
      formdata.append('url', `${window.location.origin}${asPath}`);
      formdata.append('date', dateString);
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
          message: '',
        });

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
        'message': formData.message,
        'date': dateString,
      }
      const formdataa = new FormData();

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

  useEffect(() => {
    let textt = (apiData?.connect_with?.content != null) ? apiData.connect_with.content : "";
    textt = textt.replace(
      /^#\s(.+)/gm,
      '<h1 class="font-acme text-[32px] uppercase font-normal  text-[#30B1C0]">$1</h1>'
    );
    textt = textt.replace(
      /^##\s(.+)/gm,
      '<h2 class="font-acme text-[24px] uppercase font-normal   mb-[12px] text-[#30B1C0]">$1</h2>'
    );
    textt = textt.replace(
      /^###\s(.+)/gm,
      '<h3 class="font-acme text-[20px] uppercase font-normal   mb-[10px]  text-[#30B1C0]">$1</h3>'
    );
    textt = textt.replace(
      /^####\s(.+)/gm,
      '<h4 class="font-acme text-[18px] uppercase font-normal   mb-[15px] text-[#30B1C0]">$1</h4>'
    );
    textt = textt.replace(
      /^#####\s(.+)/gm,
      '<h5 class="font-acme text-[16px] uppercase font-normal  mb-[15px]   text-[#30B1C0]">$1</h5>'
    );
    textt = textt.replace(
      /^######\s(.+)/gm,
      '<h6 class="font-acme text-[14px] uppercase font-normal  mb-[15px]   text-[#30B1C0]">$1</h6>'
    );
    textt = textt.replace(/\*\*(.*?)\*\*/g, '<strong ">$1</strong>');
    textt = textt.replace(/\*(.*?)\*/g, '<em>$1</em>');
    textt = textt.replace(/_(.*?)_/g, '<em>$1</em>');
    textt = textt.replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" class="w-[100px] h-[200px]">');
    textt = textt.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#F60] font-bold">$1</a>');
    textt = textt.replace(/^- (.+)/gm, '<li class="mx-[2px] my-[4px] text-[#303030]">$1</li>');
    textt = textt.replace(/\n/gi, '<br/>');
    setText(textt)
  }, [apiData])

  return (
    (apiData?.connect_with != null) ?
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContainer} style={{marginTop: '-25px'}}>
           <h2 className={`${styles.heading} whitespace-normal`}>
              <span className={styles.blueText}>Connect with</span>
              <span className={styles.orangeText}>{(apiData.connect_with.heading) ? apiData.connect_with.heading : ""}</span></h2>
            <div className={styles.description} dangerouslySetInnerHTML={{ __html: text }}>
            </div>
          </div>
          {!calculator ? <div className={styles.formContainer}>
            <h2 className={styles.formHeading} style={{marginTop: '-25px'}}>HAVE QUESTIONS?</h2>
            <p className={styles.formBrief}>Send us a Message</p>
            <div className={styles.form}>
              <div>
                <label htmlFor="name" className='hidden'>Name</label>
                <input type="text" id='name' name='name' className={`${styles.input}`} placeholder="Name" value={formData.name} onChange={handleChange} />
                <span className={styles.span}>
                  <button name="pricing" disabled>  {(ipData != null && ipData != undefined) ? ipData.country_code : ""}</button>
                  <label htmlFor="phone" hidden>Phone</label>
                  <input
                    name='phone'
                    type="tel"
                    id='phone'
                    className={`${styles.input}`}
                    placeholder="Phone"
                    onChange={handleChange}
                    value={formData.phone}
                    maxLength={15}
                  />
                </span>
              </div>
              <label htmlFor="email" hidden>Email</label>
              <input type="email" id='email' name='email' className={styles.input} style={{marginBottom: '7px'}} placeholder="Email*"
                onChange={handleChange}
                value={formData.email}
              />
              <textarea
                name='message'
                className={styles.textarea}
                cols="30"
                rows="7"
                placeholder="Tell Us About Project*"
                onChange={handleChange}
                value={formData.message}
              ></textarea>
              <button  className={styles.button} onClick={handleUpload}>
                <i className="fa fa-paper-plane"></i> Get in Touch
              </button>
              <p className={styles.text}>We respect your privacy. Read our <Link href="/multilingual-company-privacy-policy" className='text-orange-500'>privacy policy</Link></p>
            </div>
          </div> : <StaffingCalculator apiData={apiData?.Staffing_calculator}/>}
        </div>
      </div>
      : <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <h2 className={styles.heading}>
              <span className={styles.blueText}>Connect with</span>
              <span className={styles.orangeText}>Foreign language Experts</span></h2>
            <p className={styles.description}>
              Being pioneer in Multiilingual Business Services, we provide
              complete solutions for foreign languages. Our teams provide
              multilingual solutions that excatly match your requirement. Our
              experts understand that quality is most important in foreign
              language support hence our native & multi-industry expert provide
              superior solution on all of your business requirements.
            </p>
          </div>
          <div className={styles.formContainer}>
            <h2 className={styles.formHeading}>HAVE QUESTIONS?</h2>
            <p className={styles.formBrief}>Send us a Message</p>
            <form className={styles.form}>
              <div>
                <label htmlFor="name" className='hidden'>Name</label>
                <input type="text" id='name' className={styles.input} placeholder="Name" />
                <span className={styles.span}>
                  <button name="pricing" disabled>  {(ipData != null && ipData != undefined) ? ipData.country_code : ""}</button>
                  <label htmlFor="number" hidden>Phone</label>
                  <input
                    type="text"
                    id='number'
                    className={styles.input}
                    placeholder="Phone"
                  />
                </span>
              </div>
              <label htmlFor="email" hidden>Email</label>
              <input type="email" id='email' className={styles.input} style={{marginBottom: 0}} placeholder="Email*" />
              <textarea
                className={styles.textarea}
                cols="30"
                rows="7"
                placeholder="Tell Us About Project*"
              ></textarea>
              <button type="submit" name="submit" className={styles.button}>
                <i className="fa fa-paper-plane"></i> Get in Touch
              </button>
              <p className={styles.text}>We respect your privacy. Read our <Link href="/" className='text-orange'>privacy policy.</Link></p>
            </form>
          </div>
        </div>
      </div>
  );
}

export default Contact