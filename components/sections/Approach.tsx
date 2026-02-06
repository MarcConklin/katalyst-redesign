'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  { num: '01', title: 'Listen', desc: 'We understand your vision and goals.' },
  { num: '02', title: 'Create', desc: 'We design every detail with care.' },
  { num: '03', title: 'Deliver', desc: 'We execute flawlessly.' }
]

export default function Approach() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%'
        }
      })

      // Steps animation with stagger
      stepsRef.current.forEach((step, i) => {
        if (!step) return
        
        gsap.from(step, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%'
          },
          delay: i * 0.2
        })

        // Number animation
        const num = step.querySelector('.step-num')
        gsap.from(num, {
          scale: 0,
          rotation: -180,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: step,
            start: 'top 80%'
          },
          delay: i * 0.2 + 0.3
        })
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-48 md:py-64 lg:py-80 bg-neutral-950"
    >
      <div className="max-w-3xl mx-auto px-8">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-40 md:mb-48"
        >
          Our Approach
        </h2>

        {/* Steps */}
        <div className="space-y-32 md:space-y-40">
          {steps.map((step, i) => (
            <div
              key={step.num}
              ref={el => { stepsRef.current[i] = el }}
              className="flex flex-col items-center text-center"
            >
              {/* Number */}
              <div className="step-num w-32 h-32 md:w-36 md:h-36 rounded-full bg-gold flex items-center justify-center shrink-0 mb-10">
                <span className="text-4xl md:text-5xl font-bold text-black">{step.num}</span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {step.title}
                </h3>
                <p className="text-2xl md:text-3xl text-neutral-400 max-w-xl mx-auto">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

