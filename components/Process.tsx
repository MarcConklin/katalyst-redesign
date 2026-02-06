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

export default function Process() {
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
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                className="relative group"
              >
                {/* Connecting Line (desktop only) */}
                {index < 2 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                    className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gold to-gold/20 origin-left"
                  />
                )}

                {/* Card */}
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-gradient-to-br from-gray-50 to-white p-10 lg:p-12 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col"
                >
                  {/* Number Badge */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="absolute -top-8 -right-8 w-20 h-20 bg-gold rounded-full flex items-center justify-center text-black font-bold text-2xl shadow-xl"
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center mb-8 group-hover:bg-gold transition-colors duration-300"
                  >
                    <Icon className="w-10 h-10 text-gold group-hover:text-black transition-colors duration-300" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-black mb-6 group-hover:text-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                    {step.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-gold/10 to-transparent rounded-tl-full" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent origin-center max-w-4xl mx-auto"
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 right-10 w-40 h-40 bg-gold/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 left-10 w-48 h-48 bg-gold/5 rounded-full blur-3xl"
      />
    </section>
  )
}

