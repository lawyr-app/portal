"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Small Business Owner",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "LegalAI has been a game-changer for my business. It's like having a legal expert on call 24/7. The instant answers to my legal queries have saved me both time and money.",
  },
  {
    name: "Rahul Mehta",
    role: "Corporate Lawyer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As a lawyer, I was skeptical at first. But LegalAI has proven to be an invaluable tool for quick reference and preliminary research. It's impressively accurate and up-to-date with Indian law.",
  },
  {
    name: "Ananya Patel",
    role: "Startup Founder",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Navigating legal complexities as a startup founder was daunting until I found LegalAI. It's user-friendly, comprehensive, and has become an essential part of our decision-making process.",
  },
  {
    name: "Vikram Singh",
    role: "Legal Consultant",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "LegalAI has revolutionized my consulting practice. It allows me to provide quick, accurate advice to clients on a wide range of legal matters. An indispensable tool for modern legal professionals.",
  },
  {
    name: "Neha Gupta",
    role: "HR Manager",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "In HR, we often encounter complex legal questions. LegalAI has been a lifesaver, providing instant clarity on labor laws and company policies. It's like having a legal department at your fingertips.",
  },
  {
    name: "Arjun Reddy",
    role: "Tech Entrepreneur",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "As we scale our startup, legal challenges evolve rapidly. LegalAI keeps us informed and compliant without the hefty legal fees. It's an essential tool for any growing business in India.",
  },
];

export function Testimonials() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section
      ref={ref}
      className="py-24 bg-gray-50 dark:bg-black overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-black dark:text-white">
          What Our Users Say
        </h2>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent dark:from-stone-950 z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent dark:from-stone-950 z-10"></div>
          <motion.div
            animate={controls}
            initial="hidden"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.3,
                },
              },
            }}
            className="flex overflow-hidden"
          >
            <motion.div
              variants={{
                hidden: { x: "0%" },
                visible: {
                  x: "-100%",
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                  },
                },
              }}
              className="flex flex-nowrap"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="w-[350px] flex-shrink-0 mx-4">
                  <div className="bg-card rounded-lg shadow-lg overflow-hidden h-full">
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="relative w-16 h-16 mr-4">
                          <Image
                            src="https://banner2.cleanpng.com/20240216/erb/transparent-google-maps-logo-google-maps-icon-with-red-pinpoint-indicating-1710875694855.webp"
                            alt={testimonial.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-black dark:text-white">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <svg
                          className="w-8 h-8 text-primary/20 absolute top-0 left-0 -mt-4 -ml-2"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-gray-600 dark:text-gray-300 italic relative z-10 pl-6">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            <motion.div
              variants={{
                hidden: { x: "0%" },
                visible: {
                  x: "-100%",
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 60,
                    ease: "linear",
                  },
                },
              }}
              className="flex flex-nowrap"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="w-[350px] flex-shrink-0 mx-4">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden h-full">
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="relative w-16 h-16 mr-4">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg text-black dark:text-white">
                            {testimonial.name}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="relative">
                        <svg
                          className="w-8 h-8 text-primary/20 absolute top-0 left-0 -mt-4 -ml-2"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-gray-600 dark:text-gray-300 italic relative z-10 pl-6">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
