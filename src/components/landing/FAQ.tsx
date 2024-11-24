'use client'

import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'

const faqItems = [
  {
    question: "What is LegalAI?",
    answer: "LegalAI is an AI-powered legal assistant that provides instant answers to legal queries based on Indian laws and constitution. It's designed to help individuals and businesses quickly access legal information and guidance."
  },
  {
    question: "How accurate is the legal information provided by LegalAI?",
    answer: "LegalAI uses advanced AI algorithms trained on up-to-date Indian legal databases. While it provides highly accurate information, it's always recommended to consult with a qualified legal professional for complex legal matters or official advice."
  },
  {
    question: "Is my data secure when using LegalAI?",
    answer: "Yes, we take data security very seriously. All queries and personal information are encrypted and protected using state-of-the-art security measures. We do not share your data with third parties."
  },
  {
    question: "Can LegalAI handle complex legal questions?",
    answer: "LegalAI is capable of handling a wide range of legal questions, from simple to complex. However, for highly specialized or intricate legal matters, it's advisable to seek personalized advice from a legal professional."
  },
  {
    question: "How often is LegalAI's database updated?",
    answer: "We update our legal database regularly to ensure that the information provided is current and accurate. This includes updates to reflect new laws, amendments, and significant court rulings."
  }
]

export function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const answerRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700">
              <button
                onClick={() => toggleQuestion(index)}
                className="flex justify-between items-center w-full py-5 text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-white">{item.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ease-in-out ${
                    activeIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                ref={el => answerRefs.current[index] = el}
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: activeIndex === index ? `${answerRefs.current[index]?.scrollHeight}px` : '0',
                  opacity: activeIndex === index ? 1 : 0,
                }}
              >
                <p className="pb-5 text-gray-600 dark:text-gray-300">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

