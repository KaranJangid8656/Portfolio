import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import HelloPage from './components/HelloPage'

export default function Home() {
  return (
    <>
      <HelloPage />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </>
  )
}

