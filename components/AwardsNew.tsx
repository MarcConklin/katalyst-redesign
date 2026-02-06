'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '@/lib/content'
import { Award, Users, Calendar, Trophy } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { icon: Calendar, value: '500+', label: 'Events Produced' },
  { icon: Users, value: '100+', label: 'Happy Clients' },
  { icon: Trophy, value: '15+', label: 'Years Experience' },
  { icon: Award, value: '50+', label: 'Awards Won' }
]

export default function AwardsNew() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const statsRef = useRef<(HTMLDivElement | null)[]>([])

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

      // Animate stats
      statsRef.current.forEach((stat, index) => {
        if (stat) {
          gsap.from(stat, {
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
    <section ref={sectionRef} className="py-24 md:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6"
          >
            {content.awards.title}
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            
            return (
              <div
                key={index}
                ref={(el) => { statsRef.current[index] = el }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-10 h-10 text-black" />
                </div>
                <div className="text-4xl lg:text-5xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-lg">
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>

        {/* Awards List */}
        <div className="mt-20 flex flex-wrap justify-center gap-4">
          {content.awards.items.map((award, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-white rounded-full border border-gray-200 text-gray-700 font-medium hover:border-gold hover:text-gold transition-colors duration-300"
            >
              {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

