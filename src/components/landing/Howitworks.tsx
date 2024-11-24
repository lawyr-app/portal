'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, Cpu, FileText, MessageCircle } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: "Ask Your Question",
    description: "Type your legal query into the search bar. Be as specific as you can for the best results."
  },
  {
    icon: Cpu,
    title: "AI Analyzes",
    description: "Our advanced AI processes your question, searching through vast databases of Indian laws and legal precedents."
  },
  {
    icon: FileText,
    title: "Get Your Answer",
    description: "Receive a clear, concise answer based on the latest Indian legal information, complete with relevant citations."
  },
  {
    icon: MessageCircle,
    title: "Follow-up",
    description: "If you need more clarity, you can ask follow-up questions to dive deeper into the topic."
  }
]

const StepIcon = ({ icon: Icon, isActive }) => (
  <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
    isActive ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300'
  }`}>
    <Icon className="w-8 h-8" />
  </div>
)

const Step = ({ step, index, isActive, setActiveStep }) => (
  <motion.div
    className="relative flex items-center py-12"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onMouseEnter={() => setActiveStep(index)}
    onMouseLeave={() => setActiveStep(null)}
  >
    <div className="w-1/2 pr-16 text-right">
      {index % 2 === 0 && (
        <>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">{step.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
        </>
      )}
    </div>
    <div className="absolute left-1/2 transform -translate-x-1/2">
      <StepIcon icon={step.icon} isActive={isActive} />
    </div>
    <div className="w-1/2 pl-16 text-left">
      {index % 2 !== 0 && (
        <>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">{step.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
        </>
      )}
    </div>
  </motion.div>
)

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">How It Works</h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-0 left-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary to-transparent transform -translate-x-1/2" />
          <div>
            {steps.map((step, index) => (
              <Step
                key={index}
                step={step}
                index={index}
                isActive={activeStep === index}
                setActiveStep={setActiveStep}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

