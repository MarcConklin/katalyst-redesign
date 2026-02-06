'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { content } from '@/lib/content'
import { Calendar, Sparkles, Zap, Monitor, Palette, Target } from 'lucide-react'

const iconMap = {
  Calendar,
  Sparkles,
  Zap,
  Monitor,
  Palette,
  Target
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(45deg, #D4AF37 25%, transparent 25%, transparent 75%, #D4AF37 75%, #D4AF37), linear-gradient(45deg, #D4AF37 25%, transparent 25%, transparent 75%, #D4AF37 75%, #D4AF37)',
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-gold text-sm font-semibold tracking-widest uppercase mb-4"
          >
            {content.services.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {content.services.title}
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, rotateX: -15 }}
                animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
                style={{ perspective: '1000px' }}
              >
                <motion.div
                  whileHover={{ 
                    y: -15,
                    rotateY: 5,
                    rotateX: 5,
                  }}
                  transition={{ duration: 0.4 }}
                  className="relative h-full bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gold/20 hover:border-gold transition-all duration-500 overflow-hidden"
                >
                  {/* Glow Effect */}
                  <motion.div
                    animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-transparent"
                  />

                  {/* Icon Container */}
                  <motion.div
                    animate={isHovered ? { scale: 1.1, rotate: 360 } : { scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-16 h-16 bg-gold rounded-xl flex items-center justify-center mb-6 group-hover:shadow-2xl group-hover:shadow-gold/50 transition-all duration-500"
                  >
                    <Icon className="w-8 h-8 text-black" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative text-2xl font-bold text-white mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="relative text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative mt-6 flex items-center text-gold font-semibold"
                  >
                    Learn More
                    <motion.span
                      animate={isHovered ? { x: [0, 5, 0] } : {}}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold/10 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-gold/10 to-transparent rounded-tr-full" />

                  {/* Animated Border */}
                  <motion.div
                    animate={isHovered ? { 
                      opacity: [0.5, 1, 0.5],
                      scale: [1, 1.02, 1]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl border-2 border-gold/0 group-hover:border-gold/30 transition-all duration-500"
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute top-40 right-20 w-64 h-64 bg-gold/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, delay: 2 }}
        className="absolute bottom-40 left-20 w-80 h-80 bg-gold/10 rounded-full blur-3xl"
      />
    </section>
  )
}

