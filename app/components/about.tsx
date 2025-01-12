import React from 'react'
export default function About() {
    return (
      <section id="about" className="py-20 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">About Me</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Hello! I'm Karan Suthar, an aspiring Data Analyst and Data Science enthusiast currently pursuing my education at Atria Institute of Technology. My passion lies in uncovering insights from complex datasets and translating them into actionable strategies.
            </p>
            <p className="text-lg leading-relaxed">
              As a student, I'm constantly expanding my knowledge in areas such as statistical analysis, machine learning, and data visualization. I'm fascinated by the power of data to drive decision-making and solve real-world problems across various industries.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not immersed in data, you can find me exploring the latest developments in technology, participating in coding challenges, or collaborating with fellow students on innovative projects. I'm always open to learning opportunities and excited about the possibilities that lie ahead in the world of data science.
            </p>
          </div>
        </div>
      </section>
    )
  }
  
  