'use client'
import React from 'react'

import { useState } from 'react'
import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-indigo-500 dark:ring-indigo-400">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/linkedin%20profile.jpg-fwJAvsZ0mjKQfrcsoEDGokIbDp0ahh.jpeg"
              alt="Karan Suthar"
              width={40}
              height={40}
              className="object-cover transform group-hover:scale-105 transition-transform"
            />
          </div>
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">Karan Suthar</span>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">About</Link>
          <Link href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</Link>
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  )
}

