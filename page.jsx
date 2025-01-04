'use client'

import { useEffect, useRef } from 'react'
import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CustomCursor } from './components/CustomCursor'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function Home() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
      })
    }
    window.addEventListener('mousemove', moveCursor)
    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [])

  return (
    <main className="min-h-screen">
      <CustomCursor ref={cursorRef} />
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}

export default Home

