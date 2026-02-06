'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animation
      gsap.from(contentRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%'
        }
      })

      // Floating orb animation
      gsap.to(orbRef.current, {
        y: -40,
        x: 30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-48 md:py-64 lg:py-80 bg-neutral-950 relative overflow-hidden"
    >
      {/* Floating orb */}
      <div
        ref={orbRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/10 rounded-full blur-3xl pointer-events-none"
      />

      <div
        ref={contentRef}
        className="max-w-3xl mx-auto px-8 text-center relative z-10"
      >
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12">
          Let&apos;s create something
          <span className="text-gold"> extraordinary</span>
        </h2>

        <p className="text-2xl md:text-3xl text-neutral-400 mb-20">
          Ready to bring your vision to life?
        </p>

        <a
          href="mailto:hello@katalystproductions.co"
          className="inline-block px-14 py-7 bg-gold text-black text-2xl font-bold rounded-full hover:scale-105 transition-transform duration-300 mb-24"
        >
          Get in Touch
        </a>

        <div className="mt-24 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 text-neutral-400 text-lg">
          <a href="tel:2673178798" className="hover:text-gold transition-colors">
            (267) 317-8798
          </a>
          <a href="mailto:hello@katalystproductions.co" className="hover:text-gold transition-colors">
            hello@katalystproductions.co
          </a>
          <span>Philadelphia, PA</span>
        </div>

        <div className="mt-16">
          <span className="inline-block px-8 py-3 border border-gold/30 text-gold text-sm tracking-widest rounded-full">
            WOMAN-OWNED BUSINESS
          </span>
        </div>
      </div>
    </section>
  )
}

