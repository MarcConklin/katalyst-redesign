'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '@/lib/content'
import { Ear, Lightbulb, Rocket } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const icons = {
  "01": Ear,
  "02": Lightbulb,
  "03": Rocket
}

export default function ProcessNew() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
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

      // Animate description
      gsap.from(descRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
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
            y: 80,
            opacity: 0,
            duration: 0.8,
            delay: 0.4 + index * 0.15,
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
          >
            {content.process.title}
          </h2>
          <p 
            ref={descRef}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {content.process.description}
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {content.process.steps.map((step, index) => {
            const Icon = icons[step.number as keyof typeof icons]
            
            return (
              <div
                key={step.number}
                ref={(el) => { cardsRef.current[index] = el }}
                className="relative"
              >
                {/* Card */}
                <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  {/* Number */}
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-black font-bold text-2xl mb-6">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

