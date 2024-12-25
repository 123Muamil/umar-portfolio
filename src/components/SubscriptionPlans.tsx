"use client";
import { FaCheckCircle } from 'react-icons/fa';
import { FaApple,FaWindows,FaYoutube   } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";

const SubscriptionPlans = () => {
  const WattsappOpen = () => {
    window.open('https://wa.me/+447826176784', '_blank');
};
  return (
    <div className="container mx-auto  mt-[60px] pb-12 h-auto rounded-[10px]">
      <h1 className='text-[#FFFFFF] text-[35px] text-center font-bold pt-[60px]'>Choose a Subscription Plan</h1>
      <div className="flex flex-col items-center justify-center lg:mx-[150px] h-full">
        {/* Plan 1 */}
        <div className="w-full  md:w-1/3 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Instant Activation</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>£ 15</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>1 Month Plan</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>One Time Payment</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>3 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "28,000+ Live TV channels",
                  "150,000+ Movies & Shows",
                  "All Sports Channels",
                  "Free Movies & Shows Update",
                  "4K | FHD | HD | Quality",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Adults Channels (Optional)",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "24/7 Technical Assistance",
                  "Free Trial Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#E22D51] mr-2" />
                    <span className='text-[#FFFFFF]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
        className="bg-[#E22D51] text-white ml-12 mt-6 flex items-center justify-center h-[55px] w-[250px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Activate Your Plan
      </a>
       {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6">
        <FaApple className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <GrAndroid className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaWindows  className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaYoutube className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
          </div>
        </div>

       {/* Plan 2 */}
       <div className="w-full  md:w-1/3 p-2 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Instant Activation</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>£ 30</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>3 Month Plan</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>One Time Payment</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>3 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "28,000+ Live TV channels",
                  "150,000+ Movies & Shows",
                  "All Sports Channels",
                  "Free Movies & Shows Update",
                  "4K | FHD | HD | Quality",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Adults Channels (Optional)",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "24/7 Technical Assistance",
                  "Free Trial Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#E22D51] mr-2" />
                    <span className='text-[#FFFFFF]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
        className="bg-[#E22D51] text-white ml-12 mt-6 flex items-center justify-center h-[55px] w-[250px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Activate Your Plan
      </a>
       {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6">
        <FaApple className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <GrAndroid className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaWindows  className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaYoutube className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
          </div>
        </div>
       {/* Plan 3 */}
       <div className="w-full  md:w-1/3 p-2 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Instant Activation</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>£ 42</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>6 Month Plan</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>One Time Payment</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>3 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "28,000+ Live TV channels",
                  "150,000+ Movies & Shows",
                  "All Sports Channels",
                  "Free Movies & Shows Update",
                  "4K | FHD | HD | Quality",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Adults Channels (Optional)",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "24/7 Technical Assistance",
                  "Free Trial Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#E22D51] mr-2" />
                    <span className='text-[#FFFFFF]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
        className="bg-[#E22D51] text-white ml-12 mt-6 flex items-center justify-center h-[55px] w-[250px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Activate Your Plan
      </a>
       {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6">
        <FaApple className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <GrAndroid className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaWindows  className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaYoutube className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
          </div>
        </div>
      </div>
    {/* Second Section */}
    <div className="flex flex-wrap lg:mx-[150px] h-full">
        {/* Plan 1 */}
        <div className="w-full  md:w-1/3 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Instant Activation</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>£ 50</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>9 Month Plan</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>One Time Payment</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>3 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "28,000+ Live TV channels",
                  "150,000+ Movies & Shows",
                  "All Sports Channels",
                  "Free Movies & Shows Update",
                  "4K | FHD | HD | Quality",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Adults Channels (Optional)",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "24/7 Technical Assistance",
                  "Free Trial Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#E22D51] mr-2" />
                    <span className='text-[#FFFFFF]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
        className="bg-[#E22D51] text-white ml-12 mt-6 flex items-center justify-center h-[55px] w-[250px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Activate Your Plan
      </a>
       {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6">
        <FaApple className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <GrAndroid className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaWindows  className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaYoutube className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
          </div>
        </div>

       {/* Plan 2 */}
       <div className="w-full  md:w-1/3 p-2 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Instant Activation</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>£ 60</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>1 Year Plan</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>One Time Payment</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>7 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "28,000+ Live TV channels",
                  "150,000+ Movies & Shows",
                  "All Sports Channels",
                  "Free Movies & Shows Update",
                  "4K | FHD | HD | Quality",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Adults Channels (Optional)",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "24/7 Technical Assistance",
                  "Free Trial Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#E22D51] mr-2" />
                    <span className='text-[#FFFFFF]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
        className="bg-[#E22D51] text-white ml-12 mt-6 flex items-center justify-center h-[55px] w-[250px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Activate Your Plan
      </a>
       {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6">
        <FaApple className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <GrAndroid className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaWindows  className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaYoutube className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
          </div>
        </div>
       {/* Plan 3 */}
       <div className="w-full  md:w-1/3 p-2 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Instant Activation</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>£ 115</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>2 Year Plan</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>One Time Payment</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>14 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "28,000+ Live TV channels",
                  "150,000+ Movies & Shows",
                  "All Sports Channels",
                  "Free Movies & Shows Update",
                  "4K | FHD | HD | Quality",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Adults Channels (Optional)",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "24/7 Technical Assistance",
                  "Free Trial Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#E22D51] mr-2" />
                    <span className='text-[#FFFFFF]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
        className="bg-[#E22D51] text-white ml-12 mt-6 flex items-center justify-center h-[55px] w-[250px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Activate Your Plan
      </a>
       {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6">
        <FaApple className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <GrAndroid className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaWindows  className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaYoutube className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
          </div>
        </div>
      </div>
     {/* Third Section */}
     <div className="flex flex-wrap lg:mx-[150px] h-full">
        {/* Plan 1 */}
        <div className="w-full  md:w-1/3 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Instant Activation</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>£ 160</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>3 Years Plan</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>One Time Payment</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>14 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "28,000+ Live TV channels",
                  "150,000+ Movies & Shows",
                  "All Sports Channels",
                  "Free Movies & Shows Update",
                  "4K | FHD | HD | Quality",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Adults Channels (Optional)",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "24/7 Technical Assistance",
                  "Free Trial Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#E22D51] mr-2" />
                    <span className='text-[#FFFFFF]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
        className="bg-[#E22D51] text-white ml-12 mt-6 flex items-center justify-center h-[55px] w-[250px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Activate Your Plan
      </a>
       {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6">
        <FaApple className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <GrAndroid className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaWindows  className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaYoutube className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
          </div>
        </div>

       {/* Plan 2 */}
       <div className="w-full  md:w-1/3 p-2 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Instant Activation</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>£ 210</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>4 Years Plan</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>One Time Payment</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>14 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "28,000+ Live TV channels",
                  "150,000+ Movies & Shows",
                  "All Sports Channels",
                  "Free Movies & Shows Update",
                  "4K | FHD | HD | Quality",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Adults Channels (Optional)",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "24/7 Technical Assistance",
                  "Free Trial Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#E22D51] mr-2" />
                    <span className='text-[#FFFFFF]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
        className="bg-[#E22D51] text-white ml-12 mt-6 flex items-center justify-center h-[55px] w-[250px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Activate Your Plan
      </a>
       {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6">
        <FaApple className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <GrAndroid className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaWindows  className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaYoutube className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
          </div>
        </div>
       {/* Plan 3 */}
       <div className="w-full  md:w-1/3 p-2 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Instant Activation</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>£ 250</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>5 Years Plan</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>One Time Payment</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>14 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "28,000+ Live TV channels",
                  "150,000+ Movies & Shows",
                  "All Sports Channels",
                  "Free Movies & Shows Update",
                  "4K | FHD | HD | Quality",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Adults Channels (Optional)",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "24/7 Technical Assistance",
                  "Free Trial Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#E22D51] mr-2" />
                    <span className='text-[#FFFFFF]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
        className="bg-[#E22D51] text-white ml-12 mt-6 flex items-center justify-center h-[55px] w-[250px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Activate Your Plan
      </a>
       {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6">
        <FaApple className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <GrAndroid className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaWindows  className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaYoutube className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
          </div>
        </div>
      </div>
      <h1 className='text-[#FFFFFF] text-[35px] text-center font-bold pt-[60px]'>Get Friends & Family Plan</h1>
      <div className="flex flex-wrap lg:mx-[150px] h-full">
        {/* Plan 1 */}
        <div className="w-full  md:w-1/3 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>2 Devices Premium</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>£ 110</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>1 Year prem plan</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>One Time Payment</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>7 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "28,000+ Live TV channels",
                  "150,000+ Movies & Shows",
                  "All Sports Channels",
                  "Free Movies & Shows Update",
                  "4K | FHD | HD | Quality",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Adults Channels (Optional)",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "24/7 Technical Assistance",
                  "Free Trial Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#E22D51] mr-2" />
                    <span className='text-[#FFFFFF]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
        className="bg-[#E22D51] text-white ml-12 mt-6 flex items-center justify-center h-[55px] w-[250px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Activate Your Plan
      </a>
       {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6">
        <FaApple className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <GrAndroid className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaWindows  className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaYoutube className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
          </div>
        </div>

       {/* Plan 2 */}
       <div className="w-full  md:w-1/3 p-2 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>3 Devices Premium</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>£ 150</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>1 Year prem plan</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>One Time Payment</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>7 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "28,000+ Live TV channels",
                  "150,000+ Movies & Shows",
                  "All Sports Channels",
                  "Free Movies & Shows Update",
                  "4K | FHD | HD | Quality",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Adults Channels (Optional)",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "24/7 Technical Assistance",
                  "Free Trial Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#E22D51] mr-2" />
                    <span className='text-[#FFFFFF]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
        className="bg-[#E22D51] text-white ml-12 mt-6 flex items-center justify-center h-[55px] w-[250px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Activate Your Plan
      </a>
       {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6">
        <FaApple className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <GrAndroid className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaWindows  className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaYoutube className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
          </div>
        </div>
       {/* Plan 3 */}
       <div className="w-full  md:w-1/3 p-2 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>4 Devices Premium</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>£ 180</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>1 Year prem plan</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>One Time Payment</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>7 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "28,000+ Live TV channels",
                  "150,000+ Movies & Shows",
                  "All Sports Channels",
                  "Free Movies & Shows Update",
                  "4K | FHD | HD | Quality",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Adults Channels (Optional)",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "24/7 Technical Assistance",
                  "Free Trial Available",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-[#E22D51] mr-2" />
                    <span className='text-[#FFFFFF]'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
        className="bg-[#E22D51] text-white ml-12 mt-6 flex items-center justify-center h-[55px] w-[250px] rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        Activate Your Plan
      </a>
       {/* Social Media Icons */}
       <div className="flex justify-center space-x-4 mt-6">
        <FaApple className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <GrAndroid className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaWindows  className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
        <FaYoutube className="text-[#FFFFFF] text-2xl cursor-pointer hover:scale-110 transition-transform" />
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPlans;
