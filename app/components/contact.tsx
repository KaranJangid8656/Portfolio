import React from 'react'
import { Mail, Phone } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-indigo-50/80 dark:bg-indigo-950/80 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">Get in Touch</h2>
        <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <Mail className="text-indigo-600 dark:text-indigo-400 mr-3" size={24} />
              <a href="mailto:karansuthar9565@gmail.com" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                karansuthar9565@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="text-indigo-600 dark:text-indigo-400 mr-3" size={24} />
              <a href="tel:+918431770172" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                +91 8431770172
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

