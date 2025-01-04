'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export function About() {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-64 h-64 mx-auto" ref={imageRef}>
              <Image
                src="/placeholder.svg?height=256&width=256"
                alt="Profile Picture"
                width={256}
                height={256}
                className="rounded-full transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Nishkarsh Awasthi</h1>
            <h2 className="text-2xl text-blue-400 mb-4">Full Stack Web Developer</h2>
            <p className="text-gray-300 mb-6">
              Passionate about creating beautiful, functional, and user-friendly websites. 
              Experienced in React, Node.js, and modern web technologies.
            </p>
            <ul className="text-gray-300">
              <li>• c++ / Python</li>
              <li>• JavaScript / React / Next.js</li>
              <li>• Node.js / Express</li>
              <li>• SQL / MongoDB</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


export default About
