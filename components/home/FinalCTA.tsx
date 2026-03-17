'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '@/lib/content'

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
      id="contact"
      className="relative bg-black w-full"
      style={{ paddingTop: '160px', paddingBottom: '160px' }}
    >
      <div className="w-full flex justify-center">
        <div className="max-w-[680px] px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-6">
            {content.cta.eyebrow}
          </p>
          <h2
            ref={headlineRef}
            className="text-[48px] md:text-[64px] font-bold leading-[1.1] text-white mb-6"
          >
            {content.cta.title}
          </h2>
          <p className="text-[19px] leading-[1.65] text-neutral-400 mb-10">
            {content.cta.description}
          </p>
          <p className="text-[15px] text-neutral-500 mb-10">
            {content.cta.reassurance}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              ref={buttonRef}
              href={content.cta.buttonHref}
              style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '14px', paddingBottom: '14px', fontSize: '17px' }}
              className="bg-gold text-black font-semibold rounded-full hover:bg-gold-light hover:scale-105 transition-all duration-300"
            >
              {content.cta.button}
            </a>
            <a
              href={content.cta.secondaryHref}
              style={{ paddingLeft: '40px', paddingRight: '40px', paddingTop: '14px', paddingBottom: '14px', fontSize: '17px' }}
              className="bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              {content.cta.secondaryButton} · {content.cta.contact.phone}
            </a>
          </div>

          <p className="mt-8 text-[14px] text-neutral-600">{content.cta.contact.location}</p>
        </div>
      </div>
    </section>
  )
}
