"use client";

import { motion } from "framer-motion";
import {
  Scale,
  Search,
  Clock,
  BookOpen,
  Shield,
  MessageCircle,
} from "lucide-react";

const features = [
  {
    icon: Scale,
    title: "Legal Accuracy",
    description:
      "Powered by advanced AI trained on Indian law, ensuring precise and up-to-date legal information.",
  },
  {
    icon: Search,
    title: "Instant Answers",
    description:
      "Get immediate responses to your legal queries, saving you time and effort in research.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description:
      "Access legal assistance anytime, day or night, without the constraints of office hours.",
  },
  {
    icon: BookOpen,
    title: "Comprehensive Coverage",
    description:
      "Covers a wide range of Indian legal topics, from civil law to criminal procedures and more.",
  },
  {
    icon: Shield,
    title: "Data Security",
    description:
      "Your queries and personal information are protected with state-of-the-art encryption and privacy measures.",
  },
  {
    icon: MessageCircle,
    title: "Natural Language Processing",
    description:
      "Ask questions in plain English, and receive clear, easy-to-understand answers.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24  bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full mb-4">
                  <feature.icon className="w-6 h-6 text-primary dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
