'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Four Seasons Grand Opening',
    meta: 'Luxury hotel launch · Philadelphia',
    image: '/images/projects/20191022-FourSeasons-17.jpg'
  },
  {
    title: 'BLOCS Gala',
    meta: 'Fundraising gala · 1,000+ guests',
    image: '/images/projects/BLOCS254.jpg'
  },
  {
    title: 'Black Tech Weekend',
    meta: 'Conference & festival experience',
    image: '/images/projects/blacktechweek.JPG'
  }
]

export default function Highlights() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = sectionRef.current

      gsap.from(titleRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger,
          start: 'top 75%'
        }
      })

      rowRefs.current.forEach((row, index) => {
        if (!row) return

        gsap.from(row, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: row,
            start: 'top 80%'
          },
          delay: index * 0.15
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-white py-28 md:py-36 lg:py-44"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black text-center mb-20 md:mb-24"
        >
          Selected work
        </h2>

        <div className="space-y-16 md:space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={el => { rowRefs.current[index] = el }}
              className="grid md:grid-cols-2 gap-10 md:gap-12 items-center"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className="max-w-md md:max-w-none">
                <p className="text-xs tracking-[0.3em] uppercase text-neutral-500 mb-4">
                  Feature
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-black mb-4">
                  {project.title}
                </h3>
                <p className="text-base md:text-lg text-neutral-600">
                  {project.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

