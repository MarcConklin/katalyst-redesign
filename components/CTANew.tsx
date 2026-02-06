'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '@/lib/content'
import { Mail, MapPin, Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function CTANew() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const contactRef = useRef<(HTMLDivElement | null)[]>([])

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

      // Animate button
      gsap.from(buttonRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none none'
        }
      })

      // Animate contact info
      contactRef.current.forEach((contact, index) => {
        if (contact) {
          gsap.from(contact, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            delay: 0.6 + index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 75%',
              toggleActions: 'play none none none'
            }
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const contactInfo = [
    { icon: Phone, label: 'Phone', value: content.cta.contact.phone },
    { icon: Mail, label: 'Email', value: content.cta.contact.email },
    { icon: MapPin, label: 'Location', value: content.cta.contact.location }
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-black">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Main Content */}
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
        >
          {content.cta.title}
        </h2>
        <p 
          ref={descRef}
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          {content.cta.description}
        </p>

        {/* CTA Button */}
        <button 
          ref={buttonRef}
          className="px-10 py-5 bg-gold text-black font-bold text-lg rounded-full hover:bg-gold-light transition-all duration-300 inline-flex items-center gap-3 mb-16"
        >
          {content.cta.button}
          <span>→</span>
        </button>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            
            return (
              <div
                key={index}
                ref={(el) => { contactRef.current[index] = el }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <div className="text-gray-400 text-sm mb-2">{item.label}</div>
                <div className="text-white font-semibold">{item.value}</div>
              </div>
            )
          })}
        </div>

        {/* Woman-Owned Badge */}
        <div className="mt-16">
          <span className="inline-block px-6 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium tracking-wider">
            WOMAN-OWNED BUSINESS
          </span>
        </div>
      </div>
    </section>
  )
}

