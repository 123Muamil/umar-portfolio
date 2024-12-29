import React from 'react';
import Image from 'next/image';
import contact1 from '../../../public/images/contact1.png';
import contact2 from '../../../public/images/contact2.png';
import contact3 from '../../../public/images/contact3.png';
import contact4 from '../../../public/images/contact4.png';
import contact5 from '../../../public/images/contact5.png';
import contact6 from '../../../public/images/contact6.png';
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTelegramPlane, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { CiClock2 } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';

const HelpUS = () => {
  return (
    <div className="bg-[#08043C]">
      <div className="container mx-auto px-4 pt-[60px] pb-[100px]">
        <div className="grid lg:px-10 grid-cols-1 sm:grid-cols-2 gap-4">
        
          <div className="col-span-1 flex flex-col lg:px-[40px] justify-center items-start text-start">
          <h1 className='text-[#E22D51] text-[20px] font-bold'>
          We’re here to help!
                          </h1>

                          <h1 className='text-[#FFFFFF] text-[45px] mt-4 font-bold'>How to Reach Us?</h1>
             <p className='text-[#FFFFFF] mb-8'>
             Your satisfaction is our top priority. Whether you have questions, need assistance, or want to explore our services, our friendly support team is available 24/7 to assist you.
             </p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Email Us Section */}
  <div className="flex gap-4 items-center">
    <div className="bg-[#E22D51] mt-[-5px] text-[#FFFFFF] rounded-full w-14 h-14 flex items-center justify-center">
      <MdOutlineMailOutline size={20} />
    </div>
    <div>
      <h2 className="text-[#FFFFFF] text-[18px] font-bold">Email Us</h2>
      <p className="text-[#FFFFFF] mt-1">support@iptvukservices.com</p>
    </div>
  </div>

  {/* Address Section */}
  <div className="flex gap-4 items-center">
    <div className="bg-[#E22D51] text-[#FFFFFF] rounded-full w-14 h-14 flex items-center justify-center">
      <IoLocation size={20} />
    </div>
    <div>
      <h2 className="text-[#FFFFFF] text-[18px] font-bold">Address</h2>
      <p className="text-[#FFFFFF] mt-1 whitespace-nowrap">London, UK</p>
    </div>
  </div>

  {/* WhatsApp Section */}
  <div className="flex gap-4 items-center">
    <div className="bg-[#E22D51] text-[#FFFFFF] rounded-full w-14 h-14 flex items-center justify-center">
      <FaWhatsapp size={20} />
    </div>
    <div>
      <h2 className="text-[#FFFFFF] text-[18px] font-bold">WhatsApp</h2>
      <p className="text-[#FFFFFF] mt-1">+44 7826 176784</p>
    </div>
  </div>

  {/* We’re Open Section */}
  <div className="flex gap-4 items-center">
    <div className="bg-[#E22D51] text-[#FFFFFF] rounded-full w-14 h-14 flex items-center justify-center">
      <CiClock2 size={20} />
    </div>
    <div>
      <h2 className="text-[#FFFFFF] text-[18px] font-bold">We’re open</h2>
      <p className="text-[#FFFFFF] mt-1">24/7</p>
    </div>
  </div>
</div>


             <hr className="w-full h-[1px] bg-[#514D7C] border-0 mt-12 mb-2" />
             <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
  {/* Social Media Title */}
  <div>
    <h1 className="text-[#FFFFFF] text-[25px] mt-4 font-bold">Our Social Media:</h1>
  </div>

  {/* Icon Section */}
  <div className='flex gap-4'>
  <div className="bg-[#FFFFFF] flex items-center justify-center w-[40px] h-[40px] rounded-[5px] mt-3">
    <FaTelegramPlane />
  </div>
  <div className="bg-[#FFFFFF] flex items-center justify-center w-[40px] h-[40px] rounded-[5px] mt-3">
  <FaXTwitter />
  </div>
  <div className="bg-[#FFFFFF] flex items-center justify-center w-[40px] h-[40px] rounded-[5px] mt-3">
    <FaInstagram />
  </div>
  <div className="bg-[#FFFFFF] flex items-center justify-center w-[40px] h-[40px] rounded-[5px] mt-3">
  <FaFacebookF />
  </div>
  <div className="bg-[#FFFFFF] flex items-center justify-center w-[40px] h-[40px] rounded-[5px] mt-3">
  <FaWhatsapp />
  </div>
  <div className="bg-[#FFFFFF] flex items-center justify-center w-[40px] h-[40px] rounded-[5px] mt-3">
  <FaYoutube />
  </div>
  <div className="bg-[#FFFFFF] flex items-center justify-center w-[40px] h-[40px] rounded-[5px] mt-3">
  <FaPinterestP />
  </div>
  
  </div>
</div>

               
           
          </div>
          <div className="col-span-1 flex flex-col items-center justify-center">
          <div className='bg-[#FFFFFF] mt-6 lg:mt-0 flex flex-col items-center justify-center lg:w-[550px] p-2 rounded-[10px]' style={{boxShadow: '0 0 10px red'}}>
        <div className='flex gap-1 mb-2 w-full'>
        <Image src={contact1} style={{width:'33%' ,height:'auto',objectFit:'cover',borderRadius:'10px'}} alt='img'/>
        <Image src={contact2} style={{width:'33%' ,height:'auto',objectFit:'cover',borderRadius:'10px'}} alt='img'/>
        <Image src={contact3} style={{width:'33%' ,height:'auto',objectFit:'cover',borderRadius:'10px'}} alt='img'/>
        </div>
        <div className='flex gap-1 w-full'>
        <Image src={contact4} style={{width:'33%' ,height:'auto',objectFit:'cover',borderRadius:'10px'}} alt='img'/>
        <Image src={contact5} style={{width:'33%' ,height:'auto',objectFit:'cover',borderRadius:'10px'}} alt='img'/>
        <Image src={contact6} style={{width:'33%' ,height:'auto',objectFit:'cover',borderRadius:'10px'}} alt='img'/>
        </div>
      </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpUS;
