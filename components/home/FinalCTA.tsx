'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none none'
        }
      })

      tl.from(headlineRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      })
      .from(buttonRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, '-=0.6')

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative bg-black w-full"
      style={{ paddingTop: '240px', paddingBottom: '240px' }}
    >
      <div className="w-full flex justify-center">
        <div className="max-w-[680px] px-6 text-center">
        <h2 
          ref={headlineRef}
          className="text-[56px] md:text-[72px] font-bold leading-[1.1] text-white mb-16"
        >
          Let's create something
          <span className="text-gold"> extraordinary</span>
        </h2>
        
        <a
          ref={buttonRef}
          href="mailto:hello@katalystproductions.co"
          style={{ paddingLeft: '48px', paddingRight: '48px', paddingTop: '14px', paddingBottom: '14px', fontSize: '18px' }}
          className="inline-block bg-gold text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300"
        >
          Start a Conversation
        </a>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 text-[16px] text-neutral-400">
          <a href="tel:2673178798" className="hover:text-gold transition-colors">
            (267) 317-8798
          </a>
          <span className="hidden md:block">•</span>
          <a href="mailto:hello@katalystproductions.co" className="hover:text-gold transition-colors">
            hello@katalystproductions.co
          </a>
          <span className="hidden md:block">•</span>
          <span>Philadelphia, PA</span>
        </div>
        </div>
      </div>
    </section>
  )
}

