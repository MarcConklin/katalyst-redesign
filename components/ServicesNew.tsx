'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '@/lib/content'
import { Calendar, Sparkles, Zap, Monitor, Palette, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const iconMap = {
  Calendar,
  Sparkles,
  Zap,
  Monitor,
  Palette,
  Target
}

export default function ServicesNew() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const orb1Ref = useRef<HTMLDivElement>(null)
  const orb2Ref = useRef<HTMLDivElement>(null)
  const orb3Ref = useRef<HTMLDivElement>(null)

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

      // Animate floating orbs
      gsap.to(orb1Ref.current, {
        y: -30,
        x: 20,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to(orb2Ref.current, {
        y: 40,
        x: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

      gsap.to(orb3Ref.current, {
        y: -20,
        x: 30,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div ref={orb1Ref} className="absolute top-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div ref={orb2Ref} className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      <div ref={orb3Ref} className="absolute top-1/2 left-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {content.services.title}
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            
            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300 h-full hover:bg-white/10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gold/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                    <Icon className="w-7 h-7 text-gold group-hover:text-black transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
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

