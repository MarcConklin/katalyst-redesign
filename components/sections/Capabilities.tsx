'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const items = [
  {
    title: 'Live event production',
    body: 'Galas, launch parties, festivals and conferences where every detail is considered—from lighting and sound to guest experience.'
  },
  {
    title: 'Experiential marketing & brand activations',
    body: 'Immersive brand moments that make people stop, feel something and share it—online and in real life.'
  },
  {
    title: 'Strategy, creative & show calling',
    body: 'Concept development, run-of-show, vendor management and on-site direction so your team can actually enjoy the event.'
  }
]

export default function Capabilities() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const listRef = useRef<HTMLDivElement>(null)

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

      const rows = listRef.current?.querySelectorAll('[data-capability-row]') ?? []

      gsap.from(rows, {
        y: 50,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.18,
        scrollTrigger: {
          trigger,
          start: 'top 70%'
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-neutral-50 py-28 md:py-36 lg:py-44"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-black text-center mb-16 md:mb-20"
        >
          What we do
        </h2>

        <div ref={listRef} className="space-y-10 md:space-y-12">
          {items.map(item => (
            <div
              key={item.title}
              data-capability-row
              className="border-t border-neutral-200 pt-8 md:pt-10 flex flex-col md:flex-row md:items-baseline md:gap-10"
            >
              <div className="md:w-1/3 mb-3 md:mb-0">
                <h3 className="text-xl md:text-2xl font-semibold text-black">
                  {item.title}
                </h3>
              </div>
              <div className="md:flex-1">
                <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

