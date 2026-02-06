'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '@/lib/content'

gsap.registerPlugin(ScrollTrigger)

export default function Story() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLParagraphElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const statRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = sectionRef.current

      gsap.from([labelRef.current, headingRef.current, bodyRef.current], {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger,
          start: 'top 75%'
        }
      })

      statRefs.current.forEach((el, index) => {
        if (!el) return
        gsap.from(el, {
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger,
            start: 'top 70%'
          },
          delay: 0.4 + index * 0.12
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
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p
          ref={labelRef}
          className="text-sm md:text-base tracking-[0.25em] uppercase text-neutral-500 mb-6"
        >
          Award-winning event production + experiential marketing
        </p>

        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black leading-tight mb-6"
        >
          A boutique agency for brands who want their events to feel unforgettable.
        </h2>

        <p
          ref={bodyRef}
          className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto mb-12"
        >
          Katalyst produces large-scale galas, launches, VIP experiences and brand activations
          that look effortless to your guests and meticulously planned behind the scenes.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          {[
            { value: '500+', label: 'Events produced' },
            { value: '100+', label: 'Clients partnered with' },
            { value: '15+', label: 'Years in the industry' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              ref={el => { statRefs.current[index] = el }}
              className="min-w-[160px]"
            >
              <div className="text-2xl md:text-3xl font-semibold text-black mb-1">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-neutral-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

