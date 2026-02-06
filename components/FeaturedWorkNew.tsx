'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '@/lib/content'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedWorkNew() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      })

      // Animate cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            delay: 0.2 + index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              toggleActions: 'play none none none'
            }
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
          >
            {content.featuredWork.title}
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {content.featuredWork.projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-100 aspect-[4/3]">
                {/* Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-gold text-sm font-semibold mb-2">
                      {project.category}
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {project.client}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Info (visible on mobile) */}
              <div className="mt-4 md:hidden">
                <div className="text-gold text-sm font-semibold mb-1">
                  {project.category}
                </div>
                <h3 className="text-black text-lg font-bold mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {project.client}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gold hover:text-black transition-all duration-300 inline-flex items-center gap-2">
            View All Projects
            <span>→</span>
          </button>
        </div>
      </div>
    </section>
  )
}

