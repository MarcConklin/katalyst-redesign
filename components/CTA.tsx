'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { content } from '@/lib/content'
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-white to-gold/5" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl overflow-hidden relative">
          {/* Animated Background Elements */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
          />

          <div className="relative z-10 p-12 md:p-20">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                {content.cta.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 max-w-3xl mx-auto"
              >
                {content.cta.description}
              </motion.p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 50px rgba(212, 175, 55, 0.6)" 
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-12 py-5 bg-gold text-black font-bold text-lg rounded-full inline-flex items-center gap-3 hover:bg-gold-light transition-all duration-300"
              >
                {content.cta.button}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.button>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              {[
                { icon: Phone, label: "Phone", value: content.cta.contact.phone },
                { icon: Mail, label: "Email", value: content.cta.contact.email },
                { icon: MapPin, label: "Location", value: content.cta.contact.location }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center group-hover:bg-gold transition-all duration-300"
                  >
                    <item.icon className="w-6 h-6 text-gold group-hover:text-black transition-colors duration-300" />
                  </motion.div>
                  <div className="text-gray-400 text-sm mb-2">{item.label}</div>
                  <div className="text-white font-semibold group-hover:text-gold transition-colors duration-300">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="mt-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
            />

            {/* Woman-Owned Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-8 text-center"
            >
              <span className="inline-block px-6 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium tracking-wider">
                WOMAN-OWNED BUSINESS
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-10 w-32 h-32 border border-gold/20 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-10 right-10 w-40 h-40 border border-gold/20 rounded-full"
      />
    </section>
  )
}

