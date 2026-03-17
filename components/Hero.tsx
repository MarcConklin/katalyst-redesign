'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { content } from '@/lib/content'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  return (
    <section ref={ref} id="home" className="relative h-screen overflow-hidden bg-black">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />
        <img
          src="/images/projects/20191022-FourSeasons-17.jpg"
          alt="Katalyst Productions Event"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 min-h-screen flex items-center justify-center px-5 pt-36 pb-24 md:px-8 md:pt-40 md:pb-28"
      >
        <div className="w-full max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-5 flex justify-center"
          >
            <span className="rounded-full border border-gold/30 bg-black/25 px-4 py-2 text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase text-gold backdrop-blur-sm">
              {content.hero.tagline}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-4xl text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[4.2rem] font-black uppercase tracking-[-0.03em] text-white mb-7 leading-[1.05]"
          >
            <span className="block">{content.hero.headline.lead}</span>
            <span className="block -mt-1 text-gold italic [text-shadow:0_0_28px_rgba(212,175,55,0.25)]">
              {content.hero.headline.accent}
            </span>
            <span className="block -mt-1 text-white/92">{content.hero.headline.close}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-3xl text-[19px] md:text-[22px] text-gray-200/95 mb-10 leading-[1.65]"
          >
            {content.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href={content.hero.cta.primaryHref}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              style={{ paddingLeft: '36px', paddingRight: '36px', paddingTop: '15px', paddingBottom: '15px', fontSize: '18px' }}
              className="group min-w-[300px] justify-center bg-gold text-black font-semibold rounded-full flex items-center gap-2 hover:bg-gold-light transition-all duration-300"
            >
              {content.hero.cta.primary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href={content.hero.cta.secondaryHref}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ paddingLeft: '30px', paddingRight: '30px', paddingTop: '15px', paddingBottom: '15px', fontSize: '18px' }}
              className="group min-w-[300px] justify-center bg-white/10 text-white font-semibold rounded-full flex items-center gap-2 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              {content.hero.cta.secondary}
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-gold rounded-full" />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"
        />
      </div>
    </section>
  )
}
