'use client'

import { useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import gsap from 'gsap'

export function Contact() {
  const formRef = useRef(null)
  const socialRef = useRef(null)

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 80%',
      },
    })

    gsap.from(socialRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: socialRef.current,
        start: 'top 80%',
      },
    })
  }, [])

  return (
    <section id="contact" className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
        <div className="flex flex-col md:flex-row justify-between items-start">
          <form ref={formRef} className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full bg-gray-700 rounded-lg px-4 py-2 text-white" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
              Send Message
            </button>
          </form>
          <div ref={socialRef} className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-3xl text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <FaGithub />
              </a>
              <a href="#" className="text-3xl text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <FaLinkedin />
              </a>
              <a href="#" className="text-3xl text-gray-300 hover:text-blue-400 transition-colors duration-300">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact