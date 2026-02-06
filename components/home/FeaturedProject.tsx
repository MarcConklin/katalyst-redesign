'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

export default function FeaturedProject() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on image
      gsap.to(imageRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })

      // Text reveal
      gsap.from(textRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none'
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-black overflow-hidden w-full"
      style={{ paddingTop: '160px', paddingBottom: '160px' }}
    >
      {/* Background Image with Parallax */}
      <div 
        ref={imageRef}
        className="absolute inset-0 w-full h-[120%]"
      >
        <Image
          src="/images/projects/20191022-FourSeasons-17.jpg"
          alt="Four Seasons Grand Opening"
          fill
          className="object-cover opacity-40"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full flex justify-center">
        <div className="max-w-[680px] px-6 text-center">
        <div ref={textRef}>
          <div className="text-[14px] tracking-[0.2em] uppercase text-gold mb-6">
            Featured Work
          </div>
          <h3 className="text-[48px] md:text-[64px] font-bold leading-[1.1] text-white mb-6">
            Four Seasons Philadelphia Grand Opening
          </h3>
          <p className="text-[20px] leading-[1.6] text-neutral-300 mb-12">
            A multi-day celebration launching Philadelphia's most anticipated luxury hotel with immersive experiences for 2,000+ VIP guests.
          </p>
          <button
            style={{ paddingLeft: '48px', paddingRight: '48px', paddingTop: '14px', paddingBottom: '14px', fontSize: '18px' }}
            className="bg-gold text-black font-semibold rounded-full hover:bg-gold-light transition-all duration-300"
          >
            View Case Study
          </button>
        </div>
        </div>
      </div>
    </section>
  )
}

