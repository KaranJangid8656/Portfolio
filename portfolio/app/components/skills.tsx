import React from 'react'
import { Database, BarChart2, Brain, Code, FileSpreadsheet, PieChart, Binary, BookOpen } from 'lucide-react'

const skills = [
  { id: 1, name: 'Data Analysis', icon: Database, description: 'Proficient in analyzing complex datasets to extract meaningful insights.' },
  { id: 2, name: 'Data Visualization', icon: BarChart2, description: 'Skilled in creating compelling visual representations of data using various tools.' },
  { id: 3, name: 'Machine Learning', icon: Brain, description: 'Familiar with basic machine learning algorithms and their applications.' },
  { id: 4, name: 'Programming', icon: Code, description: 'Experienced in Python, C, C++, Java, and HTML for various development tasks.' },
  { id: 5, name: 'Excel', icon: FileSpreadsheet, description: 'Advanced proficiency in Microsoft Excel for data analysis and reporting.' },
  { id: 6, name: 'Power BI & Tableau', icon: PieChart, description: 'Skilled in creating interactive dashboards and reports using Power BI and Tableau.' },
  { id: 7, name: 'Data Structures', icon: Binary, description: 'Strong understanding of fundamental data structures and their applications.' },
  { id: 8, name: 'Other Skills', icon: BookOpen, description: 'Continuous learner, adaptable to new technologies and methodologies in data science.' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-blue-50 dark:bg-blue-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <skill.icon className="w-8 h-8 text-blue-500 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{skill.name}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

