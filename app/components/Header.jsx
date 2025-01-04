'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export function Header() {
  const [activeSection, setActiveSection] = useState('about')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'contact']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 bg-opacity-90 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {['About', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className={`text-lg font-semibold transition-colors duration-300 ${
                  activeSection === item.toLowerCase()
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}


export default Header