import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-blue-100 to-indigo-200 dark:from-gray-800 dark:to-indigo-900 overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <Image
          src="/tech-background.jpg"
          alt="Technology Background"
          fill
          className="object-cover opacity-10"
        />
      </div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left space-y-6 flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-2 text-indigo-800 dark:text-indigo-300">
              Karan Suthar
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-light">
              <span className="block">Aspiring Data Analyst</span>
              <span className="block">Data Science Enthusiast</span>
            </p>
            <a
              href="#contact"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin%20profile.jpg-fwJAvsZ0mjKQfrcsoEDGokIbDp0ahh.jpeg"
                alt="Karan Suthar"
                fill
                className="rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

