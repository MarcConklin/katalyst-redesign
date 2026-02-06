'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { content } from '@/lib/content'
import { ArrowUpRight } from 'lucide-react'

export default function FeaturedWork() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      
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
            {content.featuredWork.subtitle}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-black mb-6"
          >
            {content.featuredWork.title}
          </motion.h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.featuredWork.projects.map((project, index) => {
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 100 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative cursor-pointer"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-gray-900">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"
                    />

                    {/* Category Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="absolute top-4 right-4 px-4 py-2 bg-gold/90 backdrop-blur-sm rounded-full text-black text-xs font-semibold"
                    >
                      {project.category}
                    </motion.div>

                    {/* Content Overlay */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-0 left-0 right-0 p-6"
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        {project.client}
                      </p>
                      
                      <motion.div
                        animate={isHovered ? { x: [0, 5, 0] } : {}}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="inline-flex items-center gap-2 text-gold font-semibold"
                      >
                        View Project
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.div>
                    </motion.div>

                    {/* Animated Border */}
                    <motion.div
                      animate={isHovered ? {
                        opacity: [0, 1, 0],
                        scale: [0.95, 1, 0.95]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 border-4 border-gold rounded-2xl"
                    />
                  </div>
                </motion.div>

                {/* Hover Shadow Effect */}
                <motion.div
                  animate={isHovered ? { opacity: 0.5, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="absolute -inset-4 bg-gold/20 blur-2xl rounded-2xl -z-10"
                />
              </motion.div>
            )
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(212, 175, 55, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-black text-white font-semibold rounded-full hover:bg-gold hover:text-black transition-all duration-300 inline-flex items-center gap-2"
          >
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 right-10 w-64 h-64 border border-gold/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 left-10 w-80 h-80 border border-gold/10 rounded-full"
      />
    </section>
  )
}

