'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

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
      className="relative bg-white w-full"
      style={{ paddingTop: '200px', paddingBottom: '200px' }}
    >
      <div className="w-full flex justify-center">
        <div className="max-w-[680px] px-6 text-center">
        <h2 
          ref={headlineRef}
          className="text-[64px] md:text-[80px] lg:text-[96px] font-bold leading-[1.05] tracking-tight text-black mb-8"
        >
          We turn moments into movements.
        </h2>
        <p
          ref={subtextRef}
          className="text-[20px] md:text-[24px] leading-[1.5] text-neutral-600"
        >
          From intimate gatherings to large-scale productions, we create experiences that people remember, talk about, and return to.
        </p>
        </div>
      </div>
    </section>
  )
}

