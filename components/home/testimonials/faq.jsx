"use client";
import { useState } from "react";

// const faqData = [
//   {
//     question: "How do I apply for a credit card on the marketplace?",
//     answer: "To apply for a credit card, you need to...",
//   },
//   {
//     question: "How does the credit card marketplace work?",
//     answer: "The credit card marketplace allows you to compare...",
//   },
//   {
//     question: "How can I improve my credit score?",
//     answer: "Improving your credit score requires...",
//   },
//   {
//     question: "What skills do I need to work in AI and ML?",
//     answer: "To work in AI and ML, you should have knowledge of...",
//   },
//   {
//     question: "What skills do I need to work in AI and ML?",
//     answer: "To work in AI and ML, you should have knowledge of...",
//   },
// ];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div
      className={`border-b-2 border-gray-100 py-4 ${
        isOpen ? "bg-white border-2 border-gray-300" : "bg-gray-100"
      } mb-2 w-full`}
    >
      <div
        className="flex justify-between items-center cursor-pointer px-4 md:px-6"
        onClick={onClick}
      >
        <p className="text-base md:text-lg lg:text-xl text-gray-800">
          {question}
        </p>
        <span
          className={`transform transition-transform duration-300 ${
            isOpen
              ? "rotate-45 bg-red-400 border-b-2 border-gray-300"
              : "rotate-0"
          } flex items-center justify-center w-5 h-5 p-1 md:w-8 md:h-8 bg-purple-500 text-white rounded-full text-lg sm:font-semibold m-1 sm:m-2`}
        >
          +
        </span>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="mt-4 text-gray-600 text-sm md:text-base px-6 md:px-10">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = ({faqData}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto mt-8 max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl w-[335px] sm:w-[570px]">
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
