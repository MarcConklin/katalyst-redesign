'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react'

export default function Footer() {
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/thisiskatalyst', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/katalystprod', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ]

  const footerLinks = {
    Company: ['About Us', 'Our Team', 'Careers', 'Contact'],
    Services: ['Event Production', 'Experiential Marketing', 'Brand Activations', 'Virtual Events'],
    Resources: ['Portfolio', 'Case Studies', 'Blog', 'FAQs']
  }

  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                  <span className="text-black font-bold text-2xl">K</span>
                </div>
                <span className="text-white font-bold text-2xl">KATALYST</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Award-winning event production and experiential marketing agency creating unforgettable experiences.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], columnIndex) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: columnIndex * 0.1 }}
            >
              <h3 className="text-gold font-semibold mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: columnIndex * 0.1 + index * 0.05 }}
                  >
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#D4AF37' }}
                      className="text-gray-400 hover:text-gold transition-all duration-300"
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Katalyst Productions. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <motion.a
                href="#"
                whileHover={{ color: '#D4AF37' }}
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: '#D4AF37' }}
                className="text-gray-400 hover:text-gold transition-colors duration-300"
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />
    </footer>
  )
}

