"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import faq1 from '../../../public/images/faq1.png'
import faq2 from '../../../public/images/faq2.png'
import familyPlan1 from '../../../public/images/familyPlan3.png'
import familyPlan2 from '../../../public/images/familyPlan4.png'
import Link from 'next/link'
import { FaPlus, FaMinus } from "react-icons/fa";
import { usePathname } from 'next/navigation'
const Faqs = () => {
    const pathname=usePathname()
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
      const SinglePlan = [
        {
          question: "What is the Single Plan?",
          answer:
            "The Single Plan is an IPTV subscription designed for individual use, allowing access to premium channels, movies, and shows on one device.",
        },
        {
          question: "Can I use the Single Plan on multiple devices?",
          answer:
            "No, the Single Plan is limited to one device at a time. For multi-device access, consider our Friends and Family Plan.",
        },
        {
          question: "What’s included in the Single Plan?",
          answer:
            "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
        },
        {
          question: "Can I upgrade to a different plan later?",
          answer:
            "",
        },
        {
          question: "Is the Single Plan available for all subscription durations?",
          answer:
            "",
        },
        {
          question: "Can I watch content offline with the Single Plan?",
          answer:
            "",
        },
        {
          question: "What happens if I switch devices?",
          answer:
            "",
        },
        {
          question: "How do I set up the Single Plan?",
          answer:
            "",
        },
        {
          question: "Is the Single Plan suitable for Smart TVs?",
          answer:
            "",
        },
        {
          question: "Can I share my account with someone else?",
          answer:
            "",
        },
        {
          question: "What should I do if I experience buffering?",
          answer:
            "",
        },
        {
          question: "Does the Single Plan include adult channels?",
          answer:
            "",
        },
        {
          question: "How often is the content updated?",
          answer:
            "",
        },
        {
          question: "Can I cancel my subscription at any time?",
          answer:
            "",
        },
        {
          question: "What payment methods are accepted?",
          answer:
            "",
        },
      ];
      const FamilyPlan = [
        {
          question: "What is the Friends and Family Plan?",
          answer:
            "",
        },
        {
          question: "How many devices can stream simultaneously?",
          answer:
            "",
        },
        {
          question: "Can users watch different content on each device?",
          answer:
            "",
        },
        {
          question: "Can I add more devices to my plan?",
          answer:
            "",
        },
        {
          question: "Is the streaming quality affected when multiple devices are used?",
          answer:
            "",
        },
        {
          question: "Do all users need to be in the same location?",
          answer:
            "",
        },
        {
          question: "How do I set up the Friends and Family Plan?",
          answer:
            "",
        },
        {
          question: "Is the plan available for all subscription durations?",
          answer:
            "",
        },
        {
          question: "Can I share my account with anyone?",
          answer:
            "",
        },
        {
          question: "What happens if one user logs out?",
          answer:
            "",
        },
        {
          question: "Are there parental controls?",
          answer:
            "",
        },
        {
          question: "Can I switch to this plan from an individual subscription?",
          answer:
            "",
        },
        {
          question: "What if I face technical issues with multiple devices?",
          answer:
            "",
        },
        {
          question: "Is there a discount for the Friends and Family Plan?",
          answer:
            "",
        },
       
      ];
    const WattsappOpen = () => {
        window.open('https://wa.me/+447826176784', '_blank');
    };
  return (
    <div className='bg-[#040037]'>
    <div className="container mx-auto px-4 pt-[60px] pb-[60px]">
    <div className="flex flex-wrap">
      <div className="w-full lg:pl-[150px]   md:w-1/2">
      {/* <div className="col-span-1  "> */}
                        <h1 className="text-4xl font-manrope mt-2 font-bold text-[#E22D51] ">
                          {
                            pathname==='/single-plan'?<>
FAQs – Single Plan
                            </>:<>
                            FAQs – Friends and Family Plan
                            </>
                          }
                          </h1>
                        <h1 className='text-[#FFFFFF] text-[45px] mt-4 font-bold'>Do you have a question?</h1>
                        <p className='text-[#FFFFFF] mt-4 mb-[40px]'>
                          {
                            pathname==='/single-plan'?<>
Here are some <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>frequently asked questions</Link> about the <span className='font-bold'>Single Plan</span> to help you better understand this <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>subscription option</Link>. For more information about the Single Plan, feel free to <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>contact</Link> our support team. We’re here to make sharing entertainment easy and enjoyable!
                            </>:<>
                            Here are some <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>frequently asked questions</Link> about our <span className='font-bold'>Friends and Family Plan</span> to help you understand how it works. For more information about the Friends and Family Plan, feel free to <Link href='/' className='text-[#E22D51] underline decoration-[#E22D51]'>contact</Link> our support team. We’re here to make sharing entertainment easy and enjoyable!
                            </>
                          }
                        </p>
                       
                        <a
        className="bg-[#E22D51] text-white  flex items-center justify-center h-[60px] w-full rounded-[30px] cursor-pointer hover:bg-[#67CDF0]"
        onClick={WattsappOpen}
      >
        {
          pathname==='/single-plan'?<>
          Get Started With Your Single Subscription Now
          </>
          :<>
          Activate Friends and family Subscription Now
          </>
        }
      
      </a>
      <div className='bg-[#FFFFFF] mt-[40px]  flex items-center justify-center  rounded-[10px]'>
        {
          pathname==='/single-plan'?<Image src={faq1} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>:<Image src={familyPlan1} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>
        }
      </div>
      <div className='bg-[#FFFFFF] w-full mt-[40px]  flex items-center justify-center  rounded-[10px]'>
      {
         pathname==='/single-plan'?<Image src={faq2} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>:<Image src={familyPlan2} style={{width:'100%' ,height:'auto',objectFit:'cover'}} alt='img'/>
      }
      </div>  
      </div>
      <div className="w-full flex flex-col  md:w-1/2">
      <section >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-manrope text-center font-bold text-[#FFFFFF] leading-[3.25rem]">
            Frequently asked questions
          </h2>
        </div>
         {
          pathname==='/single-plan'?(<>
 <div>
          {SinglePlan.map((faq, index) => (
            <div
              key={index}
              className={`accordion   p-4 rounded-xl mb-2 transition-all ${
                activeIndex === index
                  ? "bg-[#67CDF0]"
                  : "bg-[#221E5B]"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full text-left text-lg font-normal leading-8 text-[#FFFFFF] transition duration-500"
              >
                <h5>{faq.question}</h5>
                {activeIndex === index ? (
                  <FaMinus className="text-[#FFFFFF]" />
                ) : (
                  <FaPlus className=" text-[#FFFFFF] group-hover:text-indigo-600" />
                )}
              </button>
              <div
                className={`mt-4 overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-base text-[#FFFFFF] font-normal leading-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
          </>):(<>
            <div>
          {FamilyPlan.map((faq, index) => (
            <div
              key={index}
              className={`accordion   p-4 rounded-xl mb-2 transition-all ${
                activeIndex === index
                  ? "bg-[#67CDF0]"
                  : "bg-[#221E5B]"
              }`}
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex items-center justify-between w-full text-left text-lg font-normal leading-8 text-[#FFFFFF] transition duration-500"
              >
                <h5>{faq.question}</h5>
                {activeIndex === index ? (
                  <FaMinus className="text-[#FFFFFF]" />
                ) : (
                  <FaPlus className=" text-[#FFFFFF] group-hover:text-indigo-600" />
                )}
              </button>
              <div
                className={`mt-4 overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-base text-[#FFFFFF] font-normal leading-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
          </>)
         }
      </div>
    </section>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Faqs
