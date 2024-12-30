"use client";
import { FaCheckCircle } from 'react-icons/fa';
import { FaApple,FaWindows,FaYoutube   } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";

const ResellerPlan = () => {
  const WattsappOpen = () => {
    window.open('https://wa.me/+447826176784', '_blank');
};
  return (
    <div className='bg-[#221E5B] pt-[60px] pb-[60px]'>
       <div className="container mx-auto   rounded-[10px]" >
        <h1 className='text-[#FFFFFF] text-[35px] text-center font-bold '>Choose a Reseller Plan
        </h1>
        <div className="flex flex-wrap items-center justify-center lg:mx-[150px] h-full">
        {/* Plan 1 */}
        <div className="w-full  md:w-1/3 mt-12">
          <div className="bg-[#040037] rounded-lg p-4 h-full flex flex-col justify-between w-[350px] " style={{boxShadow: '0 0 10px red'}}>
            <div className='flex flex-col items-start justify-start ml-12'>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Starter Reseller Plan
              </h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>$ 99</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>50 Credits</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>Up to 50 Accounts</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>3 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Your own reseller panel",
                  "Unlimited Free Trials",
                  "Professional Support",
                  "Works on all devices",
                  "Add Sub Resellers",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Regular Updates",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "Fully Automated System",
                  "Instant Activation",
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
        Get Your Reseller Plan
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
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Standard Reseller Plan</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>$ 189</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>100 Credits</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>Up to 100 Accounts</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>3 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Your own reseller panel",
                  "Unlimited Free Trials",
                  "Professional Support",
                  "Works on all devices",
                  "Add Sub Resellers",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Regular Updates",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "Fully Automated System",
                  "Instant Activation",
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
        Get Your Reseller Plan
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
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Professional Reseller Plan</h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>$ 379</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>200 Credits</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>Up to 200 Accounts</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>3 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Your own reseller panel",
                  "Unlimited Free Trials",
                  "Professional Support",
                  "Works on all devices",
                  "Add Sub Resellers",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Regular Updates",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "Fully Automated System",
                  "Instant Activation",
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
        Get Your Reseller Plan
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
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Advanced Reseller Plan
              </h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>$ 949</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>500 Credits</h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>Up to 500 Accounts

</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>5 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Your own reseller panel",
                  "Unlimited Free Trials",
                  "Professional Support",
                  "Works on all devices",
                  "Add Sub Resellers",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Regular Updates",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "Fully Automated System",
                  "Instant Activation",
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
        Get Your Reseller Plan
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
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Business Reseller Plan
              </h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>$ 1799</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>1000 Credits
              </h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>Up to 1000 Accounts</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>5 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Your own reseller panel",
                  "Unlimited Free Trials",
                  "Professional Support",
                  "Works on all devices",
                  "Add Sub Resellers",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Regular Updates",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "Fully Automated System",
                  "Instant Activation",
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
        Get Your Reseller Plan
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
              <h2 className='text-[#FFFFFF] text-[18px] font-bold'>Enterprise Reseller Plan
              </h2>
              <h1 className='text-[#E22D51] text-[25px] font-bold mt-4'>$ 3499</h1>
              <h1 className='text-[#FFFFFF] text-[25px] font-bold mt-4'>2000 Credits
              </h1>
              <p className='text-[#E22D51] text-[25px] font-bold mt-4'>Up to 2000 Accounts

</p>
              <h2 className='text-[#FFFFFF] text-[18px] font-bold mt-4'>7 Days Money Back Guarantee</h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Your own reseller panel",
                  "Unlimited Free Trials",
                  "Professional Support",
                  "Works on all devices",
                  "Add Sub Resellers",
                  "No buffering, no freezing",
                  "TV guide (EPG)",
                  "Catch Up 5 Days",
                  "Built-in VPN Protection",
                  "Regular Updates",
                  "Pay Per View (PPV)",
                  "Secure & Encrypted Payment",
                  "Fully Automated System",
                  "Instant Activation",
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
        Get Your Reseller Plan
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
    </div>
    </div>
  )
}

export default ResellerPlan
