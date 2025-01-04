'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
  },
  {
    title: 'Task Management App',
    description: 'A responsive web application for managing tasks and projects with real-time updates.',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
  },
  {
    title: 'Weather Dashboard',
    description: 'An interactive weather dashboard displaying current conditions and forecasts for multiple locations.',
    technologies: ['React', 'Redux', 'OpenWeatherMap API'],
  },
]

export function Projects() {
  const sectionRef = useRef(null)
  const projectRefs = useRef([])

  useEffect(() => {
    gsap.from(projectRefs.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 70%',
      },
    })
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-20 min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectRefs.current[index] = el)}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="inline-block bg-blue-500 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects