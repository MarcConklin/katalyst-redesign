'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { title: 'Four Seasons Grand Opening', image: '/images/projects/20191022-FourSeasons-17.jpg' },
  { title: 'BLOCS Gala 2023', image: '/images/projects/BLOCS254.jpg' },
  { title: 'Black Tech Weekend', image: '/images/projects/blacktechweek.JPG' },
  { title: 'Rosé Garden Pop-Up', image: '/images/projects/aqimero+3.jpg' }
]

export default function Work() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%'
        }
      })

      // Cards stagger animation
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        
        gsap.from(card, {
          y: 120,
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          },
          delay: i * 0.15
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-48 md:py-64 lg:py-80 bg-white"
    >
      <div className="max-w-5xl mx-auto px-8">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-black text-center mb-32 md:mb-40"
        >
          Our Work
        </h2>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 lg:gap-20"
        >
          {projects.map((project, i) => (
            <div
              key={i}
              ref={el => { cardsRef.current[i] = el }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-end p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-24 md:mt-32">
          <button className="px-12 py-6 bg-black text-white text-xl font-semibold rounded-full hover:bg-gold hover:text-black transition-all duration-300">
            View All Work
          </button>
        </div>
      </div>
    </section>
  )
}

