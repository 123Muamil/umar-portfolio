"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [activeIndex1, setActiveIndex1] = useState<number | null>(null);
     const toggleAccordion1 = (index: number) => {
         setActiveIndex1(activeIndex === index ? null : index);
       };
  const toggleAccordion = (index: number, type: string) => {
    if (type === "single") {
      setActiveIndex(activeIndex === index ? null : index);
    } else {
      setActiveIndex(activeIndex === index + 100 ? null : index + 100);
    }
  };

  const SinglePlan = [
    { question: "Step 1: Device Requirements", answer: "Answer for question 1." },
    { question: "Step 3: Configure the IPTV Service", answer: "Answer for question 2." },
    { question: "Step 5: Troubleshooting", answer: "Answer for question 3." },
  ];

  const FamilyPlan = [
    { question: "Step 2: Install the IPTV App", answer: "Answer for question 1." },
    { question: "Step 4: Optimize Your Viewing Experience", answer: "Answer for question 2." },
    { question: "Step 6: Need Help?", answer: "Answer for question 3." },
  ];

  const AllDevices = [
    { question: "IPTV on your Amazon Fire TV Stick", answer: "Answer for question 1." },
    { question: "IPTV on your iPhone, iPad, Apple TV & MAC", answer: "Answer for question 2." },
    { question: "IPTV on your MAG device", answer: "Answer for question 3." },
    { question: "IPTV on your Dreamlink", answer: "Answer for question 4." },
    { question: "IPTV on your Formuler Box/Device", answer: "Answer for question 5." },
    { question: "IPTV on your Android Smartphone, BOX, & TV", answer: "Answer for question 6." },
    { question: "IPTV on your Samsung & LG Smart TV", answer: "Answer for question 7." },
    { question: "IPTV on your Windows PC", answer: "Answer for question 8." },
    { question: "IPTV on your Enigma2/Dreambox/Vu+", answer: "Answer for question 9." },
    { question: "Other", answer: "Answer for question 10." },
  ];
  const renderAccordion = (plan: typeof SinglePlan, type: string) => {
    return plan.map((faq, index) => {
      const isActive =
        activeIndex !== null &&
        ((type === "single" && activeIndex === index) ||
          (type !== "single" && activeIndex - 100 === index));

      return (
        <div
          key={index}
          className={`accordion p-4 rounded-xl mb-3 transition-all ${
            isActive ? "bg-[#67CDF0]" : "bg-[#221E5B]"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index, type)}
            className="flex items-center justify-between w-full text-left text-base font-medium text-white"
          >
            <h5>{faq.question}</h5>
            {isActive ? <FaMinus /> : <FaPlus />}
          </button>
          <div
            className={`mt-2 overflow-hidden transition-all duration-500 ${
              isActive ? "max-h-screen" : "max-h-0"
            }`}
          >
            <p className="text-white text-sm mt-2">{faq.answer}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="bg-[#040037] pb-16 pt-16">
      <div className="container mx-auto px-4">
        <p className="text-white text-center text-[18px] mb-8">
        Welcome to <span className="font-bold">IPTV UK Services!</span> Follow this simple step-by-step guide to set up your IPTV service and start enjoying <br/> your favorite content.
        </p>
        <div className="grid gap-6 lg:px-[150px] sm:grid-cols-1 md:grid-cols-2">
          <div>{renderAccordion(SinglePlan, "single")}</div>
          <div>{renderAccordion(FamilyPlan, "family")}</div>
        </div>
      </div>
      <h1 className="text-white text-3xl text-center font-bold mb-8 mt-8">
      Quick and Easy IPTV Installation for All Devices
        </h1>
          <section >
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
         <div>
                  {AllDevices.map((faq, index) => (
                    <div
                      key={index}
                      className={`accordion   p-4 rounded-xl mb-2 transition-all ${
                        activeIndex1 === index
                          ? "bg-[#67CDF0]"
                          : "bg-[#221E5B]"
                      }`}
                    >
                      <button
                        onClick={() => toggleAccordion1(index)}
                        className="flex items-center justify-between w-full text-left text-lg font-normal leading-8 text-[#FFFFFF] transition duration-500"
                      >
                        <h5>{faq.question}</h5>
                        {activeIndex1 === index ? (
                          <FaMinus className="text-[#FFFFFF]" />
                        ) : (
                          <FaPlus className=" text-[#FFFFFF] group-hover:text-indigo-600" />
                        )}
                      </button>
                      <div
                        className={`mt-4 overflow-hidden transition-all duration-500 ${
                          activeIndex1 === index ? "max-h-screen" : "max-h-0"
                        }`}
                      >
                        <p className="text-base text-[#FFFFFF] font-normal leading-6">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                 
              </div>
            </section>
    </div>
  );
};

export default Faqs;
