'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 500, suffix: '+', label: 'Events Produced' },
  { value: 100, suffix: '+', label: 'Clients Served' },
  { value: 15, suffix: '+', label: 'Years of Excellence' },
  { value: 50, suffix: '+', label: 'Industry Awards' }
]

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null)
  const statsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      statsRef.current.forEach((stat, i) => {
        if (!stat) return
        
        const valueElement = stat.querySelector('.stat-value')
        const labelElement = stat.querySelector('.stat-label')
        
        // Animate the number counting up
        gsap.from(valueElement, {
          textContent: 0,
          duration: 2,
          ease: 'power2.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: stat,
            start: 'top 75%',
            toggleActions: 'play none none none'
          },
          delay: i * 0.1,
          onUpdate: function() {
            const val = Math.ceil(this.targets()[0].textContent)
            valueElement!.textContent = val + stats[i].suffix
          }
        })

        // Fade in label
        gsap.from(labelElement, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: stat,
            start: 'top 75%',
            toggleActions: 'play none none none'
          },
          delay: i * 0.1 + 0.3
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-white w-full"
      style={{ paddingTop: '200px', paddingBottom: '200px' }}
    >
      <div className="w-full flex justify-center">
        <div className="max-w-[1200px] px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
          {stats.map((stat, i) => (
            <div
              key={i}
              ref={el => { statsRef.current[i] = el }}
              className="text-center"
            >
              <div className="stat-value text-[64px] md:text-[72px] font-bold leading-[1] text-black mb-4">
                {stat.value}{stat.suffix}
              </div>
              <div className="stat-label text-[16px] leading-[1.4] text-neutral-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

