'use client'

import { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="min-h-screen flex items-center relative bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-black dark:text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            AI Legal Assistant for India
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-700 dark:text-gray-300">
            Navigating the complex terrain of Indian law
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="text-lg px-8 py-3 bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

