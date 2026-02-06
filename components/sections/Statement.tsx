'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Statement() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for staggered text reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'center center',
          toggleActions: 'play none none none'
        }
      })

      tl.from(line1Ref.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      })
      .from(line2Ref.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out'
      }, '-=0.8')
      .from(line3Ref.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.6')

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen flex items-center justify-center bg-white py-32 md:py-40"
    >
      <div className="max-w-5xl mx-auto px-8 text-center">
        <div className="overflow-hidden mb-4">
          <div ref={line1Ref} className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-tight">
            We create
          </div>
        </div>
        <div className="overflow-hidden mb-4">
          <div ref={line2Ref} className="text-5xl md:text-7xl lg:text-8xl font-bold text-gold leading-tight">
            unforgettable
          </div>
        </div>
        <div className="overflow-hidden">
          <div ref={line3Ref} className="text-5xl md:text-7xl lg:text-8xl font-bold text-black leading-tight">
            experiences.
          </div>
        </div>
      </div>
    </section>
  )
}

