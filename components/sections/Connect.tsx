'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '@/lib/content'

gsap.registerPlugin(ScrollTrigger)

export default function Connect() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)
  const detailRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      const trigger = sectionRef.current

      gsap.from([headingRef.current, bodyRef.current, buttonRef.current], {
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

      detailRefs.current.forEach((el, index) => {
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
          delay: 0.4 + index * 0.1
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const { phone, email, location } = content.cta.contact

  const details = [
    { label: 'Call', value: phone },
    { label: 'Email', value: email },
    { label: 'Based in', value: location }
  ]

  return (
    <section
      ref={sectionRef}
      className="bg-neutral-950 py-28 md:py-36 lg:py-44"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          ref={headingRef}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6"
        >
          Ready when you are.
        </h2>

        <p
          ref={bodyRef}
          className="text-lg md:text-xl text-neutral-400 mb-12 max-w-2xl mx-auto"
        >
          Share your date, your goals and your wild ideas. We&apos;ll come back with a clear, no-drama plan.
        </p>

        <a
          ref={buttonRef}
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-gold text-black font-semibold text-lg md:text-xl hover:scale-105 transition-transform duration-300 mb-16"
        >
          Start a project
        </a>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 text-neutral-400">
          {details.map((item, index) => (
            <div
              key={item.label}
              ref={el => { detailRefs.current[index] = el }}
            >
              <div className="text-xs tracking-[0.3em] uppercase mb-1 text-neutral-500">
                {item.label}
              </div>
              <div className="text-sm md:text-base text-white">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

