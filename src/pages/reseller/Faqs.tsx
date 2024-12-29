"use client";
import Devices from "@/components/Devices";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number, type: string) => {
    if (type === "single") {
      setActiveIndex(activeIndex === index ? null : index);
    } else {
      setActiveIndex(activeIndex === index + 100 ? null : index + 100);
    }
  };

  const SinglePlan = [
    { question: "What is an IPTV Reseller Plan?", answer: "Answer for question 1." },
    { question: "How does the reseller panel work?", answer: "Answer for question 2." },
    { question: "What are the benefits of becoming an IPTV reseller?", answer: "Answer for question 3." },
    { question: "What kind of content is available on the IPTV platform?", answer: "Answer for question 4." },
    { question: "How much does the Starter Reseller Plan cost?", answer: "Answer for question 5." },
    { question: "What are credits, and how do they work?", answer: "Answer for question 6." },
    { question: "Can I upgrade my reseller plan later?", answer: "Answer for question 7." },
    { question: "How do I make money with a reseller plan?", answer: "Answer for question 8." },
    { question: "What support is included with the reseller plans?", answer: "Answer for question 9." },
    { question: "Do I need any technical skills to start?", answer: "Answer for question 10." },
  ];

  const FamilyPlan = [
    { question: "Are there hidden fees in the reseller plans?", answer: "Answer for question 1." },
    { question: "Can I customize the IPTV panel with my branding?", answer: "Answer for question 2." },
    { question: "How quickly can I start selling IPTV subscriptions?", answer: "Answer for question 3." },
    { question: "Is there a minimum purchase requirement for credits?", answer: "Answer for question 4." },
    { question: "What happens if I run out of credits?", answer: "Answer for question 5." },
    { question: "Do reseller plans include live sports and premium channels?", answer: "Answer for question 6." },
    { question: "Can I create unlimited accounts with my reseller plan?", answer: "Answer for question 7." },
    { question: "How are payments handled for the reseller plans?", answer: "Answer for question 8." },
    { question: "Is there a refund policy for reseller plans?", answer: "Answer for question 9." },
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
        <h1 className="text-white text-3xl text-center font-bold mb-8">
          Common Questions About Reseller Plans
        </h1>
        <div className="grid gap-6 lg:px-[150px] sm:grid-cols-1 md:grid-cols-2">
          <div>{renderAccordion(SinglePlan, "single")}</div>
          <div>{renderAccordion(FamilyPlan, "family")}</div>
        </div>
      </div>
      <Devices />
    </div>
  );
};

export default Faqs;
