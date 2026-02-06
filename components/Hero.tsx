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
    <section ref={ref} className="relative h-screen overflow-hidden bg-black">
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
        className="relative z-20 h-full flex flex-col items-center justify-center px-6"
      >
        <div className="w-full max-w-6xl mx-auto text-center flex flex-col items-center">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 flex justify-center"
          >
            <span className="text-gold text-sm font-medium tracking-wider uppercase">
              {content.hero.tagline}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight text-center w-full"
          >
            We speak <span className="text-gold italic">luxury</span>.
            <br />
            We also speak <span className="text-gold italic">rock 'n roll</span>.
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed text-center w-full"
          >
            {content.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              style={{ paddingLeft: '48px', paddingRight: '48px', paddingTop: '14px', paddingBottom: '14px', fontSize: '18px' }}
              className="group bg-gold text-black font-semibold rounded-full flex items-center gap-2 hover:bg-gold-light transition-all duration-300"
            >
              {content.hero.cta.primary}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ paddingLeft: '48px', paddingRight: '48px', paddingTop: '14px', paddingBottom: '14px', fontSize: '18px' }}
              className="group bg-white/10 text-white font-semibold rounded-full flex items-center gap-2 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              {content.hero.cta.secondary}
            </motion.button>
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

