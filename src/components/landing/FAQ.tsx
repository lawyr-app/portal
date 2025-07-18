"use client";

import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "What is lawyrhub?",
    answer:
      "lawyrhub is an AI-powered legal assistant that provides instant answers to legal queries based on Indian laws and constitution. It's designed to help individuals and businesses quickly access legal information and guidance.",
  },
  {
    question: "How accurate is the legal information provided by lawyrhub?",
    answer:
      "lawyrhub uses advanced AI algorithms trained on up-to-date Indian legal databases. While it provides highly accurate information, it's always recommended to consult with a qualified legal professional for complex legal matters or official advice.",
  },
  {
    question: "Is my data secure when using lawyrhub?",
    answer:
      "Yes, we take data security very seriously. All queries and personal information are encrypted and protected using state-of-the-art security measures. We do not share your data with third parties.",
  },
  {
    question: "Can lawyrhub handle complex legal questions?",
    answer:
      "lawyrhub is capable of handling a wide range of legal questions, from simple to complex. However, for highly specialized or intricate legal matters, it's advisable to seek personalized advice from a legal professional.",
  },
  {
    question: "How often is lawyrhub's database updated?",
    answer:
      "We update our legal database regularly to ensure that the information provided is current and accurate. This includes updates to reflect new laws, amendments, and significant court rulings.",
  },
];

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
                    activeIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <div
                // ref={(el) => (answerRefs.current[index] = el)}
                ref={(el) => {
                  answerRefs.current[index] = el; // Store the reference
                }}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight:
                    activeIndex === index
                      ? `${answerRefs.current[index]?.scrollHeight}px`
                      : "0",
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                <p className="pb-5 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
