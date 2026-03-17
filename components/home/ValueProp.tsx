'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { content } from '@/lib/content'

gsap.registerPlugin(ScrollTrigger)

export default function ValueProp() {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLParagraphElement>(null)

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
        y: 60,
        opacity: 0,
        duration: 1.4,
        ease: 'power4.out'
      })
      .from(subtextRef.current, {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      }, '-=0.8')

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="how-we-help"
      className="relative bg-white w-full"
      style={{ paddingTop: '140px', paddingBottom: '140px' }}
    >
      <div className="w-full flex justify-center">
        <div className="max-w-[960px] px-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold mb-6">
          {content.intro.eyebrow}
        </p>
        <h2 
          ref={headlineRef}
          className="text-[64px] md:text-[80px] lg:text-[96px] font-bold leading-[1.05] tracking-tight text-black mb-8"
        >
          {content.intro.title}
        </h2>
        <p
          ref={subtextRef}
          className="text-[20px] md:text-[24px] leading-[1.5] text-neutral-600"
        >
          {content.intro.description}
        </p>
        </div>
      </div>
    </section>
  )
}
