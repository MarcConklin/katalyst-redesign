'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { content } from '@/lib/content'
import { Award, Star, Trophy } from 'lucide-react'

export default function Awards() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{ duration: 30, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }}
      />

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
            {content.awards.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {content.awards.title}
          </motion.h2>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {content.awards.items.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1, 
                rotateY: 360,
                transition: { duration: 0.6 }
              }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gold/20 to-gold/5 p-6 rounded-2xl border border-gold/30 hover:border-gold transition-all duration-500 text-center">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 mx-auto mb-4 bg-gold rounded-full flex items-center justify-center"
                >
                  {index % 3 === 0 ? (
                    <Trophy className="w-8 h-8 text-black" />
                  ) : index % 3 === 1 ? (
                    <Award className="w-8 h-8 text-black" />
                  ) : (
                    <Star className="w-8 h-8 text-black" />
                  )}
                </motion.div>

                {/* Award Name */}
                <h3 className="text-white font-semibold text-sm group-hover:text-gold transition-colors duration-300">
                  {award}
                </h3>

                {/* Glow Effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  className="absolute inset-0 bg-gold/10 rounded-2xl blur-xl -z-10"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "500+", label: "Events Produced" },
            { number: "100+", label: "Happy Clients" },
            { number: "15+", label: "Years Experience" },
            { number: "50+", label: "Awards Won" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, delay: 1 + index * 0.1 }}
                className="text-5xl md:text-6xl font-bold text-gold mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 right-20 w-40 h-40 border-2 border-gold/20 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute bottom-20 left-20 w-60 h-60 border-2 border-gold/20 rounded-full"
      />
    </section>
  )
}

