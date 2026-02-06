'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '@/lib/content'

gsap.registerPlugin(ScrollTrigger)

export default function Intro() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })

      // Animate description
      gsap.from(descRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-8"
        >
          {content.intro.title}
        </h2>
        <p 
          ref={descRef}
          className="text-xl md:text-2xl text-gray-600 leading-relaxed"
        >
          {content.intro.description}
        </p>
      </div>
    </section>
  )
}

