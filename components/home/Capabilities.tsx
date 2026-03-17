'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Sparkles, Users, Lightbulb } from 'lucide-react'
import { content } from '@/lib/content'

gsap.registerPlugin(ScrollTrigger)

const capabilities = [
  {
    icon: Sparkles,
    title: content.services.items[0].title,
    description: content.services.items[0].description
  },
  {
    icon: Users,
    title: content.services.items[1].title,
    description: content.services.items[1].description
  },
  {
    icon: Lightbulb,
    title: content.services.items[2].title,
    description: content.services.items[2].description
  }
]

export default function Capabilities() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 75%',
            toggleActions: 'play none none none'
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
      id="services"
      className="relative bg-neutral-50 w-full"
      style={{ paddingTop: '140px', paddingBottom: '140px' }}
    >
      <div className="w-full flex justify-center">
        <div className="max-w-[1200px] px-6 w-full">
        <div className="max-w-[760px] mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            {content.services.eyebrow}
          </p>
          <h2 className="text-[44px] md:text-[60px] font-bold leading-[1.05] text-black mb-6">
            {content.services.title}
          </h2>
          <p className="text-[19px] md:text-[22px] leading-[1.6] text-neutral-600">
            {content.services.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                ref={el => { cardsRef.current[i] = el }}
                className="group relative bg-white rounded-3xl p-12 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                style={{ 
                  transform: 'translateY(0)',
                  transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onMouseEnter={(e) => {
                  gsap.to(e.currentTarget, {
                    y: -12,
                    duration: 0.5,
                    ease: 'power3.out'
                  })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.currentTarget, {
                    y: 0,
                    duration: 0.5,
                    ease: 'power3.out'
                  })
                }}
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-500">
                  <Icon className="w-8 h-8 text-gold group-hover:text-black transition-colors duration-500" />
                </div>
                <h3 className="text-[32px] font-bold leading-[1.2] text-black mb-4">
                  {item.title}
                </h3>
                <p className="text-[18px] leading-[1.6] text-neutral-600">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
        </div>
      </div>
    </section>
  )
}
